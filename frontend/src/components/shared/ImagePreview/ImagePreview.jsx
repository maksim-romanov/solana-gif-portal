import cl from 'classnames';

import s from './styles.module.css';

function ImagePreview({ item }) {
  return (
    <div className="relative h-full">
      <div className=" bg-black absolute top-0 right-0 bottom-0 left-0 border border-dashed border-black rounded-lg translate-x-1.5 translate-y-1.5 -z-10" />

      <div className="h-full border-2 border-black rounded-lg p-2 py-0 flex flex-col z-10 bg-white">
        <div className="py-2 px-1 flex justify-between items-center">
          <img
            className="h-8 w-8 rounded-full border border-stone-200"
            src="https://avatars.githubusercontent.com/t/6813046?s=280&v=4"
          />

          <div className="truncate pl-8">
            <span>CtR8U3nwdnHHuV8VStsuvM9e9Fzb3j3cn8fmcu6tQJMt</span>
          </div>
        </div>

        <img className="w-full h-full max-h-64 rounded-lg border border-stone-200" src={item.url} />

        <div className="py-1 px-1">
          <button className="text-red-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>

            {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg> */}

            <span className="p-1">0</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImagePreview;
