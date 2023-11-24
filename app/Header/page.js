'use client';
import Link from "next/link";
import "../main.css";
import { useUserAuth } from "./_utils/auth-context";
import React, { useState } from "react";

export default function Header() {

	const {user,gitHubSignIn, firebaseSignOut } = useUserAuth();
    const[isNavMenu, setIsNavMenu] = useState(false);

	const handleSignIn = async () => {
		await gitHubSignIn();
	};
	const handleSignOut = async () => {
		await firebaseSignOut();
	}

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
								<li><Link href="./Lisa">Lisa</Link></li>
								<li><Link href="/Michelle's Page/Michelle">Michelle</Link></li>
								<li><a href="john's page.html">John</a></li>
								<li><a href="axel's page.html">Axel</a></li>
								</ul>
							</li>
							<li><Link href="#aboutus">About Us</Link></li>
							<li><Link href="#contactus">Contact Us</Link></li>
							<li><Link href="/favorite">Favorites</Link></li>
							<li><a href="RP.html">Reference page</a></li>
							<li>
								{user ? (
									<button className= "btn" onClick={handleSignOut}>Welcome, {user.displayName ? `${user.displayName} (${user.email})` : user.email}
									 Sign Out</button>
								) : (
									<button className= "btn btn-xs text-green-400 bg-black  hover:text-black hover:bg-green-400" onClick={handleSignIn}>Sign In with GitHub</button>
								)}
								</li>
							</ul>	
					</nav>
				</div>
		</header>
    );
}