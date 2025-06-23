'use client';

import { allCocktails } from '../../constants/index.js'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Menu = () => {
    const contentRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#menu',
                start: 'top center',
            },
        })
        timeline
            .fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 })
            .fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, {
                xPercent: 0, opacity: 1, ease: 'power1.inOut'
            })
            .fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
                yPercent: 0, opacity: 100, ease: 'power1.inOut'
            })
            .fromTo('.details p', { yPercent: 100, opacity: 0 }, {
                yPercent: 0, opacity: 100, ease: 'power1.inOut'
            });
    }, [currentIndex]);

    const totalCocktails = allCocktails.length;

    const goToSlide = (index) => {
        const newIndex = (index + totalCocktails) % totalCocktails;

        setCurrentIndex(newIndex);
    }

    const getCocktailAt = (indexOffset) => {
        return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
    }

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);

    return (
        <section id="menu" aria-labelledby="menu-heading">
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
            <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

            <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
            </h2>

            <nav className="cocktail-tabs grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 sm:mb-32 mb-20 relative z-10 md:max-w-6xl md:mx-auto" aria-label="Cocktail Navigation">
                {allCocktails.map((cocktail, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button
                            key={cocktail.id}
                            onClick={() => goToSlide(index)}
                            className={`font-modern-negra py-3 px-6 border-b-2 transition-all duration-300
          ${isActive
                                ? 'text-yellow border-yellow scale-110 md:text-4xl text-2xl z-10'
                                : 'text-white border-white scale-95 md:text-3xl text-xl opacity-80 hover:text-yellow hover:border-yellow'
                            }`}
                        >
                            {cocktail.name}
                        </button>
                    );
                })}
            </nav>

            <div className="content">
                <div className="arrows">
                    <button className="text-right" onClick={() => goToSlide(currentIndex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                    </button>

                    <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
                        <span>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                    </button>
                </div>

                <div className="cocktail">
                    <img src={currentCocktail.image} alt={currentCocktail.name} className="object-contain"/>
                </div>

                <div className="recipe">
                    <div ref={contentRef} className="info">
                        <p>Recipe for:</p>
                        <p id="title">{currentCocktail.name}</p>
                    </div>

                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Menu
