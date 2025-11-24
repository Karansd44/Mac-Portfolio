import {socials} from '../constants'
import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import {WindowControls} from '#components'

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact"/>
                <h2>Contact Me</h2>

            </div>
            <div className="p-5 space-y-5">
                <img src="/images/karan.png" alt="karan" className='w-20 rounded-full'/>
                <h3>Let's connect</h3>
                <p>Got an idea? A bug to squash? Or just wanna talk  tech? I'm in.</p>
                <p>Send me an email at
                    <a href="mailto:karansd442004@gmail.com" className='text-blue-500'>karansd442004@gmail.com</a>
                </p>
                <ul> {
                    socials.map(({
                        id,
                        bg,
                        link,
                        icon,
                        text
                    }) => (
                        <li key={id}
                            style={
                                {backgroundColor: bg}
                        }>
                            <a href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={text}>
                                <img src={icon}
                                    alt={text}
                                    className='size-5'/>
                                <p>{text}</p>
                            </a>
                        </li>
                    ))
                } </ul>
            </div>
        </>

    )
}

const ContactWindow = WindowWrapper(Contact, "contact")

export default ContactWindow
