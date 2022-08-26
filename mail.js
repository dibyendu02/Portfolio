const firebaseConfig = {
    apiKey: "AIzaSyCmZnB2EliyHulS_D5AjT8RL3_c8pyk8nE",
    authDomain: "portfolio-1117a.firebaseapp.com",
    databaseURL: "https://portfolio-1117a-default-rtdb.firebaseio.com",
    projectId: "portfolio-1117a",
    storageBucket: "portfolio-1117a.appspot.com",
    messagingSenderId: "180817790861",
    appId: "1:180817790861:web:d0047f49daa743d5e69fc4",
    measurementId: "G-H3HJYWH04K"
    };

    //initialize
    firebase.initializeApp(firebaseConfig);
    //reference database
    var contactFormDB = firebase.database().ref("contactForm");

    document.getElementById("contactForm").addEventListener("submit",submitForm);

    function submitForm(e){
        e.preventDefault();

        var name = getElementVal("Name");
        var emailid = getElementVal("Email");
        var messege = getElementVal("Messege");

        saveMesseges(name, emailid, messege);
    }
    const saveMesseges = (name, emailid, messege) => {
        var newContactForm = contactFormDB.push();

        newContactForm.set({
            name : name,
            emailid : emailid,
            messege : messege,
        });
    };

    const getElementVal = (id) => {
        return document.getElementById(id).value;
    };