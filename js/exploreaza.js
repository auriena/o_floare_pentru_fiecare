let orderList = 0;
let orders = 5;
let list = [];
let totalprice;

function increment(id, amount) {
  let count = document.getElementById("cart-count" + id);
  let sum = document.getElementById("cart-price" + id);
  sum.innerHTML = +sum.innerHTML + amount;
  count.innerHTML = +count.innerHTML + (amount > 0 ? 1 : -1);
  if (+count.innerHTML <= 0) {
    document.getElementById("cart-box" + id).style.display = "none";
    sum.innerHTML = 0;
    count.innerHTML = 0;
    orderList--;
  }
  if (orderList <= 0) {
    document.getElementById("cart-empty").style.display = "block";
  }
}

function addItem(id, amount) {
  let count = document.getElementById("cart-count" + id);
  let sum = document.getElementById("cart-price" + id);
  sum.innerHTML = +sum.innerHTML + amount;
  count.innerHTML = +count.innerHTML + (amount > 0 ? 1 : -1);

  document.getElementById("cart-box" + id).style.display = "flex";
  document.getElementById("cart-empty").style.display = "none";
  orderList++;
  list.push(id);
}

function openCart() {
  document.getElementById("pre-checkout-container").style.display = "block";
  totalprice = 0;
  for (let i = 1; i <= orders; i++) {
    if (!list.includes(i)) {
      document.getElementById("item" + i).style.display = "none";
    } else {
      const elem = document.getElementById("item" + i);
      elem.style.display = "flex";
      let price = +document.getElementById("cart-price" + i).innerHTML;
      document.getElementById("checkout-count" + i).innerHTML =
        document.getElementById("cart-count" + i).innerHTML;
      document.getElementById("checkout-price" + i).innerHTML = price;
      totalprice += price;
    }
    document.getElementById("total-price").innerHTML = totalprice;
  }
}
function closeCart() {
  document.getElementById("pre-checkout-container").style.display = "none";
}

//buy
const popup = document.getElementById("popup");

function buy() {
  for (let i = 1; i <= orders; i++) {
    document.getElementById("cart-box" + i).style.display = "none";
  }
  document.getElementById("cart-empty").style.display = "block";

  if (orderList > 0) {
    popup.innerHTML = "Comanda a fost predată cu succes!";
    popup.style.backgroundColor = "#333";
  } else {
    popup.innerHTML = "Error: Coșul este gol!";
    popup.style.backgroundColor = "#ff0000";
  }
  showPopup();
}

function confirmPurchase() {
  buy();
}

function showPopup() {
  popup.style.display = "block";
  setTimeout(() => {
    popup.classList.add("slide-out");
    setTimeout(() => {
      popup.style.display = "none";
      popup.classList.remove("slide-out");
    }, 500);
  }, 4000);
}

emailjs.init("Xmlq5JwSU1eYCqg-E");
function send() {
  if (document.getElementById("formular").checkValidity() == false) {
    document.getElementById("formular").reportValidity();
    return;
  }

  function itemVar() {
    let cartAmmount1 = +document.getElementById("cart-count1").innerHTML;
    let cartAmmount2 = +document.getElementById("cart-count2").innerHTML;
    let cartAmmount3 = +document.getElementById("cart-count3").innerHTML;
    let cartAmmount4 = +document.getElementById("cart-count4").innerHTML;
    let cartAmmount5 = +document.getElementById("cart-count5").innerHTML;

    return `${cartAmmount1 == 0 ? "" : "Petunii: 80lei x " + cartAmmount1}${cartAmmount2 == 0 ? "" : "\nCrizanteme: 100lei x " + cartAmmount2}${cartAmmount3 == 0 ? "" : "\nMușcate: 80lei x " + cartAmmount3}${cartAmmount4 == 0 ? "" : "\nGazanii: 70lei x " + cartAmmount4}${cartAmmount5 == 0 ? "" : "\nMușcate: 75lei x " + cartAmmount5}`;
  }

  var date = {
    pret: document.getElementById("total-price").innerHTML,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    city: document.getElementById("city").value,
    adress: document.getElementById("adress").value,
    comment: document.getElementById("comment").value,
    items: itemVar(),
  };

  emailjs.send("service_fbsn3p5", "template_kkua57k", date).then(
    function (raspuns) {
      alert("Comanda a fost transmisa cu succes");
      document.getElementById("formular").reset();
      closeCart();
    },
    function (error) {
      alert("Eroare la transmitere. Contactati prin telefon magazinul.");
    }
  );
}
