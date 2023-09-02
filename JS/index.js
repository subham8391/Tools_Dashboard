function isAuthenticate() {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (userDetails?.password && userDetails?.email) {
      window.location.pathname = "/dashboard.html";
    }
  }
  
  function showMessage(message) {
    document.getElementById("error").textContent = message;
  }
  async function handleClick() {
    const email = document.getElementById("useremail")?.value;
    const password = document.getElementById("userpass")?.value;
    const isEmailValid = validateEmail(email);
    console.log(isEmailValid, "eisEmailValid");
  
    if (!isEmailValid) {
      showMessage("Please enter a valid email..");
      document.getElementById("useremail").value = "";
      document.getElementById("userpass").value = "";
      document.getElementById("useremail").style.borderColor = "red";
      return;
    } else {
      document.getElementById("useremail").style.borderColor = "black";
    }
    if (password.length < 6) {
      showMessage("Length of password should be 6");
      document.getElementById("userpass").value = "";
      document.getElementById("userpass").style.borderColor = "red";
      return;
    } else {
      document.getElementById("userpass").style.borderColor = "black";
    }
    if (password.length >= 6 && isEmailValid) {
      // we are using await and async together
      // await cannot be use alone , along with tha there should be async keyword in function
      // always as we know that fetch will return the promise
      try {
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: email == "test@gmail.com" ? "kminchelle" : "email",
            password: password,
          }),
        });
        console.log(response);
        const result = await response.json();
        if (response.status == 200) {
          localStorage.setItem(
            "userDetails",
            JSON.stringify({ email, password })
          );
          window.location.pathname = "/dashboard.html";
        } else {
          showMessage(result?.message);
        }
      } catch (error) {
        showMessage("Something went wrong. Please try again ");
      }
    }
  }
  
  function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
  
  function handlChange() {
    showMessage("");
  }
  
  // status
  