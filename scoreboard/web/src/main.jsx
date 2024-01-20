import axios from 'axios';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));

export const Axios = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  timeout: 1000,
});

// window.postMessage({
//   visible: true,
//   heist_id: 3,
// });

window.addEventListener('message', async (event) => {
  const { visible, heist_id, source } = event.data;

  if (source) {
    return;
  }

  if (visible) {
    const { data } = await Axios.get(`heists/${heist_id}`);
    root.render(<App {...data} />);

    return;
  }

  root.render();
});
