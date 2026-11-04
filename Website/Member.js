function validateForm() {
      let nama = document.forms["formPendaftaran"]["nama"].value;
      let email = document.forms["formPendaftaran"]["email"].value;
      if (nama == "" || email == "") {
        alert("Nama dan email harus diisi.");
        return false;
      }
      return true;
    }

let anu ="Belum Tersedia.";
function tombol(){
  return alert(anu);
}