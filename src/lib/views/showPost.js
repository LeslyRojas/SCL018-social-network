import { readData, deletePost, auth} from "../firebase.js";

const wallPost = (post) => {
  const postWall = document.getElementById('containerPost');
  postWall.innerHTML = '';

  const postFunction = (dataPost) => {
      const seePostHTML =
      `<section id='see-post' class='seePost'>
        <div id='${dataPost.element.id}' class=''></div>
         <div id='' class='myPost'>${dataPost.element.data.post}</div>
      </section>`

      let seeDelete = '';
      if (dataPost.element.data.userId === auth.currentUser.uid){
        seeDelete = 
        `<div>
          <button type='button' class='delete-btn' value='${dataPost.element.id}'>x</button>
         </div>`
      }

      postWall.innerHTML += seePostHTML + seeDelete;
    }

    post.forEach(postFunction);

  const deleteBtn = postWall.querySelectorAll('.delete-btn');
  deleteBtn.forEach((btn) =>{
    btn.addEventListener('click', ()=>{
      //alert('¿Estás seguro de borrar el post?');
      deletePost(btn.value);
    });
  });

}

export const showPost = () => {
    readData('publication', wallPost);
}