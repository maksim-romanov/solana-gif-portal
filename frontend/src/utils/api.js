import { SystemProgram } from '@solana/web3.js';

import * as commonUtils from './common';

const baseAccount = commonUtils.getBaseAccount();

export const createGifAccount = async () => {
  try {
    const provider = commonUtils.getProvider();
    const program = await commonUtils.getProgram();

    console.log('createGifAccount');

    console.log('provider.wallet.publicKey', provider.wallet.publicKey.toString());

    await program.methods
      .startStuffOff()
      .accounts({
        baseAccount: baseAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([baseAccount])
      .rpc();

    console.log('Created a new BaseAccount w/ address:', baseAccount.publicKey.toString());
  } catch (error) {
    console.log('123 error: ', error);
  }
};

export const getGifList = async () => {
  const program = await commonUtils.getProgram();
  const account = await program.account.baseAccount.fetch(baseAccount.publicKey);

  const gifListRes = account.gifList;

  if (!gifListRes) return [];

  return gifListRes;
};

export const sendGif = async (gifUrl) => {
  if (gifUrl.length <= 0) return console.log('Empty input. Try again.');

  const provider = commonUtils.getProvider();
  const program = await commonUtils.getProgram();

  console.log('program', program);

  await program.methods
    .addGif(gifUrl)
    .accounts({
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
    })
    .rpc();

  console.log('success added gif');
};

export const voteGif = async (gifUrl) => {
  if (gifUrl.length <= 0) return console.log('Empty input. Try again.');

  const provider = commonUtils.getProvider();
  const program = await commonUtils.getProgram();

  try {
    await program.methods
      .voteGif(gifUrl)
      .accounts({
        baseAccount: baseAccount.publicKey,
        user: provider.wallet.publicKey,
      })
      .rpc();
  } catch (error) {
    console.log('error', error);
  }

  console.log('success voted gif');
};
