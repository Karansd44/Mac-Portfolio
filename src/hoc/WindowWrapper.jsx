import useWindowStore from '#store/window'
import {useGSAP} from '@gsap/react';
import React, {useLayoutEffect, useRef} from 'react'
import gsap from 'gsap';
import {Draggable} from 'gsap/all';

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const {focusWindow, windows} = useWindowStore();
        const {isOpen, zIndex} = windows[windowKey];
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
