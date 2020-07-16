// javaScript for Sign Up Page Validation

function validateSignup() {
  let name = document.getElementById("name").value;
  let userName = document.getElementById("userName").value;
  let email = document.getElementById("inputEmail");
  let password = document.getElementById("inputPassword4");
  let confirmPassword = document.getElementById("inputPassword5");
  let phoneNumber = document.getElementById("phoneNumber");
  let age = document.getElementById("inputAge").value;
  let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let passwordRegEx = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  let phoneNumberRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (name == "") {
    alert("Name is blank");
    return false;
  }

  if (userName == "") {
    alert("User Name field is blank");
    return false;
  }

  if (email.value == "") {
    alert("Email is blank");
    email.focus();
    return false;
  }

  if (phoneNumber.value == "") {
    alert("Phone number is blank");
    phoneNumber.focus();
    return false;
  }

  if (password.value == "") {
    alert("Password is blank");
    password.focus();
    return false;
  }

  if (age == "") {
    alert("Age is blank");
    password.focus();
    return false;
  }

  if (!emailRegEx.test(email.value)) {
    alert("Invalid Email Id");
    email.focus();
    return false;
  }

  if (!passwordRegEx.test(password.value)) {
    alert("Invalid Password");
    password.focus();
    return false;
  }

  if (!phoneNumberRegEx.test(phoneNumber.value)) {
    alert("Invalid Phone number");
    phoneNumber.focus();
    return false;
  }

  if (password.value != confirmPassword.value) {
    alert('"Password" and "Confirm password" not matching');
    confirmPassword.focus();
    return false;
  }
  
}

// Sign In page javaScript validation

function validateSignin() {
  console.log("Login page entered");
  let userName1 = document.getElementById("userName").value;
  let password1 = document.getElementById("loginPassword").value;
  let passwordRegEx = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (userName1 == "") {
    alert("User Name is blank");
    document.getElementById("userName").focus();
    return false;
  }


  if (password1 == "") {
    alert("Password is blank");
    document.getElementById("loginPassword").focus();
    return false;
  }

  if (!passwordRegEx.test(password1)) {
    alert("Invalid Password");
    document.getElementById("loginPassword").focus();
    return false;
  }
}

// javaScript for forgot password page

function validateForgot() {
  let email1 = document.getElementById("forgotEmail").value;
  let emailRegEx1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  document.getElementById("notify").innerText = "";

  if (email1 == "") {
    alert("Email ID field is blank");
    document.getElementById("forgotEmail").focus();
    return false;
  } else if (!emailRegEx1.test(email1)) {
    alert("Invalid Email ID");
    document.getElementById("forgotEmail").focus();
    return false;
  } else {
    document.getElementById("notify").innerText = "Email Sent";
  }
}

// javaScript program for password strength notification

var m_strUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var m_strLowerCase = "abcdefghijklmnopqrstuvwxyz";
var m_strNumber = "0123456789";
var m_strCharacters = "!@#$%^&*?_~";

document
  .getElementById("inputPassword4")
  .addEventListener("keyup", function () {
    let pass = document.getElementById("inputPassword4").value;
    let score = checkPassword(pass);

    if (score > 80) {
      document.getElementById("messages").innerText = "Strong";
      document.getElementById("pwd-container").style.backgroundColor = "green";
    } else if (score > 60) {
      document.getElementById("messages").innerText = "Medium";
      document.getElementById("pwd-container").style.backgroundColor = "orange";
    } else if (score >= 30) {
      document.getElementById("messages").innerText = "Poor";
      document.getElementById("pwd-container").style.backgroundColor = "red";
    }
  });

//   start code for password validation count

function checkPassword(strPassword) {
  // Reset combination count
  var nScore = 0;

  // Password length 8 or more
  if (strPassword.length > 7) {
    nScore += 25;
  }

  // Letters
  var nUpperCount = countContain(strPassword, m_strUpperCase);
  var nLowerCount = countContain(strPassword, m_strLowerCase);
  var nLowerUpperCount = nUpperCount + nLowerCount;
  // -- Letters are all lower case
  if (nUpperCount == 0 && nLowerCount != 0) {
    nScore += 10;
  }
  // -- Letters are upper case and lower case
  else if (nUpperCount != 0 && nLowerCount != 0) {
    nScore += 20;
  }

  // Numbers
  var nNumberCount = countContain(strPassword, m_strNumber);
  // -- 1 number
  if (nNumberCount == 1) {
    nScore += 10;
  }
  // -- 3 or more numbers
  if (nNumberCount >= 3) {
    nScore += 20;
  }

  // Characters
  var nCharacterCount = countContain(strPassword, m_strCharacters);
  // -- 1 character
  if (nCharacterCount == 1) {
    nScore += 10;
  }
  // -- More than 1 character
  if (nCharacterCount > 1) {
    nScore += 25;
  }

  // Bonus
  // -- Letters and numbers
  if (nNumberCount != 0 && nLowerUpperCount != 0) {
    nScore += 2;
  }
  // -- Letters, numbers, and characters
  if (nNumberCount != 0 && nLowerUpperCount != 0 && nCharacterCount != 0) {
    nScore += 3;
  }
  // -- Mixed case letters, numbers, and characters
  if (
    nNumberCount != 0 &&
    nUpperCount != 0 &&
    nLowerCount != 0 &&
    nCharacterCount != 0
  ) {
    nScore += 5;
  }
  console.log(nScore);
  return nScore;
}

// Checks a string for a list of characters
function countContain(strPassword, strCheck) {
  // Declare variables
  var nCount = 0;

  for (i = 0; i < strPassword.length; i++) {
    // console.log(strPassword.charAt(i));
    // console.log(strCheck.indexOf(strPassword.charAt(i)));
    if (strCheck.indexOf(strPassword.charAt(i)) > -1) {
      nCount++;
    }
  }
  // console.log(nCount);
  return nCount;
}
// End of the password verification and count coding

//For Language translate in the header file
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element"
  );
}




