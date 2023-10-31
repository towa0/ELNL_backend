const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    seo_title: String,
    meta_description: String,
    image: String,
    content: [
      {
        type: String,
        text: String,
      },
    ],
  },
  { collection: "Blogs" }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
