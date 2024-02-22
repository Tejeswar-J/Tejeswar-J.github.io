import React from 'react'
import Meta from "../components/Meta";
import Container from '../components/Container';

const ShippingPolicy = () => {
  return (
    <>
    <Meta title={"Shipping Policy"} />
    <Container class1='policy-wrapper py-5 home-wrapper-2'>
        {/* <div className='container-xxl'> */}
         <div className='row'>
           <div className='col-12'>
           <div className='policy'>Shipping policy</div>
           </div>
         </div>
        {/* </div> */}
    </Container> 
    </>
  );
};

export default ShippingPolicy;