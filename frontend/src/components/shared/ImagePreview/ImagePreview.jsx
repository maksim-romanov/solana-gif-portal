function ImagePreview() {
  return (
    <div className="relative w-64">
      <button className="absolute top-1 left-1 backdrop-blur-sm bg-white/30 rounded-lg py-1 px-2 opacity-50">
        <div className="text-red-500 flex justify-center items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>

          <span className="text-sm font-bold">123</span>
        </div>
      </button>

      <img
        className="w-full max-h-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
        src="https://media.giphy.com/media/SVYrs1hU0SiAf1nw1n/giphy-downsized-large.gif"
      />

      <div className="absolute left-0 right-0 bottom-0 py-2 px-6">
        <div className="shadow-md bg-white truncate py-0.5 px-3 rounded-xl">
          <span className="text-sm">CtR8U3nwdnHHuV8VStsuvM9e9Fzb3j3cn8fmcu6tQJMt</span>
        </div>
      </div>
    </div>
  );
}

export default ImagePreview;
