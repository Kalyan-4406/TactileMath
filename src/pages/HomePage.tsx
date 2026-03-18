import React, { useEffect, useRef } from 'react';

const HomePage: React.FC<{ onStart: () => void }> = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const particles: HTMLDivElement[] = [];

        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            const size = Math.random() * 4 + 2;
            p.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255,255,255,${Math.random() * 0.5 + 0.1});
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: floatParticle ${Math.random() * 10 + 8}s ease-in-out infinite;
                animation-delay: -${Math.random() * 10}s;
            `;
            container.appendChild(p);
            particles.push(p);
        }

        return () => {
            particles.forEach(p => p.remove());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;900&display=swap');

                @keyframes floatParticle {
                    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
                    33% { transform: translateY(-40px) translateX(20px); opacity: 0.8; }
                    66% { transform: translateY(20px) translateX(-15px); opacity: 0.5; }
                }

                @keyframes glowPulse {
                    0%, 100% { opacity: 0.6; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.05); }
                }

                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }

                @keyframes letterReveal {
                    0% { opacity: 0; transform: translateY(60px) rotateX(-30deg); filter: blur(8px); }
                    100% { opacity: 1; transform: translateY(0) rotateX(0deg); filter: blur(0); }
                }

                @keyframes subtitleFade {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }

                @keyframes orbitRing {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes orbitRingReverse {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }

                @keyframes dotGlow {
                    0%, 100% { box-shadow: 0 0 6px 2px rgba(167,139,250,0.8); }
                    50% { box-shadow: 0 0 14px 5px rgba(167,139,250,1); }
                }

                .tactile-title {
                    font-family: 'Inter', sans-serif;
                    font-weight: 900;
                    font-size: clamp(3rem, 10vw, 7rem);
                    letter-spacing: -0.03em;
                    background: linear-gradient(90deg, #c4b5fd, #818cf8, #6ee7b7, #818cf8, #c4b5fd);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: shimmer 4s linear infinite;
                    display: inline-block;
                    transform-style: preserve-3d;
                    perspective: 800px;
                }

                .letter {
                    display: inline-block;
                    animation: letterReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
                }

                .subtitle {
                    font-family: 'Inter', sans-serif;
                    font-weight: 300;
                    font-size: clamp(0.9rem, 2vw, 1.1rem);
                    color: rgba(196, 181, 253, 0.7);
                    letter-spacing: 0.3em;
                    text-transform: uppercase;
                    animation: subtitleFade 1s ease both;
                    animation-delay: 1s;
                    opacity: 0;
                }

                .glow-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    animation: glowPulse 4s ease-in-out infinite;
                    pointer-events: none;
                }

                .orbit-ring {
                    position: absolute;
                    border-radius: 50%;
                    border: 1px solid rgba(167, 139, 250, 0.15);
                    pointer-events: none;
                }

                .orbit-dot {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #a78bfa;
                    top: -4px;
                    left: calc(50% - 4px);
                    animation: dotGlow 2s ease-in-out infinite;
                }
            `}</style>

            {/* Background glow orbs */}
            <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(99,102,241,0.15)', top: '-10%', left: '-10%' }} />
            <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(110,231,183,0.1)', bottom: '-5%', right: '-5%', animationDelay: '2s' }} />
            <div className="glow-orb" style={{ width: 300, height: 300, background: 'rgba(167,139,250,0.12)', top: '30%', right: '10%', animationDelay: '1s' }} />

            {/* Orbit rings */}
            <div style={{ position: 'absolute', width: 520, height: 520, animation: 'orbitRing 20s linear infinite' }}>
                <div className="orbit-ring" style={{ width: '100%', height: '100%', top: 0, left: 0 }}>
                    <div className="orbit-dot" />
                </div>
            </div>
            <div style={{ position: 'absolute', width: 700, height: 700, animation: 'orbitRingReverse 30s linear infinite' }}>
                <div className="orbit-ring" style={{ width: '100%', height: '100%', top: 0, left: 0, borderColor: 'rgba(110,231,183,0.1)' }}>
                    <div className="orbit-dot" style={{ background: '#6ee7b7', top: 'calc(100% - 4px)', animationDelay: '1s' }} />
                </div>
            </div>

            {/* Main content */}
            <div style={{ textAlign: 'center', zIndex: 10, userSelect: 'none' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <span className="tactile-title">
                        {'TactileMath'.split('').map((char, i) => (
                            <span
                                key={i}
                                className="letter"
                                style={{ animationDelay: `${i * 0.06}s` }}
                            >
                                {char}
                            </span>
                        ))}
                    </span>
                </div>
                <p className="subtitle">Interactive Math Learning</p>
            </div>
        </div>
    );
};

export default HomePage;
