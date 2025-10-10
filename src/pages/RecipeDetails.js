import { useParams, Link } from "react-router-dom";
import DATA from '../data/data.json';
import Header from "../components/Header";

import cooktime from '../images/icon-cook-time.svg';
import serving from '../images/icon-servings.svg';
import preptime from '../images/icon-prep-time.svg';
import bulitIcon from '../images/icon-bullet-point.svg';
import Footer from "../components/Footer";

function Recipe() {
    const {recipeId } = useParams();
    const recipe = DATA.find(r => String(r.id) === String(recipeId));

    const shuffled = [...DATA].sort(() => Math.random() - 0.5);

    return(
        <>
        <Header />
        <section id="recipe-details" className="px-4 sm:px-8 md:px-24">
            <div className="md:flex md:gap-10">
                <article id="recip-title" className="pt-12 md:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                        <p className="text-preset6 text-neutral-900 font-semibold opacity-60">Recipes  </p>
                        <span className="text-preset6 text-neutral-900 font-semibold">{` / ${recipe.title}`}</span>
                    </div>
                    <picture>
                        <source media="(min-width: 768px)" srcSet={recipe.image.small} />
                        <source media="(min-width: 540px)" srcSet={recipe.image.large} />
                        <img src={recipe.image.small} alt={recipe.title} className="rounded-xl mb-10" />
                    </picture>    
                </article>
                <article id="recip-info" className="pb-12 md:mt-20 md:w-1/2">
                    <h1 className="text-preset2_mobile font-extrabold text-neutral-900">{recipe.title}</h1>
                    <p className="text-preset5 text-neutral-800 font-medium my-5">{recipe.overview}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:flex sm:items-center sm:gap-4 mb-5">
                        <ul className="flex items-center gap-2">
                            <li><img src={serving} alt="serving-icon" /></li>
                            <li>Servings: {recipe.servings}</li>
                        </ul>
                        <ul className="flex items-center gap-2">
                            <li><img src={preptime} alt="prep-icon" /></li>
                            <li>Prep: {recipe.prepMinutes} mins</li>
                        </ul>
                        <ul className="flex items-center gap-2">
                            <li><img src={cooktime} alt="cook-icon" /></li>
                            <li>Cook: {recipe.cookMinutes} mins</li>
                        </ul>
                    </div>
                    <div id="ingredients" className="mb-5">
                        <h1 className="text-preset4 text-neutral-900 font-bold mb-4">Ingredients:</h1>
                            {recipe.ingredients.map(r => (
                                <>
                            <div key={r} className="flex items-center gap-5">
                            <img src={bulitIcon} alt="bulitIcon" className="sm:w-6 sm:h-6" />
                            <article className="flex flex-col">
                                <p className="text-preset5 text-neutral-800 font-medium">{r}</p>
                            </article>
                            </div>
                                </>
                            ))}
                    </div>
                    <div id="instructions">
                        <h1 className="text-preset4 text-neutral-900 font-bold mb-4">Instructions:</h1>
                            {recipe.instructions.map(r => (
                                <>
                            <div key={r} className="flex items-start  first:items-center gap-5">
                                <img src={bulitIcon} alt="bulitIcon" className="sm:w-6 sm:h-6" />
                                <article className="flex flex-col">
                                    <p className="text-[18.5px] text-neutral-800 font-medium">{r}</p>
                                </article>
                            </div>
                                </>
                            ))}
                    </div>
                </article>
            </div>
            <hr className=' bg-neutral-300 h-[1px] md:-mx-20' />
            <h1 className="font-bold text-preset3 mt-12 md:mt-16 text-neutral-900 mb-6">More recipes</h1>
            <article id="more-recipe" className="pb-4 md:grid md:grid-cols-3 md:gap-8 ">
                {shuffled.map((card, index) =>  (
                    index < 3 && <li key={card.id} className="list-none mb-8 bg-neutral-0 rounded-2xl p-2">
                        <picture>
                            <source media="(min-width: 540px)" srcSet={card.image.large} />
                            <img src={card.image.small} alt={card.title} className=" rounded-2xl" />
                        </picture>
                        <div className="px-3">
                            <h3 className="text-preset5 text-neutral-900 font-bold mt-3 overflow-hidden text-ellipsis whitespace-nowrap">{card.title}</h3>
                            <p className="text-preset7 text-neutral-800 font-medium my-3 line-clamp-2">{card.overview}</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:flex sm:items-center sm:gap-4 mb-3 md:grid md:grid-cols-2">
                                <ul className="flex items-center gap-2">
                                    <li><img src={serving} alt="serving-icon" /></li>
                                    <li>Servings: {card.servings}</li>
                                </ul>
                                <ul className="flex items-center gap-2">
                                    <li><img src={preptime} alt="prep-icon" /></li>
                                    <li>Prep: {card.prepMinutes} mins</li>
                                </ul>
                                <ul className="flex items-center gap-2">
                                    <li><img src={cooktime} alt="cook-icon" /></li>
                                    <li>Cook: {card.cookMinutes} mins</li>
                                </ul>
                            </div>
                        </div>
                    <button className="w-full flex items-center justify-center bg-neutral-900 text-neutral-0 text-preset7 font-bold rounded-3xl py-3 mx-auto">
                        <Link to={`/recipes/${card.id}`}>View Recipe</Link>
                    </button>
                    </li>
                ))}
            </article>
        </section>
        <hr className='bg-neutral-300' />
        <Footer />
        </>        
    );
}

export default Recipe;