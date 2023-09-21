import { criaPost, login } from "./requests.js"

function fazLogin(){
    const inputs=document.querySelectorAll('.inputLogin')
    const botao= document.querySelector('.botaoLogin')
    const loginB={}
    let count=0

    botao.addEventListener('click',async(event)=>{
        event.preventDefault()
      inputs.forEach(input=>{
        if (input.value==='') {
            count++
        }
        loginB[input.name]=input.value
      })
      if (count!==0) { 
        alert('erro')
    }else{
        const token= await login(loginB)
       
        return token
        
    }
}
)}
fazLogin()

// async function addPost() {
//   const inputs=document.querySelectorAll('.inputCadastro')
//   const botao= document.querySelector('.botaoCadastro')
//   const loginBCad={}
  

//   botao.addEventListener('click',async(event)=>{
//       event.preventDefault()
//     inputs.forEach(async({name,value})=>{ 
//       loginBCad[name]=value
//         if (value==='') {
//       alert('por favor preencha os campos necessários')
//     } else{
     
      
//       const nUsuario=await criaUsuario(loginBCad)
      
//   }
     
//   console.log(loginBCad)        
//     })
  
// }

