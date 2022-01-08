import { fakePosts } from "./fakePost";
import Post from "./Post/Post";
const Posts = () => {
  const title = "Hookah posts";
  const data = fakePosts;
  return (
    <>
      <h4>{title}</h4>
      {data.map((item) => (
        <Post item={item} />
      ))}
    </>
  );
};

export default Posts;
