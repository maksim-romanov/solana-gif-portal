import { Form, Field } from 'react-final-form';

import { FormGroup, inputs } from 'components/shared/form';

function GifLinkForm({ onSubmit }) {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="w-full">
          <div className="w-full flex flex-col space-y-8 sm:space-y-0 sm:flex-row justify-between items-center sm:items-stretch space-x-0 sm:space-x-3 group">
            <Field name="gifLink" placeholder="Gif link here to metaverse here ...">
              {({ meta, input, placeholder }) => (
                <FormGroup meta={meta} input={input}>
                  <inputs.TextInput input={input} placeholder={placeholder} />
                </FormGroup>
              )}
            </Field>

            <button
              type="submit"
              className="flex items-center justify-center rounded-xl border-2 border-black px-6 py-2 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring ring-purple-500/50 active:bg-purple-200/50 max-w-xs"
            >
              Mint
              <span aria-hidden="true" className="ml-1.5" role="img">
                🚀
              </span>
            </button>
          </div>
        </form>
      )}
    />
  );
}

export default GifLinkForm;
