
export const post = () => {

  const containerPost = document.createElement('section'); 
  containerPost.className = 'view-post';
  const postHTML =  
  `<header class="header"><img class="logo-header" src="../lib/images/logo.png">Beer Up</header>
    <section class="post">
      <img src="../lib/images/close.png" class="close-post">
      <div class="create-post"></div>
      <button class="create-post-btn">Publicar</button>
    </section>
  `
  containerPost.innerHTML = postHTML;
  return containerPost;
}