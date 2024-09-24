export function PostsNew() {
  return (
    <div>
      <hi>New Post</hi>
      <form>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Body: <input name="body" type="textarea" />
        </div>
        <div>
          Image: <input name="image" type="img" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};