import React from 'react';
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import{ BiPhoneCall, BiInfoCircle} from 'react-icons/bi';
import Container from '../components/Container';
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from 'react-redux';
import { CreateQuery } from "../features/contact/contactSlice";

const contactSchema = yup.object({
  name: yup.string().required("Name is Required "),
  email: yup.string().nullable().email("Email should be valid").required("Email is required"),
  mobile: yup.string().default('').nullable().required("mobile Number is Required"),
  comment:  yup.string().default('').nullable().required("Comment is Required"),
});
const Contact = () => {
  const dispatch=useDispatch()
  const formik = useFormik ({
    initialValues: {
      name: '',
      mobile: '',
      email: '',
      comment: '',
    },
    validationSchema:contactSchema,
    onSubmit: values => {
      dispatch(CreateQuery({name:values.name,email:values.email,mobile:values.mobile,comment:values.comment}))
    },
  });
  return (
    <>
    <Meta title={"Contact Us"} />
    <Container class1='contact-wrapper py-5 home-wrapper-2'>
      {/* <div className="container-xxl"> */}
        <div className='row'>
          <div className='col-12'>
          <iframe 
           title="Google Maps - Kachiguda, Hyderabad, Telangana"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15229.971328833439!2d78.48848312957765!3d17.38812086267748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99ca28149c37%3A0xa3bdbe80138607cc!2sKachiguda%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1703881818661!5m2!1sen!2sin" 
           width="600" 
           height="450" 
           className="border-0 w-100" 
           allowFullScreen="" 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title mb-4'>Contact </h3>
                <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                  <div>
                    <input 
                     type="text" 
                     className='form-control' 
                     placeholder="Name"
                     name='name' 
                     onChange={formik.handleChange("name")}
                     onBlur={formik.handleBlur('name')}
                     value={formik.values.name}
                    />
                    <div className='errors'>
                      {
                        formik.touched.name && formik.errors.name
                      }
                    </div>
                    </div>  
                    <div>
                    <input 
                     type="email" 
                     className='form-control' 
                     placeholder='Email' 
                     name='email'
                     onChange={formik.handleChange("email")}
                     onBlur={formik.handleBlur('email')}
                     value={formik.values.email}
                    />
                    <div className='errors'>
                      {
                        formik.touched.email && formik.errors.email
                      }
                    </div>
                    </div>  
                    <div>
                    <input 
                     type="tel" 
                     className='form-control'  
                     placeholder='Mobile Number' 
                     name='mobile'
                     onChange={formik.handleChange("mobile")}
                     onBlur={formik.handleBlur('mobile')}
                     value={formik.values.mobile}
                    />
                    <div className='errors'>
                      {
                        formik.touched.mobile && formik.errors.mobile
                      }
                    </div>
                    </div>  
                    <div>
                    <textarea 
                     //name="" 
                     id=""  
                     className="w-100 form-control" 
                     cols="30" 
                     rows="4" 
                     placeholder='Comments'
                     name='comment'
                     onChange={formik.handleChange("comment")}
                     onBlur={formik.handleBlur('comment')}
                     value={formik.values.comment}
                    ></textarea>
                    <div className='errors'>
                      {
                        formik.touched.comment && formik.errors.comment
                      }
                    </div>
                    </div>
                      <div>
                      <button style={{ borderRadius: '25px', padding: '10px 30px 10px 30px', backgroundColor: 'mediumseagreen', color: 'white', border: 'none' }}>Submit</button>
                      </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Get in touch with us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className='fs-5' />
                      <address className='mb-0'>
                          H.no:1234, near main road,in india
                       </address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+91 1234567890">+91 1234567890</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className="fs-5" />
                      <a href='mailto:alexkumar123@gmail.com'>
                         alexkumar123@gmail.com
                      </a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                    <BiInfoCircle className="fs-5" />
                    <p className='mb-0'>Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </Container>
    </>
  );
};

export default Contact;