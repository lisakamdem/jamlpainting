"use client";
import Link from "next/link";
import "../main.css";
import Page from "../page";
import React, { useState } from "react";
export default function Header() {

    const[isNavMenu, setIsNavMenu] = useState(false);

    const toggleNavMenu = () => {
        setIsNavMenu(!isNavMenu);
    };


	const toggleNavMenuJS = () => {
		var navMenu = document.getElementById("nav-menu-container");
		navMenu.style.display = navMenu.offsetParent === null ? "block" : "none";
	  };
    return(
        <header>
				<div class ="flex">
					<div class ="logo">
						<Link href="../page">J.A.M.L Paintings</Link>
					</div>
					<nav>
						<button id="nav-toggle" className="hamburger-menu" onClick={() => { toggleNavMenu(); toggleNavMenuJS(); }}>
							<span class="strip"></span>
							<span class="strip"></span>
							<span class="strip"></span>
						</button>
							<ul id= "nav-menu-container" className={isNavMenu ? 'show' : ''} >
							<li><Link href="../page">Home</Link></li>
							<li className="nested">
								<Link href="#boxes">Artist</Link>
								<ul>
								<li><Link href="/Lisa's Page/Lisa">Lisa</Link></li>
								<li><Link href="/Michelle's Page/Michelle">Michelle</Link></li>
								<li><a href="john's page.html">John</a></li>
								<li><a href="axel's page.html">Axel</a></li>
								</ul>
							</li>
							<li><Link href="#aboutus">About Us</Link></li>
							<li><Link href="#contactus">Contact Us</Link></li>
							<li><a href="RP.html">Reference page</a></li>
							</ul>	
					</nav>
				</div>
		</header>
    );
}