const apiUrl = `https://jsonplaceholder.typicode.com`;

export function getPosts() {
    return fetch(apiUrl + '/posts?_limit=10').then((response) => {
        return response.json();
    });
}

export const addNewPost = (post) => {
    return fetch(apiUrl + '/posts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
        }).then((response) => {
            return response.json();
        });
}

export const loadComments = (postId) => {
    return fetch(apiUrl + `/posts/${postId}/comments?_limit=2`)
        .then((response) => {
        return response.json();
    });
}