import styles from './CommentBox.module.css';
import PropTypes from 'prop-types';

const CommentBox = (props) => {
  const { comment, handleComment, submitCommentLine } = props;

  return (
    <>
      <div className={styles['comment-box']}>
        <textarea
          onChange={handleComment}
          value={comment}
          rows="2"
          cols="35"
          placeholder="başvuruyu cevapla"
        />
        <span
          className={comment.length > 3 ? styles['active'] : styles['disable']}
          onClick={submitCommentLine}
        >
          Gönder
        </span>
      </div>
    </>
  );
};

export default CommentBox;

CommentBox.propTypes = {
  comment: PropTypes.string.isRequired,
  handleComment: PropTypes.func.isRequired,
  submitCommentLine: PropTypes.func.isRequired,
};
