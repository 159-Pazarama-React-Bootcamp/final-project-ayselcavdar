import render from 'react-test-renderer';
import Dropdown from '../components/dropdown/Dropdown';

describe('<Dropdown /> rendering', () => {
  it('Drop down comp has only one select element', () => {
    const data = ['ONE', 'TWO'];
    const onChange = jest.fn();
    const wrapper = shallow(<Dropdown data={data} onChange={onChange} />);
    expect(wrapper.find('select')).toHaveLength(1);
  });

  it('Dropdown snapshots check', () => {
    const data = ['ONE', 'TWO'];
    const onChange = jest.fn();
    const comp = render.create(<Dropdown data={data} onChange={onChange} />);
    let tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
