import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, addPost} from "../../store/thunks/postsThunk";

import './Post.css';
import PostCard from "./PostCard";

export default function Posts() {
    const [newPost, setNewPost] = useState({title: '', body: ''})
    const { posts, loading, error } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const handleAddPost = () => {
        if (newPost.title.trim() && newPost.body.trim()) {
            dispatch(addPost({title: newPost.title, body: newPost.body}))
        }
    }

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    return (
        <div className="posts-container">
            <h1>Post</h1>

            <div className="section add-post">
                <h2>Add new post</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                />
                <textarea
                    placeholder="Post body..."
                    value={newPost.body}
                    onChange={(e) => setNewPost({...newPost, body: e.target.value})}
                >

                </textarea>
                <button onClick={handleAddPost}>Add post</button>
            </div>

            <ul className="posts-list">
                {posts.map(post => ( <PostCard key={`${post.id}--${post.title}`} post={post} /> ))}
            </ul>
        </div>
    )
}