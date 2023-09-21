// import { mensagem } from "./render.js";
const token = JSON.parse(localStorage.getItem("@PetInfo:token"))||""
const url = "http://localhost:3333";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};


const green = "#22966D";
const red = "#C96047";

export async function criaUsuario(rBody) {
  const nUsuario = await fetch(`${url}/users/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(rBody),
  }).then((response) => {
    if (response.ok) {
      window.location.replace("/");
      return response.json();
    } else {
      response.json().then((resError) => console.log(resError));
    }
  });
  return nUsuario;
}


export async function login(lBody) {
  const token = await fetch(`${url}/login`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(lBody),
  }).then((response) => {
    console.log(response);

    if (response.ok) {
      const tokUsuario = response.json().then(({ token }) => {
        ;
        localStorage.setItem("@PetInfo:token", JSON.stringify(token));
        window.location.replace("src/pages/dashboard.html");
        return token;
      });
      return tokUsuario;
    } else {
      response.json().then((response) => {
        // toast(response.message, vermelho);
      });
    }
  });
  return token;
}

export async function Postagens() {
  let resPosts=[]
  const posts = await fetch(`${url}/posts`, {
    method: "GET",
    headers: headers,
  }).then((response) => {
    
    if (response.ok) {
      // console.log(postJson);
    } else {
      console.log(response)
      // response.then(({ message }) => alert(message));
    }
    
    return response.json();

  })
  .then(res=>{
    resPosts=res
    let resPts=localStorage.setItem("posts",JSON.stringify(resPosts))
  return res});
  return resPosts;
}


export async function listaUsuarios(){
  const Usuarios = await fetch(`${url}/users/profile`, {
    method: "GET",
    headers: headers,
  }).then((response)=>{
  if (response.ok) {
  
  }
  return response.json()
})
.then((res)=>{
  let loginR=res
  let loginInfo=localStorage.setItem("login", JSON.stringify(loginR))
  
  
})

  
}
listaUsuarios()

export async function criaPost(postB){
const novoPost=await fetch(`${url}/posts/create`,{
  method: "POST",
  headers: headers,
  body: JSON.stringify(postB)
})
.then((response)=>{console.log(response)
  if (response.ok) { 
    const post=response.json().then((resJson)=>{
    alert('Tarefa criada com sucesso')
    return resJson
  })
  return post
} else{
  response.json().then(({message})=>{
    alert(message)
  })
  
}
})

return novoPost

}
criaPost()