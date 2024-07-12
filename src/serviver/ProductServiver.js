import axios from 'axios';

const API_URL = 'http://localhost:8000/v1/product';

// hàm để lấy danh sách sản phẩm từ api
export const getProduct = async() =>{
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('L��i khi lấy danh sách sản phẩm:', error);
        throw error;
    }
};
