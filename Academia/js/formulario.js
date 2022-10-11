const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const celular = document.getElementById('celular')
const telefone = document.getElementById('telefone')
const cpf = document.getElementById('cpf')
const rg = document.getElementById('rg')
const capital = document.getElementById('capital')
const local = document.getElementById('local')

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value
    const emailValue = email.value
    const celularValue = celular.value
    const telefoneValue = telefone.value
    const cpfValue = cpf.value
    const rgValue = rg.value
    const capitalValue = capital.value
    const localValue = local.value

    if(usernameValue== ""){
        setError(username,"O nome é obrigatório");
    }else{
        setSuccess(username);
    }

    if(emailValue== ""){
        setError(email,"O E-mail é obrigatório");
    }else{
        setSuccess(email);
    }

    if(celularValue== ""){
        setError(celular,"O número do celuler é obrigatório");
    }else{
        setSuccess(celular);
    }

    if(cpfValue== ""){
        setError(cpf,"O número do CPF é obrigatório");
    }else{
        setSuccess(cpf);
    }

    if(capitalValue== ""){
        setError(capital,"Informe o número a faixa do seu Capital");
    }else{
        setSuccess(capital);
    }

    if(localValue== ""){
        setError(local,"O local da Franquia é obrigatório");
    }else{
        setSuccess(local);
    }
/*
    const formControls = form.querySelectorAll('.form-control')

    const formValid = [... formControls].every((formControl)=>{
       return (formControl.className = "form-control success");
    });

    if(formValid){
        console.log("O formlário estpa Válido")
    }*/
}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function setError(input, messagem){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = messagem;
    formControl.className = "form-control error";
}