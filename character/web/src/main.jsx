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
//       full_name: 'John Doe',
//       license: 'license:0673c17a25323f11be214fc75bdcae036ab5705f',
//       profile_pic: 'https://i.seadn.io/gcs/files/3085b3fc65f00b28699b43efb4434eec.png?auto=format&dpr=1&w=1000',
//       cash: 1900,
//       bank: 20000,
//       loadout: [
//         {
//           id: 'WEAPON_PISTOL',
//           img: 'https://i.imgur.com/n4SV2Sv.png',
//           type: 'WEAPON',
//           label: 'Pistol',
//           amount: 80,
//           weight: 10,
//         },
//         {
//           id: 'WEAPON_COMBATPISTOL',
//           img: 'https://i.imgur.com/BTAE4QQ.png',
//           type: 'WEAPON',
//           label: 'Combat Pistol',
//           amount: 40,
//           weight: 10,
//         },
//       ],
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
