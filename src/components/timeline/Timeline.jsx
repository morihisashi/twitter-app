import React from 'react';
import './Timeline.css';
import TweetBox from './TweetBox';

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

        </div>
    )
}

export default Timeline
