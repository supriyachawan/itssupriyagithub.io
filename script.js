
firebase.auth().onAuthStateChanged(function(user) {
    if(user){
        document.title = "PROFILE PAGE";

        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";

        var user = firebase.auth().currentUser;

        if (user != null) {
            var email_id = user.email;
            document.getElementById("user_email_from_database").value = email_id;   
        }
    }

    else{
        document.title = "Login Here"
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    }
});


function login(){
    var email_address = document.getElementById("email_field").value;
    var password = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(email_address, password).catch(function(error){
        console.log(error);

    });
    
    
}

function logout(){
    firebase.auth().signOut();
}