import { Formik } from 'formik';
import render from 'react-test-renderer';
import FormInput from '../components/form-input/FormInput';

describe('<FormInput /> rendering', () => {
  it('FormInput snapshots check', () => {
    const comp = render.create(
      <Formik>
        <FormInput name="test" label="test" type="text" />
      </Formik>
    );
    let tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


