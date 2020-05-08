import axios from 'axios';

const baseUrl = 'https://rickandmortyapi.com/api';

const axiosAction = ({url, method, data = {}}) => {
    const token = localStorage.getItem('token');
    return new Promise((resolve, reject) => {
        axios.request({
            method,
            data: JSON.stringify(data),
            url: `${baseUrl}${url}`,
        }).then(res => resolve(res))
        .catch(err => reject(err));
    })
};

export default axiosAction;