 import {useState} from 'react';
 import React from "react";
 import ChildComponent from './ChildComponent';

 const ParentComponent :React.FC = () => {
  const [message, setMessage] = useState('');

  const handleChildData = (dataFromChild: string) => {
    setMessage(dataFromChild);
  }
  return (
    <>
    <h1>Parent Component</h1>
    <p>Message from Child: {message}</p>
    <ChildComponent onSendData={handleChildData} />
  </>
  );
 }

 export default ParentComponent;
