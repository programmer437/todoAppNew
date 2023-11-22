import React, { useEffect, useState } from 'react'
import topImage from '../../assets/files.png'
import background from '../../assets/background.png'
import '../../index.css'
import MiddleContent from './miniComponents/SliderComponent'
import imageOne from '../../assets/stayOrganized.png';
import imageTwo from '../../assets/boostProductivity.png';
import imageThree from '../../assets/connect.png';
import imageFour from '../../assets/celebrate.png';



const Main = () => {
  let [height, setHeight] = useState(1010);
  let [top, setTop] = useState(300);
  let [image,setImage]=useState(imageOne);

 
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPoints = [
        { image: imageOne, scrollY: 1600 },
        { image: imageTwo, scrollY: 2200 },
        { image: imageThree, scrollY: 2800 },
        { image: imageFour, scrollY: Infinity }, // Infinity means it will be the last image
      ];
      const scrollY = window.scrollY;

      // Define the threshold value (e.g., 100)
      const threshold = 100;

      // Calculate new values based on the scroll position
      const newTop = Math.max(0, 300 - 1 * (scrollY - threshold));
      const newHeight = Math.max(800, 1010 - 1 * (scrollY - threshold));
      const currentImage = scrollPoints.find((point) => scrollY < point.scrollY);
      setImage(currentImage.image);
      

      // Update state variables
      setTop(newTop);
      setHeight(newHeight);
   
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [height, top]);




  
  return (
    <>
      <div className="container ">
        <div className="row col-xl-6 col-md-12 col-sm-11 col-10 mainSection">
          <h1 className="mainHeading">Effortlessly organize your world,<br></br>
            one task at a time.</h1>
          <p className="subHeading">Experience the effortless flow of productivity with TaskHarmony,<br></br> your partner in achieving more, stress-free</p>
          <button className="mainBtn">Sign up</button>
        </div>
      </div>
      <div className="startingVideoContainer" style={{height:`${height}px`}}>
        <div className='backgroundImageWrapper'>
        <img src={background} alt='background' className='backgroundImg'></img>
        </div>
        <div className='topImageWrapper' style={{top:`${top}px`}}>
        <img src={topImage} alt='background' className='topImage'></img>
        </div>


      </div>
      <div className="sliderContainer">
      <div className="sliderContainerLeft">
        <MiddleContent/>
        
      </div>
        <div className="sliderContainerRight">
          <div style={{width:"100%"}}>
          <img src={image} alt='Stay Organized' width='500px' height="auto" className='sliderImage'></img>
          </div>
        </div>
      </div>
    </>

  )
}

export default Main