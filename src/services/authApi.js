import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8000/us';

const authApi = axios.create({
    baseURL: `${BASE_URL}/`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
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

export const logIn = async(userData) => {
    try {
        const response = await authApi.post('login/',userData)
        return response
    } catch(error){
        console.error('Error in login: ', error);
        throw error; 
    }
}

export default authApi;