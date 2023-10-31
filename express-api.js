const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Car = require("./carSchema");
const Blog = require("./blogSchema");
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Hallo");
});

app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (blogs.length === 0) {
      console.log("No blogs found in the 'Blogs' collection.");
    }
    res.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/blogs/:blogId", async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (error) {
    console.error("Error fetching the blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/cars", async (req, res) => {
  try {
    const cars = await Car.find();
    if (cars.length === 0) {
      console.log("No cars found in the 'Autos' collection.");
    }
    res.json(cars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
