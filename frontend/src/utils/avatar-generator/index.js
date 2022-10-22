import generateAvatar from 'github-like-avatar-generator';

function createAvatarGenerator() {
  let pixelsStore = {};

  return (hash) => {
    const pixels = pixelsStore[hash];

    const avatar = generateAvatar({ blocks: 6, width: 50, fromPixels: pixels });

    if (!pixels) {
      pixelsStore = { [hash]: avatar.pixels, ...pixelsStore };
    }

    return avatar;
  };
}

export default createAvatarGenerator();
