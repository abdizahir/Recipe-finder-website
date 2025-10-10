import { Link } from 'react-router-dom';

import heroSmallImage from '../images/image-home-hero-small.webp';
import heroLargeImage from '../images/image-home-hero-large.webp';
import squiggle from '../images/pattern-squiggle-1.svg';
import wholeFood from '../images/icon-whole-food-recipes.svg';
import minimum from '../images/icon-minimum-fuss.svg';
import serchIn from '../images/icon-search-in-seconds.svg';
import realLifeSmallImage from '../images/image-home-real-life-small.webp'
import realLifeLargeImage from '../images/image-home-real-life-large.webp'
import fork from '../images/pattern-fork.svg';
import knife from '../images/pattern-knife.svg';



import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
    return(
        <>
        <section id="home" className="relative">
            <Header />
            <article id="hero" className="mt-12 px-8 relative md:px-20">
                <div id="hero-content" className='md:text-center'>
                    <h1 className="text-preset2 md:text-preset1 text-neutral-900 font-extrabold"><span className="highlight">Healthy</span> meals, zero fuss</h1>
                    <p className="mt-4 mb-8 text-preset5 md:w-[50%] md:mx-auto text-neutral-800 font-medium">Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no guesswork.</p>
                    <button className="relative z-50 cursor-pointer w-[192px] bg-neutral-900 text-neutral-0 text-preset5 rounded-lg py-3">
                        <Link to="/about">Start exploring</Link>
                    </button>
                </div>
                <div id='hero-image' className='md:px-10'>
                    <picture>
                        <source media='(min-width: 540px)' srcSet={heroLargeImage} />
                        <img src={heroSmallImage} alt="Hero-image" className='mt-10 md:mt-20 relative  z-20 border-[5px] md:border-[8px] border-neutral-0 rounded-md md:rounded-2xl' />
                    </picture>
                    <img src={squiggle} alt='squiggle-image' className='squiggle absolute ] sm:top-[250px]  -left-1 z-1' />
                </div>
            </article>
            <article id='features' className='py-16 md:py-24 sm:py-20 px-8 md:px-20'>
                <h1 className='text-preset2_mobile sm:text-preset2  text-neutral-900 font-extrabold mb-8 sm:mb-12'>What you’ll get</h1>
                <div id='features-list' className='md:flex md:items-center md:justify-between md:gap-8'>
                    <div>
                    <img src={wholeFood} alt='whole-food-image' className='mb-5 sm:mb-6 bg-neutral-0 py-[13px] px-[18px] rounded-lg' />
                    <h3 className='text-preset3 font-bold text-neutral-900 mb-2'>Whole-food recipes</h3>
                    <p className='text-preset5 text-neutral-800 font-medium'>Each dish uses everyday, unprocessed ingredients.</p>
                </div>
                <div className='my-6 sm:my-8'>
                    <img src={minimum} alt='whole-food-image' className='mb-5 bg-neutral-0 py-[9px] px-[10px] rounded-lg' />
                    <h3 className='text-preset3 font-bold text-neutral-900 mb-2'>Minimum fuss</h3>
                    <p className='text-preset5 text-neutral-800 font-medium'>All recipes are designed to make eating healthy quick and easy.</p>
                </div>
                <div>
                    <img src={serchIn} alt='whole-food-image' className='mb-5 bg-neutral-0 py-[10px] px-[10px] rounded-lg' />
                    <h3 className='text-preset3 font-bold text-neutral-900 mb-2'>Search in seconds</h3>
                    <p className='text-preset5 text-neutral-800 font-medium'>Filter by name or ingredient and jump straight to the recipe you need.</p>
                </div>
                </div>
            </article>
            <hr className='bg-neutral-300 md:mx-20' />
            <article id='real-life' className='py-16 sm:py-20 md:py-24 px-8 md:px-20 md:flex md:items-center md:gap-12'>
                <div>
                    <h1 className='text-preset2_mobile sm:text-preset2 text-neutral-900 font-extrabold'>Built for real life</h1>
                <p className='text-preset5 text-neutral-800 font-medium my-5'>
                    Cooking shouldn’t be complicated. These recipes come in under <span className='text-neutral-800 font-bold highlight'>30 minutes</span> 
                        of active time, fit busy schedules, and taste good enough to repeat. 
                </p>
                <p className='text-preset5 text-neutral-800 font-medium'>Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.</p>
                </div>
                <picture>
                    <source media='(min-width: 540px)' srcSet={realLifeLargeImage} />
                    <img src={realLifeSmallImage} alt='realLife-image' className='rounded-lg mt-8' />
                </picture>
            </article>
            <article id='browse-recipe' className='mx-8 md:mx-20 py-12 sm:py-20 md-py-24 text-center bg-neutral-200 rounded-xl relative overflow-hidden'>
                <h1 className='text-preset2_mobile md:text-preset2 font-extrabold text-neutral-900 relative z-30'>Ready to cook smarter?</h1>
                <p className='text-[21.5px] sm:text-preset5 text-neutral-800 font-medium mb-8 mt-4'>Hit the button, pick a recipe, and get dinner on the table—fast.</p>
                <img src={fork} alt='fork-image' className='hidden sm:block w-[170px] h-[170px] md:w-[300px] md:h-[300px] absolute -bottom-[40px] -left-[50px]' />
                <img src={knife} alt='knife-image' className='hidden sm:block w-[170px] h-[170px] md:w-[300px] md:h-[300px] absolute -top-[60px] md:-top-[2px] -right-[20px] md:-right-[60px]' />
                <Link to="/recipes" className="w-[192px] bg-neutral-900 text-neutral-0 text-preset5 rounded-lg px-4 py-3">Browse recipes</Link>
            </article>
            <Footer />
        </section>
        </>
    );
}

export default Home;