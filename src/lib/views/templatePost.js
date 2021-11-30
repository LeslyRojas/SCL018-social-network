import { addData } from '../firebase.js';
import { onAuth } from '../firebase.js';

export const post = () => {

  const containerPost = document.createElement('section'); 
  const postHTML =  
  `<header class='header'><img class='logo-header' src='../lib/images/logo.png'> BEER UP</header>
    <section class='post'>
      <img src='../lib/images/close.png' class='close-post' >
      <textarea class='create-post' id='create-post' placeholder='Escribe aquí tu post...' maxlength='300'></textarea>
      <button class='create-post-btn' id='post-btn'>Publicar</button>
    </section>
  `
  containerPost.innerHTML = postHTML;

  const closeBtn = containerPost.querySelector('.close-post');
  closeBtn.addEventListener('click', ()=>{
    window.location.hash = '#/wall';
  })

  const postBtn = containerPost.querySelector('.create-post-btn');
  postBtn.addEventListener('click', () => {
    const description = containerPost.querySelector('#create-post').value;
    if (description === '') {
      alert('No puedes publicar post vacío');
    }else {
        addData(description)};
        window.location.hash = '#/wall';
      console.log(description)
   });
   return containerPost

  }
