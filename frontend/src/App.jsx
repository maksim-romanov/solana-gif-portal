import { GifLinkForm } from 'components';
import { ImagePreview } from 'components/shared';

function App() {
  const onSubmit = (values) => {
    console.log('values', values);
  };

  return (
    <div className="h-full m-auto bg-slate-800">
      <GifLinkForm onSubmit={onSubmit} />

      <div className="max-w-3xl px-6 py-16 mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-800">Want to see Back in action?</h1>
        <p className="max-w-md mx-auto mt-5 text-gray-500 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, minus tempora nemo quos
        </p>

        <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center">
          <input
            id="email"
            type="text"
            className=" text-lg px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            placeholder="Email Address"
          />

          <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Get Started
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 sm:gap-y-12 pb-12">
        <div className="m-auto">
          <ImagePreview />
        </div>
        <div className="m-auto">
          <ImagePreview />
        </div>
        <div className="m-auto">
          <ImagePreview />
        </div>
        <div className="m-auto">
          <ImagePreview />
        </div>
      </div>

      {/* <div className="flex flex-row">
        <div className="relative flex flex-col items-center justify-center max-w-sm">
          <button className="absolute top-1 left-1 backdrop-blur-sm bg-white/30 rounded-lg py-1 px-2 opacity-50">
            <div className="text-red-500 flex justify-center items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>

              <span className="text-sm font-bold">123</span>
            </div>
          </button>

          <img
            className="w-full max-h-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            src="https://media.giphy.com/media/SVYrs1hU0SiAf1nw1n/giphy-downsized-large.gif"
          />

          <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <div className="px-6">
              <h3 className="py-2 text-xs tracking-wide text-center text-gray-800 uppercase dark:text-white truncate">
                CtR8U3nwdnHHuV8VStsuvM9e9Fzb3j3cn8fmcu6tQJMt
              </h3>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;

{
  /* <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
            <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              Add to cart
            </button>
          </div> */
}
