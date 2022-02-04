import render from 'react-test-renderer';
import CommentBox from '../components/comment/CommentBox';

describe('<CommentBox /> rendering', () => {
  it('should render a textarea to type the comment', () => {
    const wrapper = shallow(
      <CommentBox
        handleComment={jest.fn()}
        submitCommentLine={jest.fn()}
        comment="hello"
      />
    );
    expect(wrapper.find('textarea')).toHaveLength(1);
  });

  it('should render only one span to send answer to the applicant.', () => {
    const wrapper = shallow(
      <CommentBox
        handleComment={jest.fn()}
        submitCommentLine={jest.fn()}
        comment="hello"
      />
    );
    expect(wrapper.find('span')).toHaveLength(1);
  });

  it('CommentBox snapshots check', () => {
    const comp = render.create(
      <CommentBox
        handleComment={jest.fn()}
        submitCommentLine={jest.fn()}
        comment="hello"
      />
    );
    let tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
