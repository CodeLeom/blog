import CreatePost from "./CreatePost";
import PostList from "./PostList";

function App() {
  return (
    <main className="mb-auto px-3 items-center max-w-full">
        <h1 className="text-gray-700 text-sm font-bold text-center">Create Post</h1>
        <CreatePost />
        <hr />
        <h2 className="mt-5 text-gray-700 text-sm font-bold text-center">Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <PostList />
            </div>
    </main>
  );
}

export default App;
