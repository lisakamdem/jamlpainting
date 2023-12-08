
"use client";
import Header from "./Header/page";
import Footer from "./Footer/footer";
import React, { useState, useEffect } from "react";
import { addContact } from "./_services/contact_us_services";
import Link from 'next/link';

export default function Home() {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[message, setMessage] = useState("");
  const[showSuccessAlert, setShowSuccessAlert] = useState(false);

const handleSubmit = async (event) => {

    event.preventDefault();

    const data = {
        name,
        email,
        message,
    };

    console.log(data);
	setName("");
	setEmail("");
	setMessage("");

	setShowSuccessAlert(true);
	setTimeout(() => {
		setShowSuccessAlert(false);
	  }, 3000);

	try {
		await addContact(data);
	} catch (error) {
	console.error("Error adding contact:", error);
	}
	
};
  

  return (

    <>
      <Header/>
      	<main> 
			<section className= "main-body-image" id="main-body-image">
				<img src="/img/logo.png" alt="J.A.M.L Paintings image"/>
			</section>
			
			<section className= "artist-boxes" id="boxes">
				<div className ="flex">
					<div class="box">
						<h2>John</h2>
						<p>John&apos;s painting </p>
						<button><Link href="/John">View Paintings</Link></button>
					</div>
					
					<div className="box box2">
						<h2>Axel</h2>
						<p>Axel&apos;s painting</p>
						<button><Link href="/Axel">View Paintings</Link></button>
					</div>
					<div className="box box3">
						<h2>Michelle</h2>
						<p>Michelle&apos;s painting</p>
						<button><Link href="./Michelle">View Paintings</Link></button>
					</div>
					<div className="box">
						<h2>Lisa</h2>
						<p>Lisa&apos;s painting</p>
						<button><Link href="./Lisa">View Paintings</Link></button>
					</div>
				</div>
			</section>
		
			<section className="about-us" id="aboutus">
				<h1>About us</h1>
				<p>we are 4 different people who come together to paint and talk about our problem over painting. 
				It release our stress and anxiety, and now we have found a new love for painting.</p>
			</section>
			
			<section className= "contact-us"  id="contactus">
				<h1>Contact us</h1>
				<div className= "flex">
					<div className= "contact-form">
					{showSuccessAlert && (
						<div role="alert" className="alert alert-success mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span>Thank you for your message! We will get back to you as soon as possible.</span>
						</div>
					)}
						<form id="contact-form" onSubmit={handleSubmit}>
							<p style={{color: "black"}}>required values are marked(*)</p>
							<input type="text" name="name" id="name" placeholder="Name*" className="input input-bordered" value={name} onChange={(event) => setName(event.target.value)} required />
							<input type="email" name="email" id="email" placeholder="Email*" className="input input-bordered" value={email} onChange={(event) => setEmail(event.target.value)} required /> 
							<textarea id="message" placeholder="Please type your bio and how many paintings you want to be posted on your page*" className="textarea textarea-bordered" value={message}  onChange={(event) => setMessage(event.target.value)} required ></textarea>
							<button type="submit" id="formbutton" className="btn btn-wide m-16 mt-2 hover:bg-green-500 text-white ">Submit</button>
						</form>
					</div>	
				</div>	
			</section>
		</main> 

      <Footer/>
    </>

  );
}