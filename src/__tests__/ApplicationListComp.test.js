/**
 * @jest-environment jsdom
 */
import render from 'react-test-renderer';
import ApplicationListComp from '../components/admin/applications/ApplicationListComp';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter } from 'react-router-dom';

describe('<ApplicationListComp /> rendering', () => {
  test('AppDetails snapshots check', () => {
    const wrapper = render.create(
      <Provider store={store}>
        <BrowserRouter>
          <ApplicationListComp />
        </BrowserRouter>
      </Provider>
    );
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
