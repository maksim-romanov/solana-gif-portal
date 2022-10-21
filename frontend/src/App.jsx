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
    <div className="min-h-screen p-12 flex flex-col">
      <div className="fixed top-0 left-0 p-2 opacity-85">
        <a
          href="#"
          className="text-xs inline-flex justify-between items-center px-1 pr-4 text-gray-700 bg-gray-100 rounded-full  hover:bg-gray-200"
          role="alert"
        >
          <span className=" bg-purple-500 rounded-full text-white px-4 py-1 mr-3">
            <span className="animate-pulse">Devnet</span>
          </span>
          <span className="font-medium">Phantom Wallet</span>
        </a>
      </div>

      <section className="max-h-screen p-12 flex flex-col items-center">
        <div className="min-h-full flex flex-col justify-center items-center space-y-4">
          <h1 className=" text-5xl font-bold capitalize text-slate-700">🖼 Solana gif portal</h1>

          <span className=" text-xl text-slate-800">View your GIF collection in the metaverse ✨</span>
        </div>

        <div>
          <GifLinkForm onSubmit={onSubmit} />
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
