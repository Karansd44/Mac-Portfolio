import gsap from 'gsap';
import {Draggable} from "gsap/Draggable"
import {useState} from 'react';

import {
    Navbar,
    Welcome,
    Dock,
    Home,
    AppleLoader
} from '#components'
import {
    Terminal,
    Safari,
    Resume,
    Finder,
    Text,
    Image,
    Contact,
    Photos
} from '#windows';

gsap.registerPlugin(Draggable);


const App = () => {
    const [loading, setLoading] = useState(true);

    return (
        <> {
            loading && <AppleLoader onComplete={
                () => setLoading(false)
            }/>
        }
            <main style={
                {
                    opacity: loading ? 0 : 1,
                    transition: 'opacity 0.5s ease-in'
                }
            }>
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
                <Home/>
                <Photos/>
            </main>
        </>
    )
}

export default App
