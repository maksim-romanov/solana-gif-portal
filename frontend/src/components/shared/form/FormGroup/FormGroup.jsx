import { useCallback } from 'preact/hooks';

function FormGroup({ children, meta }) {
  const renderError = useCallback(() => {
    if (!(meta.touched && meta.error)) return null;

    return (
      <div>
        <span>{meta.error}</span>
      </div>
    );
  }, [meta]);

  return (
    <div>
      {/* <label htmlFor={input.name}>Gif link</label> */}
      <div>{children}</div>
      {renderError()}
    </div>
  );
}

export default FormGroup;
