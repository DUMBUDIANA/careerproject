
import React from 'react';
import { useParams } from 'react-router-dom';
import Postdetailsdataset from './Postdetailsdataset'; // Import your dataset
import './Post.css';

const PostDetail = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const postId = parseInt(id, 10); // Convert id to a number
  const post = Postdetailsdataset.find((post) => post.id === postId); // Find the post by ID

  if (!post) {
    return <p>Post not found</p>; // Handle case where the post doesn't exist
  }

  return (
    <div className="post-detail">
      <h3>{post.title}</h3>

      <div className="post-content">
        {post.paragraphs && Array.isArray(post.paragraphs) && post.paragraphs.length > 0 ? (
          post.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph.text}</p>
          ))
        ) : (
          <p>No content available</p>
        )}
      </div>

      {/* Display extraDetail and moreInfo with fallback messages */}
      <p>{post.extraDetail || 'No additional details available'}</p>
      <p>{post.moreInfo || 'No more information available'}</p>

      {/* Display the image if the src field exists */}
      {post.src && <img src={post.src} alt={post.title} />}
    </div>
  );
};

export default PostDetail;

