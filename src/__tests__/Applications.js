/**
 * @jest-environment jsdom
 */
import render from 'react-test-renderer';
import Applications from '../components/applications/Applications';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter } from 'react-router-dom';


describe('<Applications /> rendering', () => {
  it('AppDetails snapshots check', () => {
    const wrapper = render.create(
      <Provider store={store}>
        <BrowserRouter>
          <Applications />
        </BrowserRouter>
      </Provider>
    );
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
