import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Header from "../components/Header";
import down from '../images/icon-chevron-down.svg';
import search from '../images/icon-search.svg';
import cooktime from '../images/icon-cook-time.svg';
import serving from '../images/icon-servings.svg';
import preptime from '../images/icon-prep-time.svg';

import DATA from '../data/data.json';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Recipes() {
    const [focus, setFocus] = useState(true);
    const [maxCookTime, setMaxCookTime] = useState(false);
    const [maxPrepTime, setMaxPrepTime] = useState(false);
    const [selectedPrepTime, setSelectedPrepTime] = useState('10');
    const [selectedCookTime, setSelectedCookTime] = useState('20');
    const [searchTerm, setSearchTerm] = useState('');


    function handleFoucus() {
        setFocus(false);
    }

    function handleBlur() {
        setFocus(true);
    }

    function handleSerch(e) {
        setSearchTerm(e.target.value);
    }

    function handlePrepTimeChange(e) {
        setSelectedPrepTime(e.target.value);
    }   

    function handleCookTimeChange(e) {
        setSelectedCookTime(e.target.value);
    }   

    function handleMaxCook() {
        setMaxCookTime(prev => !prev);
    }
    function handleMaxPrep() {
        setMaxPrepTime(prev => !prev);
    }
    
    function clearMaxPrep() {
        setSelectedPrepTime('');
    }
    function clearMaxCook() {
        setSelectedCookTime('');
    }

    return(
        <>
            <Header />
        <section className="px-4 sm:px-8 md:px-24">
            <article id="content" className="py-12 sm:pt-16 sm:pb-12 md:text-center">
                <h1 className='text-preset2_mobile sm:text-preset2  text-neutral-900 font-extrabold mb-3'>Explore our simple, healthy recipes</h1>
                <p className="text-preset5 md:w-[63%] md:mx-auto text-neutral-800 font-medium'">Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.</p>
            </article>
            <article id="filter" className="sm:flex sm:items-center sm:justify-between sm:gap-1 sm:mb-6">
                <div id="times" className="sm:flex sm:items-center sm:justify-between sm:gap-1 sm:w-1/2 md:w-1/3 ">
                    <div id="Prep" className="sm:w-1/2 sm:relative">
                    <button className="w-[90%] sm:h-[47px] flex items-center justify-center bg-neutral-0 text-neutral-900 text-preset5 rounded-xl py-2 mt-3 sm:mt-0 mb-5 sm:mb-0 mx-auto" onClick={handleMaxCook}>
                        <div className="flex items-center justify-center gap-4 sm:gap-1">
                            <span className="sm:text-preset8">Max Prep Time</span>
                            <motion.img
                                animate={{rotate: maxCookTime ? 180 : 0}}
                                src={down} alt="down-icon" />
                        </div>
                    </button>
                    <AnimatePresence>
                        {maxCookTime && (<motion.article 
                                variants={{
                                    hidden: {opacity: 0, y: 30}, 
                                    visible: {opacity: 1, y: 0}, 
                                    exit: {opacity: 0, y: 30}
                                }}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                id="cooktime-radio" 
                                className="flex flex-col items-start justify-center text-left m-auto bg-white w-[190px] h-[140px] px-3 mt-2 rounded-md sm:absolute sm:z-20">
                            <div className="flex items-center gap-1">
                                <input className="m-1 p-5" type="radio" id="zero" value="0" checked={selectedPrepTime === '0'} onChange={handlePrepTimeChange} />
                                <label className="text-preset6" for="zero">0 minutes</label>
                            </div>
                            <div className="flex items-center gap-1">
                                <input className="m-1 p-5" type="radio" id="five" value="5" checked={selectedPrepTime === '5'} onChange={handlePrepTimeChange} />
                                <label className="text-preset6" for="five">5 minutes</label>
                            </div>
                            <div className="flex items-center gap-1">
                                <input className="m-1 p-5" type="radio" id="ten"  value="10" checked={selectedPrepTime === '10'} onChange={handlePrepTimeChange} />
                                <label className="text-preset6" for="ten">10 minutes</label>
                            </div>
                            <button className="pl-1 mt-1" onClick={clearMaxPrep}>Clear</button>
                        </motion.article>)}
                    </AnimatePresence>
                    </div>
                    <div id="Cook" className="sm:w-1/2 sm:relative">
                        <button className="w-[90%] sm:h-[47px] flex items-center justify-center bg-neutral-0 text-neutral-900 text-preset5 rounded-xl py-2 mt-3 sm:mt-0 mb-5 sm:mb-0 mx-auto" onClick={handleMaxPrep}>
                        <div className="flex items-center justify-center gap-4 sm:gap-1">
                            <span className="sm:text-preset8">Max Cook Time</span>
                            <motion.img
                                animate={{rotate: maxPrepTime ? 180 : 0}}
                                src={down} alt="down-icon" />
                        </div>
                        </button>
                        <AnimatePresence>
                            {maxPrepTime && (<motion.article 
                                        variants={{
                                            hidden: {opacity: 0, y: 30}, 
                                            visible: {opacity: 1, y: 0}, 
                                            exit: {opacity: 0, y: 30}
                                        }}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit" id="cooktime-radio" className="flex flex-col items-start justify-center text-left mx-auto bg-white w-[190px] h-[190px] px-3 mt-2 rounded-md sm:absolute sm:z-20">
                                <div className="flex items-center gap-1">
                                    <input className="m-1 p-5" type="radio" id="zero" value="0" checked={selectedCookTime === '0'} onChange={handleCookTimeChange} />
                                    <label className="text-preset6" for="zero">0 minutes</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input className="m-1 p-5" type="radio" id="five" value="5" checked={selectedCookTime === '5'} onChange={handleCookTimeChange} />
                                    <label className="text-preset6" for="five">5 minutes</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input className="m-1 p-5" type="radio" id="ten"  value="10" checked={selectedCookTime === '10'} onChange={handleCookTimeChange} />
                                    <label className="text-preset6" for="ten">10 minutes</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input className="m-1 p-5" type="radio" id="fifteen"  value="15" checked={selectedCookTime === '15'} onChange={handleCookTimeChange} />
                                    <label className="text-preset6" for="fifteen">15 minutes</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input className="m-1 p-5" type="radio" id="twenty" value="20" checked={selectedCookTime === '20'} onChange={handleCookTimeChange} />
                                    <label className="text-preset6" for="twenty">20 minutes</label>
                                </div>
                                <button className="pl-1 mt-1" onClick={clearMaxCook}>Clear</button>
                            </motion.article>)}
                        </AnimatePresence>
                    </div>
                </div>
                <div id="search" className="relative mb-6 sm:mb-0 sm:w-1/2 md:w-1/4">
                    <input type="text" className="w-[90%] sm:w-[100%] sm:h-[47px] flex items-center justify-center rounded-xl px-10 py-2 mt-5 sm:mt-0 mx-auto text-preset8 font-semibold text-neutral-900" placeholder="Search by name or ingredient…" onChange={handleSerch} onFocus={handleFoucus} onBlur={handleBlur} />
                    {focus && 
                        (<img src={search} alt="search-icon" className="w-fit absolute top-2 sm:top-3 left-7 sm:left-2" />)
                    }
                </div>
            </article>
            <article id="recipe-cards" className="md:grid md:grid-cols-3 md:gap-8">
                {DATA
                .filter(
                    (card) => 
                        (card.prepMinutes <= +selectedPrepTime  && card.cookMinutes <= +selectedCookTime) && 
                        (card.title.toLowerCase().includes(searchTerm.toLowerCase()) || card.ingredients.find(c =>  c.toLowerCase().includes(searchTerm.toLowerCase())))
                    
                    )
                    .map((card) => (
                    <li key={card.id} className="list-none mb-8 sm:mb-0 md:mb-8 bg-neutral-0 rounded-2xl md:rounded-lg p-2 ">
                        <picture>
                            <source media="(min-width: 768px)" srcSet={card.image.small} />
                            <source media="(min-width: 540px)" srcSet={card.image.large} />
                            <img src={card.image.small} alt={card.title} className="object-contain rounded-2xl md:rounded-md" />
                        </picture>
                        <div className="px-3 md:px-1">
                            <p className="text-preset5 text-neutral-900 font-bold mt-3 overflow-hidden text-ellipsis whitespace-nowrap">{card.title}</p>
                            <p className="text-preset7 text-neutral-800 font-medium my-3 line-clamp-2">{card.overview}</p>
                            <div className="grid grid-cols-2 gap-1 sm:flex sm:items-center sm:gap-4 mb-3 sm:my-4 md:grid md:grid-cols-2 md:gap-1">
                                <ul className="flex items-center gap-1">
                                    <li><img src={serving} alt="serving-icon" /></li>
                                    <li className="font-medium">Servings: {card.servings}</li>
                                </ul>
                                <ul className="flex items-center gap-1">
                                    <li><img src={preptime} alt="prep-icon" /></li>
                                    <li className="font-medium">Prep: {card.prepMinutes} mins</li>
                                </ul>
                                <ul className="flex items-center gap-1">
                                    <li><img src={cooktime} alt="cook-icon" /></li>
                                    <li className="font-medium">Cook: {card.cookMinutes} mins</li>
                                </ul>
                            </div>
                        </div>
                        <Link to={`/recipes/${card.id}`} className="w-full flex items-center justify-center bg-neutral-900 text-neutral-0 text-preset7 font-bold rounded-3xl py-3 mx-auto">View Recipe</Link>
                    </li>
                ))}
            </article>
        </section>
        <Footer />
        </>
    );
}

export default Recipes;