import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import { useSelector } from 'react-redux';
import { MdArrowBackIos } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/wishlist.css';
import Notification from './Notification';

const Wishlist = () => {
  const wishlistPropertyDetails = useSelector(
    (state) => state.property.wishlistPropertyDetails
  );
  const navigate = useNavigate();
  const [notification, setNotification] = useState({ type: '', message: '' });

  const handleNavigateback = () => {
    navigate(-1);
  };
  return (
    <div className='wishListContainer'>
      {/* <div className='backBtnLink' >
                 <button className='backToListBtn' onClick={handleNavigateback}>
                   <MdArrowBackIos className='backBtnIcon' />
         
                   <p>Back to Property List</p>
                 </button>
               </div> */}
      <div className='wishListHeadingDiv'>
        <h2>Wish List</h2>
      </div>
      <div className='property-list'>
        {wishlistPropertyDetails.map((property) => (
          // <Link to={`/property/${property.id}`} key={property.id} className="property-link">
          //   <PropertyCard property={property} />
          // </Link>
          <PropertyCard key={property?.id} setNotification={setNotification} property={property} />
        ))}
      </div>

      {wishlistPropertyDetails?.length === 0 && (
        <div className='emptyWishListDiv'>
          <p>
            You're wish list is empty. Like some properties to add to wish list.
          </p>
          <Link to={'/'}>
            <button className='backToExploreBtn'>
              <h3> Explore all properties</h3>
            </button>
          </Link>
        </div>
      )}
      {/* Notification */}
      <Notification
        type={notification.type}
        message={notification.message}
        onClose={() => setNotification({ type: '', message: '' })}
      />
    </div>
  );
};

export default Wishlist;
