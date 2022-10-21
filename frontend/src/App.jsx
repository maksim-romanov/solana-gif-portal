import cl from 'classnames';

import { GifLinkForm } from 'components';
import { ImagePreview } from 'components/shared';

const GIFS = [
  'https://media.giphy.com/media/APbckd2AUYS6RaqjQW/giphy.gif',
  'https://media.giphy.com/media/4T99irNz4VR3FNVsRb/giphy.gif',
  'https://media.giphy.com/media/3o6ozqdIjc0AG682xq/giphy.gif',
  'https://media.giphy.com/media/4Mfzt937wSvV6/giphy.gif',
];

function App() {
  const onSubmit = (values) => {
    console.log('values', values);
  };

  return (
    <div className="min-h-screen p-4 md:p-12 flex flex-col">
      <div className="fixed z-50 top-0 left-0 right-0">
        <div className="bg-indigo-600 px-4 py-3 text-white">
          <p className="text-center text-sm font-medium">Solana Devnet</p>
        </div>
      </div>
      {/* <div className="fixed top-2 left-2 opacity-85 z-50 shadow-md rounded-full">
        <a
          href="#"
          className="text-xs inline-flex justify-between items-center px-1 pr-4 text-gray-700 bg-white rounded-full  hover:bg-gray-200"
          role="alert"
        >
          <span className=" bg-black rounded-full text-white px-4 py-1 mr-3">
            <span className="animate-pulse">Devnet</span>
          </span>
          <span className="font-medium">Phantom Wallet</span>
        </a>
      </div> */}

      <section className="text-black flex justify-center">
        <div className="w-full max-w-screen-xl py-32 lg:flex lg:items-center flex justify-center">
          <div className="max-w-3xl text-center flex flex-col justify-center items-center space-y-12 w-full">
            <div className="flex flex-col justify-center items-center space-y-3">
              <h1 className="text-5xl font-extrabold text-center">
                <span className="text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-500 to-purple-600">
                  Solana Gif Portal
                </span>
              </h1>

              <p className="max-w-xl sm:text-xl sm:leading-relaxed">View your GIF collection in the metaverse ✨</p>
            </div>

            <div className="w-full max-w-2xl flex flex-col space-y-8 sm:space-y-0 sm:flex-row justify-between items-center sm:items-stretch space-x-0 sm:space-x-3 group">
              {/* <GifLinkForm onSubmit={onSubmit} /> */}

              <input
                type="text"
                name="giflink"
                id="giflink"
                className="outline-0 bg-white border-2 border-black text-gray-900 sm:text-lg rounded-xl group-focus-within:ring-primary-600 group-focus-within:border-primary-600 block w-full p-2.5 pr-42 shadow-[6px_6px_0_0_#000] transition focus:shadow-none focus:border-slate-700 focus:ring ring-purple-500/50"
                placeholder="Gif link here to metaverse here ..."
                required=""
              />

              <button className="flex items-center justify-center rounded-xl border-2 border-black px-6 py-2 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring ring-purple-500/50 active:bg-purple-200/50 max-w-xs">
                Mint
                <span aria-hidden="true" className="ml-1.5" role="img">
                  🚀
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GIFS.map((gifUrl, index) => (
              <div key={index}>
                <ImagePreview item={{ url: gifUrl }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
