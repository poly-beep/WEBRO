  function validateForm() {
    var name = document.getElementById("name").value;
    if (name == "") {
      alert("Nama harus diisi");
      return false;
    }
    return true;
  }

  function validateEmail() { 
    var email = document.getElementById("email").value; 
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if (!email.match(emailPattern)) { 
      alert("Email tidak valid"); 
      return false; 
    } 
    return true; 
  } 

  function validatePassword() { 
    var password = document.getElementById("password").value; if (password.length < 8) { 
    alert("Password harus minimal 8 karakter"); 
    return false; 
    } 
    return true; 
  } 

