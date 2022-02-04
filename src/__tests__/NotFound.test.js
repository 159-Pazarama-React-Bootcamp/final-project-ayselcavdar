/**
 * @jest-environment jsdom
 */
import render from 'react-test-renderer';
import NotFound from '../components/not-found/NotFound';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter } from 'react-router-dom';

describe('<NotFound /> rendering', () => {
  it('NotFound snapshots check', () => {
    const comp = render.create(
      <Provider store={store}>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </Provider>
    );
    let tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
