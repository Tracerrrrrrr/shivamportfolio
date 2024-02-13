import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
  import { TypeAnimation } from 'react-type-animation';
  import './Ring.css'; // Import your CSS file for styling
  import imgs from "../Assets/1.jpg"
import Home from './Home';
import About from './About';
const SideBar = () => {
  return (
<>

   <div className="rainbow-background">
    <img src={imgs} style={{maxWidth:"5rem",borderRadius:"40px",marginLeft:"1rem",marginTop:"2rem"}}/>
</div>
<Home/>
<TypeAnimation
        sequence={[
          // Using inline CSS for color
          
          'About Me',
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '1em', display: 'flex',flexDirection:'row' ,color:"purple",fontWeight:"bold",marginTop:"1rem",marginLeft:"1rem"}}
        repeat={Infinity}
      />
<About/>
<TypeAnimation
        sequence={[
          // Using inline CSS for color
          
          'What I Know',
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '1em', display: 'flex',flexDirection:'row' ,color:"purple",fontWeight:"bold",marginTop:"1rem",marginLeft:"1rem"}}
        repeat={Infinity}
      />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
<Card className="mt-6 w-96">

      <CardHeader floated={false} className="h-200">
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Frontend
        </Typography>
      <Typography color="blue-gray" className="font-medium" textGradient>
        HTML
      </Typography>

      <Typography color="blue-gray" className="font-medium" textGradient>
        CSS
      </Typography>
      <Typography color="blue-gray" className="font-medium" textGradient>
  JSP
      </Typography>
      <Typography color="blue-gray" className="font-medium" textGradient>
Jquery
      </Typography>
      <Typography color="blue-gray" className="font-medium" textGradient>
JavaScript
      </Typography>

      <Typography color="blue-gray" className="font-medium" textGradient>
Material UI
      </Typography>

      <Typography color="blue-gray" className="font-medium" textGradient>
Tailwind Css
      </Typography>
      <Typography color="blue-gray" className="font-medium" textGradient>
  React JS
      </Typography>

      </CardBody>
    </Card>
    <Card className="mt-6 w-96" style={{marginLeft:"4rem"}}>

      <CardHeader floated={false} className="h-200">
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Backend
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
         Springboot
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
         Struts
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
        Node.js
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
       Express.js
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
   Java
        </Typography>
      </CardBody>
    </Card>
</div>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' ,marginTop:"2rem"}}>
    <Card className="mt-6 w-96">

<CardHeader floated={false} className="h-200">
</CardHeader>
<CardBody className="text-center">
  <Typography variant="h4" color="blue-gray" className="mb-2">
Database
  </Typography>
  <Typography color="blue-gray" className="font-medium" textGradient>
MySql
  </Typography>
  <Typography color="blue-gray" className="font-medium" textGradient>
MongoDB
  </Typography>
</CardBody>
</Card>
<Card className="mt-6 w-96"style={{marginLeft:"4rem"}}>

<CardHeader floated={false} className="h-200">
</CardHeader>
<CardBody className="text-center">
  <Typography variant="h4" color="blue-gray" className="mb-2">
Devops
  </Typography>
  <Typography color="blue-gray" className="font-medium" textGradient>
Git
  </Typography>
  <Typography color="blue-gray" className="font-medium" textGradient>
Svn
  </Typography>
  <Typography color="blue-gray" className="font-medium" textGradient>
Jenkins
  </Typography>
  <Typography color="blue-gray" className="font-medium" textGradient>
Apache Server
  </Typography>
</CardBody>
</Card>
</div>
{/* <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',marginTop:"2rem" }}>
<Card className="mt-6 w-96" style={{marginLeft:"2rem"}}>

<CardHeader floated={false} className="h-200">
</CardHeader>
<CardBody className="text-center">
  <Typography variant="h4" color="blue-gray" className="mb-2">
App Developement
  </Typography>
  <Typography color="blue-gray" className="font-medium" textGradient>
Android Developement(Java)
  </Typography>
  <Typography color="blue-gray" className="font-medium" textGradient>
React Native
  </Typography>
</CardBody>
</Card>
    </div> */}
</>
  )
}

export default SideBar