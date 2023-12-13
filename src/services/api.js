import axios from 'axios';

const api = 'http://127.0.0.1:8000/api';

export const uploadPDF = async (pdfFile) => {
    // Fetch CSRF token
    const csrfToken = await getCSRFToken();

    const formData = new FormData();
    if (typeof pdfFile === 'string') {
        // If pdfFile is a URL, add it to the formData
        formData.append('pdf_url', pdfFile);
      } else {
        // If pdfFile is a file, add it to the formData
        formData.append('pdf_file', pdfFile);
      }
  

    try {
        const response = await axios.post(`${api}/uploadPDF`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': csrfToken,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error uploading PDF:', error);
        throw error;
    }
};

const getCSRFToken = async () => {
    try {
        const response = await axios.get(`${api}/uploadPDF`);
        return response.headers['X-CSRFToken'];
    } catch (error) {
        console.error('Error fetching CSRF token:', error);
        throw error;
    }
};

