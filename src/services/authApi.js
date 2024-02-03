import axios from "axios";

const testApi = "http://localhost:57262/us";
let BASE_URL = "";
let authApi = "";

// Function to check if the URL is reachable
async function isUrlReachable(url) {
    try {
        const response = await axios.get(url);
        // fetch(url, { method: 'HEAD' });
        return true;
    } catch (error) {
        // console.clear();
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

let retirveApi = axios.create({
    baseURL: `http://127.0.0.1:8000/us/`,
});
export const clientInfo = async (token,id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/us/client/${id}`,{
            headers: {
                Authorization: `Token ${token}`,
            },
        });
        return response.data
    } catch (error) {
        console.error('Error in login: ', error);
        throw error;
    }
}


export default authApi;