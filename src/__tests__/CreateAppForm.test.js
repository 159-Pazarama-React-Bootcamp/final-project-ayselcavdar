/**
 * @jest-environment jsdom
 */
import render from 'react-test-renderer';
import CreateAppForm from '../components/create-app-form/CreateAppForm';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter } from 'react-router-dom';

describe('<AppDetails /> rendering', () => {
  test('AppDetails snapshots check', () => {
    const wrapper = render.create(
      <Provider store={store}>
        <BrowserRouter>
          <CreateAppForm />
        </BrowserRouter>
      </Provider>
    );
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
