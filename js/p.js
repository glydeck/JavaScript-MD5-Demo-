        //function to check password    
        function checkPswd() {
        var confirmPassword = "9f9a8e5d21e41f72dd05faa3a20d75c7";
        var password = document.getElementById("pswd").value;
        var hash = md5(password);
        if (hash == confirmPassword) {
            document.getElementById("md5").innerHTML =hash;            
            document.getElementById("a").innerHTML =
            "<h2>Put Special Content in p.js</h2>";
        }
        else{
            alert("Wrong Password");
        }
    }