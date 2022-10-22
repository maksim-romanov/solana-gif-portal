import 'react-toastify/dist/ReactToastify.css';

import cl from 'classnames';
import { Fragment } from 'preact';
import { useCallback, useEffect, useMemo, useState } from 'preact/hooks';

import { GifLinkForm } from 'components';
import { ImagePreview } from 'components/shared';
import { usePhantomWallet } from 'hooks';
import * as apiUtils from 'utils/api';

// const GIFS = [
//   'https://media.giphy.com/media/APbckd2AUYS6RaqjQW/giphy.gif',
//   'https://media.giphy.com/media/4T99irNz4VR3FNVsRb/giphy.gif',
//   'https://media.giphy.com/media/3o6ozqdIjc0AG682xq/giphy.gif',
//   'https://media.giphy.com/media/4Mfzt937wSvV6/giphy.gif',
// ];

function App() {
  const [gifList, setGifList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isAccountActive, setAccountActive] = useState(false);

  const [walletAddress, connectWallet] = usePhantomWallet();

  const isGifListVisible = useMemo(() => gifList?.length > 0 && walletAddress, [walletAddress, gifList]);

  const getGifList = useCallback(async () => {
    try {
      setLoading(true);
      const gifListRes = await apiUtils.getGifList();

      if (!gifListRes) return;

      const filteredGifListRes = gifListRes?.filter((gif) => gif.gifLink);

      setGifList(filteredGifListRes);
      setAccountActive(true);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const createGifAccountHandle = useCallback(async () => {
    try {
      setLoading(true);
      await apiUtils.createGifAccount();
    } finally {
      setLoading(false);
    }

    await getGifList();
  }, [getGifList]);

  useEffect(() => {
    if (walletAddress) {
      (async function () {
        await getGifList();
      })();
    }
  }, [walletAddress, getGifList]);

  const handleConnectWallet = useCallback(async () => {
    try {
      setLoading(true);
      await connectWallet();
    } finally {
      setLoading(false);
    }
  }, [connectWallet]);

  const sendGif = useCallback(
    async (gifUrl) => {
      try {
        setLoading(true);
        await apiUtils.sendGif(gifUrl);
        await getGifList();
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    },
    [getGifList],
  );

  const onSubmit = useCallback(async (values) => sendGif(values.gifLink), [sendGif]);

  const renderAppAction = useCallback(() => {
    if (!walletAddress) {
      return (
        <button
          onClick={handleConnectWallet}
          className=" m-auto flex items-center justify-center rounded-xl border-2 border-black px-6 py-2 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring ring-purple-500/50 active:bg-purple-200/50 max-w-xs"
        >
          Connect Wallet
          {/* <span aria-hidden="true" className="ml-1.5" role="img">
            🔗
          </span> */}
        </button>
      );
    }

    if (!isAccountActive && !isLoading) {
      return (
        <button
          onClick={createGifAccountHandle}
          className=" m-auto flex items-center justify-center rounded-xl border-2 border-black px-6 py-2 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring ring-purple-500/50 active:bg-purple-200/50 max-w-xs"
        >
          Create account
          <span aria-hidden="true" className="ml-1.5" role="img">
            🔗
          </span>
        </button>
      );
    }

    return (
      <div className={cl('w-full max-w-2xl m-auto', { 'opacity-50 animate-pulse cursor-not-allowed': isLoading })}>
        <GifLinkForm onSubmit={onSubmit} />
      </div>
    );
  }, [walletAddress, isLoading, createGifAccountHandle, isAccountActive, onSubmit, handleConnectWallet]);

  return (
    <Fragment>
      <div className="min-h-screen p-4 md:p-12 flex flex-col">
        {isLoading && (
          <div className="fixed top-6 left-6 opacity-85 animate-in rounded-full fade-in shadow-xl flex justify-center items-center bg-white">
            <svg
              className="animate-spin -ml-1 h-8 w-8 text-purple-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}

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

        {isGifListVisible && (
          <section className="">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gifList.reverse().map((gifItem, index) => (
                  <div key={index}>
                    <ImagePreview item={gifItem} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </Fragment>
  );
}

export default App;
