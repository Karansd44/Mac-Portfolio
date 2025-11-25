import { locations } from '../constants'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'


const DEFAULT_LOCATION = locations.work
const useLocationStore = create(immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    history: [DEFAULT_LOCATION],
    currentIndex: 0,
    setActiveLocation: (location)=> 
            set((state)=>{
                if(location === undefined) return
                state.activeLocation = location;
                // Add to history and remove any forward history
                state.history = state.history.slice(0, state.currentIndex + 1);
                state.history.push(location);
                state.currentIndex = state.history.length - 1;
            }),
    goBack: () =>
        set((state) => {
            if (state.currentIndex > 0) {
                state.currentIndex -= 1;
                state.activeLocation = state.history[state.currentIndex];
            }
        }),
    goForward: () =>
        set((state) => {
            if (state.currentIndex < state.history.length - 1) {
                state.currentIndex += 1;
                state.activeLocation = state.history[state.currentIndex];
            }
        }),
    canGoBack: () => {
        const state = useLocationStore.getState();
        return state.currentIndex > 0;
    },
    canGoForward: () => {
        const state = useLocationStore.getState();
        return state.currentIndex < state.history.length - 1;
    },
    resetActiveLocation: ()=>
        set((state)=>{
            state.activeLocation = DEFAULT_LOCATION;
            state.history = [DEFAULT_LOCATION];
            state.currentIndex = 0;
        })
})))

export default useLocationStore
