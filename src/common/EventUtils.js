
// Public bucket where events.json and event images live
export const BUCKET_URL = "https://mia-website-data.storage.googleapis.com";

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
 * @returns {Promise<EventManifest>} downloaded event manifest
 */
export async function DownloadEventsManifest() {
    try {
        const res = await fetch(`${BUCKET_URL}/events.json`)
        if (res.status !== 200) {
            console.log(
                `Failed to download event manifest - ${String(res.body)}`
            )
            return {}
        }

        const manifest = await res.json()
        return manifest
    } catch (err) {
        console.log(`Error downloading event manifest - ${err}`)
        return {}
    }
}
