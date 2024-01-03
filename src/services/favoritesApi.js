import axios from "axios";
const api = 'http://127.0.0.1:8000/art';


const addFavorite = async (token,id) => {
    try {
        const response = await axios.post(`${api}/add_to_favorite/${id}`,null, {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
        return response.data     
    } catch (error) {
        return error.response ? error.response.data : { error: 'An error occurred' };
    }
}

const displayFavorites = async (token) => {
    try {
        const response = await axios.get(`${api}/`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
        return response.data     
    } catch (error) {
        console.log(error)
        return error.response ? error.response.data : { error: 'An error occurred' };
    }
}

const deleteFavorite = async (token,id) => {
    try {
        const response = await axios.delete(`${api}/remove/${id}`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
        return response.data     
    } catch (error) {
        return error.response ? error.response.data : { error: 'An error occurred' };
    }
}



export { addFavorite, displayFavorites, deleteFavorite};