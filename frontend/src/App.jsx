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
  // const onSubmit = (values) => {
  //   console.log('values', values);
  // };

  return (
    <div className="min-h p-12">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GIFS.map((gifUrl, index) => (
            <div key={index}>
              <ImagePreview item={{ url: gifUrl }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
