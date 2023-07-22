import { createRoot } from 'react-dom/client';
import './index.css';
import Character from './character';

const root = createRoot(document.getElementById('root'));

// window.postMessage({
//   type: 'character',
//   visible: true,
//   data: [{ cash: 5000, bank: 10000, job: 'police' }],
// });

window.addEventListener('message', (event) => {
  const { type, visible, data } = event.data;

  const componentMap = {
    character: ([data]) => {
      console.log(data);

      return (
        <Character
          cash={data.cash}
          bank={data.bank}
          job={data.job}
        />
      );
    },
    scoreboard: ([data]) => {
      console.log(data);
    },
  };

  const component = componentMap[type];

  const isVisible = visible !== undefined ? visible : false;

  component && root.render(isVisible ? component(data) : null);
});
