import { logOut } from "../firebase.js";
import { showPost } from "./showPost.js";

export const wall = () =>{

  const containerWall = document.createElement('section');
  containerWall.className = 'view-wall';

  const postSection = document.createElement('section');

  
  const wallHTML =
   `<header class='header'><img class='logo-header' src='../lib/images/logo.png'> BEER UP</header>
    <button type='button' class='logOut-btn' id='logOut-btn'>Salir</button>
    <button class='postHere' id='post-btn'>Crea tu post aquí.</button>
    <section class='container-post' id='containerPost'>
    </section>
   `
  containerWall.innerHTML = wallHTML;
  containerWall.appendChild(postSection);
  showPost();

  const postHereBtn = containerWall.querySelector('.postHere');
  postHereBtn.addEventListener('click', ()=>{
    window.location.hash = '#/post';
  });

  const logOutBtn = containerWall.querySelector('.logOut-btn');
  logOutBtn.addEventListener('click', ()=>{
    logOut();
    window.location.hash = '#/login';
  })

   return containerWall;
}

