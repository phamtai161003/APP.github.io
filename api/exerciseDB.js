import axios from 'axios';
import { rapidApiKey } from '../constants';

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params) => {
    try {
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'            },
        };

        const response = await axios.request(options);

        if (response.status === 200) {
            return response.data;
        } else {
            console.error('API call failed with status:', response.status);
            return null; // hoặc có thể throw một error nếu bạn muốn xử lý nó ở nơi gọi hàm
        }
    } catch (err) {
        console.error('API call failed:', err.response || err.message);
        return null; // hoặc có thể throw một error nếu bạn muốn xử lý nó ở nơi gọi hàm
    }
};

export const fetchExercisesByBodypart = async (bodyPart) => {
    let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
    return data;
};
