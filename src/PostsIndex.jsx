export function PostsIndex({posts}) { // passing {posts} as an argument here is the equivalent of passing {props.posts}
  // console.log(posts)
  return (
    <div>
      <h1>All posts</h1>
      {posts.map((post) => ( // if you had passed "props" into function, you would put props.posts here instead of posts
        <div key={post.id}>
          <h2>{post.name}</h2>
          <p>{post.body}</p>
          <img src={post.image} />
        </div>
      ))}
    </div>
  );
}