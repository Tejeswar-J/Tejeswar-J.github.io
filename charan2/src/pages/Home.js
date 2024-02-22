import React, { useEffect} from "react";
//import "../App.css"; 
import Marquee from "react-fast-marquee";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { services } from "../utils/data";
import SpecialProduct from "../components/SpecialProduct";
import { useDispatch, useSelector} from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import ReactStars from "react-rating-stars-component";
import { Link ,useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { addToWishlist } from "../features/products/productSlice";

const Home = () => {
  // const products = [
  //   {
  //     imageUrl: "images/camera.jpg",
  //     title: "Product 1",
  //     price: "$29.99",
  //     size: "Medium",
  //     productId: 1,
  //   },
  //   {
  //     imageUrl: "images/tv.jpg",
  //     title: "Product 2",
  //     price: "$39.99",
  //     size: "Large",
  //     productId: 2,
  //   },
  //   {
  //     imageUrl: "images/tv.jpg",
  //     title: "Product 3",
  //     price: "$39.99",
  //     size: "Large",
  //     productId: 3,
  //   },
  //   {
  //     imageUrl: "images/watch.jpg",
  //     title: "Product 4",
  //     price: "$39.99",
  //     size: "Large",
  //     productId: 4,
  //   },
  //   {
  //     imageUrl: "images/laptop.jpg",
  //     title: "Product 5",
  //     price: "$39.99",
  //     size: "Large",
  //     productId: 5,
  //   },
  //   // Add more product details as needed
  // ]; 
    const productState=useSelector((state)=>state.product.product);
    const dispatch = useDispatch();
    useEffect(() => {
      getallProducts();
    })
  const getallProducts = () => {
    dispatch(getAllProducts());
  };
  const addToWish = (id) => {
    alert(id);
  dispatch(addToWishlist(id));
  };
  return (
    <>
     <Meta title={"Login"} />

    <Container class1='home-wrapper-1 py-5'>
    <div className="row">
            <div className="col-12 position-relative">
              <div className="main-banner-content" id="imageContainer">
                <div className="carousel">
                  <img
                    src="images/main-banner-2.png"
                    className="img-fluid-rounded-3 carousel-image"
                    alt="main banner 2"
                  />
                  <img
                    src="images/main-banner-3.png"
                    className="img-fluid-rounded-3 carousel-image"
                    alt="main banner 3"
                  />
                  <img
                    src="images/main-banner.png"
                    className="img-fluid-rounded-3 carousel-image"
                    alt="main banner"
                  />
                </div>
              </div>
              <div className="dots-container" id="dotsContainer"></div>
            </div>
          </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">

     {/* <div className="container-xxl"> */}
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-evenly">      
                {services?.map((i,j)=>{
                  return (
                    <div className="d-flex align-items-center gap-15" key={j}>
                      <img src={i.image} alt="services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                  );
                })}
        
           </div>
          </div>
        </div>
      {/* </div> */}

    </Container>  
    <Container class1='home-wrapper-3 py-5'>
    <div className="container">
          <div className="col-12 text-center py-1">
            <h1>Categories</h1>
          </div>
          <div className="row">
            <div className="flex-container gap-10 mb-0">
              <div>
                <img src="images/seeds.png" alt="brand" />
                <h4>Seeds</h4>
              </div>
              <div>
                <img src="images/nutrients.png" alt="Nutrients" />
                <h4>Nutrients</h4>
              </div>
              <div>
                <img src="images/insecticides.png" alt="Insecticides" />
                <h4>Insecticides</h4>
              </div>
              <div>
                <img src="images/tools.png" alt="tools" />
                <h4>Tools</h4>
              </div>
              <div>
                <img src="images/herbicides.png" alt="Herbicides" />
                <h4>Herbicides</h4>
              </div>
              <div>
                <img src="images/organic.png" alt="organic" />
                <h4>Organic</h4>
              </div>
              <div>
                <img src="images/growth.png" alt="Growth" />
                <h4>Growth promoters</h4>
              </div>
              <div>
                <img src="images/fungicides.png" alt="Fungicides" />
                <h4>Fungicides</h4>
              </div>
              <div>
                <img src="images/herbicides.png" alt="Herbicides" />
                <h4>Herbicides</h4>
              </div>
              <div>
                <img src="images/organic.png" alt="organic" />
                <h4>Organic</h4>
              </div>
            </div>
            {/*  <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-evenly align-item-center">
                <div className="d-flex gap-30 align-item-center">
          
                  <div>
                    <h5>Seeds</h5>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                </div>
                <div className="d-flex gap-30 align-item-center">
                  <div>
                    <h5>Pesticides</h5>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                </div>
                <div className="d-flex gap-30 align-item-center">
                  <div>
                    <h5>Fertlizers</h5>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                </div>
                <div className="d-flex gap-30 align-item-center">
                  <div>
                    <h5>Fungicides</h5>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                </div>
                <div className="d-flex gap-30 align-item-center">
                  <div>
                    <h5>Herbicides</h5>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                </div>
                <div className="d-flex gap-30 align-item-center">
                  <div>
                    <h5>Micro Nutrients</h5>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                </div>
                <div className="d-flex gap-30 align-item-center">
                  <div>
                    <h5>Organic Fertlizers</h5>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                </div>
                <div className="d-flex gap-30 align-item-center">
                  <div>
                    <h5>Insecicides</h5>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                </div>
                <div className="d-flex gap-30 align-item-center">
                  <div>
                    <h5>farm Machinery</h5>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                </div>
                <div className="d-flex gap-30 align-item-center">
                  <div>
                    <h4>Offers</h4>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
        
    </Container>
    


      
    
      
      {/* <section className="home-wrapper-3 py-5">

      </section> */}
      <Container class1="marque-wrapper py-5">
      {/* <div className="container-xxl"> */}
          <div className="row">
            <div className="col-12">
              <div className="marquee-content d-flex justify-content-center py-1">
                <h4>BRANDS</h4>
              </div>
              <div className="marquee-inner-wrapper card-wrapper ">
                <Marquee className="d-flex">
                  <div className="mx-5 w-30">
                    <img src="images/syngentaLogo.png" alt="brand" />
                  </div>
                  <div className="mx-5 w-30">
                    <img src="images/tapasLogo.png" alt="tapas" />
                  </div>
                  <div className="mx-5 w-30">
                    <img src="images/seminisLogo.png" alt="seminis" />
                  </div>
                  <div className="mx-5 w-30">
                    <img src="images/fmcLogo.png" alt="FMC" />
                  </div>
                  <div className="mx-5 w-30">
                    <img src="images/bayerLogo.png" alt="bayer" />
                  </div>
                  <div className="mx-5 w-30">
                    <img src="images/dhanukaLogo.png" alt="dhanuka" />
                  </div>
                  <div className="mx-5 w-30">
                    <img src="images/crystalLogo.png" alt="crystal" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        {/* </div> */}
      </Container>
      <Container class1="product-wrapper py-5 home-wrapper-2">
      {/* <div className="container-xxl"> */}
          <div className="row">
            <div className="col-8">
              <h4 className="section-heading">Todays Offer</h4>
            </div>
            <div className="col-4">
              <a href="/" className="text-dark text-decoration-none">
                View All
              </a>
            </div>
            {productState && 
               productState?.map((item, index) => {
                if (item.tags === "todays") {
                return ( 
                  <div 
                  key={index}
                  className={"col-3"}
                >
                  <Link 
                  /*
                    to={`${location.pathname === "/"
                    ? "/product/:id"
                    : location.pathname === "/product/:id"
                    ? "/product/:id"
                    : ":id"
                }`} */
                    className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                      <button 
                        className="border-0 bg-transparent" >
                          <img
                          onClick={()=> addToWish(item?._id)}                
                             src={wish} 
                             alt="wishlist" 
                          />
                      </button>
                    </div>
                    <div className="product-image">
                      <img 
                      src={item?.images[0].url}
                      className="img-fluid mx-auto"
                      alt="product img" 
                      width={160}
                      />
                      <img
                       src={watch2}
                       className="img-fluid mx-auto"
                       alt="product img"
                       width={160}
                       />
                    </div>
                    <div className="product-details">
                      <h6 className="brand">{item?.brand}</h6>
                      <h5 className="product-title">
                        {item?.title}
                      </h5>
                      <ReactStars
                      count={5}
                      size={24}
                      value={item?.totalrating.toString()}
                      edit={false}
                      activeColor="#ffd700"
                      />
                      <p className="price">$ { item?.price}</p>
                    </div>
                    <div className="action-bar position-absolute">
                      <div className="d-flex flex-column gap-15">
                        <button className="border-0 bg-transparent">
                        <img src={prodcompare} alt="compare" />
                        </button>
                        <button className="border-0 bg-transparent">
                         <img src={view} alt="view" />
                        </button>
                        <button className="border-0 bg-transparent">
                        <img src={addcart} alt="addcart" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
                );
              }
              })}
          </div> 
        {/* </div> */}
      </Container>



          {/* the below container is for testing purpose */}

      <Container class1="special-wrapper py-5 home-wrapper-2">
      {/* <div className="container-xxl"> */}
          <div className="row">
            <div className="col-8">
              <h3 className="section-heading">Special Products</h3>
            </div>
            <div className="col-4">
              <a href="/" className="text-dark text-decoration-none">
                View All
              </a>
            </div>
            </div>
            <div className="row ">
             {productState && 
               productState?.map((item, index) => {
                if (item.tags === "special") {
                return ( 
                <SpecialProduct 
                  key={index} 
                  brand={item?.brand} 
                  title={item?.title} 
                  totalrating={item?.totalrating.toString()}
                  price={item?.price}
                  sold={item?.sold}
                  quantity={item?.quantity}
                  />
                );
                }
              })}
            </div>
        {/* </div> */}
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        {/* <div className="conatiner-xxl"> */}
          <div className="row">
          <div className="col-8">
              <h3 className="section-heading">Popular Products </h3>
            </div>
            <div className="col-4">
              <a href="/" className="text-dark text-decoration-none">
                View All
              </a>
            </div>
            </div>
            <div className="row">
          {productState && 
               productState?.map((item, index) => {
                if (item.tags === "popular") {
                return ( 
                  <div 
                  key={index}
                  className={"col-3"}
                >
                  <Link 
                  /*
                    to={`${location.pathname === "/"
                    ? "/product/:id"
                    : location.pathname === "/product/:id"
                    ? "/product/:id"
                    : ":id"
                }`} */
                    className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                      <button 
                        className="border-0 bg-transparent" >
                          <img
                          onClick={()=> addToWish(item?._id)}                
                             src={wish} 
                             alt="wishlist" 
                          />
                      </button>
                    </div>
                    <div className="product-image">
                      <img 
                      src={item?.images[0].url}
                      className="img-fluid mx-auto"
                      alt="product img" 
                      width={160}
                      />
                      <img
                       src={watch2}
                       className="img-fluid mx-auto"
                       alt="product img"
                       width={160}
                       />
                    </div>
                    <div className="product-details">
                      <h6 className="brand">{item?.brand}</h6>
                      <h5 className="product-title">
                        {item?.title}
                      </h5>
                      <ReactStars
                      count={5}
                      size={24}
                      value={item?.totalrating.toString()}
                      edit={false}
                      activeColor="#ffd700"
                      />
                      <p className="price">$ { item?.price}</p>
                    </div>
                    <div className="action-bar position-absolute">
                      <div className="d-flex flex-column gap-15">
                        <button className="border-0 bg-transparent">
                        <img src={prodcompare} alt="compare" />
                        </button>
                        <button className="border-0 bg-transparent">
                         <img src={view} alt="view" />
                        </button>
                        <button className="border-0 bg-transparent">
                        <img src={addcart} alt="addcart" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
                );
              }
              })}
          </div>
        {/* </div> */}
      </Container>
    
    </>
  );
};

export default Home;






