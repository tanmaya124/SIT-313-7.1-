import React, { useState } from 'react';
import './App.css';
import PostTypeSelector from './PostTypeSelector';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';
import FindQuestion from './FindQuestion';

function App() {
  const [postType, setPostType] = useState('question');

  return (
    <div className="App">
      <h1>New Post</h1>
      <PostTypeSelector postType={postType} setPostType={setPostType} />
      <div className="post-container">
        <div className="post-options">
          <div className={`post-option ${postType === 'question' ? 'active' : ''}`}>
            <button onClick={() => setPostType('question')}>Questions</button>
          </div>
          <div className={`post-option ${postType === 'article' ? 'active' : ''}`}>
            <button onClick={() => setPostType('article')}>Articles</button>
          </div>
          <div className={`post-option ${postType === 'FindQuestion' ? 'active' : ''}`}>
            <button onClick={() => setPostType('FindQuestion')}>Find Question</button>
          </div>
        </div>
        {postType === 'question' ? <QuestionForm /> : null}
        {postType === 'article' ? <ArticleForm /> : null}
        {postType === 'FindQuestion' ? <FindQuestion /> : null}
      </div>
    </div>
  );
}

export default App;
