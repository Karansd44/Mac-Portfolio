import {WindowControls} from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import {Search} from "lucide-react"
import useLocationStore from "#store/location"
import clsx from "clsx"
import {locations} from "#constants"
import useWindowStore from "#store/window"

const Finder = () => {
    const {openWindow} = useWindowStore()
    const {activeLocation, setActiveLocation} = useLocationStore();

    const openItem = (item) => {
        if (item.fileType === 'pdf') 
            return openWindow("resume")


        


        if (item.kind === 'folder') 
            return setActiveLocation(item)


        


        if (['fig', 'url'].includes(item.fileType) && item.href) 
            return window.open(item.href, "_blank");
        


        openWindow(`${
            item.fileType
        }${
            item.kind
        }`, item)
    }

    const renderList = (name, items, limit = null, moreAction = null) => {
        const showMore = limit && items.length > limit;
        const displayItems = showMore ? items.slice(0, limit) : items;

        return (
            <div>
                <h3>{name}</h3>
                <ul> {
                    displayItems.map((item) => (
                        <li key={
                                item.id
                            }
                            onClick={
                                () => setActiveLocation(item)
                            }
                            className={
                                clsx(item.id === activeLocation.id ? "active" : "not-active",)
                        }>
                            <img src={
                                    item.icon
                                }
                                className="w-4"
                                alt={
                                    item.name
                                }/>
                            <p className="text-sm font-medium truncate">
                                {
                                item.name
                            }</p>
                        </li>
                    ))
                }
                    {
                    showMore && (
                        <li onClick={moreAction}
                            className="not-active cursor-pointer flex items-center gap-2 px-3 py-2">
                            <span className="w-4"></span>
                            <p className="text-sm font-medium text-blue-500">More...</p>
                        </li>
                    )
                } </ul>
            </div>
        )
    };
    return (
        <>
            <div id="window-header">
                <WindowControls target="finder"/>
                <Search className="icon"/>
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar">

                    <ul> {
                        renderList('Favorites', Object.values(locations))
                    } </ul>
                    <ul> {
                        renderList('My Work', locations.work.children, 3, () => setActiveLocation(locations.work))
                    } </ul>

                </div>
                <ul className="content">
                    {
                    activeLocation ?. children.map((item) => (
                        <li key={
                                item.id
                            }
                            className={
                                clsx("group", item.position)
                            }
                            onClick={
                                () => openItem(item)
                        }>
                            <img src={
                                    item.icon
                                }
                                alt={
                                    item.name
                                }/>
                            <p>{
                                item.name
                            }</p>
                        </li>
                    ))
                } </ul>

            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(Finder, 'finder')

export default FinderWindow
