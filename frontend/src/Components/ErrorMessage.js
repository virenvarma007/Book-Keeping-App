import React from 'react';
const ErrorMessage = ({ children }) => {
  return (
    <div style={{background:'red',color:'#fff',padding:'3px'}}>
      {children}
    </div>
  );
};

export default ErrorMessage;