import React from 'react'
import Post from './Post/Post.component';
import { useSelector } from 'react-redux';
import memories from '../../images/memories.png';
import useStyles from './Posts.styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return (
        <>
            <h1>Postsssss</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;
