import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Events.css"; // Ensure you have this CSS file
import { DownloadEventsManifest, BUCKET_URL } from "../common/EventUtils";

function Events() {
  const [events, setEvents] = React.useState([]);
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };
  const handleClick = (path) => () => {
    window.location.href = path; // Use navigate with the provided path
  };

  React.useEffect(() => {
    async function FetchEvents() {
      let downloadedEvents = [];
      const manifest = await DownloadEventsManifest();
      if ("events" in manifest) {
        downloadedEvents = manifest["events"];
      }

      setEvents(downloadedEvents);
    }

    FetchEvents();
  }, []);

  return (
    <div className="events-page">
      <section
        className="banner-card-section"
        style={{
          backgroundColor: "#1c1c1c",
          display: "flex",
          alignItems: "center",
          paddingBottom: "3%",
          minHeight: "90vh",
        }}
      >
        <Container
          className="events-page-container"
          style={{ paddingTop: "5%" }}
        >
          <div className="d-flex flex-column">
            <div className="text-center my-4 w-100">
              <h2 className="mia-cursive" style={{ color: "white" }}>
                upcoming
              </h2>
              <h1 className="mia-rock-salt">EVENTS</h1>
            </div>
            <div className="d-flex gap-4 align-content-stretch flex-wrap justify-content-center">
              {events.filter((event) => new Date(event.time) > new Date())
                .length
                ? events
                    .filter((event) => new Date(event.time) > new Date())
                    .sort((a, b) => new Date(a.time) - new Date(b.time))
                    .map((event) => (
                      <div key={event.id}>
                        <Card
                          className="event-card"
                          style={{
                            height: "100%",
                            width: "300px",
                          }}
                        >
                          <Card.Img
                            variant="top"
                            src={`${BUCKET_URL}/${event.image}`}
                            style={{ height: "50%" }}
                          />
                          <Card.Body
                            style={{
                              backgroundColor: "black",
                              color: "white",
                            }}
                          >
                            <Card.Title
                              className="mia-rock-salt"
                              style={{
                                margin: "5%",
                                color: "rgb(183, 169, 90)",
                              }}
                            >
                              {event.title}
                            </Card.Title>
                            <Card.Text>{truncateText(event.desc)}</Card.Text>
                            <Card.Text>Date: {event.time}</Card.Text>
                            <div
                              className="hero-page-button-container"
                              style={{ marginLeft: "15px" }}
                            >
                              <button
                                className="hero-page-button"
                                style={{ fontSize: "14px" }}
                                onClick={handleClick(event.url)}
                              >
                                Buy Tickets
                              </button>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    ))
                : "No events available at this time"}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
export default Events;
