// console.log("Coucou");

const $ = document;

// Attendre que notre page soit chargée avant de faire quoi que ce soit

$.addEventListener("DOMContentLoaded", () => {
  console.log("Page Chargée");

  // Quand je clique sur mon bouton je veux afficher mon texte

  // Je dois sélectionner mon bouton, attendre un événement click puis déclencher une callback

  $.querySelector("#connect").addEventListener("click", () => {
    // Toggle permet de faire en sorte que si la class n'est pas présente on la rajoute, si elle est présente on l'enlève
    $.querySelector(".hidden").classList.toggle("display");
  });

  $.querySelector("#contactForm").addEventListener("submit", async (event) => {
    // Je veux empêcher le rafraichissment de la page
    event.preventDefault();
    // Je fais une requête axios
    const response = await axios.post("http://localhost:3000/send-email", {
      // Je construit mon body en allant chercher les contenus de mes inputs (leurs values)
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      message: $.querySelector("#message").value,
      subject: $.querySelector("#subject").value,
    });
    console.log(response.data);
    alert("Merci pour votre message");
  });
});
