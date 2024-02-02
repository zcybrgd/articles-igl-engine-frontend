import axios from "axios";
const api = 'http://127.0.0.1:8000/us';


const contactInfo = async (formData) => {
    try {
        const response = await axios.post(`${api}/contactInfo/`, formData);
        return response.data
    } catch (error) {
        return error.response ? error.response.data : { error: 'An error occurred' };
    }
}

export { contactInfo };