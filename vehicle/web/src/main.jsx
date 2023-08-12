import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));

// window.postMessage({
//   visible: true,
//   data: [
//     {
//       indicator: 2, // 0 reset, 1 left, 2 right
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
