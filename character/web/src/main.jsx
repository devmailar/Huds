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
//       team: 'Robbers',
//       avatar: 'https://img.freepik.com/premium-photo/pubg-character-pfp-4_844188-29.jpg',
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
