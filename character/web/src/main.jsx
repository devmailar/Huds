import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));

window.postMessage({
  visible: true,
  data: [
    {
      full_name: 'malkom dwane',
      license: 'license:0673c17a25323f11be214fc75bdcae036ab5705f',
      cash: 1900,
      bank: 190000,
    },
  ],
});

window.addEventListener('message', (event) => {
  const { visible, data } = event.data;

  if (visible) {
    const { full_name, license, cash, bank } = data[0];

    root.render(
      <App
        full_name={full_name}
        license={license}
        cash={cash}
        bank={bank}
      />
    );
  } else {
    root.render();
  }
});
