import React from 'react';
import { useTranslation } from 'react-i18next';

const Blog = ({ posts }) => {
  const { t } = useTranslation();

  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <header>
            <h2>{t('title')}</h2>
          </header>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
};

export default Blog;