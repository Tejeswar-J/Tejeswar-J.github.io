import React from 'react'
import Meta from "../components/Meta";
import Container from '../components/Container';

const TermAndConditions = () => {
  return (
    <>
    <Meta title={"Term And Conditions"} />
    <Container class1='policy-wrapper py-5 home-wrapper-2'>
        {/* <div className='container-xxl'> */}
         <div className='row'>
           <div className='col-12'>
           <div className='policy'>Terms & Conditions</div>
           </div>
         </div>
        {/* </div> */}
    </Container>  
    </>
  );
};

export default TermAndConditions;