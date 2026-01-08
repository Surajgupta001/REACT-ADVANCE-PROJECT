import { PresentationControls } from '@react-three/drei';
import React, { useRef } from 'react'
import MacbookModel16 from '../models/Macbook-16';
import MacbookModel14 from '../models/Macbook-14';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
    if (!group) return;

    group.traverse((child) => {
        if (child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, {
                opacity,
                duration: ANIMATION_DURATION
            })
        }
    })
};

const moveGroup = (group, x) => {
    if (!group) return;

    gsap.to(group.position, {
        x,
        duration: ANIMATION_DURATION
    })
};

function ModelSwitcher({ scale, isMobile }) {

    const SCALE_LARGE_DESKTOP = 0.08;
    const SCALE_SMALL_MOBILE = 0.05;

    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_SMALL_MOBILE;

    useGSAP(() => {
        if (showLargeMacbook) {
            moveGroup(largeMacbookRef.current, 0);
            moveGroup(smallMacbookRef.current, OFFSET_DISTANCE);

            fadeMeshes(largeMacbookRef.current, 1);
            fadeMeshes(smallMacbookRef.current, 0);
        } else {
            moveGroup(largeMacbookRef.current, -OFFSET_DISTANCE);
            moveGroup(smallMacbookRef.current, 0);

            fadeMeshes(largeMacbookRef.current, 0);
            fadeMeshes(smallMacbookRef.current, 1);
        }

    }, [scale])

    const ControlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: {
            mass: 1,
            tension: 0,
            friction: 26
        }
    };

    return (
        <>
            <PresentationControls {...ControlsConfig}>
                <group ref={largeMacbookRef}>
                    <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>
            <PresentationControls {...ControlsConfig}>
                <group ref={smallMacbookRef}>
                    <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls>
        </>
    )
}

export default ModelSwitcher
