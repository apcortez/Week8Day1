function showAlert()
{
  alert("Benvenuto!");
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


function save() {
    let insertedUsername = document.getElementById("username").value;
    let insertedPassword = document.getElementById("password").value;
    localStorage.setItem('username', insertedUsername);
    localStorage.setItem('password', insertedPassword);

}


function hideLogin() {

    document.getElementById("loginformbtn").style.display = "none";
    document.getElementById("logoutbtn").style.display = "";
}

function logoutForm() {
    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');
    if (storedUsername != null && storedPassword != null)
    {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        let LogBtn = document.getElementById("loginformbtn");
        LogBtn.style.display = "";
        let LogoutBtn = document.getElementById("logoutbtn");
        LogoutBtn.style.display = "none";
        alert("Logout avvenuto con successo");
    } else
    {
        alert("Non trovato");
    }

}






