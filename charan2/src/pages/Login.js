import React from 'react';
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from 'react-redux'; 
import { loginUser } from '../features/user/userSlice';

const loginSchema = yup.object({
  email: yup.string().email("Email Should be valid").required("Email Address is Required"),
  password: yup.string().required("Password is Required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit:(values) => {  
      dispatch(loginUser(values));
      }
    });
  return (
    <>
    <Meta title={"Login"} />
    <Container class1='login-wrapper py-5 home-wrapper-2'>
     {/* <div className='container-xxl'> */}
     <div className='row'>
        <div className='col-12'>
            <div className='auth-card'>
                <h3 className='text-center mb-3'>Login</h3>
                <form action=''onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                  <CustomInput 
                    type='email' 
                    name='email' 
                    placeholder='Email'  
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    values={formik.values.email}
                  />
                  <div className='error'>
                    {formik.touched.email && formik.errors.email}
                    </div>
                  <CustomInput 
                    type='Password' 
                    name='password' 
                    placeholder='Password'  
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    values={formik.values.password}
                  />  
                  <div className='error'>
                    {formik.touched.password && formik.errors.password}
                    </div>             
                 <div>
                    <Link to="/forgot-password">Forgot Password?</Link>

                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                    <button type='Submit' style={{ borderRadius: '25px', padding: '5px 15px 5px 15px', backgroundColor: 'mediumseagreen', color: 'white', border: 'none' }}>Login</button>                     
                     <Link to='/signup'className='button signup' style={{borderRadius: '25px', padding: '5px 15px 5px 15px',backgroundColor: '#ffd700',border: 'none'}}>
                       SignUp
                     </Link>
                    </div>
                 </div>
                </form>
            </div>
         </div>
        </div>
      {/* </div>    */}
     </Container>
    </>
  );
};

export default Login;