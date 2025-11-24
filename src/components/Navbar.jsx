import React from 'react'
import dayjs from 'dayjs'
import {navIcons, navLinks, locations} from '#constants'
import useWindowStore from '#store/window';
import useLocationStore from '#store/location';

const Navbar = () => {
    const {openWindow} = useWindowStore();
    const {setActiveLocation} = useLocationStore();

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt=""/>
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
