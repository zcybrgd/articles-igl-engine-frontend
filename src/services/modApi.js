import axios from "axios";
const api = 'http://127.0.0.1:8000/us';

const fetchModerators = async (token) => {
    try {
        const response = await axios.get(`${api}/mods/display`,{
            headers: {
                Authorization: `Token ${token}`,
            },
        });
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

const addModerator = async (token,signdata) => {
    try {
        const response = await axios.post(`${api}/mod/add`, signdata, {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
        return response.data     
    } catch (error) {
        return error.response ? error.response.data : { error: 'An error occurred' };
    }
}
const AdmdeleteModerator = async (token,modId) => {
    try {
        const response = await axios.delete(`${api}/mod/delete/${modId}`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
        return response.data     
    } catch (error) {
        return error.response ? error.response.data : { error: 'An error occurred' };
    }
}
export { fetchModerators, fetchModeratorByUsername, addModerator, AdmdeleteModerator };