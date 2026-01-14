import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const FONT_WEIGHTS = {
    subTitle: {
        min: 100,
        max: 400,
        default: 100,
    },
    title: {
        min: 400,
        max: 900, // allow max bold
        default: 400,
    },
};

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span
            // Key mixes char + index to reduce React key reuse when text repeats
            key={`${char}-${i}`}
            className={className}
            style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
        >
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));
};

const setUpTextHover = (container, type) => {
    if (!container) return;

    const letters = container.querySelectorAll('span');
    const { min, max, default: base } = FONT_WEIGHTS[type];

    const animateLetter = (letter, weight, duration = 0.18) =>
        gsap.to(letter, {
            duration,
            ease: 'power2.out',
            overwrite: 'auto',
            fontVariationSettings: `'wght' ${Math.round(weight)}`,
        });

    const handleMouseMove = (e) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const falloff = type === 'title' ? 110 : 160;
            const rawIntensity = Math.max(0, 1 - distance / falloff);
            // Ease the curve for a punchier highlight under the cursor
            const intensity = Math.pow(rawIntensity, 0.6);
            const weight = min + (max - min) * intensity;

            animateLetter(letter, weight);
        });
    };

    const handleMouseLeave = () => {
        letters.forEach((letter) => animateLetter(letter, base, 0.35));
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
    };
};

function Welcome() {

    const titleRef = useRef(null);
    const subTitleRef = useRef(null);

    useGSAP(() => {
        const cleanupFns = [
            setUpTextHover(titleRef.current, 'title'),
            setUpTextHover(subTitleRef.current, 'subTitle')
        ];

        return () => {
            cleanupFns.forEach((cleanup) => cleanup?.());
        };
    }, [])

    return (
        <section id='welcome'>
            <p ref={subTitleRef}>{renderText(
                "Hey, I'm Suraj! Welcome to my",
                'text-3xl font-georama',
                100
            )}</p>
            <h1 ref={titleRef} className='mt-7'>
                {renderText(
                    "Portfolio",
                    'text-9xl italic font-georama',
                    400
                )}
            </h1>
            <div className='small-screen'>
                <p>This Portfolio is designed for desktop/tablet screens only.</p>
            </div>
        </section>
    )
}

export default Welcome
