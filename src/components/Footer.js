import instagram from '../images/icon-instagram.svg';
import bluesky from '../images/icon-bluesky.svg';
import tiktok from '../images/icon-tiktok.svg';

function Footer() {
    return(
        <article id='footer' className='py-10 text-center px-4 sm:px-8  md:px-24 sm:flex sm:flex-row-reverse sm:items-center sm:justify-between'>
                <ul className='flex gap-6 justify-center items-center'>
                    <li className='cursor-pointer'><img src={instagram} alt='instagram-image' /></li>
                    <li className='cursor-pointer'><img src={bluesky} alt='bluesky-image' /></li>
                    <li className='cursor-pointer'><img src={tiktok} alt='tiktok-image' /></li>
                </ul>
                <p className='mt-4 mb-2 text-preset7 text-neutral-900 font-medium'>Made with ❤️ and 🥑</p>
            </article>
    );
}

export default Footer;