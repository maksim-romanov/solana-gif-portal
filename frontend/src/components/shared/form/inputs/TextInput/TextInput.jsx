function TextInput(props) {
  const { input, placeholder } = props;

  return (
    <input
      {...input}
      id={input.name}
      placeholder={placeholder}
      className="outline-0 bg-white border-2 border-black text-gray-900 sm:text-lg rounded-xl group-focus-within:ring-primary-600 group-focus-within:border-primary-600 block w-full p-3 px-4 shadow-[6px_6px_0_0_#000] transition focus:shadow-none focus:border-slate-700 focus:ring ring-purple-500/50"
    />
  );
  // return <input placeholder={placeholder} id={input.name} {...input} />;
}

export default TextInput;
