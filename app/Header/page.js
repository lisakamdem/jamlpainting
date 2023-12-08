'use client';
import Link from "next/link";
import "../main.css";
import { useUserAuth } from "./_utils/auth-context";
import React, { useState } from "react";

export default function Header() {

	const {user,gitHubSignIn, firebaseSignOut, googleSignIn } = useUserAuth();
    const[isNavMenu, setIsNavMenu] = useState(false);

	const handleGitHubSignIn = async () => {
		await gitHubSignIn();
	};

	const handleGoogleSignIn = async () => {
		await googleSignIn();
	};

	const handleSignOut = async () => {
		await firebaseSignOut();
	}

    const toggleNavMenu = () => {
		var navMenu = document.getElementById("nav-menu-container");
		navMenu.style.display = navMenu.offsetParent === null ? "block" : "none";
        setIsNavMenu(!isNavMenu);
    };


	
    return(
        <header>
				<div className ="flex">
					<div className ="logo">
						<Link href="/">J.A.M.L Paintings</Link>
					</div>
					<nav>
						<button id="nav-toggle" className="hamburger-menu" onClick={() => { toggleNavMenu(); }}>
							<span className="strip"></span>
							<span className="strip"></span>
							<span className="strip"></span>
						</button>
							<ul id= "nav-menu-container" 
							 >
								<li><Link href="/">Home</Link></li>
								<li className="nested">
									<Link href="#boxes">Artist</Link>
									<ul>
										<li><Link href="/Lisa">Lisa</Link></li>
										<li><Link href="/Michelle">Michelle</Link></li>
										<li><Link href="/John">John</Link></li>
										<li><Link href="/Axel">Axel</Link></li>
									</ul>
								</li>
								<li><Link href="/#aboutus">About Us</Link></li>
								<li><Link href="/#contactus">Contact Us</Link></li>
								<li><Link href="/favorite">Favorites</Link></li>
								<li><a href="RP.html">Reference page</a></li>
								<li>
									{user ? (
										<button className="text-xs" style={{color: "rgb(173,216,230)"}} onClick={handleSignOut}>
											Welcome, {user.displayName ? `${user.displayName} (${user.email})` : user.email} Sign Out
										</button>
									) : (
											<div className="nested">
												<button className="text-sm text-black" style={{color: "rgb(173,216,230)"}}>Sign In</button>
												<ul>
													<li>
														<a className="text-xs" onClick={handleGitHubSignIn}>
															GitHub
														</a>
													</li>
													<li>
														<a className="text-xs" onClick={handleGoogleSignIn}>
															Google
														</a>
													</li>
												</ul>
											</div>
										)}
								</li>
							</ul>	
					</nav>
				</div>
		</header>
    );
}