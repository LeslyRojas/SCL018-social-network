
import { loginWithGoogle } from '../firebase.js';

export const login = () => {
  const containerLogin = document.createElement('section');
  containerLogin.className = 'view-login';
  const loginHTML =   
    `<h1 class='title'>  BEER UP</h1>
    <h2 class='subtitle'>Descubre y/o publica tu cerveza artesanal.</h2>
    <img id='logo' class='logo' src='../lib/images/logo.png'>
    <button class='login-btn' id='login-btn'><img class='logo-google' src='../lib/images/logo_google.png' alt='logo_google'></a> INGRESA CON GOOGLE</button>
    `
  containerLogin.innerHTML = loginHTML;
  containerLogin.querySelector('.login-btn').addEventListener('click', () => {
    loginWithGoogle();
  });
  return containerLogin; 
};

