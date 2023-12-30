import axios from "axios";
const api = 'http://127.0.0.1:8000/us';
const fetchModerators = async () => {
    try {
        const response = await axios.get(`${api}/mods`);
        return response.data.mods
    } catch (error) {
        console.error("Error fetching moderators:", error);
    }
};

const fetchModeratorById = async (id) => {
    const moderators = await fetchModerators();
    const foundModerator = moderators.find((moderator) => moderator.id === id);
    if (foundModerator) {
        print("founddd; ", foundModerator)
        return foundModerator;
    } else {
        console.warn(`Moderator not found.`);
        return null;
    }
}
const fetchModeratorByUsername = async (username) => {
    const moderators = await fetchModerators();
    const foundModerator = moderators.find((moderator) => moderator.userName === username);
    if (foundModerator) {
        return foundModerator;
    } else {
        console.warn(`Moderator not found.`);
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

const AdmModifyMod = async (token, modId, modData) => {
    try {
        const response = await axios.put(`${api}/mod/modify/${modId}`, modData, {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
        return response.data     
    } catch (error) {
        return error.response ? error.response.data : { error: 'An error occurred' };
    }
}
export { fetchModerators, fetchModeratorById, addModerator, AdmdeleteModerator, AdmModifyMod, fetchModeratorByUsername };