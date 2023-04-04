import React, { useState, useEffect } from 'react';
import './Timeline.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from '../../firebase';
import { collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore";
import FlipMove from 'react-flip-move';

function Timeline() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const postData = collection(db, "posts");
        const q = query(postData, orderBy("timestamp", "desc"));
        // getDocs(q).then((querySnapshot) => {
        //     setPosts(querySnapshot.docs.map((doc) => doc.data()));
        // });

        // リアルタイムでデータを取得
        onSnapshot(q, (querySnapShot) => {
            setPosts(querySnapShot.docs.map((doc) => doc.data()));
        })
    }, []);
    return (
        <div className="timeline">
            {/* Header */}
            <div className="timeline__header">
                <h2>ホーム</h2>
            </div>
            {/* Tweetbox */}
            <TweetBox />
            {/* Post */}
            <FlipMove>
                {posts.map((post) => (
                    <Post
                        key={post.text}
                        displayname={post.displayname}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar.ProfileImage}
                        image={post.image}
                    />
                ))}
            </FlipMove>


        </div>
    )
}

export default Timeline
