import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));

window.postMessage({
  visible: false,
  data: {
    job: '',
  },
});

window.addEventListener('message', (event) => {
  const { visible, data } = event.data;

  if (visible) {
    root.render(<App data={data} />);
  } else {
    root.render();
  }
});
