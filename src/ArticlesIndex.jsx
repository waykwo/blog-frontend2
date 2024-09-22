export function PostsIndex({posts}) { // passing {posts} as an argument here is the equivalent of passing {props.posts}
  return (
    <div>
      <h1>All posts</h1>
      {posts.map((post) => {
        <div key={post.id}>
          <h2>{post.name}</h2>
          <img src={post.url} />
        </div>
      })}
    </div>
  );
}