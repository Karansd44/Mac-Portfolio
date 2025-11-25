import useWindowStore from '#store/window'
import {useGSAP} from '@gsap/react';
import React, {useLayoutEffect, useRef} from 'react'
import gsap from 'gsap';
import {Draggable} from 'gsap/all';

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const {focusWindow, windows} = useWindowStore();
        const {isOpen, zIndex, isMinimized, isMaximized} = windows[windowKey];
        const ref = useRef(null);

        useGSAP(() => {
            const el = ref.current;
            if (! el || !isOpen) 
                return;
            


            el.style.display = "block";

            gsap.fromTo(el, {
                scale: 0.8,
                opacity: 0,
                y: 40
            }, {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power3.out"
            })

        }, [isOpen]);

        // Handle minimize animation - macOS genie effect
        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            if (isMinimized) {
                // Get dock position (bottom center of screen)
                const dockPosition = {
                    x: window.innerWidth / 2,
                    y: window.innerHeight - 50
                };

                // Get current window position
                const rect = el.getBoundingClientRect();
                const windowCenter = {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2
                };

                // Calculate movement to dock
                const moveX = dockPosition.x - windowCenter.x;
                const moveY = dockPosition.y - windowCenter.y;

                // Create genie effect timeline
                const tl = gsap.timeline();
                
                tl.to(el, {
                    scale: 0.2,
                    x: moveX,
                    y: moveY,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in",
                    transformOrigin: "center bottom"
                });
            } else if (isOpen && !isMinimized) {
                // Restore from minimized
                gsap.to(el, {
                    scale: 1,
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: 0.25,
                    ease: "power2.out",
                    transformOrigin: "center center"
                });
            }
        }, [isMinimized, isOpen]);

        // Handle maximize
        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;

            if (isMaximized) {
                el.style.width = '100vw';
                el.style.height = '100vh';
                el.style.top = '0';
                el.style.left = '0';
                el.style.transform = 'none';
            } else {
                el.style.width = '';
                el.style.height = '';
                el.style.top = '';
                el.style.left = '';
                el.style.transform = '';
            }
        }, [isMaximized]);

        useGSAP(() => {
            const el = ref.current;
            if (! el) 
                return;
            

            const header = el.querySelector('#window-header');
            const [instance] = Draggable.create(el, {
                trigger: header || el,
                onPress: () => focusWindow(windowKey)
            })

            return() => instance.kill();
        }, [])


        useLayoutEffect(() => {
            const el = ref.current;
            if (! el) 
                return;
            


            el.style.display = isOpen ? "block" : "none";
        }, [isOpen])


        return (
            <section ref={ref}
                id={windowKey}
                className='absolute'
                style={
                    {zIndex}
                }
                onMouseDown={
                    () => focusWindow(windowKey)
            }>
                <Component {...props}/>
            </section>
        )
    } 
    Wrapped.displayName = `WindowWrapper(${
        Component.displayName || Component.name || "Component"
    })`;
    return Wrapped;
}

export default WindowWrapper
