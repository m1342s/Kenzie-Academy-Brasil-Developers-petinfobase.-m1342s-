import { Postagens,listaUsuarios } from "./requests.js";
import { criaModal, fechaModal } from "./modal.js";


let usuarioData= JSON.parse(localStorage.getItem("login"))||""

 export function Cabecalho(){
    let secaoUsuario=document.querySelector('.maxContainerUsuario')
    let divtituloFotoBotao=document.querySelector('.fotoTituloBotao')
    let titulo= document.createElement('h1')
    let foto=document.createElement('img')
    let botaoCria=document.createElement('button')

    titulo.innerText='PetInfo'
    foto.src=usuarioData.avatar
    botaoCria.innerText='Criar publicação'

    divtituloFotoBotao.append(titulo,foto,botaoCria)
    secaoUsuario.appendChild(divtituloFotoBotao)




}

export async function postsCriados(post) {
    const posts= document.querySelector(".todosPosts")

    const Pts= await Postagens()
    Pts.forEach(async element=>{
        const li=document.createElement('li')
        const fotoPost=document.createElement('img')
        const nomePost=document.createElement('h4')
        const data=document.createElement('p')
        const titulo=document.createElement('p')
        const texto=document.createElement('p')
        const editar=document.createElement('button')
        const excluir=document.createElement('button')
        const acessarPub=document.createElement('span')
        acessarPub.classList.add('acessarPub')
        acessarPub.dataset.postId= element.id

        fotoPost.src=element.user.avatar
        nomePost.innerText=element.user.username
        data.innerText= new Date('10,22')
        titulo.innerText= element.title
        texto.innerText=element.content
        editar.innerText='Editar'
        excluir.innerText='Excluir'
        acessarPub.innerText='Acessar publicação'
         

        li.append(fotoPost,nomePost,data,editar,excluir,titulo,texto,acessarPub)
        posts.appendChild(li)
        // const postUnico= await Postagens(element)
        // posts.appendChild(postUnico)
    })
    criaModal()
    
    

    return posts
}




async function criaPostModal(id) {
    
}