
"use client";
import Header from "./Header/page";
import Footer from "./Footer/footer";
import React, { useState } from "react";
import Link from 'next/link';

export default function Home() {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[message, setMessage] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
        name,
        email,
        message,
    };

    const form = event.target;
    form.submit();
};
  

  return (

    <>
      <Header/>
      <main> 
				<section class= "main-body-image" id="main-body-image">
					<img src="/img/logo.png" alt="J.A.M.L Paintings image"/>
				</section>
				
				<section class= "artist-boxes" id="boxes">
					<div class ="flex">
						<div class="box">
							<h2>John</h2>
							<p>John&apos;s painting</p>
              <button><Link href="/John's Page/John">View Paintings</Link></button>
						</div>
						<div class="box box2">
							<h2>Axel</h2>
							<p>Axel&apos;s painting</p>
							<button><a href="axel's page.html">View Paintings</a></button>
						</div>
						<div class="box box3">
							<h2>Michelle</h2>
							<p>Michelle&apos;s painting</p>
							<button><Link href="./Michelle's Page/Michelle">View Paintings</Link></button>
						</div>
						<div class="box">
							<h2>Lisa</h2>
							<p>Lisa&apos;s painting</p>
							<button><Link href="./Lisa">View Paintings</Link></button>
						</div>
              <div class="card w-96 bg-base-100 shadow-xl image-full">
              <figure><img src="/img/logo.png" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">Test</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                <button><Link href="../Lisa">View Paintings</Link></button>
                </div>
              </div>
            </div>
					</div>
				</section>
			
				<section class="about-us" id="aboutus">
					<h1>About us</h1>
					<p>we are 4 different people who come together to paint and talk about our problem over painting. 
					It release our stress and anxiety, and now we have found a new love for painting.</p>
				</section>
				
				<section class= "contact-us"  id="contactus">
					<h1>Contact us</h1>
					<div class= "flex">
						<div class= "contact-form">
							<form id="contact-form" onSubmit={handleSubmit}>
							<p>required values are marked(*)</p>
								<input type="text" name="name" id="name" placeholder="Name*" class="input input-bordered" required />
								<input type="email" name="email" id="email" placeholder="Email*" class="input input-bordered" required /> 
								<textarea id="message" placeholder="Please type your bio and how many paintings you want to be posted on your page*" class="textarea textarea-bordered" required ></textarea>
                <button type="submit" id="formbutton" class="btn btn-wide m-16 mt-2 hover:bg-green-500 text-white ">Submit</button>
							</form>
						</div>	
					</div>	
				</section>
			</main> 

      <Footer/>
    </>

  );
}