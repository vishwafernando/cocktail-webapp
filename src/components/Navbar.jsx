import React from 'react'
import {navLinks} from "../../constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
            }
        });

    navTween.fromTo('nav', { backgroundColor: 'transparent'  }, {
        backgroundColor: '#00000070',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        borderBottom: '1px solid rgba(231, 211, 147, 0.1)',
        duration: 1,
        ease: 'power1.inOut',
    });
    })

    return (
        <nav>
            <div>
                <a href="/" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" />
                    <p>Velvet Pour</p>
                </a>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
