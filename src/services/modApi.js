import axios from "axios";
const fetchModerators = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/us/mods");
        return response.data.mods
    } catch (error) {
        console.error("Error fetching moderators:", error);
    }
};

const fetchModeratorByUsername = async (username) => {
    const moderators = await fetchModerators();
    const foundModerator = moderators.find((moderator) => moderator.userName === username);
    if (foundModerator) {
        return foundModerator;
    } else {
        console.warn(`Moderator with username '${username}' not found.`);
        return null;
    }
}
export { fetchModerators, fetchModeratorByUsername };