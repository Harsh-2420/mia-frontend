import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/Events.css" // Ensure you have this CSS file
import { DownloadEventsManifest, BUCKET_URL } from "../common/EventUtils"

function Events() {
    const [events, setEvents] = React.useState([])

    React.useEffect(() => {
        async function FetchEvents() {
            let downloadedEvents = []
            const manifest = await DownloadEventsManifest()
            if ("events" in manifest) {
                downloadedEvents = manifest["events"]
            }

            setEvents(downloadedEvents)
        }

        FetchEvents()
    }, [])

    return (
        <div className="events-page">
            <Row
                xs={1}
                sm={2}
                md={3}
                lg={3}
                className="g-4"
                style={{ margin: "5%" }}
            >
                {events.map((event, index) => (
                    <Col key={index}>
                        <Card
                            className="event-card"
                            style={{ margin: "5%", height: "90%" }}
                        >
                            <Card.Img
                                variant="top"
                                src={`${BUCKET_URL}/${event.image}`}
                                // style={{ height: "40%" }}
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
                                        color: " rgb(183, 169, 90)",
                                    }}
                                >
                                    {event.title}
                                </Card.Title>
                                <Card.Text>{event.desc}</Card.Text>
                                <Card.Text>Date: {event.time}</Card.Text>

                                <div className="hero-page-button-container">
                                    <button
                                        className="hero-page-button"
                                        style={{
                                            fontSize: "14px",
                                            marginLeft: "15px",
                                        }}
                                    >
                                        Buy Tickets
                                    </button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default Events
