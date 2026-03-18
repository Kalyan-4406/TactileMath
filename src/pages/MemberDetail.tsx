
import React, { useState, useEffect, useRef } from 'react';

const PHOTO_URL = '/WhatsApp Image 2026-03-18 at 6.22.06 PM (2).jpeg';

interface Star {
    id: number;
    x: number;
    y: number;
}

interface Bubble {
    id: number;
    x: number;
    y: number;
    emoji: string;
    size: number;
}

const FUN_EMOJIS = ['⭐', '🌟', '💫', '✨', '🎉', '🎊', '🏆', '💎', '🦋', '🌈', '🎵', '🎶'];

const MemberDetail: React.FC = () => {
    const [stars, setStars] = useState<Star[]>([]);
    const [bubbles, setBubbles] = useState<Bubble[]>([]);
    const [tapCount, setTapCount] = useState(0);
    const [photoWiggle, setPhotoWiggle] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [currentMessage, setCurrentMessage] = useState('');
    const [ringPop, setRingPop] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const idRef = useRef(0);

    const MESSAGES = [
        '🌟 Awesome!',
        '🎉 Great job!',
        '💫 Keep going!',
        '⭐ Super tap!',
        '🏆 You rock!',
        '🌈 Amazing!',
        '🎵 Wonderful!',
        '💎 Star player!',
    ];

    function spawnBurst(x: number, y: number) {
        const newBubbles: Bubble[] = Array.from({ length: 6 }, () => ({
            id: ++idRef.current,
            x: x + (Math.random() - 0.5) * 80,
            y: y + (Math.random() - 0.5) * 80,
            emoji: FUN_EMOJIS[Math.floor(Math.random() * FUN_EMOJIS.length)],
            size: Math.random() * 20 + 18,
        }));
        setBubbles(prev => [...prev, ...newBubbles]);
        setTimeout(() => {
            setBubbles(prev => prev.filter(b => !newBubbles.find(nb => nb.id === b.id)));
        }, 900);
    }

    function handlePhotoTap(e: React.MouseEvent | React.TouchEvent) {
        e.preventDefault();
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const newStar: Star = { id: ++idRef.current, x: clientX, y: clientY };
        setStars(prev => [...prev, newStar]);
        setTimeout(() => setStars(prev => prev.filter(s => s.id !== newStar.id)), 1000);

        spawnBurst(x, y);
        setPhotoWiggle(true);
        setRingPop(true);
        setTimeout(() => setPhotoWiggle(false), 500);
        setTimeout(() => setRingPop(false), 400);

        const nextCount = tapCount + 1;
        setTapCount(nextCount);
        setCurrentMessage(MESSAGES[nextCount % MESSAGES.length]);
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 1200);
    }

    // Floating background orbs
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const particles: HTMLDivElement[] = [];
        for (let i = 0; i < 18; i++) {
            const p = document.createElement('div');
            const size = Math.random() * 5 + 3;
            p.style.cssText = `
                position:absolute;width:${size}px;height:${size}px;border-radius:50%;
                background:rgba(255,255,255,${Math.random() * 0.4 + 0.1});
                left:${Math.random() * 100}%;top:${Math.random() * 100}%;
                animation:bgFloat ${Math.random() * 10 + 8}s ease-in-out infinite;
                animation-delay:-${Math.random() * 10}s;pointer-events:none;
            `;
            container.appendChild(p);
            particles.push(p);
        }
        return () => particles.forEach(p => p.remove());
    }, []);

    const scoreLabel =
        tapCount === 0 ? 'Tap my photo! 👆' :
            tapCount < 5 ? `${tapCount} tap${tapCount > 1 ? 's' : ''}! 🎉` :
                tapCount < 10 ? `${tapCount} taps! You're on fire! 🔥` :
                    `${tapCount} taps! SUPER STAR! 🌟`;

    return (
        <div
            ref={containerRef}
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(160deg, #1a1040 0%, #2d1b69 40%, #0f3460 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px 20px 100px',
                position: 'relative',
                overflow: 'hidden',
                fontFamily: "'Nunito', 'Inter', sans-serif",
            }}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap');

                @keyframes bgFloat {
                    0%,100%{transform:translateY(0)translateX(0);opacity:.3}
                    50%{transform:translateY(-30px)translateX(15px);opacity:.7}
                }
                @keyframes photoWiggle {
                    0%,100%{transform:rotate(0)scale(1)}
                    20%{transform:rotate(-8deg)scale(1.05)}
                    40%{transform:rotate(8deg)scale(1.08)}
                    60%{transform:rotate(-5deg)scale(1.05)}
                    80%{transform:rotate(4deg)scale(1.02)}
                }
                @keyframes ringPulse {
                    0%{transform:scale(1);opacity:.8}
                    50%{transform:scale(1.18);opacity:.3}
                    100%{transform:scale(1);opacity:.8}
                }
                @keyframes ringPop {
                    0%{transform:scale(1)}
                    50%{transform:scale(1.2)}
                    100%{transform:scale(1)}
                }
                @keyframes orbitSpin {
                    from{transform:rotate(0deg)}
                    to{transform:rotate(360deg)}
                }
                @keyframes starFloat {
                    0%{transform:translateY(0)scale(1);opacity:1}
                    100%{transform:translateY(-90px)scale(0.2);opacity:0}
                }
                @keyframes bubblePop {
                    0%{transform:scale(0) translate(0,0);opacity:1}
                    60%{opacity:1}
                    100%{transform:scale(1.5) translate(var(--dx),var(--dy));opacity:0}
                }
                @keyframes messagePop {
                    0%{transform:scale(0.6) translateY(10px);opacity:0}
                    40%{transform:scale(1.15) translateY(-5px);opacity:1}
                    100%{transform:scale(1) translateY(0);opacity:1}
                }
                @keyframes chipBounce {
                    0%,100%{transform:translateY(0)}
                    50%{transform:translateY(-6px)}
                }
                @keyframes cardSlideUp {
                    0%{opacity:0;transform:translateY(40px)}
                    100%{opacity:1;transform:translateY(0)}
                }
                @keyframes nameReveal {
                    0%{opacity:0;transform:translateX(-20px)}
                    100%{opacity:1;transform:translateX(0)}
                }
                @keyframes gradientShift {
                    0%{background-position:0% 50%}
                    50%{background-position:100% 50%}
                    100%{background-position:0% 50%}
                }
                .photo-wrapper {
                    cursor: pointer;
                    user-select: none;
                    -webkit-tap-highlight-color: transparent;
                    animation: cardSlideUp .8s cubic-bezier(.16,1,.3,1) both;
                }
                .photo-wrapper:active { transform: scale(0.96); }
                .photo-img-wiggle { animation: photoWiggle 0.5s ease both; }
                .ring-pop-anim { animation: ringPop 0.4s ease both; }
                .info-card {
                    animation: cardSlideUp .9s cubic-bezier(.16,1,.3,1) .15s both;
                    background: rgba(255,255,255,0.07);
                    border: 1.5px solid rgba(255,255,255,0.13);
                    border-radius: 24px;
                    backdrop-filter: blur(12px);
                }
                .tap-chip {
                    animation: chipBounce 2s ease-in-out infinite;
                    cursor: pointer;
                }
                .name-text {
                    background: linear-gradient(90deg, #e0c3fc, #8ec5fc, #a3f0d0, #8ec5fc, #e0c3fc);
                    background-size: 250% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: gradientShift 4s ease infinite;
                }
                .role-badge {
                    background: linear-gradient(135deg, #a78bfa, #60a5fa);
                    border-radius: 50px;
                    padding: 6px 20px;
                    color: white;
                    font-weight: 800;
                    font-size: 0.8rem;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    display: inline-block;
                    animation: cardSlideUp 1s cubic-bezier(.16,1,.3,1) .3s both;
                    box-shadow: 0 4px 20px rgba(167,139,250,0.4);
                }
                .detail-row {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    background: rgba(255,255,255,0.05);
                    border-radius: 16px;
                    padding: 14px 18px;
                    border: 1px solid rgba(255,255,255,0.08);
                    transition: background .25s, transform .2s;
                }
                .detail-row:hover, .detail-row:active {
                    background: rgba(255,255,255,0.1);
                    transform: scale(1.02);
                }
                .detail-icon {
                    font-size: 1.4rem;
                    flex-shrink: 0;
                    margin-top: 2px;
                }
                .detail-label {
                    color: rgba(180,200,255,0.6);
                    font-size: 0.68rem;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    margin-bottom: 2px;
                }
                .detail-value {
                    color: rgba(255,255,255,0.92);
                    font-size: 0.95rem;
                    font-weight: 700;
                    line-height: 1.35;
                }
            `}</style>

            {/* Global floating stars on tap */}
            {stars.map(s => (
                <div key={s.id} style={{
                    position: 'fixed', left: s.x, top: s.y,
                    fontSize: '1.6rem', pointerEvents: 'none', zIndex: 9999,
                    animation: 'starFloat 1s ease-out forwards',
                    transform: 'translate(-50%, -50%)',
                }}>⭐</div>
            ))}

            {/* Main card */}
            <div style={{ maxWidth: 420, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, zIndex: 10 }}>

                {/* ── Photo section ── */}
                <div
                    className="photo-wrapper"
                    onClick={handlePhotoTap}
                    onTouchStart={handlePhotoTap}
                    style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}
                >
                    {/* Orbit rings */}
                    <div style={{ position: 'absolute', width: 240, height: 240, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 0 }}>
                        <div className={ringPop ? 'ring-pop-anim' : ''} style={{
                            position: 'absolute', inset: 0, borderRadius: '50%',
                            border: '2px dashed rgba(167,139,250,0.35)',
                            animation: 'orbitSpin 10s linear infinite',
                        }}>
                            <div style={{ position: 'absolute', top: -5, left: '50%', transform: 'translateX(-50%)', width: 10, height: 10, borderRadius: '50%', background: '#a78bfa', boxShadow: '0 0 12px 4px rgba(167,139,250,0.8)' }} />
                        </div>
                        <div style={{
                            position: 'absolute', inset: -20, borderRadius: '50%',
                            border: '1px solid rgba(96,165,250,0.2)',
                            animation: 'orbitSpin 18s linear infinite reverse',
                        }}>
                            <div style={{ position: 'absolute', bottom: -4, left: '50%', transform: 'translateX(-50%)', width: 8, height: 8, borderRadius: '50%', background: '#60a5fa', boxShadow: '0 0 10px 3px rgba(96,165,250,0.8)' }} />
                        </div>
                        {/* Pulse ring */}
                        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '3px solid rgba(224,195,252,0.25)', animation: 'ringPulse 3s ease-in-out infinite' }} />
                    </div>

                    {/* Photo */}
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <div style={{
                            width: 180, height: 180, borderRadius: '50%',
                            padding: 4,
                            background: 'linear-gradient(135deg, #a78bfa, #60a5fa, #34d399, #a78bfa)',
                            backgroundSize: '250% 250%',
                            animation: 'gradientShift 4s ease infinite',
                            boxShadow: '0 0 40px rgba(167,139,250,0.5), 0 0 80px rgba(96,165,250,0.2)',
                        }}>
                            <img
                                className={photoWiggle ? 'photo-img-wiggle' : ''}
                                src={PHOTO_URL}
                                alt="Team Member"
                                style={{
                                    width: '100%', height: '100%',
                                    borderRadius: '50%', objectFit: 'cover',
                                    display: 'block',
                                    border: '3px solid rgba(255,255,255,0.15)',
                                }}
                            />
                        </div>

                        {/* Emoji burst bubbles */}
                        {bubbles.map(b => (
                            <div key={b.id} style={{
                                position: 'absolute',
                                left: b.x, top: b.y,
                                fontSize: b.size,
                                pointerEvents: 'none',
                                animation: 'bubblePop 0.9s ease-out forwards',
                                '--dx': `${(Math.random() - 0.5) * 60}px`,
                                '--dy': `${-(Math.random() * 60 + 20)}px`,
                            } as React.CSSProperties}>
                                {b.emoji}
                            </div>
                        ))}
                    </div>

                    {/* Tap hint */}
                    <div className="tap-chip" style={{
                        background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.2)',
                        borderRadius: 50, padding: '8px 20px', color: 'rgba(255,255,255,0.85)',
                        fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.04em',
                        backdropFilter: 'blur(8px)', zIndex: 2,
                        position: 'relative',
                    }}>
                        {tapCount === 0 ? '👆 Tap my photo!' : scoreLabel}
                    </div>

                    {/* Pop message */}
                    {showMessage && (
                        <div style={{
                            position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)',
                            background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
                            borderRadius: 50, padding: '10px 24px', color: 'white',
                            fontWeight: 900, fontSize: '1.1rem', whiteSpace: 'nowrap',
                            boxShadow: '0 8px 30px rgba(167,139,250,0.5)',
                            animation: 'messagePop 0.4s cubic-bezier(.16,1,.3,1) both',
                            zIndex: 20,
                        }}>
                            {currentMessage}
                        </div>
                    )}
                </div>

                {/* ── Info card ── */}
                <div className="info-card" style={{ width: '100%', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>

                    {/* Name */}
                    <div style={{ textAlign: 'center', marginBottom: 4 }}>
                        <h1 className="name-text" style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 900, margin: 0, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                            Kalyan Kumar Reddy C
                        </h1>
                        <div style={{ marginTop: 10 }}>
                            <span className="role-badge">🚀 Lead Full Stack Dev</span>
                        </div>
                    </div>

                    {/* Details */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <div className="detail-row">
                            <span className="detail-icon">🎓</span>
                            <div>
                                <div className="detail-label">Roll Number</div>
                                <div className="detail-value">CB.SC.U4CSE23060</div>
                            </div>
                        </div>
                        <div className="detail-row">
                            <span className="detail-icon">📚</span>
                            <div>
                                <div className="detail-label">Course</div>
                                <div className="detail-value">Full Stack Frameworks · 23CSE461</div>
                            </div>
                        </div>
                        <div className="detail-row">
                            <span className="detail-icon">👨‍🏫</span>
                            <div>
                                <div className="detail-label">Faculty</div>
                                <div className="detail-value">Dr. T. Senthil Kumar</div>
                                <div style={{ color: 'rgba(180,200,255,0.55)', fontSize: '0.8rem', marginTop: 2 }}>Amrita School of Computing</div>
                            </div>
                        </div>
                        <div className="detail-row">
                            <span className="detail-icon">🏫</span>
                            <div>
                                <div className="detail-label">Institution</div>
                                <div className="detail-value">Amrita Vishwa Vidyapeetham</div>
                                <div style={{ color: 'rgba(180,200,255,0.55)', fontSize: '0.8rem', marginTop: 2 }}>Coimbatore - 641112</div>
                            </div>
                        </div>
                        <div className="detail-row">
                            <span className="detail-icon">💡</span>
                            <div>
                                <div className="detail-label">Project</div>
                                <div className="detail-value">TactileMath — Math for Autism Kids</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default MemberDetail;
