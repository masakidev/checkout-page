const $body = document.querySelector('body');
const $priceVintageBackbag = document.getElementById('vintage__backbag-price');
const $amountVintageBackbag = document.getElementById('vintage__backbag-amount');
const $removeVintageBackbag = document.getElementById('vintage__backbag-remove');
const $addVintageBackbag = document.getElementById('vintage__backbag-add');
const $priceLeviShoes = document.getElementById('levi__shoes-price');
const $amountLeviShoes = document.getElementById('levi__shoes-amount');
const $removeLeviShoes = document.getElementById('levi__shoes-remove');
const $addLeviShoes = document.getElementById('levi__shoes-add');
const $total = document.getElementById('product__total');
const $btnContinue = document.getElementById('btn__continue');

let vintageBackbag = 54.99;
let amountVintageBackbag = 0;
let leviShoes = 74.99;
let amountLeviShoes = 0;
let shipping = 19.00;
let subtotal = 0;

$removeVintageBackbag.addEventListener('click', () => {
  subtotal -= vintageBackbag;
  amountVintageBackbag -= 1;
  verifyTotal();
  verifyAmountVintageBackbag();
  addToTotal();
  $amountVintageBackbag.innerText = amountVintageBackbag;
})

$addVintageBackbag.addEventListener('click', () => {
  subtotal += vintageBackbag;
  amountVintageBackbag += 1;
  verifyTotal();
  verifyAmountVintageBackbag();
  addToTotal();
  $amountVintageBackbag.innerText = amountVintageBackbag;
})

$removeLeviShoes.addEventListener('click', () => {
  subtotal -= leviShoes;
  amountLeviShoes -= 1;
  verifyTotal();
  verifyAmountLeviShoes();
  addToTotal();
  $amountLeviShoes.innerText = amountLeviShoes;
})

$addLeviShoes.addEventListener('click', () => {
  subtotal += leviShoes;
  amountLeviShoes += 1;
  verifyTotal();
  verifyAmountLeviShoes();
  addToTotal();
  $amountLeviShoes.innerText = amountLeviShoes;
})

function verifyTotal() {
  if (subtotal < 0) {
    subtotal = 0;
  }
}

function verifyAmountVintageBackbag() {
  if (amountVintageBackbag < 0) {
    amountVintageBackbag = 0;
  } 
}

function verifyAmountLeviShoes() {
  if (amountLeviShoes < 0) {
    amountLeviShoes = 0;
  } 
}

function addToTotal() {
  let total = subtotal + shipping;
  if (total <= shipping) {
    total = 0;
  }
  $total.innerText = `$${total.toFixed(2)}`;
}

$btnContinue.addEventListener('click', () => {
  $body.innerHTML = `
            <div class="user__information-thanks">
              <img src="../images/flame-sending-message.png"></img>
              <h1>
                Congratulations.<br>
                You order is accepted.
              </h1>
              <p>
                We will send a notification when the goods are shipped.
              </p>
              <div class="btn__container" type="submit" onclick="location.reload()">
                <button class="btn" id="btn__back">
                  Back
                </button>
              </div>
            </div>
        `
})