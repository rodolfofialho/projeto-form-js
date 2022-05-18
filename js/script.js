const form = document.getElementById('form')
const username = document.getElementById('username')
const email= document.getElementById('email')
const senha = document.getElementById('password')
const repetirSenha = document.getElementById('password-confirmation')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const senhaValue = senha.value;
    const repetirSenhaValue = repetirSenha.value;

    if(usernameValue === ''){
        setErrorFor(username, 'O nome de usuário é obrigatório');
    } else {
        setSuccessFor(username);
    }

    if(emailValue === '') {
        setErrorFor(email, 'O email é obrigatório')

    } else if(!checkEmail(emailValue)){
        setErrorFor(email, 'Por favor, insira um email válidos')

    }else{
        setSuccessFor(email)
    }

    if(senhaValue === ''){
        setErrorFor(senha, 'A senha é obrigatória.');

    } else if(senhaValue.length < 7) {
        setErrorFor(senha, 'A senha deve ter no minimo 7 caracteres.')
    } else {
        setSuccessFor(senha);
    }

    if(repetirSenhaValue === ''){
        setErrorFor(repetirSenha, 'A confirmação de senha é obrigatória.')
    } else if(repetirSenhaValue !== senhaValue){
        setErrorFor(repetirSenha, 'As senhas precisam ser iguais')

    }else {
        setSuccessFor(repetirSenha);
    }

    const formControl = form.querySelectorAll('.form-control');

    const formValid = [ ...formControl].every((formControl) => {
        return (formControl.className === 'form-control success');
    });

    if(formValid) {
        console.log('Form validado com sucesso!!')
    }
    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;

    formControl.className = 'form-control error';

}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}