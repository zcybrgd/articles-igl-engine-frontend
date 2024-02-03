const testApi = "http://localhost:57262/search/nadi"
let api = "http://localhost:57262/search/nadi";

// Function to check if the URL is reachable
async function isUrlReachable(url) {
    try {
        const response = await fetch("http://localhost:57262", { method: 'HEAD' });
        // fetch(url, { method: 'HEAD' });
        return true;
    } catch (error) {
        console.log("error",error)
        // console.clear(error);
        return false;
    }
}

// Check if testApi is reachable
isUrlReachable(testApi)
    .then((reachable) => {
        if (reachable) {
            api = testApi;
        } else {
            api = 'http://localhost:8000/search/nadi';
            // 'http://localhost:8000/search/nadi';
        }
        console.log("api",api);
    })
    .catch((error) => {
        console.error('Error checking URL reachability:', error);
    });

export const fetchSearchResults = async (searchQuery) => {
    try {
        const encodedQuery = encodeURIComponent(searchQuery);
        const response = await fetch(`${api}/?q=${encodedQuery}`);
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
        const response = await fetch(`${api}/?q=${searchQuery}`);
        const data = await response.json();
        console.log("data retrieved:", data.results)

        return data.results;
    } catch (error) {
        console.error('Error fetching results:', error);
        throw error;
    }
};