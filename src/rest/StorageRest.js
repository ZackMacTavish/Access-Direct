import axios from 'axios';
import {API_URL} from "../const/api";

export const uploadFiles = (files) => {

    console.log(files);
    let formData = new FormData();
    files.forEach(file => {
        formData.append('files', file);
    });

    return axios({
        method: 'POST',
        url: `${API_URL}/storage/upload`,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: formData
    }).then(response => {
        console.log(response);
        return response.data;
    }).catch(error => {
        console.log(error);
        return null;
    })
};