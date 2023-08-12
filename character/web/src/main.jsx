import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));

// window.postMessage({
//   visible: true,
//   data: [
//     {
//       cash: 0,
//       bank: 0,
//       job: 'N/A',
//     },
//   ],
// });

window.addEventListener('message', (event) => {
  const { visible, data } = event.data;

  if (visible) {
    const { cash, bank, job } = data[0];

    root.render(
      <App
        cash={cash}
        bank={bank}
        job={job}
      />
    );
  } else {
    root.render();
  }
});
