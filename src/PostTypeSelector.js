import React from 'react';
import './PostTypeSelector.css';

function PostTypeSelector({ postType, setPostType }) {
  const handlePostTypeChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setPostType(name);
    }
  };

  return (
    <div className="header">
      <label><h2>Select Post Type:</h2></label>
      
    </div>
  );
}

export default PostTypeSelector;