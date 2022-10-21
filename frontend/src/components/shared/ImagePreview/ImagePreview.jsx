// import cl from 'classnames';

import Likes from './Likes';

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

        <div className="py-2 px-1 flex justify-between items-center space-x-2">
          <Likes value={12} />

          <button className="text-green-600 flex justify-between items-center">
            <span className="text-xs">
              {/* Donate <span className=" font-bold">0.05</span> SOL */}
              Donate
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImagePreview;
