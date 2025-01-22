import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '../features/propertySlice';
import '../styles/PropertyCard.css'; // Create corresponding CSS file
import ImageSlider from './ImageSlider';

import imageOne from '../assets/images/sliderImage_1.jpeg';
import imageTwo from '../assets/images/sliderImage_2.jpeg';
import imageThree from '../assets/images/sliderImage_3.jpeg';
import imageFour from '../assets/images/sliderImage_4.jpeg';
import { useNavigate } from 'react-router-dom';
import eyeIcon from '../assets/icons/eyeIcon.svg';
import normalHeartIcon from '../assets/icons/normalHeartIcon.svg';
import likedHeartIcon from '../assets/icons/likedHeartIcon.svg';
import { GoStar } from 'react-icons/go';
import { getColorBasedOnRating } from '../utils/propertyCard';
import { TiStarFullOutline } from 'react-icons/ti';

const PropertyCard = ({ property, setNotification }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistPropertyIds = useSelector(
    (state) => state.property.wishlistPropertyIds
  );

  const checkIfAlreadyAddedToWishlist = (id) => {
    if (wishlistPropertyIds?.includes(id)) return true;
    return false;
  };

  const handleNavigateToPropertyDetails = (id) => {
    navigate(`/property/${id}`);
  };

  const images = [imageOne, imageTwo, imageThree, imageFour];

  return (
    <div
      className='property-card'
      key={property?.id}
      onClick={() => {
        handleNavigateToPropertyDetails(property?.id);
      }}
    >
      <div className='customSliderDiv'>
        <ImageSlider images={images} />
      </div>
      <div className='propertyDetails-card'>
        <div className='parentViewDiv'>
          <div className='viewDiv'>
            <img src={eyeIcon} height={12} width={12} alt='eyeIcon' />
            <p>41,172</p>
          </div>
          <div
            className='ratingsDiv'
            style={{ color: getColorBasedOnRating(property?.rating) }}
          >
            <TiStarFullOutline className='starticon' />

            <p>{property?.rating?.toFixed(1)}</p>
          </div>
        </div>
        <div className='titlesDiv'>
          <span className='propertyTitle'>{property.name}</span>
          <span className='bookingDate'>{property?.bookingDate}</span>
        </div>

        <div className='sliderOverlayDiv'>
          {property?.isMostLiked && (
            <div className='mostLikedDiv'>Most Liked</div>
          )}
          <button
            className='likeButton'
            onClick={(e) => {
              // console.log("clicked")
              dispatch(toggleWishlist(property.id));
              if (!checkIfAlreadyAddedToWishlist(property?.id)) {
                setNotification({
                  type: 'success',
                  message: 'Property added to wishlist!',
                });
              } else {
                setNotification({
                  type: 'failure',
                  message: 'Property removed from wishlist!',
                });
              }
              e.stopPropagation();
            }}
          >
            {checkIfAlreadyAddedToWishlist(property?.id) ? (
              <img
                src={likedHeartIcon}
                height={24}
                width={24}
                alt='likedHeartIcon'
              />
            ) : (
              <img
                src={normalHeartIcon}
                height={24}
                width={24}
                alt='normalHeartIcon'
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
