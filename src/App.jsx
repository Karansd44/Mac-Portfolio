import gsap from 'gsap';
import {Draggable} from "gsap/Draggable"

import {Navbar, Welcome, Dock} from '#components'
import {
    Terminal,
    Safari,
    Resume,
    Finder,
    Text,
    Image,
    Contact
} from '#windows';

gsap.registerPlugin(Draggable);


const App = () => {
    return (
        <main>
            <Navbar/>
            <Welcome/>
            <Dock/>
            <Terminal/>
            <Safari/>
            <Resume/>
            <Finder/>
            <Text/>
            <Image/>
            <Contact/>
        </main>
    )
}

export default App
