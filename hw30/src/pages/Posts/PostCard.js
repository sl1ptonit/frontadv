import { useState } from "react";
import "./Post.css";
import {useDispatch} from "react-redux";
import {updatePost, deletePost} from "../../store/thunks/postsThunk";
import {NavLink} from "react-router-dom";

export default function PostCard({post}) {

    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({
        title: post.title,
        body: post.body,
        id: post.id,
    });

    const dispatch = useDispatch();

    const handleSaveEdit = () => {
        if (editData.title.trim() && editData.body.trim()) {
            dispatch(updatePost({...editData}))
            setEditData(false);
        }
    }

    const handleDeletePost = () => {
        dispatch(deletePost(post.id))
    }

    return (
        <li className='post-item'>
            { isEditing ? (
                <div className='edit-form'>
                    <input
                        type="text"
                        placeholder="Title"
                        value={editData.title}
                        onChange={(e) => setEditData({...editData, title: e.target.value})}
                    />
                    <textarea
                        placeholder="Post body..."
                        value={editData.body}
                        onChange={(e) => setEditData({...editData, body: e.target.value})}
                    >

                </textarea>
                    <button onClick={handleSaveEdit}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button className="delete" onClick={() => handleDeletePost()}>Delete</button>
                </>
            )}
        </li>
    )
}