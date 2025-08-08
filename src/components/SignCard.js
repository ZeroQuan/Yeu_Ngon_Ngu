import React from 'react';
import ReactPlayer from 'react-player';
import './SignCard.css';

const SignCard = ({ word, videoUrl, description }) => {
  return (
    <div className="sign-card">
      <h3 className="sign-title">{word}</h3>
      <div className="video-player">
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="180px"
          controls={true}
          playing={false}
          onError={(e) => console.log(`Lỗi phát video ${word}:`, e)}
        />
      </div>
      <p className="sign-description">{description}</p>
    </div>
  );
};

export default SignCard;