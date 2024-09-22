import { PostsIndex } from "./PostsIndex";

export function PostsPage() {
  const posts = [
    {id: 1, name: "First", body: "", image: "https://via.placeholder.com/150"},
    {id: 2, name: "Second", body: "", image: "https://via.placeholder.com/300"},
  ];


  return (
    <main>
      <h1>Welcome to React!</h1>
      <PostsIndex posts={posts} />
       {/* posts={posts} passes placeholder data to the index component as props */}
    </main>
  )
}