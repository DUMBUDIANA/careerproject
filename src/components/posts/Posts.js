
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Post.css'
// import arrow from '../../assets/Arrow 1 (1).png'

// const Posts = () => {
//   const [posts, setPosts] = useState([]); // State to store posts

//   // Fetch posts from the backend API
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/posts'); // Adjust the URL as needed
//         const data = await response.json();
//         setPosts(data); // Update the state with the fetched posts
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };

//     fetchPosts(); // Call the fetchPosts function when the component mounts
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   return (
//     <div className='posts' id='Posts'>
//       <p className='para'>Latest Updates</p>
//       <h2>Stay informed and elevate<br /> your career journey</h2>
//       <div className='post-content'>
//         {posts.map((item) => (
//           <div key={item._id} className="post-item"> {/* Use item._id if the backend provides it */}
//             {/* <img src="http://localhost:5000/uploads/.jpg" alt="Example Image"  className='img-post'/> */}
//             <img 
//         src={`http://localhost:5000/uploads/${item.image}`} 
//         alt={item.title}  // Optionally set the alt text to the post's title
//         className='img-post'
//       />

//             <p className='post-title'>{item.title}</p>
//             <p className='post-paragraph'>{item.content}</p> {/* Adjust field names as needed */}
//             <Link to={`/post/${item._id}`} className='explore'>Explore<img src={arrow} className='arrow' alt='arrow' /></Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Posts;



import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
import arrow from '../../assets/Arrow 1 (1).png';
import Postdetailsdataset from './Postdetailsdataset'; // Import the dataset

const Posts = () => {
  return (
    <div className='posts' id='Posts'>
      <p className='para'>Latest Updates</p>
      <h2>Stay informed and elevate<br /> your career journey</h2>
      <div className='post-content'>
        {Postdetailsdataset.map((item) => (
          <div key={item.id} className="post-item">
            {/* <img 
              src={item.src} 
              alt={item.title} 
              className='img-post'
            /> */}
            <p className='post-title'>{item.title}</p>
            <p className='post-paragraph'>
              {item.paragraphs[0]?.text.slice(0, 100)}... {/* Show a short preview */}
            </p>
            <Link to={`/post/${item.id}`} className='explore'>
              Explore <img src={arrow} className='arrow' alt='arrow' />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;

