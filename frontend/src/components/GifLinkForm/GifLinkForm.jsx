import { Form, Field } from 'react-final-form';

import { FormGroup, inputs } from 'components/shared/form';

import s from './styles.module.css';

function GifLinkForm({ onSubmit }) {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className={s.formContainer}>
            <Field name="gifLink" placeholder="Gif link here">
              {({ meta, input, placeholder }) => (
                <FormGroup meta={meta} input={input}>
                  <inputs.TextInput input={input} placeholder={placeholder} />
                </FormGroup>
              )}
            </Field>

            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    />
  );
}

export default GifLinkForm;
