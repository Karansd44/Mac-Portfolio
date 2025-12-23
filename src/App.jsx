import gsap from 'gsap';
import { Draggable } from "gsap/Draggable"
import { useState, lazy, Suspense } from 'react';

import {
    Navbar,
    Welcome,
    Dock,
    Home,
    AppleLoader
} from '#components'

// Lazy load window components to improve initial load time
const Terminal = lazy(() => import('#windows/Terminal'));
const Safari = lazy(() => import('#windows/Safari'));
const Resume = lazy(() => import('#windows/Resume'));
const Finder = lazy(() => import('#windows/Finder'));
const Text = lazy(() => import('#windows/Text'));
const Image = lazy(() => import('#windows/Image'));
const Contact = lazy(() => import('#windows/Contact'));
const Photos = lazy(() => import('#windows/Photos'));

gsap.registerPlugin(Draggable);


const App = () => {
    const [loading, setLoading] = useState(true);

    return (
        <> {
            loading && <AppleLoader onComplete={
                () => setLoading(false)
            } />
        }
            <main style={
                {
                    opacity: loading ? 0 : 1,
                    transition: 'opacity 0.5s ease-in'
                }
            }>
                <Navbar />
                <Welcome />
                <Dock />
                <Suspense fallback={null}>
                    <Terminal />
                    <Safari />
                    <Resume />
                    <Finder />
                    <Text />
                    <Image />
                    <Contact />
                    <Photos />
                </Suspense>
                <Home />
            </main>
        </>
    )
}

export default App
