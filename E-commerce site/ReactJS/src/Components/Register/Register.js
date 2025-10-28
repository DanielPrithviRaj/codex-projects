import { useState } from "react";
import "./Register.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Register() {

    const nav = useNavigate();

     const navtoLogin = () => {
        nav('/')
    } 

    const [RegFormData , setRegFormData] = useState({fullname:"", username:"", email:"", phone_number:"", password:"", confirm_password:"", 
        address:"", address2:"",  city:"", state:"", zipcode:""
    })

    const handleRegFormData = (event) => {
        setRegFormData(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const datatoregister = async (event) => {
        event.preventDefault();

        try{
            const response = await axios.post("http://localhost:8080/ReactProj/Register", RegFormData , 
                { headers: {"Content-type" : "application/x-www-form-urlencoded" }
        });
        if(response.data.status === "success"){
                    Swal.fire({
                        title: "Login Successful!",
                        text: "Welcome to our football boots store",
                        icon: "success",
                        confirmButtonText: "Ok",
                        confirmButtonColor: "green"
                    }).then(() => {
                        nav('/');
                    });
                   }else{
                    Swal.fire({
                        title: "Login Failed!",
                        text: "Wrong kick X Use correct boots",
                        icon: "error",
                        confirmButtonText: "Try again",
                        confirmButtonColor: "red"
                    }).then(() => {
                        nav('/Register');
                    });
                   }
        }catch(err){
           console.error(err);
        }                
    }

    return(
 <div className="login-img">
    <header>
        <div className="header-box">
            <h2>E-commerce Football Shoes</h2>
        </div>
    </header>
   <section>       
    <div className="container-box">
        <h2 className="h2-cs">REGISTRATION</h2>
        <br></br>

        <form className="row g-3 gap-box" onSubmit={datatoregister}>
                <div className="col-md-6">
                     <label htmlFor="fullname" className="form-label label-cs">Full name</label>
                     <input type="text" className="form-control" placeholder="Full name" name="fullname" aria-label="Full name" value={RegFormData.fullname} onChange={handleRegFormData} required></input>
                </div>
                <div className="col-md-6">
                     <label htmlFor="username" class="form-label label-cs">Username</label>
                     <input type="text" className="form-control" placeholder="Username" name="username" value={RegFormData.username} onChange={handleRegFormData} aria-label="username"></input>
                </div>
                <div class="col-md-6">
                     <label htmlFor="email" className="form-label label-cs">Email</label>
                     <input type="text" className="form-control" placeholder="Email" name="email" value={RegFormData.email} onChange={handleRegFormData} aria-label="Email"></input>
                </div>
                <div class="col-md-6">
                     <label htmlFor="phone" className="form-label label-cs">Phone number</label>
                     <input type="text" className="form-control" placeholder="Phone number" name="phone_number" value={RegFormData.phone_number} onChange={handleRegFormData} aria-label="Phone"></input>
                </div>
                <div class="col-md-6">
                     <label htmlFor="password" className="form-label label-cs">Password</label>
                     <input type="password" className="form-control" placeholder="Password" name="password" value={RegFormData.password} onChange={handleRegFormData} aria-label="Password"></input>
                </div>
                <div class="col-md-6">
                     <label htmlFor="confirmpassword" className="form-label label-cs">Confirm Password</label>
                     <input type="password" className="form-control" placeholder="Confirm Password" name="confirm_password" value={RegFormData.confirm_password} onChange={handleRegFormData} aria-label="Confirm Password"></input>
                </div>
                <div className="col-md-12">
                    <label htmlFor="address" className="form-label label-cs">Address</label>
                    <input type="text" className="form-control" placeholder="Address" name="address" onChange={handleRegFormData} value={RegFormData.address} aria-label="Address"></input>
                </div>
                <div className="col-md-12">
                    <label htmlFor="address2" className="form-label label-cs">Address 2</label>
                    <input type="text" className="form-control" placeholder="Address 2" name="address2" value={RegFormData.address2} onChange={handleRegFormData} aria-label="Address 2"></input>
                </div>
                <div class="col-md-6">
                     <label htmlFor="city" className="form-label label-cs">City</label>
                     <input type="text" className="form-control" placeholder="City" name="city" value={RegFormData.city} onChange={handleRegFormData} aria-label="City"></input>
                </div>
                <div className="col-md-4">
                    <label htmlFor="state" className="form-label label-cs">State</label>
                    <select id="selectstate" className="form-select" name="state" value={RegFormData.state} onChange={handleRegFormData}>
                    <option>-select-</option>
                    <option>Tamil Nadu</option>
                    <option>Kerala</option>
                    <option>Andra pradaesh</option>
                    <option>Punjab</option>
                    <option>Bihar</option>
                    </select>
                </div>
                <div class="col-md-2">
                     <label htmlFor="zipcode" className="form-label label-cs">Zipcode</label>
                     <input type="text" className="form-control" placeholder="Zipcode" name="zipcode" value={RegFormData.zipcode} onChange={handleRegFormData} aria-label="Zipcode"></input>
                </div>
                <div class="col-2 button-reg button-gap">
                    <button type="submit" className="btn btn-success">Register</button>
                </div>
                <div className="text-center">
                    <p>Already a memeber?<button className="btn btn-link" onClick={navtoLogin}>Signin now</button></p>
                </div>
        </form>
    </div>
  </section>  
    <footer>
          <div className="footer-box">
            <p>&copy; 2025 All rights reserved Prithviraj Enterprises.</p>  
          </div>  
    </footer>

 </div>
 )

}
export default Register;
