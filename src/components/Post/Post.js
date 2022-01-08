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

  return (
    <div className="post">
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
