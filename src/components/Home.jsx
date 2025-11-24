import React from 'react'
import {locations} from "#constants"
import clsx from "clsx"
import {useGSAP} from '@gsap/react';
import {Draggable} from "gsap/Draggable"
import useWindowStore from "#store/window"
import useLocationStore from "#store/location"

import gsap from 'gsap';

const projects = locations.work ?. children ?? [];
const Home = () => {
    const {setActiveLocation} = useLocationStore()
    const {openWindow} = useWindowStore()
    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project)
        openWindow("finder")
    }

    useGSAP(() => {
        const savedPositions = JSON.parse(localStorage.getItem('folderPositions') || '{}');

        Object.entries(savedPositions).forEach(([id, pos]) => {
            gsap.set(`.folder[data-id="${id}"]`, {
                x: pos.x,
                y: pos.y
            });
        });

        Draggable.create(".folder", {
            onDragEnd: function () {
                const id = this.target.getAttribute('data-id');
                const newPositions = JSON.parse(localStorage.getItem('folderPositions') || '{}');
                newPositions[id] = {
                    x: this.x,
                    y: this.y
                };
                localStorage.setItem('folderPositions', JSON.stringify(newPositions));
            }
        });
    }, [])
    return (
        <section id='home'>
            <ul> {
                projects.map((project) => (
                    <li key={
                            project.id
                        }
                        data-id={
                            project.id
                        }
                        className={
                            clsx("group folder", project.windowPosition)
                        }
                        onClick={
                            () => handleOpenProjectFinder(project)
                    }>
                        <img src="/images/folder.png"
                            alt={
                                project.name
                            }/>
                        <p>{
                            project.name
                        }</p>
                    </li>
                ))
            } </ul>
        </section>
    )
}

export default Home
