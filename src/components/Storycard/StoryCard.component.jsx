import React from 'react'
import './StoryCard.styles.css'

const StoryCard = ({ title, description, imageURL, flipped }) => {
    return (
        <div className="storyCard">
            <div className="storyCard__container">
                <div className={`storyCard__info ${flipped && 'flipped'}`}>
                    <h1>{title}</h1>
                    <span>{description}</span>
                </div>
                <img src={imageURL} alt="Story Card" />
            </div>
        </div>
    )
}

export default StoryCard
