import { criaUsuario } from "./requests.js";

export function Auth() {
    const tok=localStorage.getItem('@PetInfo:token')
    if (tok) {
        window.location.replace("src/pages/dashboard.html")
    } 
    else{
      window.location.replace("/")
    }
    
}

function Cadastrar(){
    const inputs=document.querySelectorAll('.inputCadastro')
    const botao= document.querySelector('.botaoCadastro')
    const loginBCad={}
    

    botao.addEventListener('click',async(event)=>{
        event.preventDefault()
      inputs.forEach(async({name,value})=>{ 
        loginBCad[name]=value
          if (value==='') {
        alert('por favor preencha os campos necessários')
      } else{
       
        
        const nUsuario=await criaUsuario(loginBCad)
        
    }
       
    console.log(loginBCad)        
      })
    //   if (inputVaz==='') {
    //     alert('por favor preencha os campos necessários')
    //   } else{
    //     const nUsuario=await criaUsuario(loginBCad)

    //     setTimeout(() => {
    //         window.location.replace('../../index.html')
    //       }, 2000);
    //   }
}
)}

Auth()
Cadastrar()
