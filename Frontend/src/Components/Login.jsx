import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SignIn_Img'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom'

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/details")
                }
            }
        }

    }

    return (
        <>
            <div className="container mt-3" style={{backgroundColor:"#F5F5F7"}}>
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-5 p-3" style={{ width: "100%" }}>
                    <h3 className='text-center col-lg-8' style={{fontSize:"40px" }}>Sign IN</h3>
                        <Form >

                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Label style={{fontSize:"20px"}}>Email address</Form.Label>
                <Form.Control type="email" name="email" onChange={getdata} style={{fontSize:"20px"}}placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                <Form.Label style={{fontSize:"20px"}}>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" style={{fontSize:"20px"}}/>
              </Form.Group>
              <Button variant="primary" type="submit" className='col-lg-4' onClick={addData} style={{ backgroundColor: "#B04040", fontSize:"20px", marginLeft:
              "15%"
              }}>
                Submit
              </Button>
                        </Form>
                        <p className='mt-3' style={{fontSize:"20px"}}>Don't Have an Account? <span><NavLink to="/" style={{color:"#B04040"}}>SignUp</NavLink></span> </p>
                    </div>
                    <SIgn_img />
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login