import CreatePost from "./CreatePost";
import PostList from "./PostList";

function App() {
  return (
    <div className="w-full p-4">
        <h1 className="text-gray-700 text-sm font-bold text-center">Create Post</h1>
        <CreatePost />
        <hr />
        <h2 className="mt-5 text-gray-700 text-sm font-bold text-center">Posts</h2>
        <PostList />
    </div>
  );
}

export default App;
