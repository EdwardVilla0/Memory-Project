import React from 'react'
import Post from './Post/Post.component';
import memories from '../../images/memories.png';
import useStyles from './Posts.styles';

const Posts = () => {
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
