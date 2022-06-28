const validateEmail = () => {
  let email = document.getElementById("email").value;
  let Eout = document.getElementById("eout");
  if(email.trim().length == 0) {
    Eout.innerHTML = "Please Enter Email Address"
  }else{
    Eout.value = ""
  }
}

const validateFname = () => {
  let fname = document.getElementById("fname").value;
  let Eout = document.getElementById("fout");
  if(fname.trim().length == 0) {
    fout.innerHTML = "Please Enter First Name"
  }else{
    fout.value = ""
  }
}

const validateLname = () => {
  let lname = document.getElementById("lname").value;
  let lout = document.getElementById("lout");
  if(lname.trim().length == 0) {
    lout.innerHTML = "Please Enter Last Name"
  }else{
    lout.value = ""
  }
}






