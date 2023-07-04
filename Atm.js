// se crean los usuario
let user = {
    userName: ['Felipe', 'Eduardo','Angelica'],
    account: [1112233, 445566,778899],
    password: ['A1234', 'B5678', 'C9012'],
    balance: [30, 100, 400],
    inputUser: [], 
}
document.getElementById('menu-option').style.display = 'none';

// se llaman los datos para validacion
let checkBtn = document.querySelector('#check-btn');

// funcion para validar
checkBtn.addEventListener('click', function() {
    let inputAccount = document.querySelector('#floatingInput');
    const resAccount = inputAccount.value
    let inputPassword = document.querySelector('#floatingPassword');
    const resPassword = inputPassword.value

    if(resAccount != account || resPassword != password) {
    alert('La informacion ingresada no es valida')
    return;}
else {
    document.getElementById('menu-option').style.display = 'contents';
}

}
)
