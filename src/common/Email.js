
async function SendEmail(
    firstName,
    lastName,
    date,
    phone,
    email,
    maleCount,
    femaleCount,
    comments,
    emailType
) {
    try {
        const token = "7808268234724109486"
        const res = await fetch(
            `https://us-east1-mia-website-project.cloudfunctions.net/send-email-func?token=${token}&type=${emailType}`,
            {
                method: "POST",
                body: JSON.stringify({
                    FirstName: firstName,
                    LastName: lastName,
                    MaleCount: Number(maleCount),
                    FemaleCount: Number(femaleCount),
                    Date: date,
                    Phone: phone,
                    Email: email,
                    Comments: comments,
                }),
            }
        )

        if (!res.ok) {
            const errMsg = res.text()
            console.log("Error sending email: ", errMsg)
            return { success: false, msg: errMsg }
        }

        return { success: true, msg: "Request Sent" }
    } catch (err) {
        return { success: false, msg: String(err) }
    }
}

export async function SendBottleserviceRequest(firstName,
    lastName,
    date,
    phone,
    email,
    maleCount,
    femaleCount,
    comments) {
        return SendEmail(firstName, lastName, date, phone, email, maleCount, femaleCount, comments, "BottleService");
}

export async function SendGuestListRequest(firstName,
    lastName,
    date,
    phone,
    email,
    maleCount,
    femaleCount,
    comments) {
        return SendEmail(firstName, lastName, date, phone, email, maleCount, femaleCount, comments, "GuestList");
}
