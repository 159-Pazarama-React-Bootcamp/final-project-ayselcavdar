/**
 * @jest-environment jsdom
 */
import render from 'react-test-renderer';
import AppDetails from '../components/application-details/AppDetails';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter } from 'react-router-dom';

describe('<AppDetails /> rendering', () => {
  it('AppDetails snapshots check', () => {
    const wrapper = render.create(
      <Provider store={store}>
        <BrowserRouter>
          <AppDetails isAdmin />
        </BrowserRouter>
      </Provider>
    );
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
