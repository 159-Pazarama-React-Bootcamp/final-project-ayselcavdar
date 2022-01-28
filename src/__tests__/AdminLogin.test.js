/**
 * @jest-environment jsdom
 */
import render from 'react-test-renderer';
import AdminLogin from '../components/admin/login/AdminLoginComp';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter } from 'react-router-dom';

describe('<AdminLogin /> rendering', () => {
  it('AdminLogin snapshots check', () => {
    const comp = render.create(
      <Provider store={store}>
        <BrowserRouter>
          <AdminLogin />
        </BrowserRouter>
      </Provider>
    );
    let tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
