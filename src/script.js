function clicar() {
  let result;
  document.getElementById("click");

  setTimeout(() => {
    let message = "HELLO WORLD";
    result = document.getElementById("result");
    result.innerHTML = message;
    document.getElementById("result").value = "";
    return false
}, 1500);}