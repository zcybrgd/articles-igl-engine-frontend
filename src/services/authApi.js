import axios from "axios";

const testApi = "http://localhost:57262/us";
let BASE_URL = "";
let authApi = "";

// Function to check if the URL is reachable
async function isUrlReachable(url) {
    try {
        const response = await fetch("http://localhost:57262", { method: 'HEAD' });
        return true;
    } catch (error) {
        return false;
    }
}

// Check if testApi is reachable
isUrlReachable(testApi)
    .then((reachable) => {
        if (reachable) {
            BASE_URL = testApi;
        } else {
            BASE_URL = 'http://127.0.0.1:8000/us';
        }
        console.log("base url",BASE_URL);
        authApi = axios.create({
            baseURL: `${BASE_URL}/`,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    })
    .catch((error) => {
        console.error('Error checking URL reachability:', error);
    });



export const signUp = async (userData) => {
    try {
        const response = await authApi.post('signup/', userData);
        return response;
    } catch (error) {
        console.error('Error in signUp:', error);
        throw error;
    }
};

export const logIn = async (userData) => {
    try {
        const response = await authApi.post('login/', userData)
        return response
    } catch (error) {
        console.error('Error in login: ', error);
        throw error;
    }
}

export const clientInfo = async (token,id) => {
    try {
        const response = await axios.get(`${BASE_URL}/client/${id}`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
        console.log("reponse ", response);
        return response.data
    } catch (error) {
        console.error('Error in login: ', error);
        throw error;
    }
}


export default authApi;