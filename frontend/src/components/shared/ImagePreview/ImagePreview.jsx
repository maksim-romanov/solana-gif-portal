import { useCallback, useMemo } from 'preact/hooks';

import * as apiUtils from 'utils/api';
import avatarGenerator from 'utils/avatar-generator';

import Likes from './Likes';

function ImagePreview({ item }) {
  const userAddress = useMemo(() => item.userAddress.toString(), [item]);
  const votesCount = useMemo(() => item.votes.length, [item]);

  const voteGif = useCallback(async () => apiUtils.voteGif(item.gifLink), [item]);

  const avatar = useMemo(() => avatarGenerator(userAddress), [userAddress]);

  return (
    <div className="h-full border-2 border-black rounded-xl p-2 py-0 flex flex-col z-10 bg-white shadow-[6px_6px_0_0_#000]">
      <div className="py-2 px-1 flex justify-between items-center">
        <img className="h-8 w-8 rounded-full border border-purple-800" src={avatar.base64} />

        {/* {avatar.svgElement} */}
        <div className="truncate pl-8">
          <span>{userAddress}</span>
        </div>
      </div>

      <img className="w-full h-full max-h-64 rounded-xl border border-stone-200" src={item.gifLink} />

      <div className="py-2 px-1 flex justify-between items-center space-x-2">
        <Likes value={votesCount} onChange={voteGif} />

        <button className="text-green-600 flex justify-between items-center">
          <span className="text-xs">
            {/* Donate <span className=" font-bold">0.05</span> SOL */}
            Donate
          </span>
        </button>
      </div>
    </div>
  );
}

export default ImagePreview;
