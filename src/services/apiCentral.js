import { AsyncStorage } from 'react-native'

const baseUrl = "https://your-api.com";

export async function request(url, options, useToken = true) {
    const requestUrl = url.indexOf(baseUrl) === 0 ? url : baseUrl + url;
    let headers = {
        'Content-Type': 'application/json'
    };
    if (useToken) {
        const token = await AsyncStorage.getItem("token");
        headers['Authorization'] = 'Bearer ' + token;
    }
    options.headers = headers;
    try {
        return await fetch(requestUrl, options)
            .then(response => {
                return response.json()
            }).catch(error => {
                console.error('error', error);
            })
    } catch (error) {
        console.error('error', error);
    }
}