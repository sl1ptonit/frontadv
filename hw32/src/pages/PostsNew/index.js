import { useEffect } from "react";
import "./Post.css";
import PostCard from "./PostCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/thunks/postsThunk";

export default function Posts() {
    const { posts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        <div>
            {/*{loading && <div>Loading...</div>}*/}
            {posts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
    )
}