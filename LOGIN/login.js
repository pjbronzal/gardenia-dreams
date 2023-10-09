function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email == "" || password == "") {
    alert("Please enter a valid email or password.");
    location.reload();
  } else {
    let login_arr = [];
    login_arr.push({ email: email });
    sessionStorage.setItem("login", JSON.stringify(login_arr));
    alert("You have successfully logged in.");
    location.replace("/products/");
  }
}
