import render from 'react-test-renderer';
import Button from '../components/button/Button';


describe('<Button /> rendering', () => {
  it('if button has disabled prop as true, it should be disabled', () => {
    const wrapper = shallow(
      <Button content={'test'} type="button" disabled={true} />
    );
    expect(wrapper.find('button').props().disabled).toBe(true);
  });

  it('Button\'s disabled prop change to false', () => {
    const wrapper = shallow(
      <Button content={'test'} type="button" disabled={false} />
    );
    expect(wrapper.find('button').props().disabled).toBe(false);
  });

  it('Button\'s content should be in button element', () => {
    const wrapper = shallow(
      <Button content={'test'} type="button" />
    );
    expect(wrapper.find('button').text()).toEqual('test');
  });

  it('Button snapshots check', () => {
    const comp = render.create(<Button content={'click'} type="button" />);
    let tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
