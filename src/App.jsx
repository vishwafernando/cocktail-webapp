import React, { useEffect, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from './components/Navbar.jsx';
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";
import Menu from "./components/Menu.jsx";
import Contact from "./components/Contact.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const showApp = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000); // Delay to allow smooth transition
        };

        if (document.readyState === "complete") {
            showApp();
        } else {
            window.addEventListener("load", showApp);
        }

        return () => {
            window.removeEventListener("load", showApp);
        };
    }, []);

    return (
        <main>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <>
                    <Navbar />
                    <Hero />
                    <Cocktails />
                    <About />
                    <Art />
                    <Menu />
                    <Contact />
                </>
            )}
        </main>
    );
};

export default App;
