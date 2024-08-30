import React from "react"
import { Row, Col, Card, Button } from "react-bootstrap"
import eventImg from "../assets/Mia 7.JPG"
import eventImg2 from "../assets/Mia 8.JPG"
import eventImg3 from "../assets/Mia 9.JPG"
import eventImg4 from "../assets/Mia 10.JPG"
import eventImg5 from "../assets/Mia 11.JPG"
import eventImg6 from "../assets/Mia 12.JPG"
import eventImg7 from "../assets/Mia 13.JPG"
import eventImg8 from "../assets/Mia 14.JPG"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/Events.css" // Ensure you have this CSS file

// Public bucket where events.json and event images live
const BUCKET_URL = "https://mia-website-data.storage.googleapis.com";

/**
 * @typedef {Object} Event
 * @property {string} title - title of the event
 * @property {string} desc - event description
 * @property {string} time - event date & time string (Oct 31, 9 PM)
 * @property {string} image - image file name (Must be fetched seperately. Just set img src to 'BUCKET_URL/image')
 */

/**
 * @typedef {Object} EventManifest
 * @property {Array<Event>} events - List of events
 */

/**
 * Download the event manifest from the backend. If there's an error, it'll return an empty manifest
 * @returns {EventManifest} downloaded event manifest
 */
async function DownloadEventsManifest() {
	try {
		const res = await fetch(`${BUCKET_URL}/events.json`);
		if (res.status !== 200) {
			console.log(`Failed to download event manifest - ${String(res.body)}`);
			return {};
		}

		const manifest = await res.json();
		return manifest;
	} catch (err) {
		console.log(`Error downloading event manifest - ${err}`);
		return {};
	}
}

function Events() {
	const [events, setEvents] = React.useState([]);

	React.useEffect(() => {
		async function FetchEvents() {
            let downloadedEvents = [];
			const manifest = await DownloadEventsManifest();
            if ("events" in manifest)
            {
                downloadedEvents = manifest["events"];
            }

			setEvents(downloadedEvents);
		}

		FetchEvents();
	}, []);

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
                            style={{ margin: "5%", height: "100%" }}
                        >
                            <Card.Img variant="top" src={`${BUCKET_URL}/${event.image}`} />
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
                                <Card.Text>Cost: $50</Card.Text>

                                <div className="event-card-button">
                                    Learn More
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
