import axios from "axios";
const api = 'http://127.0.0.1:8000/us/changeSettings';

const modifyClient = async (token, clientId, clientData) => {
    try {
        const response = await axios.put(`${api}/client/${clientId}`, clientData, {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
        return response.data
    } catch (error) {
        return error.response ? error.response.data : { error: 'An error occurred' };
    }
}

export { modifyClient };