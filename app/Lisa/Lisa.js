import Header from "../Header/header";
import Footer from "../Footer/footer";
import React, { useState } from "react";


export default function Lisa() {

const [fullImage, setFullImage] = useState(false);
const [fullImageSrc, setFullImageSrc] = useState("");


const openImage = (e) => {
    setFullImageSrc(e);
    setFullImage(true);
};

const closeImage = () => {
    setFullImage(false);
};

    return(
        <>
        <Header/>
        <article class="bio-image">
            <h1>Lisa's paintings</h1>
            <img src="Lisa's background.jpg" alt="lisa-image"/>
            <p class="bio-desc">Hello my name is Lisa and when I'm not watching the Big Bang Theory, study, working-out or watching Netflix
            I paint here are some of my paintings</p>
        </article>
				
        {fullImage && (
            <div className="full-img" id="full-img">
                <img src={fullImageSrc} id="fullimg" />
                <span onClick={closeImage}>X</span>
            </div>
        )}
			
				<div class="img-gallery">
					<div class="gallery"> 
						<img src="Lisa's painting/L1.jpg" onclick={() => openImage("Lisa's painting/L1.jpg")}/>
						 <div class="desc">Charmander<br>By: Lisa</br></div>
					</div>	
					<div class="gallery"> 
						<img src="Lisa's painting/L5.jpg" onclick={() => openImage("Lisa's painting/L5.jpg")}/>
						<div class="desc">Loudred<br>By: Lisa</br></div>
					</div>
							
					<div class="gallery"> 	
						<img src="Lisa's painting/L3.jpg" onclick={() => openImage("Lisa's painting/L3.jpg")}/>
						<div class="desc">Dark Tree<br>By: Lisa</br></div>
					</div>
						
					<div class="gallery"> 	
						<img src="Lisa's painting/L4.jpg" onclick={() => openImage("Lisa's painting/L4.jpg")}/>
						<div class="desc">Spring Tree<br>By: Lisa</br></div>
					</div>
						
					<div class="gallery"> 	
						<img src="Lisa's painting/L2.jpg" onclick={() => openImage("Lisa's painting/L2.jpg")}/>
						<div class="desc">4 Season Trees<br>By: Lisa</br></div>
					</div>
							
				</div>


        <Footer/>
      </>
    );
}