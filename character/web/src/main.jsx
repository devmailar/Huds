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
//     },
//   ],
// });

/**
 * @description - This is the event listener that will be triggered by postMessage
 */
window.addEventListener('message', (event) => {
  const { visible, data } = event.data;

  if (visible) {
    root.render(<App {...data[0]} />);
  } else {
    root.render();
  }
});
