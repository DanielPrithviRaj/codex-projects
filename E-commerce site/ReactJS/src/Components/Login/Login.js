import { useState } from "react";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


function Login() {


    const nav = useNavigate();
    // const navReg = useNavigate();
    // const navHome = useNavigate();

    const navtoReg = () => {
        nav('/Register')
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

//    const validate = (event) => {
//         event.preventDefault();                     // to prevent from reloading the page
//        //console.log("form is working")
//         if(username === "" || password === ""){
//             alert("Please enter the credentials");
//         }if(username === "admin" && password === "root"){
//             Swal.fire({
//                 title: "Login Successful!",
//                 text: "Welcome to our football boots store",
//                 icon: "success",
//                 confirmButtonText: "Ok",
//                 confirmButtonColor: "green"
//             }).then(() => {
//                 navHome('/Home');
//             });
//             // alert("Login succesful");
//         }else{
//             // alert("Incorrect credentials! Login failed");
//             Swal.fire({
//                 title: "Login Failed!",
//                 text: "Wrong kick X Use correct boots",
//                 icon: "error",
//                 confirmButtonText: "Try again",
//                 confirmButtonColor: "red"
//             }).then(() => {
//                 navLogin('/');
//                 setUsername("")
//                 setPassword("")
//             });
//         }
//      }

    const [formData, setFormData] = useState({username: "", password: ""});    //formData to collect the input values

    const handleChange = (event) =>{
        setFormData( prev => ({...prev, [event.target.name]: event.target.value}));    //func to handle the onChange in the input fields
    }  

    const handleValidate = async (event) => {
        event.preventDefault();

        try{
            const response = await axios.post("http://localhost:8080/ReactProj/", formData , {
                headers: {"Content-Type" : "application/x-www-form-urlencoded"}
            });
            
           if(response.data.status === "success"){
            Swal.fire({
                title: "Login Successful!",
                text: "Welcome to our football boots store",
                icon: "success",
                confirmButtonText: "Ok",
                confirmButtonColor: "green"
            }).then(() => {
                nav('/Home');
            });
           }else{
            Swal.fire({
                title: "Login Failed!",
                text: "Wrong kick X Use correct boots",
                icon: "error",
                confirmButtonText: "Try again",
                confirmButtonColor: "red"
            }).then(() => {
                nav('/');
                setUsername("")
                setPassword("")
            });
           }
        }catch(err){
            console.error(err);
        }
    }

 return(
    <div className="login-img">
    <header>
        <div className="header-lbox">
            <h2>E-commerce Football Shoes</h2>
        </div>
    </header>
    
    <section>
        <div className="layout">
             <div className="content-box">
        <div className="h2-cs">
            <h2>LOGIN</h2>
        </div>
        <br></br>
        
        <form onSubmit={handleValidate}>
     <div> 
        <div className="col-md-12 input-cs">
        <div><label htmlFor="username" className="label-gap form-label">Username</label></div>
        <div>
            <input className="input-box form-control" type="text" name="username" value={formData.username} 
            onChange={handleChange} placeholder="Enter your username" required></input>
        </div>
        </div>
        <br></br>
        <div className="col-md-12 input-cs">
        <div><label className="label-gap form-label" htmlFor="password">Password</label> </div>
        <div>
            <input type="password" className="input-box form-control" name="password" value={formData.password} 
            onChange={handleChange} placeholder="Enter your password" required></input>
        </div></div>
         <div>
            <p className="text-end"><button className="btn btn-link" onClick={navtoReg}>Forgot password?</button></p>
        </div>
        <div>
            <button type="submit" className="btn btn-success button-log">Login</button>
        </div>
        <br></br>
        <div>
            <p className="text-center">Not a member?<button className="btn btn-link" onClick={navtoReg}>Signup now</button></p>
        </div>
      </div>
        </form>
        </div>
     </div>
    </section>

    <footer>
          <div className="footer-lbox">
            <p>&copy; 2025 All rights reserved Prithviraj Enterprises.</p>  
          </div>  
   </footer>
</div>
 )
}

export default Login;
