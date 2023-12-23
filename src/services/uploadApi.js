import axios from 'axios';

const api = 'http://127.0.0.1:8000/api';

export const uploadPDF = async (pdfFiles) => {
    // Fetch CSRF token
    const csrfToken = await getCSRFToken();

    const formData = new FormData();
    if (typeof pdfFiles === 'string') {
        // If pdfFile is a URL, add it to the formData
        formData.append('pdf_url', pdfFiles);} 
    else {
        pdfFiles.forEach(pdfFile => {
            // If pdfFile is a file, add it to the formData using the key 'pdf_file'
        formData.append('pdf_file', pdfFile)
    });

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

