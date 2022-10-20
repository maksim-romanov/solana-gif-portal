function TextInput(props) {
  const { input, placeholder } = props;

  return <input placeholder={placeholder} id={input.name} {...input} />;
}

export default TextInput;
