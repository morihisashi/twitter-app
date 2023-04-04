import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react';
import './TweetBox.css';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from '../../firebase';
import ProfileImage from '../../images/kraken.svg';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = (e) => {
        // firebaseのデータベースを追加する
        e.preventDefault();
        addDoc(collection(db, "posts"), {
            displayname: "プログラミングチュートリアル",
            username: "Mori_Kyuu1995",
            verified: true,
            text: tweetMessage,
            avatar: { ProfileImage },
            image: tweetImage,
            timestamp: serverTimestamp()
        })
        setTweetMessage("");
        setTweetImage("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={ProfileImage} alt="" />
                    <input
                        value={tweetMessage}
                        placeholder="いまどうしている？"
                        type="text"
                        onChange={(e) => setTweetMessage(e.target.value)}></input>
                </div>
                <input
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="画像のURLを入力してください"
                    type="text"
                    onChange={(e) => setTweetImage(e.target.value)}></input>
                <Button className="tweetBox__tweetButton" type="submit"
                    onClick={sendTweet}>ツイートする</Button>
            </form>
        </div>
    )
}

export default TweetBox
