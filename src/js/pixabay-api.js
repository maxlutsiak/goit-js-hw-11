import axios from "axios";

const API_KEY = '42906577-f3a74609592fdc176ad4717b8';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
    const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
};

    try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
} catch (error) {
    console.error('Error fetching images:', error);
    throw error;
}
}