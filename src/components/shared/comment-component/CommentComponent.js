import React from 'react';
import Avatar from '../avatar-component/Avatar'
import './CommentComponent.css'
import { faChevronUp, faChevronDown, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const commentComp = props => {
    const clickOnReply = () => {
        console.log('you clicked on reply')
    }
    return (props.comments.map(comment => {
        let replyText = ' reply'
        if (comment.amountOfReplies > 1) {
            replyText = ' replies'
        }
        return (
            <div key={comment.id} className="commentWrapper">
                <div className="rowView">
                    <Avatar avatarPath={comment.avatarPath} />
                    <div className="columnView">
                        <div className="rowView mb1">
                            <div className="darkGrey boldText">{comment.authorName}</div>
                            <div className="uppercaseText smallFont paddingXsm">
                                <span className="tagStyle">{comment.type}</span>
                            </div>
                            <div className="uppercaseText mediumGrey smallFont rowView centerAligned">
                                <FontAwesomeIcon className="iconXs paddingXsm " icon={faCircle} />
                                {comment.timeStamp}
                            </div>
                        </div>
                        <p className="marginY0 mb1">{comment.commentText}</p>
                        <div className="rowView">
                            <div className="uppercaseText lightGrey smallFont hoverComment pointer"
                                onClick={clickOnReply}>reply</div>
                            <div className="uppercaseText lightGrey smallFont paddingXRegular hoverComment pointer"
                                onClick={props.clicked}>
                                <span className="mediumGrey hoverComment ">
                                    {comment.amountOfReplies}
                                </span>
                                {replyText}
                            </div>
                            <div className="uppercaseText lightGrey smallFont paddingXRegular rowView centerAligned hoverComment pointer">
                                <FontAwesomeIcon className="regularFont paddingXsm" icon={faChevronUp} />
                                {comment.upCount}
                            </div>
                            <div className="uppercaseText lightGrey smallFont paddingXRegular rowView centerAligned hoverComment pointer">
                                <FontAwesomeIcon className="regularFont paddingXsm" icon={faChevronDown} />
                                {comment.downCount}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    })
    )
}
export default commentComp;