import React, { useState } from "react";
import "./community.css";

const initialPosts = [
  {
    id: 1,
    category: "Jobs",
    user: "Alice",
    content: "Any job openings for fresh graduates?",
    comments: [
      { id: 1, user: "Marie", content: "Check LinkedIn!" },
      { id: 2, user: "Jay", content: "Try remote work platforms." },
    ],
  },
  {
    id: 2,
    category: "Learning",
    user: "Bob",
    content: "Best free coding courses?",
    comments: [
      { id: 1, user: "Marie", content: "Check LinkedIn Learning!" },
      { id: 2, user: "Jay", content: "FreeCodeCamp is great!" },
    ],
  },
  {
    id: 3,
    category: "Mentorship",
    user: "Charlie",
    content: "Looking for a mentor in Data Science.",
    comments: [
      { id: 1, user: "Marie", content: "Try ADPList.org" },
      { id: 2, user: "Jay", content: "I can help, DM me!" },
    ],
  },
];

export default function CommunityPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [category, setCategory] = useState("All");
  const [newPost, setNewPost] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyContent, setReplyContent] = useState("");

  const handlePost = () => {
    if (newPost.trim() === "") return;
    setPosts([
      {
        id: posts.length + 1,
        category: "General",
        user: "You",
        content: newPost,
        comments: [],
      },
      ...posts,
    ]);
    setNewPost("");
  };

  const handleReply = (postId) => {
    if (replyingTo === postId) {
      setReplyingTo(null);
      setReplyContent("");
    } else {
      setReplyingTo(postId);
      setReplyContent("");
    }
  };

  const submitReply = (postId) => {
    if (replyContent.trim() === "") return;
    
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [
            ...post.comments,
            {
              id: post.comments.length + 1,
              user: "You",
              content: replyContent
            }
          ]
        };
      }
      return post;
    }));
    
    setReplyingTo(null);
    setReplyContent("");
  };

  return (
    <div className="community-page">
      <h1>Community Forum</h1>
      <p className="subtitle">Engage, discuss, and grow with like-minded people.</p>

      {/* Post Box */}
      <div className="post-box">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your thoughts..."
          rows="3"
        />
        <button onClick={handlePost} className="post-button">Post</button>
      </div>

      {/* Category Filter */}
      <div className="filter-container">
        <select 
          onChange={(e) => setCategory(e.target.value)} 
          value={category}
          className="category-filter"
        >
          <option value="All">All Topics</option>
          <option value="Jobs">Jobs</option>
          <option value="Learning">Learning</option>
          <option value="Mentorship">Mentorship</option>
        </select>
      </div>

      {/* Posts List */}
      <div className="posts-list">
        {posts
          .filter((post) => category === "All" || post.category === category)
          .map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <h3 className="post-user">{post.user}</h3>
                <span className="post-category">{post.category}</span>
              </div>
              <p className="post-content">{post.content}</p>
              
              <div className="comments-section">
                {post.comments.length > 0 && (
                  <div className="comments-list">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="comment">
                        <span className="comment-user">{comment.user}:</span>
                        <p className="comment-content">{comment.content}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {replyingTo === post.id && (
                  <div className="reply-box">
                    <textarea
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      placeholder="Write your reply..."
                      rows="2"
                    />
                    <div className="reply-actions">
                      <button 
                        onClick={() => submitReply(post.id)} 
                        className="submit-reply"
                      >
                        Submit
                      </button>
                      <button 
                        onClick={() => handleReply(post.id)} 
                        className="cancel-reply"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
                
                <button 
                  onClick={() => handleReply(post.id)} 
                  className={`reply-button ${replyingTo === post.id ? 'active' : ''}`}
                >
                  {replyingTo === post.id ? 'Close Reply' : 'Reply'}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}