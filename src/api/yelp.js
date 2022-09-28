import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        Authorization: 'Bearer UjwtCsXGQR00YAAH5YAjvWKOrfaH15n4oMPNwNowfNg1GzQlqtnT6qER7-Cr2C270RBV-TKt3JdLreDGPOeNMjLpLh03hhQb1ONwIRWFgz7Qc8diibxB1XuUjtwyY3Yx',
    }
});