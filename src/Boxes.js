import React from "react";
import './Boxes.css';
import { PrimaryBtn, MediaLinks } from "./Utils";

function WorkoutChannels() {
    return (
        <div className="module big-margin-top">
            <h2 role="heading"> WORKOUT ROUTINES </h2>
            <div id="body-parts">
                <div className="body-part">
                    <img src="img/body-part-abs.png" className="body-part__image" />
                    <div className="body-part__text"> ABS </div>
                </div>
                <div className="body-part">
                    <img src="img/body-part-arms.png" className="body-part__image" />
                    <div className="body-part__text"> ARMS </div>
                </div>
                <div className="body-part">
                    <img src="img/body-part-legs.png" className="body-part__image" />
                    <div className="body-part__text"> LEGS </div>
                </div>
                <div className="body-part">
                    <img src="img/body-part-back.png" className="body-part__image" />
                    <div className="body-part__text"> BACK </div>
                </div>
                <div className="body-part">
                    <img src="img/body-part-shoulders.png" className="body-part__image" />
                    <div className="body-part__text"> SHOULDERS </div>
                </div>
                <div className="body-part">
                    <img src="img/body-part-chest.png" className="body-part__image" />
                    <div className="body-part__text"> CHEST </div>
                </div>
                <div className="body-part">
                    <img src="img/body-part-full-body.png" className="body-part__image" />
                    <div className="body-part__text"> FULL-BODY </div>
                </div>
            </div>
            <hr />
            <div id="filters">
                <span className="filter">
                    <div className="filter-title">Skill Level</div>
                    <select className="filter-dropdown">
                        <option>All</option>
                        <option>Advanced</option>
                        <option>Intermediate</option>
                        <option>Beginner</option>
                    </select>
                </span>
                <span className="filter">
                    <div className="filter-title">Exercise Type</div>
                    <select className="filter-dropdown">
                        <option>All</option>
                        <option>Balance</option>
                        <option>Bodyweight</option>
                        <option>Breathing</option>
                        <option>Cardio</option>
                        <option>Flexibility</option>
                        <option>Mobility</option>
                        <option>Muscle Endurance</option>
                        <option>Plyometric</option>
                        <option>Power</option>
                        <option>Prehab</option>
                        <option>Strength Training</option>
                        <option>Stretching</option>
                        <option>Warmup</option>
                    </select>

                </span>
                <div className="filter-right">
                    <PrimaryBtn text="Search" dark />
                    <a href="#">View All Exercises</a>
                </div>
            </div>
        </div>
    );
}

function Newsletter() {
    return (
        <div id='h-module' className="module">

            <div id="h-left">
                <div className="">
                    <div className="h-title">
                        Stay up to date
                    </div>
                    <div className="h-desc">
                        Sign up below to receive our newest workout routines, recipes, news stories, and offers from our partners
                    </div>
                </div>
                <form id="subscribe-form">
                    <input type="email" id="h-input"
                        placeholder="Enter Your Email Address" />
                    <div className="h-radio">
                        I want content for ...
                        <input type="radio" name="gender" value=""/> Both
                        <input type="radio" name="gender" value=""/> Men
                        <input type="radio" name="gender" value=""/> Women
                    </div>
                    <div className="h-checkbox">
                        <input type="checkbox" /> 
                        Muscle and Fitness Promotions
                    </div>
                    <div className="h-checkbox">
                        <input type="checkbox" />
                        Muscle and Fitness Hers Promotions
                    </div>
                    <PrimaryBtn text="Subscribe" dark/>
                </form>
            </div>

            <div id="h-right">
                <div className="h-brand">Muscle & Fitness </div>
                <div style={{fontWeight:"bold"}}>Follow Us</div>
                <MediaLinks/>
            </div>
        </div>
    );
}

export { WorkoutChannels, Newsletter };