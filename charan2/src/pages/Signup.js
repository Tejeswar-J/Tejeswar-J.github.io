import React from 'react';
import Meta from '../components/Meta';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux'; 
import { registerUser } from '../features/user/userSlice';
//import { toast } from 'react-toastify'; // Import toast from react-toastify

const signUpSchema = yup.object({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  email: yup.string().email("Email Should be valid").required("Email Address is Required"),
  mobile: yup.string().required("Mobile No is Required"),
  password: yup.string().required("Password is Required"),
});

const Signup = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile:"",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit:(values) => {  
      dispatch(registerUser(values));
      }
    });
  

  return (
    <>
      <Meta title={"Sign up"} />
      <Container class1='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Sign Up</h3>
              <form 
                action=''
                onSubmit={formik.handleSubmit} 
                className='d-flex flex-column gap-15'
              >
                {/* Your input fields */}
                <CustomInput 
                  type='text' 
                  name='firstName' 
                  placeholder='First Name' 
                  value={formik.values.firstName}
                  onChange={formik.handleChange("firstName")} 
                  onBlur={formik.handleBlur("firstName")}
                />
                {/* Error handling */}
                <div className='error'>
                  {formik.touched.firstName && formik.errors.firstName}
                </div>
                {/* Repeat for other input fields */}

                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                <button type='submit' style={{ borderRadius: '25px', padding: '5px 15px 5px 15px', backgroundColor: 'mediumseagreen', color: 'white', border: 'none' }}>Sign Up</button>
                     
                </div>
              </form>
            </div>
          </div>
        </div> 
      </Container>
    </>
  );
};

export default Signup;
