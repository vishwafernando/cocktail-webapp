import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + Math.random() * 10;
                return newProgress > 100 ? 100 : newProgress;
            });
        }, 400);
        
        return () => clearInterval(timer);
    }, []);

    // Helper function for bubble animation styles
    const getBubbleStyle = (topBase, divisor, leftPos, duration, delay = 0) => ({
        top: `${topBase - (progress/divisor)}px`, 
        left: leftPos,
        animationDuration: `${duration}s`,
        ...(delay && { animationDelay: `${delay}s` })
    });

    // Helper function for decorative elements
    const getDecorativeElementStyle = (delay = 0) => 
        delay ? { animationDelay: `${delay}s` } : {};

    return (
        <div className="flex items-center justify-center h-screen bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="noisy"></div>
            <div className="absolute inset-0 radial-gradient z-0 animate-pulse-slow"></div>
            
            {/* Main content container */}
            <div className="text-center p-8 rounded-xl bg-black/40 backdrop-blur-sm border border-[#e7d393]/10 glow-effect z-10 relative">
                {/* Cocktail glass animation */}
                <div className="relative mx-auto mb-8">
                    <div className="w-24 h-28 mx-auto relative">
                        {/* Glass outline with shimmer effect */}
                        <div className="absolute w-24 h-24 border-2 border-[#e7d393] rounded-b-full top-4 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e7d393]/30 to-transparent shimmer-effect"></div>
                        </div>
                        
                        {/* Glass stem with glow */}
                        <div className="absolute w-8 h-6 bg-[#e7d393] rounded-full bottom-0 left-1/2 transform -translate-x-1/2 shadow-[0_0_15px_rgba(231,211,147,0.5)]"></div>
                        
                        {/* Liquid animation with wave effect */}
                        <div 
                            className="absolute w-20 bg-gradient-to-r from-[#e7d393] to-[#a18e4f] rounded-b-full left-2 top-16"
                            style={{
                                height: `${Math.min(18, 10 + (progress/10))}px`,
                                transition: 'height 0.8s ease-out'
                            }}
                        >
                            <div className="absolute w-full h-2 bg-[#e7d393]/50 rounded-full top-0 left-0 animate-wave"></div>
                        </div>
                        
                        {/* Bubbles */}
                        <div className="absolute w-2 h-2 bg-white/80 rounded-full animate-float" 
                            style={getBubbleStyle(14, 25, '8px', 2.5)}></div>
                        <div className="absolute w-1.5 h-1.5 bg-white/80 rounded-full animate-float" 
                            style={getBubbleStyle(16, 20, '14px', 3.2, 0.3)}></div>
                        <div className="absolute w-1 h-1 bg-white/80 rounded-full animate-float" 
                            style={getBubbleStyle(12, 22, '16px', 2.8, 0.7)}></div>
                        
                        {/* Straw */}
                        <div className="absolute w-1 h-16 bg-gradient-to-b from-[#a18e4f] to-[#e7d393] rotate-12 top-2 right-4 animate-sway origin-bottom"></div>
                        
                        {/* Ice cube */}
                        <div className="absolute w-4 h-4 border border-white/30 rounded bg-white/10 backdrop-blur-sm top-12 left-6 rotate-12 animate-melt"></div>
                    </div>
                </div>
                
                {/* Text and loading indicators */}
                <p className="text-xl font-modern-negra text-gradient-gold mb-4">Mixing your cocktails...</p>
                
                {/* Progress bar */}
                <div className="w-full h-1 bg-[#e7d393]/20 rounded-full mb-4 overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-[#a18e4f] to-[#e7d393] rounded-full"
                        style={{ width: `${progress}%`, transition: 'width 0.4s ease-out' }}
                    ></div>
                </div>
                
                {/* Loading dots */}
                <div className="flex justify-center space-x-2 mt-2">
                    <div className="w-2 h-2 bg-[#e7d393] rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-[#e7d393]/80 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-[#e7d393]/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                
                {/* Light effect */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-[#e7d393]/10 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>
            
            {/* Decorative corner elements */}
            <div className="absolute bottom-10 left-10 w-40 h-40 opacity-30 pointer-events-none animate-float-slow">
                <div className="w-full h-full border-l-2 border-b-2 border-[#e7d393]/20 rounded-bl-full"></div>
            </div>
            <div className="absolute top-10 right-10 w-40 h-40 opacity-30 pointer-events-none animate-float-slow" 
                style={getDecorativeElementStyle(1)}>
                <div className="w-full h-full border-r-2 border-t-2 border-[#e7d393]/20 rounded-tr-full"></div>
            </div>
            
            {/* Twinkling stars */}
            <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-[#e7d393]/40 rounded-full animate-twinkle"></div>
            <div className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-[#e7d393]/40 rounded-full animate-twinkle" 
                style={getDecorativeElementStyle(0.5)}></div>
            <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-[#e7d393]/40 rounded-full animate-twinkle" 
                style={getDecorativeElementStyle(1)}></div>
        </div>
    );
};

export default LoadingScreen;
