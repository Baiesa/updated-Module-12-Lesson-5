import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CommentForm = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === '') {
      setError(t('error'));
    } else {
      onSubmit(comment);
      setComment('');
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="comment-form-title">
      <h3 id="comment-form-title">{t('comment')}</h3>
      <div>
        <label htmlFor="comment">{t('comment')}</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          aria-required="true"
          aria-describedby="comment-error"
        />
        {error && <div id="comment-error" role="alert">{error}</div>}
      </div>
      <button type="submit">{t('submit')}</button>
    </form>
  );
};

export default CommentForm;