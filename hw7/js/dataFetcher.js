const postsContainer = document.querySelector("#posts");
const commentsContainer = document.querySelector("#comments");

const showComments = (postId) => {
    commentsContainer.innerHTML = "";
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => {
            const comments = response.data.slice(0, 10);
            comments.forEach(comment => {
                const commentEl = document.createElement("div");
                commentEl.innerHTML = `
                    <h3>${comment.name}</h3>
                    <p>${comment.email}</p>
                    <p>${comment.body}</p>
                `;
                commentsContainer.appendChild(commentEl);
            });
        });

    postsContainer.style.display = "none";
    commentsContainer.style.display = "block";
};

const showPosts = () => {
    postsContainer.style.display = "block";
    commentsContainer.style.display = "none";
};

axios.get("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    const posts = response.data;
    posts.forEach(post => {
        const postEl = document.createElement("div");
        postEl.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <button class="show-comments-btn">Show Comments</button>
        `;
        postEl.querySelector(".show-comments-btn").addEventListener("click", () => showComments(post.id));
        postsContainer.appendChild(postEl);
    });
});

document.querySelector("#back-btn").addEventListener("click", showPosts);
