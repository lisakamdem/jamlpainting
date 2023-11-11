/*import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}*/

"use client";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import React, { useState } from "react";
import Link from "next/link";

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
					<img src="/img/_Logo.png" alt="J.A.M.L Paintings image"/>
				</section>
				
				<section class= "artist-boxes" id="boxes">
					<div class ="flex">
						<div class="box">
							<h2>John</h2>
							<p>John's painting</p>
              <button><Link href="/John's Page/John">View Paintings</Link></button>
						</div>
						<div class="box box2">
							<h2>Axel</h2>
							<p>Axel's painting</p>
							<button><a href="axel's page.html">View Paintings</a></button>
						</div>
						<div class="box box3">
							<h2>Michelle</h2>
							<p>Michelle's painting</p>
							<button><Link href="./Michelle's Page/Michelle">View Paintings</Link></button>
						</div>
						<div class="box">
							<h2>Lisa</h2>
							<p>Lisa's painting</p>
							<button><Link href="./Lisa/Lisa">View Paintings</Link></button>
						</div>
              <div class="card w-96 bg-base-100 shadow-xl image-full">
              <figure><img src="./img/_Logo.png" alt="Shoes" /></figure>
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