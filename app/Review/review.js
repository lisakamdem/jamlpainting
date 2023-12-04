"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "../Header/_utils/auth-context";

export default function NewReview({onAddReview}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(5);
    const { user} = useUserAuth();




    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            rating,
            name,
            email,
            message,
            date: new Date().toLocaleDateString(),
        };

        console.log(data);
        onAddReview(data);

        setRating(5);
        setName("");
        setEmail("");
        setMessage("");

    };

    const stars = Array.from({ length: 5 }).map((_, index) => (
        
            <input
            key={index}
            type="radio"
            name="rating"
            className={`mask mask-star-2 bg-green-500 ${index < rating ? 'checked' : ''}`}
            onClick={() => setRating(index + 1)}
            />
        
      ));


    return (
        <div>
            <div className="contact-form ml-80 mb-10 mt-8">
                <form id="contact-form" onSubmit={handleSubmit}>
            
                    <div className="rating rating-lg ml-20 ">{stars}</div>
                
                    <div className="form-group">
                        <label htmlFor="name" className="mr-2">Name:</label>
                        <input
                        required
                        type="text"
                        placeholder="Name"
                        className="input input-bordered input-success w-full max-w-xs"
                        id="name"
                        value={name || (user ? user.displayName || "" : "")}
                        onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                
                    <div className="form-group">
                        <label htmlFor="email" className="mr-2">Email:</label>
                        <input
                        required
                        type="email"
                        placeholder="Email"
                        className="input input-bordered input-success w-full max-w-xs"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                        required
                        id="message"
                        className="textarea textarea-success"
                        placeholder="Review message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        />
                    </div>
                
                 
                
                    <button type="submit" className="btn btn-wide text-green-400 bg-black hover:text-black hover:bg-green-400 ml-16">
                        Add review
                    </button>
            
                </form>
            </div>
        </div>
    );


};