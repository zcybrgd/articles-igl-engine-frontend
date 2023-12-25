import axios from "axios";
const fetchModerators = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/us/mods");
      return response.data.mods
    } catch (error) {
      console.error("Error fetching moderators:", error);
    }
  };

export default fetchModerators