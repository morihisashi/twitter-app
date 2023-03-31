import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';
import './Widgets.css'

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__serchIcon" />
                <input placeholder="キーワード検索" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>今どうしている？</h2>
                {/* ライブラリを追加・追記 */}
                <TwitterTweetEmbed tweetId={"1641622716565590016"} />
                <TwitterTimelineEmbed sourceType="profile" screenName="Mori_Kyuu1995" options={{ height: 400 }} />
                <TwitterShareButton url={"https://twitter.com/Mori_Kyuu1995"} options={{ text: "#React.js勉強中", via: "Mori_Kyuu1995" }} />
            </div>
        </div>
    )
}

export default Widgets
