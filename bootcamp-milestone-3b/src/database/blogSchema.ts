import mongoose, { Schema } from "mongoose";
import connectDB from "./db";

// Comment type definition
type IComment = {
  user: string;
  comment: string;
  time: Date;
};

export type Blog = {
  title: string;
  slug: string;
  date: string;
  description: string;
  content: string;
  image: string;
  imageAlt: string;
  comments?: IComment[];
};

// mongoose schema
const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  comments: {
    type: [
      {
        user: { type: String, required: true },
        comment: { type: String, required: true },
        time: { type: Date, required: true },
      },
    ],
    required: false,
    default: [],
  },
});

//defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export async function getBlogs(): Promise<Blog[] | null> {
  await connectDB();

  try {
    const blogs = await Blog.find().lean();
    return blogs as unknown as Blog[];
  } catch (err) {
    return null;
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  await connectDB();

  try {
    const blog = await Blog.findOne({ slug: slug }).lean();
    return blog as unknown as Blog;
  } catch (err) {
    return null;
  }
}

export default Blog;
