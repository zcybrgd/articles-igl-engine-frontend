
const BASE_URL = 'http://127.0.0.1:8000/api/articles/';

export const fetchSearchResults = async (searchQuery) => {
    try {
        const encodedQuery = encodeURIComponent(searchQuery);
        const response = await fetch(`http://localhost:8000/search/nadi/?q=${encodedQuery}`);
        const data = await response.json();
        console.log("data retrieved:", data.results)

        return data.results;
    } catch (error) {
        console.error('Error fetching results:', error);
        throw error;
    }
};

export const fetchFilteredSearchResults = async (searchQuery) => {
    try {
        const response = await fetch(`http://localhost:8000/search/nadi/?q=${searchQuery}`);
        const data = await response.json();
        console.log("data retrieved:", data.results)

        return data.results;
    } catch (error) {
        console.error('Error fetching results:', error);
        throw error;
    }
};