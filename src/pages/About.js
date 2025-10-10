import Header from "../components/Header";

import aboutSmall from '../images/image-about-our-mission-small.webp';
import aboutLarge from '../images/image-about-our-mission-large.webp';
import bulitIcon from '../images/icon-bullet-point.svg';
import beyondSmall from '../images/image-about-beyond-the-plate-small.webp';
import beyondLarge from '../images/image-about-beyond-the-plate-large.webp';
import Footer from "../components/Footer";
import fork from '../images/pattern-fork.svg';
import knife from '../images/pattern-knife.svg';
import squiggle2 from '../images/pattern-squiggle-2.svg';

import { Link } from "react-router-dom";

function About() {
    return(
        <section id="about">
            <Header />
            <article id="content" className="mt-12 sm:mt-16 md:mt-20 mb-16 sm:mb-20 md:mb-24 px-4 sm:px-8 md:px-20 md:flex md:items-center md:gap-16">
                <div id="content-text" className="md:mt-16 md:w-1/2">
                    <h3 className="text-preset5 text-neutral-900 font-bold bg-orange-500 w-fit py-1 px-[5px] rounded-md">Our mission</h3>
                    <h1 className="text-[38px] sm:text-preset2 md:text-[47px] text-neutral-900 font-extrabold my-6">Help more people cook nourishing meals, more often.</h1>
                    <p className="text-preset5 md:text-preset6 text-neutral-800 font-medium mb-4">Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious.</p>
                    <p className="text-preset5 md:text-preset6 text-neutral-800 font-medium">We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed shortcuts—just honest ingredients and straightforward steps.</p>
                </div>
                <div id="content-images" className="relative md:w-1/2">
                    <picture className="">
                        <source media="(min-width: 540px)" srcSet={aboutLarge} />
                        <img src={aboutSmall} alt="about-mession-image" className="rounded-xl mt-10 sm:mt-16" />
                    </picture>
                    <img src={squiggle2} alt="" className="hidden md:block absolute bottom-[60px] -right-20" />
                </div>
            </article>
            <hr className='bg-neutral-300 px-0' />
            <article id="exist" className="py-12 sm:py-20 md:py-24 px-4 sm:px-8 md:px-20 md:flex md:gap-16">
                <h1 className="text-preset2_mobile sm:text-preset2 md:w-1/3 text-neutral-900 font-extrabold mb-10">Why we exist</h1>
                <div id="exit-info" className="md:w-2/3">
                    <div className="flex items-start gap-5">
                    <img src={bulitIcon} alt="bulitIcon" />
                    <article className="flex flex-col">
                        <h4 className="text-neutral-900 text-preset4 font-bold">Cut through the noise.</h4>
                        <p className="text-[19.5px] sm:text-preset5 text-neutral-800 font-medium">The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.</p>
                    </article>
                </div>
                <div className="flex items-start gap-5 my-6 sm:my-8">
                    <img src={bulitIcon} alt="bulitIcon" />
                    <article className="flex flex-col">
                        <h4 className="text-neutral-900 text-preset4 font-bold text-lef">Empower home kitchens.</h4>
                        <p className="text-[19px] sm:text-preset5 text-neutral-800 font-medium pl- texri">When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.</p>
                    </article>
                </div>
                <div className="flex items-start gap-5">
                    <img src={bulitIcon} alt="bulitIcon" />
                    <article className="flex flex-col">
                        <h4 className="text-neutral-900 text-preset4 font-bold text-lef">Make healthy look good.</h4>
                        <p className="text-[20px] sm:text-preset5 text-neutral-800 font-medium pl- texri">High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.</p>
                    </article>
                </div>
                </div>
            </article>
            <hr className='bg-neutral-300 px-0' />
            <article id="philosophy" className="py-12 sm:py-20 md:py-24 px-4 sm:px-8 md:px-20 md:flex md:gap-16">
                <h1 className="text-preset2_mobile md:w-1/3 sm:text-preset2 text-neutral-900 font-extrabold mb-10">Our food philosophy</h1>
                <div id="philosophy" className="md:w-2/3">
                    <div className="flex items-start gap-5">
                        <img src={bulitIcon} alt="bulitIcon" />
                        <article className="flex flex-col">
                            <h4 className="text-neutral-900 text-preset4 font-bold sm:font-semibold">Whole ingredients first.</h4>
                            <p className="text-preset5 text-neutral-800 font-medium">Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.</p>
                        </article>
                    </div>
                <div className="flex items-start gap-5 my-6 sm:my-8">
                    <img src={bulitIcon} alt="bulitIcon" />
                    <article className="flex flex-col">
                        <h4 className="text-neutral-900 text-preset4 font-bold sm:font-semibold">Flavor without compromise.</h4>
                        <p className="text-preset5 text-neutral-800 font-medium">Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.</p>
                    </article>
                </div>
                <div className="flex items-start gap-5 my-6 sm:my-8">
                    <img src={bulitIcon} alt="bulitIcon" />
                    <article className="flex flex-col">
                        <h4 className="text-neutral-900 text-preset4 font-bold sm:font-semibold">Respect for time.</h4>
                        <p className="text-preset5 text-neutral-800 font-medium">Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.</p>
                    </article>
                </div>
                <div className="flex items-start gap-5">
                    <img src={bulitIcon} alt="bulitIcon" />
                    <article className="flex flex-col">
                        <h4 className="text-neutral-900 text-preset4 font-bold sm:font-semibold">Sustainable choices.</h4>
                        <p className="text-preset5 text-neutral-800 font-medium">Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.</p>
                    </article>
                </div>
                </div>
            </article>
            <hr className='bg-neutral-300 px-0' />
            <article id="beyond" className="py-12 sm:py-20 md:py-24 px-4 sm:px-8 md:px-20 md:flex md:gap-16">
                <div id="beyond-text" className="md:mt-8">
                    <h1 className="text-preset2_mobile sm:text-preset2 text-neutral-900 font-extrabold">Beyond the plate</h1>
                    <p className="text-preset5 text-neutral-800 font-medium mt-5 mb-3">We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:</p>
                    <ul className="list-disc pl-6">
                        <li className="text-preset5 mm:text-preset6 text-neutral-800 font-medium ">Encourage family dinners and social cooking.</li>
                        <li className="text-preset5 mm:text-preset6 text-neutral-800 font-medium ">Reduce reliance on single-use packaging and delivery waste.</li>
                        <li className="text-preset5 mm:text-preset6 text-neutral-800 font-medium ">Spark curiosity about seasonal produce and local agriculture.</li>
                    </ul>
                </div>
                <picture>
                    <source media="(min-width: 540px)" srcSet={beyondLarge} />
                    <img src={beyondSmall} alt="beyond-image" className="mt-8 sm:mt-10 rounded-xl" />
                </picture>
            </article>
            <article id='browse-recipe' className='mx-8 md:mx-20 py-12 sm:py-20 md-py-24 text-center bg-neutral-200 rounded-xl relative overflow-hidden'>
                <h1 className='text-preset2_mobile md:text-preset2 font-extrabold text-neutral-900 relative z-30'>Ready to cook smarter?</h1>
                <p className='text-[21.5px] sm:text-preset5 text-neutral-800 font-medium mb-8 mt-4'>Hit the button, pick a recipe, and get dinner on the table—fast.</p>
                <img src={fork} alt='fork-image' className='hidden sm:block w-[170px] h-[170px] md:w-[300px] md:h-[300px] absolute -bottom-[40px] -left-[50px]' />
                <img src={knife} alt='knife-image' className='hidden sm:block w-[170px] h-[170px] md:w-[300px] md:h-[300px] absolute -top-[60px] md:-top-[2px] -right-[20px] md:-right-[60px]' />
                <button className="w-[192px] bg-neutral-900 text-neutral-0 text-preset5 rounded-lg py-3">
                    <Link to="/recipes">Browse recipes</Link>
                </button>
            </article>
        <Footer />
        </section>
    );
}

export default About;