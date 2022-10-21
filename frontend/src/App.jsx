import cl from 'classnames';
import { useCallback, useEffect } from 'preact/hooks';

import { GifLinkForm } from 'components';
import { ImagePreview } from 'components/shared';
import { usePhantomWallet } from 'hooks';

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

  const [walletAddress, connectWallet] = usePhantomWallet();

  const renderAppAction = useCallback(() => {
    if (!walletAddress)
      return (
        <button
          onClick={connectWallet}
          className=" m-auto flex items-center justify-center rounded-xl border-2 border-black px-6 py-2 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring ring-purple-500/50 active:bg-purple-200/50 max-w-xs"
        >
          Connect Wallet
          <span aria-hidden="true" className="ml-1.5" role="img">
            🔗
          </span>
        </button>
      );

    return (
      <div className="w-full max-w-2xl">
        <GifLinkForm onSubmit={onSubmit} />
      </div>
    );
  }, [onSubmit, walletAddress, connectWallet]);

  return (
    <div className="min-h-screen p-4 md:p-12 flex flex-col">
      <section className="text-black flex justify-center">
        <div className="w-full max-w-screen-xl py-32 lg:flex lg:items-center flex justify-center">
          <div className="max-w-3xl text-center flex flex-col justify-center items-center space-y-12 w-full">
            <div className="flex flex-col justify-center items-center space-y-3">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-center">
                <span className="text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-black  to-purple-600">
                  Solana Gif Portal
                </span>
              </h1>

              <p className="max-w-xl sm:text-xl sm:leading-relaxed">
                View your GIF collection in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-black  to-purple-800">
                  the metaverse
                </span>{' '}
                ✨
              </p>
            </div>

            <div className="w-full">{renderAppAction()}</div>
          </div>
        </div>
      </section>

      {walletAddress && (
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
      )}
    </div>
  );
}

export default App;
