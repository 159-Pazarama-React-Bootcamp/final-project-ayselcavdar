import render from 'react-test-renderer';
import Loader from '../components/Loader/Loader';

describe('<Loader /> rendering', () => {
  it('Animated loader svg should only one svg element', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('svg')).toHaveLength(1);
  });

  it('Animated loader svg should only 3 path element', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('path')).toHaveLength(3);
  });

  it('Loader snapshots check', () => {
    const comp = render.create(<Loader />);
    let tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
