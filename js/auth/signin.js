const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSigin = document.getElementById("btnSignin");

btnSigin.addEventListener("click", checkCredentials);

function checkCredentials() {
    //Ici, il faudra appeler l'API pour vérifier les identifiants (credentials en BDD)

    if (mailInput.value == "test@mail.com" && passwordInput.value == "123") {

        // Il faudra récupérer le vrai token
        const token = "<sdinrwifdnwldsnvwldrknvdfnvkdwrnfv"; //Token à récupérer depuis l'API
        setToken(token);
        //placer ce token en cookie

        setCookie("role", "admin", 7);
        window.location.replace("/"); //Redirige vers la page d'accueil
    } else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}