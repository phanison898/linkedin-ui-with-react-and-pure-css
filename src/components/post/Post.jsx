import React, { useState } from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import TextIcon from "../util/text_icon/TextIcon";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Post = ({ children }) => {
  const [showMore, setShowMore] = useState(false);

  // Maximum number of characters to display before truncating
  const maxLength = 250;

  // Toggle the showMore state
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const text =
    "It is with deep sorrow that we mourn the passing of an extraordinary leader, Ratan Tata. His visionary leadership, humility, and unwavering commitment to social responsibility have left an indelible mark on India and the world. At Qentelli, we extend our heartfelt condolences to his family, friends, and all those whose lives he touched. His legacy will continue to inspire generations to come. Rest in peace, Ratan Tata. You will be missed, but never forgotten. hashtag#RatanTata hashtag#Legacy hashtag#InRemembrance hashtag#Leadership";

  return (
    <div className="post">
      <div className="post__header">
        <div className="avatar">
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14Ghgn7fgiyk_79b1T2_gy8N1tknORntOrO7oVmVoAA=s96-c"
            alt="post avatar"
          />
        </div>
        <div className="info">
          <h5>Qentelli</h5>
          <p>21,63 followers</p>
          <p>1h ago</p>
        </div>
        <div className="icons">
          <MoreHorizIcon />
          <CloseIcon />
        </div>
      </div>
      <div className="post__description">
        <p>
          {showMore ? (
            <>
              {text}
              <span onClick={toggleShowMore} style={{ color: "grey", cursor: "pointer" }}>
                Show less
              </span>
            </>
          ) : (
            <>
              {text.substring(0, maxLength)}...
              <span onClick={toggleShowMore} style={{ color: "grey", cursor: "pointer" }}>
                Show more
              </span>
            </>
          )}
        </p>
      </div>
      <div className="post__image">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/phanison-linkedin-clone.appspot.com/o/posts%2F54010fbc-b4fd-4a39-8856-30ad72ef3aad?alt=media&token=e2851fbc-5f30-48ea-b5e6-fb01f37aa223"
          alt=""
        />
      </div>
      <div className="post__reactions">
        <div className="reactions">
          <img src="/assets/1.svg" alt="" />
          <img src="/assets/2.svg" alt="" />
          <img src="/assets/3.svg" alt="" />
          <img src="/assets/4.svg" alt="" />
          <img src="/assets/5.svg" alt="" />
          <img src="/assets/6.svg" alt="" />
        </div>
        <p>1 comment</p>
      </div>
      <div className="post__options">
        <TextIcon icon={<ThumbUpAltOutlinedIcon />} text="Like" />
        <TextIcon icon={<ChatBubbleOutlineOutlinedIcon />} text="Comment" />
        <TextIcon icon={<KeyboardReturnOutlinedIcon />} text="Repost" />
        <TextIcon icon={<SendOutlinedIcon />} text="Share" />
      </div>
    </div>
  );
};

export default Post;
