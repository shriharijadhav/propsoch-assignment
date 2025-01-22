import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropertyCard from './PropertyCard';
import '../styles/propertyList.css';
import { appendProperties, setLoading } from '../features/propertySlice';
import Notification from './Notification';

const PropertyList = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.property.properties);
  const loading = useSelector((state) => state.property.loading);
  const listRef = useRef(null);

  const [notification, setNotification] = useState({ type: '', message: '' });


  const handleScroll = () => {
    const listElement = listRef.current;
    if (
      listElement.scrollTop + listElement.clientHeight >= listElement.scrollHeight - 5 &&
      !loading
    ) {
    //   console.log("Bottom reached, loading more properties...");
      dispatch(setLoading(true));
      setTimeout(() => {
        const newProperties = generateDummyData(properties.length + 1, 10);
        dispatch(appendProperties(newProperties));
        dispatch(setLoading(false));
      }, 2000);
    }
  };

  useEffect(() => {
    const listElement = listRef.current;
    listElement.addEventListener('scroll', handleScroll);
    return () => listElement.removeEventListener('scroll', handleScroll);
  }, [loading, properties]);
  
  

  return (
    <div className="property-list"  ref={listRef}>
      {properties.map((property) => (
        <PropertyCard key={property.id} setNotification={setNotification} property={property} />
      ))}


      {loading && (
  <div className="loader">
    <div className="spinner"></div>
    <p>Loading more properties just for you...</p>
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



const generateDummyData = (startId, count) => {
  const dummyData = [];
  for (let i = 0; i < count; i++) {
    dummyData.push({
      id: startId + i,
      name: `Property ${startId + i}`,
      price: (Math.random() * 4 + 1).toFixed(1),
      landmark: `Landmark ${startId + i}`,
      address: `Address ${startId + i}`,
      isMostLiked: Math.random() > 0.5,
      totalViews: Math.floor(Math.random() * 60000),
      rating: (Math.random() * 5),
      bookingDate: `Apr 5 – 10`,
    });
  }
  return dummyData;
};

export default PropertyList;
