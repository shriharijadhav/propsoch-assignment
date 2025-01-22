import React, { useEffect, useState } from 'react';
import '../styles/notification.css'; 

const Notification = ({ type, message, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        onClose();
      }, 1500); // Hide after 1.5 seconds
    }
  }, [message, onClose]);

  return (
    visible && (
      <div className={`notification ${type}`}>
        <p>{message}</p>
      </div>
    )
  );
};

export default Notification;
