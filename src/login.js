$(document).ready(function(){
    $("#login-btn").click(function(){
        let email = $("#email").val();
        let password = $("#password").val();

        console.log("Email:" + email);
        console.log("Password:" + password);

        if(email=='' || password==''){
            $('#password').after('<span class="error">Please Enter Email & Password</span>');
        }

        else if(email=='account@client.com' && password == 'account123'){
            $(location).attr('href','AccountsList.html');           
        }

        else if(email=='competency@hexaware.com' && password == 'competency123'){
            $(location).attr('href','competency.html');
        }

        else{
            $('#password').after('<span class="error">Incorrect Email or Password</span>');
        }
    });
});