function isAuthenticate() {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (userDetails?.password && userDetails?.email) {
      window.location.pathname = "/dashboard.html";
    }
  }
  
  let errorObject = {
    userName: "",
    userLastName: "",
    useremail: "",
    userpassword: "",
    confirmpassword: "",
  };
  
  function showMessage(errorObject) {
    for (let key in errorObject) {
      if (errorObject[key]) {
        document.getElementById("error").textContent = errorObject[key];
        return;
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
  
  function sameAs(value1, value2) {
    return value1 === value2;
  }
  function handleClick(event) {
    const userName = document.getElementById("userName");
    const userLastName = document.getElementById("userLastName");
    const useremail = document.getElementById("useremail");
    const userpassword = document.getElementById("userpassword");
    const confirmpassword = document.getElementById("confirmpassword");
    errorObject = {
      userName:
        userName.value.length > 5 ? "" : "User Name must be greater than 5",
      userLastName: "",
      useremail: useremail.value
        ? validateEmail(useremail.value)
          ? ""
          : "Please enter valid email"
        : "Email is Mandatory",
      userpassword: userpassword.value
        ? sameAs(userpassword.value, confirmpassword.value)
          ? ""
          : "Confirm Password and password should match"
        : "Password is mandatory",
    };
    if (errorObject.userName) {
      userName.className = "error";
    } else {
      userName.className = "";
    }
    if (errorObject.useremail) {
      useremail.className = "error";
    } else {
      useremail.className = "";
    }
    if (errorObject.userpassword) {
      userpassword.className = "error";
    } else {
      userpassword.className = "";
    }
    if (errorObject.confirmpassword) {
      confirmpassword.className = "error";
    } else {
      confirmpassword.className = "";
    }
    // console.log(validate());
    showMessage(errorObject);
    if (validate(errorObject)) {
      window.location.pathname = "/index.html";
    }
  }
  
  function validate(errors) {
    // if validation is success than want to return true else false
  
    return Object.keys(errors).every((key) => !errorObject[key]);
  }
  
  function handlChange() {
    showMessage("");
  }
  