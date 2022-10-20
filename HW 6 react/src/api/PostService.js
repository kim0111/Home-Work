import axios from "axios";

export default class PostService {
    static async getPosts(limit = 10, page = 1) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
            params: {
                _limit: limit,
                _page: page,
            }
        });
        return response;
    }

    static async getPost(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.data;
    }

    static async getComments(id, limit, page) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
            params: {
                _limit: limit,
                _page: page,
            }
        });
        return response;
    }
}