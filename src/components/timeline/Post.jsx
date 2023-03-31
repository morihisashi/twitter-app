import { Avatar } from '@mui/material'
import React from 'react';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import './Post.css';

function Post() {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>プログラミングチュートリアル
                            <span className="post__headerSpecial"></span>
                            <VerifiedUserIcon className="post__badge" />
                            @Shin_Enginner
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Reaactなう。</p>
                    </div>
                </div>
                <img src="https://source.unsplash.com/random" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
