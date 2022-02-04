import render from 'react-test-renderer';
import ThanksMessage from '../components/applications/ThanksMessage';

describe('<ThanksMessage /> rendering', () => {
  it('first p tag text should be given title prop value', () => {
    const wrapper = shallow(
      <ThanksMessage title={'test'}/>
    );
    expect(wrapper.find('p').first().text()).toEqual('test');
  });

  it('ThanksMessage snapshot test', () => {
    const comp = render.create(<ThanksMessage title="Hello" />);
    let tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
