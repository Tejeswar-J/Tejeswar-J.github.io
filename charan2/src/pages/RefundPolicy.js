import React from 'react';
import Meta from "../components/Meta";
import Container from '../components/Container';
const RefundPolicy = () => {
  return (
    <>
    <Meta title={"Refund Policy"} />
    <Container class1='policy-wrapper py-5 home-wrapper-2'>
        {/* <div className='container-xxl'> */}
         <div className='row'>
           <div className='col-12'>
           <div className='policy'>Refund Policy</div>
           </div>
         </div>
        {/* </div> */}
    </Container> 
  </>
  );
};

export default RefundPolicy;