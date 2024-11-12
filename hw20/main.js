
// Setup
const apiUrl = `https://jsonplaceholder.typicode.com`;
const postList = document.querySelector("#post-list");
const postForm = document.querySelector("#post-form");
const addPostTitle = document.querySelector("#post-title");
const addPostBody = document.querySelector("#post-body");


// Server functions
function getPosts() {
    fetch(apiUrl + '/posts?_limit=10').then((response) => {
        return response.json();
    }).then((data) => {
        postList.innerHTML = '';
        data.forEach(post => addPostToList(post));
    }).catch((error) => {
        console.log(error);
    });
}

const addNewPost = (e) => {

    const postTitleInput = addPostTitle.value.trim();
    const postBodyInput = addPostBody.value.trim();

    if (postTitleInput && postBodyInput) {
        fetch(apiUrl + '/posts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: postTitleInput,
                body: postBodyInput,
                userId: 1
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            addPostToList(data);
        }).catch((error) => {
            console.log(error);
        })
    }
}

const loadComments = (e) => {
    if (e.target.classList.contains('load-comments')) {

        const postId = e.target.parentElement.dataset.id;

        fetch(apiUrl + `/posts/${postId}/comments?_limit=2`).then((response) => {
            return response.json();
        }).then(data => {
            const list = e.target.parentElement.querySelector('.comments-list');
            data.forEach(comment => renderComments(comment, list));
        }).catch((error) => {
            console.log(error);
        })
    }
}

// Dom functions

const renderComments = (comment, commentList) => {
    const li = document.createElement("li");

    li.innerHTML = `
        <p><strong>Name:</strong> ${comment.name}</p>
        <p><strong>Email:</strong> ${comment.email}</p>
        <p><strong>Body:</strong> ${comment.body} </p>               
    `;

    commentList.appendChild(li);
}

const addPostToList = (post) => {
    const li = document.createElement("li");

    li.dataset.id = post.id;
    li.innerHTML = `
        <p><strong>id:</strong> ${post.id}</p>
        <p><strong>Title:</strong> ${post.title}</p>
        <p><strong>Body:</strong> ${post.body} </p>
        <button class="load-comments">Load comments</button>
        <p class="comments-list"></p>
        <hr>                
    `;

    postList.appendChild(li);
}

//Main
postForm.addEventListener("submit", addNewPost)
postList.addEventListener("click", loadComments)
getPosts();
