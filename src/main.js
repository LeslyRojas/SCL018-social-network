import { changeRoute } from './lib/route.js';
import { onAuth } from './lib/firebase.js';

window.addEventListener('hashchange', ()=>{
  onAuth();
  changeRoute(window.location.hash);   
});

window.addEventListener('load', () =>{
  onAuth();
  changeRoute(window.location.hash);
});

