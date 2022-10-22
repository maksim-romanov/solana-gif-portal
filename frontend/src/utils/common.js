import * as constants from 'constants';

import { AnchorProvider, Program, web3 } from '@project-serum/anchor';
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';

import KeyPair from './key-pair';

const network = clusterApiUrl(constants.NETWORK);
const opts = { preflightCommitment: 'processed' };
const programID = new PublicKey(constants.PROGRAM_KEY);

export const getProvider = () => {
  const connection = new Connection(network, opts.preflightCommitment);
  const provider = new AnchorProvider(connection, window.solana, opts);

  return provider;
};

export const connectWallet = async () => {
  const solanaProvider = window.solana;

  if (!solanaProvider) throw new Error('no solana connection');

  await solanaProvider.connect({ onlyIfTrusted: false }); // opens wallet to connect to

  if (!solanaProvider.isPhantom) throw new Error('no phnatom connection');

  return solanaProvider;
};

export const getBaseAccount = () => {
  const arr = Object.values(KeyPair._keypair.secretKey);
  const secret = new Uint8Array(arr);
  const baseAccount = web3.Keypair.fromSecretKey(secret);

  return baseAccount;
};

export const getProgram = async () => {
  const provider = getProvider();

  const idl = await Program.fetchIdl(programID, provider);

  return new Program(idl, programID, provider);
};

export function checkIsImage(url) {
  return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}
