function validateName() {
    var name = document.getElementById("name").value; 
    var hurufDoang = /^[A-Za-z\s]+$/;
    
    if (name === "") { 
        alert("Nama harus diisi."); 
        return false; 
    } 
    if (!hurufDoang.test(name)) {
        alert("Nama hanya boleh berisi huruf.");
        return false;
    }
    return true;
}

function validateEmail() {
    var email = document.getElementById("email").value; 
    var pola = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    
    if (!email.match(pola)) { 
        alert("Email tidak valid."); 
        return false; 
    }
    else if (email === ""){
        alert("Email harus diisi."); 
        return false; 
    }
    return true;
}

function validateAge() {
    var ageInput = document.getElementById("age").value;
    var age = Number(ageInput); 

    if (ageInput === isNaN(age) || age < 1 || age > 100) { 
        alert("Umur harus diisi dengan angka 1 - 100."); 
        return false; 
    }
    if (ageInput === ""){
        alert("Umur harus diisi dengan angka 1 - 100."); 
        return false; 
    }
    return true;
}

function validateForm() {
    if (!validateName()) return false;
    if (!validateEmail()) return false;
    if (!validateAge()) return false;

    alert("Form berhasil disubmit!"); 
    return true;
}