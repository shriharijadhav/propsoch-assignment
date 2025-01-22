import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../styles/propertyDetail.css'; // Create corresponding CSS file
import {
  MdArrowBackIos,
  MdLocationOn,
  MdOutlineKeyboardBackspace,
} from 'react-icons/md';
import { useSelector } from 'react-redux';
import ImageSlider from './ImageSlider';

import imageOne from '../assets/images/sliderImage_1.jpeg';
import imageTwo from '../assets/images/sliderImage_2.jpeg';
import imageThree from '../assets/images/sliderImage_3.jpeg';
import imageFour from '../assets/images/sliderImage_4.jpeg';

import locationIconDetailsPage from '../assets/icons/locationIconDetailsPage.svg';
import locationCustomicon from '../assets/icons/locationCustomicon.svg';


const PropertyDetail = () => {
  const { id } = useParams();

  const images = [imageOne, imageTwo, imageThree, imageFour];

  const properties = useSelector((state) => state.property.properties);

  const [singleProperty, setSingleProperty] = useState(null);

  useEffect(() => {
    const selectedProperty = properties?.find(
      (item) => Number(item?.id) === Number(id)
    );
    console.log(selectedProperty, properties, id);
    setSingleProperty(selectedProperty);
  }, [properties, id]);

  const navigate = useNavigate();

  const handleNavigateback = () => {
    navigate(-1);
  };

  const handleViewOnMapClick = () => {
    const mapLink = "https://www.google.com/maps?q=12.9275887,77.6217711";  // Replace with your desired coordinates or place
    window.open(mapLink, "_blank");  // Opens the link in a new tab
  };

  return (
    <div className='property-detail'>
      {/* New button to go back to property list */}
      {/* <div className='backBtnLink' >
        <button className='backToListBtn' onClick={handleNavigateback}>
          <MdArrowBackIos className='backBtnIcon' />

          <p>Back to Property List</p>
        </button>
      </div> */}
      <div className='propertyDetailsSliderDiv'>
        <ImageSlider images={images} />
      </div>
      <div className='property-detail_descriptionDiv'>
        <div className='property-detail_div1'>
          <span className='mainHeading'>{singleProperty?.name}</span>
          <div className='property-detail_addressDiv'>
            <img
              src={locationIconDetailsPage}
              className='locationIconDetailsPage'
              alt='locationIconDetailsPage'
            />
            <span className='subHeading'>{singleProperty?.landmark}</span>
          </div>
        </div>
        <div className='property-detail_div1'>
          <span className='mainHeading'>{singleProperty?.price} Cr</span>
          <div className='property-detail_addressDiv'>
            <span className='subHeading'>EMI Avaialabe</span>
          </div>
        </div>
        
      </div>
      <div className='propertyDetails_locationDiv'>
        <span className='locationHeading'>Location</span>
        <div className='propertyDetails_locationDiv_details'>
            <img src={locationCustomicon} alt="locationCustomicon" />
            <span>{singleProperty?.address}</span>
        </div>
      </div>
      {/* Google Maps integration */}
      <div id='map' className="map-container">
        
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6907222994337!2d77.6217711!3d12.927588699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae119f74a5da2d%3A0x4b791d1ffff7e13!2sPropsoch!5e0!3m2!1sen!2sin!4v1737538411500!5m2!1sen!2sin"
        className='iframeDiv'
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className='viewOnMapDiv' onClick={handleViewOnMapClick}>
        <span>View on Map</span>
      </div>
      </div>

      <div className='propertyDetails_ammentiesDiv_subDiv addOnClass'>
            <div className='singleItem'>2 Hospital</div>
            <div className='singleItem'>4 Gas stations</div>
            <div className='singleItem'>2 Schools</div>
        </div>

      <div className='propertyDetails_ammentiesDiv'>
        <span className='propertyDetails_ammentiesDiv_heading'>Property Ammenties</span>
        <div className='propertyDetails_ammentiesDiv_subDiv'>
            <div className='singleItem active'>House</div>
            <div className='singleItem'>Appartment</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
