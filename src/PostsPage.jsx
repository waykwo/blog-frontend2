import { PostsIndex } from "./PostsIndex";

export function PostsPage() {
  const posts = [
    {
      id: 1,
      name: "First",
      body: "I'm baby dreamcatcher small batch blog, marfa skateboard heirloom tumblr actually fam. Meh +1 bruh, seitan sustainable mukbang artisan neutra brunch actually godard you probably haven't heard of them leggings. Enamel pin DSA irony, polaroid ugh lyft four dollar toast. Fashion axe chillwave cray iceland, la croix XOXO hell of truffaut gastropub meggings.",
      image: "https://th.bing.com/th/id/OIP.GPFEY6kfgxbsja6gmrW6rwAAAA?rs=1&pid=ImgDetMain"
    },
    {
      id: 2,
      name: "Second",
      body: "I'm baby dreamcatcher small batch blog, marfa skateboard heirloom tumblr actually fam. Meh +1 bruh, seitan sustainable mukbang artisan neutra brunch actually godard you probably haven't heard of them leggings. Enamel pin DSA irony, polaroid ugh lyft four dollar toast. Fashion axe chillwave cray iceland, la croix XOXO hell of truffaut gastropub meggings.",
      image: "https://th.bing.com/th/id/OIP.MCLzVoExgXPyNi_V5gb1AwHaE7?rs=1&pid=ImgDetMain"
    }
  ];


  return (
    <main>
      <h1>Welcome to React!</h1>
      <PostsIndex posts={posts} />
       {/* posts={posts} passes placeholder data to the index component as props */}
    </main>
  )
}