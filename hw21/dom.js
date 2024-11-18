const postList = document.querySelector("#post-list");

export const addPostToList = (post) => {
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

export const renderComments = (comment, commentList) => {
    const li = document.createElement("li");

    li.innerHTML = `
        <p><strong>Name:</strong> ${comment.name}</p>
        <p><strong>Email:</strong> ${comment.email}</p>
        <p><strong>Body:</strong> ${comment.body} </p>               
    `;

    commentList.appendChild(li);
}