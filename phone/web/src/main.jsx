import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));

// window.postMessage({
//   visible: true,
//   data: [
//     {
//       job: 'officer',
//     },
//   ],
// });

window.addEventListener('message', (event) => {
  const { visible, data } = event.data;

  if (visible) {
    root.render(<App data={data[0]} />);
  } else {
    root.render();
  }
});
