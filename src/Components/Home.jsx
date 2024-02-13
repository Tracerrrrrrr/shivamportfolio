import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <>
  <div style={{marginTop:"1rem"}}>
      <TypeAnimation
        sequence={[
          // Using inline CSS for color
          'Welcome to portfolio',
          1000,
          'My name is shivam upadhyay',
          1000,
          'I am a software engineer',
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '1.5em', display: 'flex',flexDirection:'row' , justifyContent:"center",color:"purple",fontWeight:"bold"}}
        repeat={Infinity}
      />
      </div>
    </>
  );
};

export default Home;
