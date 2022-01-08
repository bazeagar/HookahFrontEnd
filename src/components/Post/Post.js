import Avatar from "./Avatar";
import Message from "./Message";
import NameWithHandle from "./NameWithHandle.js";
import "../styles/post.scss";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Post = ({ item }) => {
  const Time = () => <span className="time">1min ago</span>;
  const Reply = () => <i className="fa fa-reply reply-button" />;

  const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;

  const LikeButton = () => <i className="fa fa-heart like-button" />;

  const MoreOPtionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
  );

  return (
    <div className="tweet">
      <Avatar imgUrl={item.imgUrl} />
      <div className="content">
        <NameWithHandle name={item.userName} handle={item.handle} /> <Time />
        <Message data={item.message} />
        <div className="buttons">
          <ChatBubbleOutlineIcon />
          <ShareIcon />
          <FavoriteBorderIcon />
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
};

// Accessories

export default Post;
