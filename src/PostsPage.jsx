import { PostsIndex } from "./PostsIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function PostsPage() {
  // const posts = [
  //   {
  //     id: 1,
  //     name: "First",
  //     body: "I'm baby dreamcatcher small batch blog, marfa skateboard heirloom tumblr actually fam. Meh +1 bruh, seitan sustainable mukbang artisan neutra brunch actually godard you probably haven't heard of them leggings. Enamel pin DSA irony, polaroid ugh lyft four dollar toast. Fashion axe chillwave cray iceland, la croix XOXO hell of truffaut gastropub meggings.",
  //     image: "https://th.bing.com/th/id/OIP.GPFEY6kfgxbsja6gmrW6rwAAAA?rs=1&pid=ImgDetMain"
  //   },
  //   {
  //     id: 2,
  //     name: "Second",
  //     body: "I'm baby dreamcatcher small batch blog, marfa skateboard heirloom tumblr actually fam. Meh +1 bruh, seitan sustainable mukbang artisan neutra brunch actually godard you probably haven't heard of them leggings. Enamel pin DSA irony, polaroid ugh lyft four dollar toast. Fashion axe chillwave cray iceland, la croix XOXO hell of truffaut gastropub meggings.",
  //     image: "https://th.bing.com/th/id/OIP.MCLzVoExgXPyNi_V5gb1AwHaE7?rs=1&pid=ImgDetMain"
  //   }
  // ];

  const [posts, setPosts] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data)
      setPosts(response.data);
    })
  }

  useEffect(handleIndex, []);


  return (
    <main>
      <h1>Welcome to React!</h1>
      <PostsIndex articles={posts} />
       {/* articles={posts} passes placeholder data to the index component as props */}
       {/* Usually, people name the variables the same (e.g., posts={posts}) but I named
        it differently on purpuse here to see what has to match with what. "posts" here 
        has to match with line 4; "articles" has to match with the variable passed to 
        PostsIndex */}
    </main>
  )
}