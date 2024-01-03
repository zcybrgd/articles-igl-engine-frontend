import axios from "axios";
const api = 'http://127.0.0.1:8000';

const totalArticles = async () => {
    try {
        const response = await axios.get(`${api}/search/`);
        return response.data   
    } catch (error) {
        console.log(error)
        return error.response ? error.response.data : { error: 'An error occurred' };
    }
}

const unreviewedArticles = async () => {
    try {
        const response = await axios.get(`${api}/search/unreviewed`);
        return response.data   
    } catch (error) {
        console.log(error)
        return error.response ? error.response.data : { error: 'An error occurred' };
    }
}

const deletedArticles = async (token) => {
    try {
        const response = await axios.get(`${api}/us/articles/deleted`,{
            headers:
            {
                Authorization : `Token ${token}`
            }
        });
        return response.data   
    }
    catch (error) {
        console.log(error)
        return error.response ? error.response.data : { error: 'An error occurred' };
    }
}

const modifiedArticles = async (token) => {
    try {
        const response = await axios.get(`${api}/us/articles/modified`,{
            headers:
            {
                Authorization : `Token ${token}`
            }
        });
        return response.data   
    }
    catch (error) {
        console.log(error)
        return error.response ? error.response.data : { error: 'An error occurred' };
    }
}

const validatedArticles = async (token) => {
    try {
        const response = await axios.get(`${api}/us/articles/validated`,{
            headers:
            {
                Authorization : `Token ${token}`
            }
        });
        return response.data   
    }
    catch (error) {
        console.log(error)
        return error.response ? error.response.data : { error: 'An error occurred' };
    }
}

const totalMods = async (token) => {
    try {
        const response = await axios.get(`${api}/us/mods/total`,{
            headers:
            {
                Authorization : `Token ${token}`
            }
        });
        return response.data   
    }
    catch (error) {
        console.log(error)
        return error.response ? error.response.data : { error: 'An error occurred' };
    }
}

const addedMods = async (token) => {
    try {
        const response = await axios.get(`${api}/us/mods/added`,{
            headers:
            {
                Authorization : `Token ${token}`
            }
        });
        return response.data   
    }
    catch (error) {
        console.log(error)
        return error.response ? error.response.data : { error: 'An error occurred' };
    }
}

const deletedMods = async (token) => {
    try {
        const response = await axios.get(`${api}/us/mods/deleted`,{
            headers:
            {
                Authorization : `Token ${token}`
            }
        });
        return response.data   
    }
    catch (error) {
        console.log(error)
        return error.response ? error.response.data : { error: 'An error occurred' };
    }
}



export { totalArticles, unreviewedArticles, deletedArticles, addedMods, modifiedArticles, validatedArticles, deletedMods, totalMods};