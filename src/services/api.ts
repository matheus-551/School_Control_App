import axios from 'axios';

const HttpClient = axios.create({
    baseURL: "http://localhost:8080"
});

class ApiService {
    ApiUrl: string;

    constructor(ApiUrl: string) {
        this.ApiUrl = ApiUrl;
    }

    get = (url: string) => {
        const requestUrl = `${this.ApiUrl}${url}`;
        return HttpClient.get(requestUrl); 
    }

    post = (url: string, obj: Object) => {
        const requestUrl = `${this.ApiUrl}${url}`;
        return HttpClient.post(requestUrl, obj);
    }

    put = (url: string, obj: Object) => {
        const requestUrl = `${this.ApiUrl}${url}`;
        return HttpClient.put(requestUrl, obj);
    }
}

export default ApiService;