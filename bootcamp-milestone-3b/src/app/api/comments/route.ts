import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

export async function POST(request: NextRequest) {
  try {
    const { slug, user, comment } = await request.json();

    if (!slug || !user || !comment) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectDB();

    // Add new comment to the blog post
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug: slug },
      {
        $push: {
          comments: {
            user: user,
            comment: comment,
            time: new Date()
          }
        }
      },
      { new: true }
    );

    if (!updatedBlog) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Comment added successfully" },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}