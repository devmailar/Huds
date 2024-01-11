import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));

/**
 * @description - Just to test the NUI without
 */
// window.postMessage({
//   visible: true,
//   data: [
//     {
//       name: 'leosk',
//       license: 'license:0673c17a25323f11be214fc75bdcae036ab5705f',
//       team: 'Coppers',
//       avatar: 'https://yt3.googleusercontent.com/ytc/AIf8zZT-5HuLrT_B0Obp5TGnKVxU2JXrE4Z7iTWOEz2T=s176-c-k-c0x00ffffff-no-rj',
//     },
//   ],
// });

/**
 * @description - This is the event listener that will be triggered by postMessage
 */
window.addEventListener('message', (event) => {
  const { visible, data, source } = event.data;

  if (source) {
    return;
  }

  if (visible) {
    root.render(
      <StrictMode>
        <App {...data[0]} />
      </StrictMode>
    );

    return;
  }

  root.render();
});
