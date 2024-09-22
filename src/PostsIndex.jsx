export function PostsIndex({articles}) { // passing {articles} as an argument here is the equivalent of passing {props.articles}
  console.log(articles)
  return (
    <div>
      <h1>All posts</h1>
      {articles.map((article) => ( // if you had passed "props" into function, you would put props.articles here instead of articles
        <div key={article.id}>
          <h2>{article.name}</h2>
          <p>{article.body}</p>
          <img src={article.image} />
        </div>
      ))}
    </div>
  );
}