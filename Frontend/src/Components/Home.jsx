import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { SignIn_Img } from './SignIn_Img';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Container from './Conainer';

export const Home = () => {

  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, phone, password } = inpval;

    if (name === "") {
      toast.error('Name field is required!', {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error('Email field is required!', {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error('Please enter a valid email address!', {
        position: "top-center",
      });
    } else if (phone === "") {
      toast.error('number field is required!', {
        position: "top-center",
      });
    }else if (phone.length != 11) {
      toast.error('phone number length must be equal to 11!', {
        position: "top-center",
      });
    }
     else if (password === "") {
      toast.error('Password field is required!', {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error('Password length must be greater than five!', {
        position: "top-center",
      });
    } else {
      console.log("Data added successfully");
      history("/login")
      localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

    }
  };

  return (
    <>
      <div className="container mt-4" style={{backgroundColor:"#F5F5F7"}}>
        <section className='d-flex justify-content-between' style={{marginLeft:"4%"}}>
          <div className="left_data mt-4 p-3" style={{ width: "100%" }}>
            <h3 className='text-center col-lg-8' style={{fontSize:"40px" }}>Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Label style={{fontSize:"20px"}}>Name</Form.Label>
                <Form.Control type="text" name="name" onChange={getdata} placeholder="Enter Name" style={{fontSize:"20px"}}/>
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Label style={{fontSize:"20px"}}>Email address</Form.Label>
                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" style={{fontSize:"20px"}} />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Label style={{fontSize:"20px"}}>Mobile Number</Form.Label>
                <Form.Control type="number" name="phone" onChange={getdata} placeholder="Enter Mobile Number" style={{fontSize:"20px"}} />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                <Form.Label style={{fontSize:"20px"}}>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" style={{fontSize:"20px"}}/>
              </Form.Group>
              <Button variant="primary" type="submit" className='col-lg-4' onClick={addData} style={{ backgroundColor: "#B04040", fontSize:"20px", marginLeft:"15%"}}>
                Submit
              </Button>
              
            </Form>
            <p className='mt-3' style={{fontSize:"20px"}}>
  Already Have an Account? <NavLink to="/login" style={{color:"#B04040"}}>SignIn</NavLink>
</p>

          </div>
          <SignIn_Img />
        </section>
      </div>
      <ToastContainer />
    </>
  );
};
