import React from "react";
import "./index.css";
import { IPostsProps, Posts } from "../Posts";

interface INewsFeedProps {
  posts: IPostsProps["details"][];
}

export const NewsFeed: React.FC<INewsFeedProps> = ({ posts }) => {
  return (
    <div className="newsfeed">
      <h2>News Feed</h2>
      <div className="new-post-container">
        <input />
        <button>Add Post</button>
      </div>
      {posts.map((post) => (
        <Posts key={`${post.date}`} details={post} />
      ))}
    </div>
  );
};
