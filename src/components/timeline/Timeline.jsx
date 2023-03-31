import React from 'react';
import './Timeline.css';
import TweetBox from './TweetBox';
import Post from './Post';

function Timeline() {
    return (
        <div className="timeline">
            {/* Header */}
            <div className="timeline__header">
                <h2>ホーム</h2>
            </div>
            {/* Tweetbox */}
            <TweetBox />
            {/* Post */}
            <Post
                displayname="プログラミングチュートリアル"
                username="Mori_Kyuu1995"
                verified={true}
                text="初めてのツイート"
                avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
                image="https://source.unsplash.com/random"
            />

        </div>
    )
}

export default Timeline
