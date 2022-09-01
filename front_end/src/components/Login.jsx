import React,{Component} from 'react'


class Login extends Component{
    
    render(){
        function login(){
            var email =
            document.querySelector("#emailaddress").value;
        var password =
            document.querySelector('#password').value;
        console.log(email)
        var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
        if (email == "" || !regEmail.test(email)) {
            alert("Please enter a valid e-mail address.");
            return;
        }
        else if (password == "") {
            alert("Please enter your password");
            return;
        }
        else if (password.length < 6) {
            alert("Password should be atleast 6 character long");
            return;
        }
        else {
            alert("User Logged In");
            window.location.href = "/";
        }

        }

        function register()
        {
            window.location.href = "/sign-up";
        }
        
        let rem = "";

        return(
            <div className="Login">
                <h3> Welcome to Login Page </h3> 
                <div className="text-center mt-5">
            <form style={{ maxWidth: "350px", margin: "auto" }} name="Regform">
                <img style={{ height: "72px" }} className="mt-4 mb-4 "
                    src="https://cdn1.vectorstock.com/i/1000x1000/74/40/education-open-book-icon-vector-10187440.jpg" />
                <h3 className="mb-3 font-weight-normal">Please Sign in</h3>
                <div className="mb-3">
                    <input required autoFocus type="email" id="emailaddress" placeholder="Email Address" className="form-control"></input>
                </div>
                <div>
                    <input required autoFocus type="password" id="password" placeholder="Password" className="form-control"></input>
                </div>
                <div>
                    <input className="me-2 mt-4" type="checkbox" ></input>
                    <label style={{ textAlign: "center" }}>
                        Remember me
                    </label>
                </div>
                <div className="mt-3"><button type="reset" className="btn btn-lg btn-primary w-100" onClick={login}>Sign
                    In</button></div>
                <div className="mt-4"><button type="submit" className="btn btn-lg btn-primary w-100"
                    onClick={register}>Register</button></div>
            </form>
        </div>

            </div>
        )
    }
}

export default Login;