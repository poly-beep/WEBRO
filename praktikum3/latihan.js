let nama ="wawaokok Giniung ramadani";
function tombol(){
  return alert("Halo " + nama);
}

function greetUser(){ 
const name = prompt("Siapa nama Anda?"); 
if (name) { 
alert("Halo, " + name + "! Selamat datang website kami."); 
} else { 
alert("Error Tidak Valid."); 
} 
} 

function validateForm() {
      let nama = document.forms["formPendaftaran"]["nama"].value;
      let email = document.forms["formPendaftaran"]["email"].value;
      if (nama == "" || email == "") {
        alert("Nama dan email harus diisi.");
        return false;
      }
      return true;
    }
