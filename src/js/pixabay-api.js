import axios from "axios";

const API_KEY = '42906577-f3a74609592fdc176ad4717b8';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
    const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 15,
    page,
};

    const response = await axios.get(BASE_URL, { params });
    return response.data;
}