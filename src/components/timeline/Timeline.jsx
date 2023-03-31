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
            <Post />

        </div>
    )
}

export default Timeline
