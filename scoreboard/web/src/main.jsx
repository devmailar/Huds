import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));

// window.postMessage({
//   visible: true,
//   data: [
//     {
//       id: 2,
//       name: 'Mailar',
//       job: 'Engineer',
//     },
//     {
//       id: 3,
//       name: 'John',
//       job: 'Designer',
//     },
//   ],
// });

window.addEventListener('message', (event) => {
  const { visible, data } = event.data;

  if (visible) {
    root.render(<App data={data} />);
  } else {
    root.render();
  }
});
