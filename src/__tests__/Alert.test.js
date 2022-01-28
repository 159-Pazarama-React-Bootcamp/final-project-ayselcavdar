import render from 'react-test-renderer';
import Alert from '../components/alert/Alert';

describe('Alert comp change className to props', () => {
  it('if prop type info, classname should has alert-info', () => {
    const wrapper = shallow(<Alert info body="hello" />);
    expect(wrapper.find('.alert-info').getElements().length).toEqual(1);
  });

  it("if required prop exist, it should be in p tag as a text", () => {
    const wrapper = shallow(<Alert info body="hello" />);
    expect(wrapper.find("p").text()).toEqual("hello");
  });

  it('if prop type error', () => {
    const wrapper = shallow(<Alert error body="error" />);
    expect(wrapper.find('.alert-error').getElements().length).toEqual(1);

  });

  it("if required prop exist, it should be in p tag as a text", () => {
    const wrapper = shallow(<Alert error body="error" />);
    expect(wrapper.find("p").text()).toEqual("error");
  });

  it('Alert render check', () => {
    const comp = render.create(<Alert info body="informational"/>);
    let tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
