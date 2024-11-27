//import {showName} from "./js/index.js";

import {getPosts, loadComments, addNewPost} from "./js/api.js";
import {addPostToList, renderComments} from "./js/dom.js";

// Setup
const postList = document.querySelector("#post-list");
const postForm = document.querySelector("#post-form");
const addPostTitle = document.querySelector("#post-title");
const addPostBody = document.querySelector("#post-body");


// Server functions
const handleLoadPosts = () => {
    getPosts().then(data => {
        data.forEach(post => addPostToList(post))
    }).catch(error => console.log(error));
}

const handleNewPost = (e) => {

    e.preventDefault();

    const postTitleInput = addPostTitle.value.trim();
    const postBodyInput = addPostBody.value.trim();

    if (postTitleInput && postBodyInput) {
        addNewPost({
            title: postTitleInput,
            body: postBodyInput,
            userId: 1
        })
            .then(data => addPostToList(data))
            .catch(error => console.log(error));
    }
}

const handleLoadComments = (e) => {
    if (e.target.classList.contains('load-comments')) {
        const postId = e.target.parentElement.dataset.id;

        loadComments(postId).then(data => {
            const list = e.target.parentElement.querySelector('.comments-list');
            data.forEach(comment => renderComments(comment, list));
        }).catch((error) => {
            console.log(error);
        })
    }
}

//Main
postForm.addEventListener("submit", handleNewPost)
postList.addEventListener("click", handleLoadComments)
handleLoadPosts();