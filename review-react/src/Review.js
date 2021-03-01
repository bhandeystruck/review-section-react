import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

    {/* Need a state to store the reviews */}
    
    {/* This state is used to iterate through the person in data.js */}

    const [index, setIndex] = useState(0);

    {/* Destructing the data that will be passed to this component */}
    const {name, job , image, text} = people[index];


    const checkNumber = (number) =>{
        if(number > people.length - 1){
            return 0
        }
        if(number < 0){
            return people.length-1
        }
        return number;

    }



    const nextPerson = () =>{
        //Increment the index 
        setIndex((index)=>{
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });

    };

    const prevPerson = () => {
        setIndex((index)=>{
            let oldIndex = index - 1;
            return checkNumber(oldIndex);
        });
    };

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        
        if(randomNumber === index){
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
        
    };


    return (
        <article className="review">
            <div className="img-container">
                {/* So the destructured image value is passed to src */}
                <img src={image} alt={name} className="person-img"/>
                <span className="quote-icon">
                    <FaQuoteRight/>
                </span>
            </div>

            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft/>
                </button>
                <button className="prev-btn" onClick={nextPerson}>
                    <FaChevronRight/>
                </button>
            </div>
            <button className="random-btn" onClick={randomPerson}>
                    Surprise Me
                </button>
        </article>
    )
}

export default Review
