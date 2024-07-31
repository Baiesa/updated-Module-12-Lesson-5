import React, { useState, useEffect } from 'react';
import './i18n'; 
import { useTranslation } from 'react-i18next';
import Blog from './components/Blog';
import CommentForm from './components/CommentForm';

const App = () => {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div>
      <header>
        <h1>{t('title')}</h1>
        <select onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </header>
      <Blog posts={posts} />
      <CommentForm onSubmit={handleCommentSubmit} />
      <div>
        <h3>{t('comments')}</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;