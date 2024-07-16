if (!localStorage.getItem("balance")) {
  localStorage.setItem("balance", "100");
}

if (!localStorage.getItem("apmPin")) {
  localStorage.setItem("apmPin", "1234");
}

function apmPinChanger(data) {
  localStorage.setItem("apmPin", data);
}

function balanceChanger(data) {
  data = data.toString();
  localStorage.setItem("balance", data);
}

let successBool = false;
function playAudio() {
  var audio = document.querySelector("audio");
  audio.play();
}

function success() {
  if (successBool) {
    var audio = document.querySelector(".success");
    audio.play();
  } else {
    var audio = document.querySelector(".failed");
    audio.play();
  }
}

document.addEventListener("click", playAudio);
document.addEventListener("keypress", playAudio);

function deposit() {
  const cash = document.getElementById("cash");
  const confirmCash = document.getElementById("confirmCash");
  let balance = parseInt(localStorage.getItem("balance"));
  console.log(balance);

  if (cash.value === confirmCash.value) {
    balance = balance + parseInt(cash.value);
    console.log(balance);
    balanceChanger(balance);
    successBool = true;
    success();
    cash.value = "";
    confirmCash.value = "";
    alert("Amount Deposited Successfully");
    window.location.href = "index.html";
  } else {
    cash.value = "";
    confirmCash.value = "";
    successBool = false;
    success();
  }
}

function pinChange() {
  const newPin = document.getElementById("newPin");
  const confirmPin = document.getElementById("confirmPin");
  const oldPin = document.getElementById("oldPin");

  if (parseInt(oldPin.value) === parseInt(localStorage.getItem("apmPin"))) {
    if (newPin.value === confirmPin.value) {
      apmPinChanger(newPin.value);
      successBool = true;
      success();
      oldPin.value = "";
      newPin.value = "";
      confirmPin.value = "";
      alert("Pin Changed Successfully");
      window.location.href = "index.html";
    } else {
      oldPin.value = "";
      newPin.value = "";
      confirmPin.value = "";
      successBool = false;
      success();
      alert("Pin Mismatched, Pin Change failed");
      window.location.href = "index.html";
    }
  } else {
    alert("Old Pin Doesn't Match. Please Try Again");
  }
}

function withDraw() {
  const amount = document.getElementById("Amount");
  const pin = document.getElementById("pin");

  if (parseInt(pin.value) === parseInt(localStorage.getItem("apmPin"))) {
    if (parseInt(amount.value) <= parseInt(localStorage.getItem("balance"))) {
      balanceChanger(
        parseInt(localStorage.getItem("balance")) - parseInt(amount.value)
      );
      alert(
        `Withdrawn Successful, remaining balance: ${parseInt(
          localStorage.getItem("balance")
        )}`
      );
      successBool = true;
      success();
      amount.value = "";
      pin.value = "";
      window.location.href = "index.html";
    } else {
      amount.value = "";
      pin.value = "";
      successBool = false;
      success();
      alert(`Your Account is low on balance`);
      window.location.href = "index.html";
    }
  } else {
    amount.value = "";
    pin.value = "";
    successBool = false;
    success();
    alert("Wrong Pin Try Again");
    window.location.href = "index.html";
  }
}

function balEnquiry() {
  const pin = document.getElementById("pinData");
  const balanceDisplay = document.getElementById("balanceAmountDispaly");
  const balDisp = document.getElementById("balanceDisplay");
  if (pin.value === localStorage.getItem("apmPin")) {
    balDisp.classList.remove("hidden");
    balanceDisplay.innerText = localStorage.getItem("balance");
  } else {
    alert("Wrong Pin Try Again!");
  }
}
