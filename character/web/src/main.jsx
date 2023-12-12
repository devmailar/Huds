import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));

/**
 * @description - Just to test the UI without FiveM
 */
// window.postMessage({
//   visible: true,
//   data: [
//     {
//       full_name: 'leosk',
//       license: 'license:0673c17a25323f11be214fc75bdcae036ab5705f',
//       profile_pic: 'https://avatars.githubusercontent.com/u/83369389?v=4',
//       loadout: [],
//     },
//   ],
// });

/**
 * @description - This is the event listener that will be triggered by postMessage
 */
window.addEventListener('message', (event) => {
  const { visible, data } = event.data;

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
