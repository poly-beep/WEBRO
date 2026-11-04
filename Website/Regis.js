function validateForm() {
      let nama = document.forms["formRegistrasi"]["nama"].value;
      let ID = document.forms["formRegistrasi"]["ID"].value;
      let Alamat = document.forms["formRegistrasi"]["Alamat"].value;
      if (nama == "" || ID == "" || Alamat == "") {
        alert("Nama dan email harus diisi.");
        return false;
      }
      return true;
    }