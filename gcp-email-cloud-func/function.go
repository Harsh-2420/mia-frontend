package gcpemailcloudfunc

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/GoogleCloudPlatform/functions-framework-go/functions"
	"github.com/go-mail/mail"
)

type BottleServiceRequest struct {
	FirstName   string
	LastName    string
	MaleCount   int
	FemaleCount int
	Date        string
	Phone       string // string in case we get no. like 123-456-7890
	Email       string
	Comments    string
}

const TO_EMAIL = "gmsmentertainment@gmail.com"
const FROM_EMAIL = "requests.miatoronto@gmail.com"
const APP_PWD = "<PASSWORD_HERE>"
const BOT_GUARD_TOKEN = "7808268234724109486" // some random value to avoid bots triggering this URL and causing issues

const EMAIL_HEAD = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 20px;
      color: #333;
    }
    .container {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      max-width: 600px;
      margin: 0 auto;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    h2 {
      text-align: center;
      color: #444;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    table, th, td {
      border: 1px solid #ddd;
    }
    th, td {
      padding: 12px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
    .label {
      font-weight: bold;
    }
    .comments {
      margin-top: 20px;
      font-style: italic;
    }
    .footer {
      text-align: center;
      color: #888;
      font-size: 12px;
      margin-top: 20px;
    }
  </style>
</head>
`
const EMAIL_BODY = `
<body>
  <div class="container">
    <h2>Bottle Service Request</h2>
    <table>
      <tr>
        <th class="label">First Name</th>
        <td>%s</td>
      </tr>
      <tr>
        <th class="label">Last Name</th>
        <td>%s</td>
      </tr>
      <tr>
        <th class="label">Male Count</th>
        <td>%d</td>
      </tr>
      <tr>
        <th class="label">Female Count</th>
        <td>%d</td>
      </tr>
      <tr>
        <th class="label">Date</th>
        <td>%s</td>
      </tr>
      <tr>
        <th class="label">Phone</th>
        <td>%s</td>
      </tr>
      <tr>
        <th class="label">Email</th>
        <td>%s</td>
      </tr>
    </table>

    <div class="comments">
      <strong>Comments:</strong> %s
    </div>

    <div class="footer">
      This is an automated email, please do not reply.
    </div>
  </div>
</body>
</html>
`

func init() {
	functions.HTTP("SendEmail", SendEmail)
}

func GenerateEmailBody(b *BottleServiceRequest) string {
	return EMAIL_HEAD + fmt.Sprintf(EMAIL_BODY, b.FirstName, b.LastName, b.MaleCount, b.FemaleCount, b.Date, b.Phone, b.Email, b.Comments)
}

func ValidateRequest(b *BottleServiceRequest) bool {
	valid := len(b.FirstName) > 0
	valid = valid && len(b.Phone) > 0
	valid = valid && len(b.Date) > 0
	return valid
}

func SendEmail(w http.ResponseWriter, r *http.Request) {
	// Set CORS headers for the preflight request
	if r.Method == http.MethodOptions {
		w.Header().Set("Access-Control-Allow-Origin", "https://miatoronto.com")
		w.Header().Set("Access-Control-Allow-Methods", "POST")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		w.WriteHeader(http.StatusNoContent)
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "https://miatoronto.com")

	if r.Method != http.MethodPost {
		fmt.Printf("Incorrect req method %s\n", r.Method)
		http.Error(w, "Bad Request", http.StatusBadRequest)
		return
	}

	if r.URL.Query().Get("token") != BOT_GUARD_TOKEN {
		fmt.Println("Missing or incorrect token")
		http.Error(w, "Bad Request", http.StatusBadRequest)
		return
	}

	fmt.Printf("Got request from %s\n", r.RemoteAddr)

	var bsr BottleServiceRequest
	body, err := io.ReadAll(r.Body)
	if err != nil {
		fmt.Printf("Unable to read body %s\n", err)
		http.Error(w, "Unable to read body", http.StatusBadRequest)
		return
	}

	defer r.Body.Close()

	json.Unmarshal(body, &bsr)
	if !ValidateRequest(&bsr) {
		fmt.Println("Invalid form params")
		http.Error(w, "Invalid form params - Name, Phone, Date required", http.StatusBadRequest)
		return
	}

	subject := fmt.Sprintf("Bottle Service Request: %s | %s %s (%s)", bsr.Date, bsr.FirstName, bsr.LastName, bsr.Phone)
	fmt.Printf("Creating email with subject %s\n", subject)

	m := mail.NewMessage()
	m.SetHeader("From", FROM_EMAIL)
	m.SetHeader("To", TO_EMAIL)
	m.SetHeader("Subject", subject)
	m.SetBody("text/html", GenerateEmailBody(&bsr))

	d := mail.NewDialer("smtp.gmail.com", 587, FROM_EMAIL, APP_PWD)
	if err := d.DialAndSend(m); err != nil {
		fmt.Printf("Failed to send email - %s\n", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
}
