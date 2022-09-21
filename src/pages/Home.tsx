import React from "react";
import image from '../Images/Untitled.png';
import GoogleButton from 'react-google-button'

type Props = {};

const Home = (props: Props) => {
  return <div className="d-flex justify-content-center flex-column align-items-center">
    <p className="mt-5">Take your business to next level</p>
    <img src={image} style={{width: 300}}/>
    <GoogleButton className="mt-5" onClick={() => {window.location.href="http://localhost:8080/api/user/google"}}/>
    </div>;
};

export default Home;
