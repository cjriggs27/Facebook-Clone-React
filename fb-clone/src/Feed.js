import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            
            <Post 
              profilePic='https://travel.home.sndimg.com/content/dam/images/travel/fullset/2012/07/20/e0/rio-beaches-copacabana.rend.hgtvcom.616.462.suffix/1491582618084.jpeg'
              message="Amazing day!"
              timestamp='this is a timestamp'
              username='cody'
              image='https://travel.home.sndimg.com/content/dam/images/travel/fullset/2012/07/20/e0/rio-beaches-copacabana.rend.hgtvcom.616.462.suffix/1491582618084.jpeg'
            />
            <Post />
            <Post />

        </div>
    )
}

export default Feed;
