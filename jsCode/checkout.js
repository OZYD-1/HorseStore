const scriptURL = "https://script.google.com/macros/s/AKfycbww_ACZM936UzEyq8e0R0Rayz2KnPNE_vSupyCnIFqOCXtRlGoFfF5Soe81BMXRVQ/exec";
let form = document.getElementById("form_contact")

if(form) { form.addEventListener("submit" , (eo) => {
    eo.preventDefault();
    fetch(scriptURL , {
        method: "POST" ,
        body: new FormData(form),
    })
    .then((reponse) => {
        setTimeout(() => {
            localStorage.removeItem("cart")
            window.location.reload()
        },3000)
    })
    .catch((error) => console.error("error!" , error.message)
    )
}) }