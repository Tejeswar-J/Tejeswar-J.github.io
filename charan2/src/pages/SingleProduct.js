import React, { useState } from 'react';
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import ReactImageZoom from 'react-image-zoom';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from "../components/Container";
import { Link } from "react-router-dom";
import watch from '../images/watch.jpg';

const SingleProduct = () => {  
  const props = { 
     width: 400, 
     height: 600, 
     zoomWidth: 600,
     img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-acros-190819.jpg&fm=jpg",
    };  
    const [orderedProduct] = useState(true);
    //const  setorderedProduct = useState(true);
    const copyToClipboard = (text) =>{
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const closeModal = () => {};
  return (
    <>
      <Meta title={"Product Name"} />
      <Container class1='main-product-wrapper py-5 home-wrapper-2'>
        {/* <div className='container-xxl'> */}
            <div className='row'>
                <div className='col-6'>
                  <div className='main-product-image'>
                    <div>
                      <ReactImageZoom {...props} />
                    </div>
                  </div>
                  <div className='other-product-images d-flex flex-wrap gap-15'>
                        <div>
                          <img 
                            src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-acros-190819.jpg&fm=jpg"  
                            className="img-fluid" 
                            alt="" 
                          />
                        </div>
                        <div>
                        <img 
                          src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-acros-190819.jpg&fm=jpg" 
                          className="img-fluid" 
                          alt="" 
                        />
                        </div>
                        <div>
                        <img 
                          src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-acros-190819.jpg&fm=jpg" 
                          className="img-fluid" 
                          alt="" 
                        />
                        </div>
                        <div>
                        <img 
                          src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-acros-190819.jpg&fm=jpg" 
                          className="img-fluid"  
                          alt="" 
                        />
                        </div>
                  </div>
                </div>
                 <div className='col-6'>
                  <div className='main-product-details'>
                    <div className='border-bottom'>
                    <h3 className='title'>
                      headset its very nice and good ears mingalam
                      </h3>
                    </div>
                    <div className='border-bottom py-3'>
                      <p className='price'>$ 100</p>
                      <div className='d-flex align-items-center gap-10'>
                            <ReactStars 
                             count={5}
                             size={24}
                             value={4}
                             edit={false}
                             activeColor="#ffd700"
                            />
                            <p className='mb-0 t-review' >( 2 Reviews )</p>
                      </div>
                      <a className='review-btn' href="#review">Write a Review</a>
                    </div>
                    
                    <div className=' py-3'>
                      <div className='d-flex gap-10 align-items-center my-2'>
                          <h3 className='product-heading'>Type :</h3> 
                          <p className='product-data'>Best type</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                           <h3 className='product-heading'>Brand :</h3> 
                           <p className='product-data'>Good Brand</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                           <h3 className='product-heading'>Categeries :</h3> 
                           <p className='product-data'>Seeds</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Tags :</h3> 
                            <p className='product-data'>Tomato seeds</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Availability :</h3> 
                            <p className='product-data'>In Stock</p>
                      </div>
                      <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                        <h3 className='product-heading'>Size</h3>
                        <div className='d-flex flex-wrap gap-15'>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>100gms</span>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>500gms</span>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>1kg</span>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>3kg</span>
                        </div>
                      </div>
                      <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                            <h3 className='product-heading'>Quantity :</h3> 
                            <div className=''>
                                <input 
                                  type='number' 
                                  name="" 
                                  min={1}
                                  max={10}
                                  className='form-control'
                                  style={{ width: "60px" }} 
                                  id="" 
                                />
                            </div>
                            <div className='d-flex align-items-center gap-30 ms-5'>
                            <button type='button border-0' style={{ borderRadius: '25px', padding: '5px 15px 5px 15px', backgroundColor: 'mediumseagreen', color: 'white', border: 'none' }}>Add to Cart</button>                     
                     <button className='button signup' style={{borderRadius: '25px', padding: '5px 15px 5px 15px',backgroundColor: '#ffd700',border: 'none'}}>
                       Buy it Now
                     </button>
                            </div>
                      </div>
                      <div className='sd-flex align-items-center gap-15'>
                        <div>
                          <a href=" #">
                            <AiOutlineHeart className='fs-5 me-2' /> Add to Wishlist
                            </a>
                        </div>
                      </div>
                      <div className='d-flex gap-10 flex-column my-3'>
                          <h3 className='product-heading'>Shipping & Returns :</h3> 
                          <p className='product-data'>Free shipping and returns available on all orders! <br /> {" "}
                           we shipping all US domestic orders within
                           <b> 5-10 business days!</b>
                          </p>
                      </div>
                    </div>
                    <div className='d-flex gap-10 align-items-center my-3'>
                          <h3 className='product-heading'>Product Link:</h3> 
                          <a 
                          href=" #" 
                            onClick={()=>{
                            copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-acros-190819.jpg&fm=jpg");
                            }}
                          //  href=" #javascript:void(0);" 
                          //  onClick={()=>{
                          //   copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-acros-190819.jpg&fm=jpg");
                          //   }}
                            >
                              Copy Product Link
                            </a>
                      </div>
                 </div>
             </div>
          </div>
        {/* </div> */}
      </Container>

        <Container class1='description-wrapper py-5 home-wrapper-2'>
          {/* <div className='container-xxl'> */}
            <div className='row'>
               <div className='col-12'>
                  <h4>Description</h4>
                 <div className='bg-white p-3'>       
                 <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    very good product
                 </p>
                 </div>
               </div>
            </div>
            {/* </div> */}
        </Container>

       <Container class1='reviews-wrapper home-wrapper-2'>
        {/* <div className='container-xxl'> */}
            <div className='row'>
                <div className='col-12'>
                  <h3 id="review">Reviews</h3>
                    <div className='review-inner-wrapper'>
                    <div className='review-head d-flex justify-content-between align-items-end'>
                        <div>
                            <h4 className='mb-2'>
                              Customer Reviews
                              </h4>
                            <div className='d-flex align-items-center gap-10'>
                            <ReactStars 
                             count={5}
                             size={24}
                             value={4}
                             edit={false}
                             activeColor="#ffd700"
                            />
                            <p className='mb-0'>Based on 2 Reviews</p>
                            </div>
                        </div>
                         {orderedProduct && (
                            <div>
                            <a 
                             className='text-dark text-decoration-underline' 
                             href= "#review"
                            > 
                            Write a Review
                            </a>
                        </div>
                         )}
                    </div>
                    <div  className='review-form py-4'>
                      <h4>Write a Review</h4>
                    <form action="" className='d-flex flex-column gap-15'>  
                    <div>
                    <ReactStars 
                             count={5}
                             size={24}
                             value={4}
                             edit={true}
                             activeColor="#ffd700"
                            />
                      </div>                 
                    <div>
                    <textarea 
                     name="" 
                     id=""  
                     className="w-100 form-control" 
                     cols="30" 
                     rows="4" 
                     placeholder='Comments'
                    ></textarea>
                    </div>
                      <div className='d-flex justify-content-end'>
                      <button style={{ borderRadius: '25px', padding: '10px 30px 10px 30px', backgroundColor: 'mediumseagreen', color: 'white', border: 'none' }}>Submit Review</button>
                      </div>
                </form>
                    </div>
                    <div className='reviews mt-4'>
                      <div className='review'>
                      <div className='d-flex gap-10 align-items-center'>
                        <h6 className='mb-0'>Cherry</h6>
                        <ReactStars 
                             count={5}
                             size={24}
                             value={4}
                             edit={false}
                             activeColor="#ffd700"
                            />
                      </div>
                            <p className='mt-3'>
                               TBH it is very good product for sure
                               </p>
                      </div>
                    </div>
                </div>
                </div>
            </div>
        {/* </div> */}
       </Container>
       
      <Container class1='poplar-wrapper py-5 home-wrapper-2'>
        {/* <div className='container-xxl'> */}
         <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'> Our popular Products</h3>
          </div>
         </div>
         <div className='row'>
            <ProductCard />
            
         </div>
        {/* </div> */}
      </Container>

      <div
      className='modal fade'
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      >  
        <div className='modal-dialog modal-dailog-centered'>
        <div className='modal-content'>
          <div className='modal-header py-0 boarder-0'>
            <button
             type='button'
             className='btn-close'
             data-bs-dismiss="modal"
             aria-label="Close"
            ></button>
          </div>
          <div className='modal-body py-0'>
            <div className='d-flex align-items-center'>
              <div className='flex-grow-1 w-50'>
                <img src={watch} className='img-fluid' alt="product imgae"/>
              </div>
              <div className='d-flex flex-column flex-grow-1 w-50'>
                <h6 className='mb-3'>Apple Watch</h6>
                 <p className='mb-1'>Quatity: very good Quatity</p>
                 <p className='mb-1'>Color: very good Color</p>
                 <p className='mb-1'>Size: very good Size</p>
            </div>
          </div>
        </div>
        <div className='modal-footer border-0 py-0 justify-content-center gap-30'>
            <button type="button" className='button' data-bs-dismiss="modal">
              View My Cart
            </button>
            <button type="button" className='button signup'>
              Checkout
            </button>
        </div>
       <div className='d-flex justify-content-center py-3'>
         <Link
          className='text-dark'
          to="/product"
          onClick={() => {
            closeModal();
          }}
         >
          Continue to Shopping
         </Link>
       </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SingleProduct;