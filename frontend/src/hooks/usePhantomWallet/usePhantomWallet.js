import { useState, useCallback } from 'preact/hooks';

import * as commonUtils from 'utils/common';

const usePhantomWallet = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = useCallback(async () => {
    const response = await commonUtils.connectWallet();

    setWalletAddress(response.publicKey.toString());
  }, []);

  return [walletAddress, connectWallet];
};

export default usePhantomWallet;
