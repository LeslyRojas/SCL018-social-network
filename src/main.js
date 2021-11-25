
import { myFunction } from './lib/index.js';

import { changeRoute } from './lib/route.js';

myFunction();

window.addEventListener('hashchange', ()=>{
  changeRoute(window.location.hash)    
})


window.addEventListener('load', () =>{
  changeRoute(window.location.hash)
});