import {createRoot} from 'react-dom/client';
import Home from '../app/page';
import '../app/globals.css';
createRoot(document.getElementById('root')!).render(<Home/>);

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load',()=>navigator.serviceWorker.register(`${import.meta.env.BASE_URL}service-worker.js`).catch(()=>{}));
}
