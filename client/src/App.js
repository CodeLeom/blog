import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  return (
    <div className="w-full max-w-xs my-9">
        <h1 className="text-gray-700 text-sm font-bold text-center">Create Post</h1>
        <PostCreate />
        <hr />
        <h2>Posts</h2>
        <PostList />
    </div>
  );
}

export default App;
