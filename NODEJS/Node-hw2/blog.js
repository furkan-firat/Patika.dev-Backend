const posts = [
  {
    title: "title1",
    description: "description1",
  },
  {
    title: "title2",
    description: "description2",
  },
  {
    title: "title3",
    description: "description3",
  },
  {
    title: "title4",
    description: "description4",
  },
];

let listPosts = () => {
  posts.map((post) => {
    console.log("----------");
    console.log(post.title);
    console.log(post.description);
  });
};

let createPost = (newPost) => {
  return new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve("POSTLAR YÜKLENDİ");
    reject("POSTLAR YÜKLENEMEDİ");
  });
};

let showPosts = async () => {
  try {
    await createPost({ title: "Post3", description: "Desc3" });
    listPosts();
  } catch (err) {
    console.log(err);
  }
};

showPosts();
