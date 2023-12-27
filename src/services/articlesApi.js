// render the unvalidated articles for the mod to review
import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8000/api/articles/';

// Function to fetch articles from the API
export const fetchArticles = async () => {
    try {
      const response = await fetch(`${BASE_URL}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("data retrieved:", data.articles)
      return data.articles;
    } catch (error) {
      console.error('Error fetching articles:', error);
      throw error; 
    }
  };

  const deleteArticle = async (articleId) => {
    try {
        const response = await fetch(`${BASE_URL}${articleId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            console.log('Article deleted successfully');
            return true; 
        } else {
            console.error('Failed to delete article');
            return false;
        }
    } catch (error) {
        console.error('Error deleting article', error);
        return false; 
    }
};

export { deleteArticle };