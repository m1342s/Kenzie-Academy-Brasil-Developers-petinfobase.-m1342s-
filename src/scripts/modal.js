
import { Postagens,listaUsuarios } from "./requests.js";







let usuarioPosts = JSON.parse(localStorage.getItem("posts"));






 export function criamodalVerPost(id) {
  let modalContainer = document.querySelector(".modalContainer");
  let fotoModalPost = document.createElement("img");
  let nomeModalPost = document.createElement("h4");
  let dataModalPost = document.createElement("p");
  let xFecha = document.createElement("button");
  xFecha.classList.add("xFecha");
  let tituloModalPost = document.createElement("p");
  let textoModalPost = document.createElement("p");
  const achaPost = usuarioPosts.find((element) =>{ 
   
   return element.id === id}) 
  fotoModalPost.src = achaPost.user.avatar;
  nomeModalPost.innerText = achaPost.user.username;
  dataModalPost.innerText=achaPost.createdAt
  tituloModalPost.innerText = achaPost.title
  textoModalPost.innerText = achaPost.content
  xFecha.innerText = "X";

modalContainer.append(fotoModalPost,nomeModalPost,dataModalPost,xFecha,tituloModalPost,textoModalPost)
console.log(modalContainer)
  return modalContainer
}

export function criaModal() {
  let modalContainer = document.querySelector(".modalContainer");
  let body= document.querySelector('body')
  let botoes = document.querySelectorAll(".acessarPub");
  botoes.forEach((botao) => {
    botao.addEventListener("click", (event) => { 
      modalContainer.innerHTML=''
      const contModal = criamodalVerPost(event.target.dataset.postId);


      
      body.appendChild(contModal);
      modalContainer.showModal();
      
      fechaModal()
      
    });
  });
}

export function fechaModal() {
  const modal = document.querySelector(".modalContainer");
  const botaoFecha = document.querySelector(".xFecha");

  botaoFecha.addEventListener("click", () => {
    modal.close();
  });
}

 export async function criaPostModal(id) {
  let modalContainerPost = document.querySelector(".modalContainerPost");
  let modalCriaNovoPost = document.createElement("p");
  let xFechaCriaPost = document.createElement("button");
  let labelCriaPostTitulo = document.createElement('label');
  let inputCriaPostTitulo = document.createElement('input');
  let labelCriaPostTexto = document.createElement("p");
  let inputCriaPostTexto = document.createElement("p");
  let publicar = document.createElement("button");
  let cancelar = document.createElement("button");

  modalCriaNovoPost.innerText = 'Criando novo post';
  xFechaCriaPost.innerText='X'
  labelCriaPostTitulo='Título do post'
  labelCriaPostTexto='Conteúdo do post'
  textoModalPost.innerText = achaPost.content
  publicar.innerText='Publicar'
  cancelar.innerText='Cancelar'

modalContainerPost.append(modalCriaNovoPost,xFechaCriaPost,labelCriaPostTitulo,inputCriaPostTitulo,labelCriaPostTexto,inputCriaPostTexto, publicar,cancelar)
console.log(modalContainerPost)
  return modalContainerPost
}