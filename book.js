const firebaseConfig = {
  apiKey: "AIzaSyA3H94WI9xQRE_VsnevfKppY_X9zBeE0DQ",
  authDomain: "ruiamun.firebaseapp.com",
  databaseURL:
    "https://ruiamun-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ruiamun",
  storageBucket: "ruiamun.appspot.com",
  messagingSenderId: "481919973171",
  appId: "1:481919973171:web:c38fc6de69e21d2f887046",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

var contactFormDB = firebaseApp.database().ref("form");

document.getElementById("form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var enquiry = getElementVal("enquiry");

  saveMessages(name, email, enquiry);

  //   enable alert
  document.querySelector(".form__alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".form__alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("form").reset();
}

const saveMessages = (name, email, enquiry) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    enquiry: enquiry,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
