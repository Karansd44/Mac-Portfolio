import React, {useState, useEffect, useRef} from 'react'
import dayjs from 'dayjs'
import {navIcons, navLinks, locations} from '../constants'
import useWindowStore from '#store/window';
import useLocationStore from '#store/location';
import {Power, RotateCw} from 'lucide-react'
import clsx from 'clsx'

const Navbar = () => {
    const {openWindow, closeWindow} = useWindowStore();
    const {setActiveLocation} = useLocationStore();
    const [showAppleMenu, setShowAppleMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setShowAppleMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleShutdown = () => {
        // Close all windows
        Object.keys(['finder', 'contact', 'resume', 'safari', 'photos', 'terminal', 'txtfile', 'imgfile']).forEach(window => {
            closeWindow(window);
        });
        setShowAppleMenu(false);

        // Create shutdown overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: black;
            z-index: 99999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 1s ease-in-out;
        `;
        
        const text = document.createElement('div');
        text.style.cssText = `
            color: white;
            font-size: 24px;
            font-weight: 300;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        `;
        text.textContent = 'Shutting down...';
        
        overlay.appendChild(text);
        document.body.appendChild(overlay);
        
        // Fade in overlay
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);
        
        // Show text
        setTimeout(() => {
            text.style.opacity = '1';
        }, 500);
        
        // Close tab after animation
        setTimeout(() => {
            window.close();
            // Fallback if window.close() doesn't work
            window.location.href = 'about:blank';
        }, 2500);
    };

    const handleRestart = () => {
        // Close all windows
        Object.keys(['finder', 'contact', 'resume', 'safari', 'photos', 'terminal', 'txtfile', 'imgfile']).forEach(window => {
            closeWindow(window);
        });
        setShowAppleMenu(false);

        // Create restart overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: black;
            z-index: 99999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 1s ease-in-out;
        `;
        
        const text = document.createElement('div');
        text.style.cssText = `
            color: white;
            font-size: 24px;
            font-weight: 300;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        `;
        text.textContent = 'Restarting...';
        
        overlay.appendChild(text);
        document.body.appendChild(overlay);
        
        // Fade in overlay
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);
        
        // Show text
        setTimeout(() => {
            text.style.opacity = '1';
        }, 500);
        
        // Reload page after animation
        setTimeout(() => {
            window.location.reload();
        }, 2500);
    };

    return (
        <nav>
            <div>
                <div className="relative" ref={menuRef}>
                    <button
                        onClick={() => setShowAppleMenu(!showAppleMenu)}
                        className={clsx(
                            "px-2 py-1 rounded transition-all duration-150",
                            showAppleMenu ? "bg-white/20" : "hover:bg-white/10"
                        )}
                        title="Apple Menu"
                    >
                        <img src="/images/logo.svg" alt="Apple Menu" className="w-5 h-5"/>
                    </button>
                    
                    {showAppleMenu && (
                        <div 
                            className="absolute top-full left-0 mt-1 w-56 backdrop-blur-xl bg-white/80 rounded-lg shadow-lg border border-white/20 z-50 overflow-hidden"
                            style={{
                                animation: 'menuSlideDown 0.2s ease-out',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.25), 0 0 0 0.5px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            <div className="py-1">
                                <button
                                    onClick={handleRestart}
                                    className="w-full px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-blue-500 hover:text-white transition-colors duration-100 flex items-center gap-2.5"
                                >
                                    <RotateCw size={14} strokeWidth={2} />
                                    <span className="font-normal">Restart...</span>
                                </button>
                                <button
                                    onClick={handleShutdown}
                                    className="w-full px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-blue-500 hover:text-white transition-colors duration-100 flex items-center gap-2.5"
                                >
                                    <Power size={14} strokeWidth={2} />
                                    <span className="font-normal">Shut Down...</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <p className="font-bold">Karan's Portfolio</p>
                <ul> {
                    navLinks.map(({id, name, type}) => (
                        <li key={id}
                            onClick={
                                () => {
                                    if (name === 'Projects') {
                                        setActiveLocation(locations.work);
                                    }
                                    openWindow(type)
                                }
                        }>
                            <p>{name}</p>
                        </li>
                    ))
                } </ul>
            </div>
            <div>
                <ul> {
                    navIcons.map(({id, img}) => (
                        <li key={id}>
                            <img src={img}
                                className="icon-hover"
                                alt={
                                    `icon-${id}`
                                }/>

                        </li>
                    ))
                } </ul>
                <time>{
                    dayjs().format('ddd MMM D h:mm A')
                }</time>
            </div>
        </nav>
    )
}

export default Navbar
