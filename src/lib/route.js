import { login } from "./views/templateLogin.js";
import { wall } from "./views/templateWall.js";
import { post } from "./views/templatePost.js";


export const changeRoute = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  if (hash === '#/') {
    containerRoot.appendChild(login());
  } else if (hash === '#/login') {
    containerRoot.appendChild(login());
  } else if (hash === '#/wall') {
    containerRoot.appendChild(wall());
  } else if (hash === '#/post') {
    containerRoot.appendChild(post());
  }
}