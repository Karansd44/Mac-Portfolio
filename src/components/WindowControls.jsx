import React from 'react'
import useWindowStore from '#store/window'

const WindowControls = ({target}) => {
    const {closeWindow, minimizeWindow, toggleMaximize} = useWindowStore();

    return (
        <div id="window-controls">
            <div 
                className="close"
                onClick={() => closeWindow(target)}
                title="Close"
            />
            <div 
                className="minimize"
                onClick={() => minimizeWindow(target)}
                title="Minimize"
            />
            <div 
                className="maximize"
                onClick={() => toggleMaximize(target)}
                title="Maximize"
            />
        </div>
    )
}

export default WindowControls;
