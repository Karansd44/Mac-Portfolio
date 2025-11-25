import {WindowControls} from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import {Search, ChevronLeft, ChevronRight, X} from "lucide-react"
import useLocationStore from "#store/location"
import clsx from "clsx"
import {locations} from "../constants"
import useWindowStore from "#store/window"
import {useState, useMemo} from "react"

const Finder = () => {
    const {openWindow} = useWindowStore()
    const {activeLocation, setActiveLocation, goBack, goForward, currentIndex, history} = useLocationStore();
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    
    const canGoBack = currentIndex > 0;
    const canGoForward = currentIndex < history.length - 1;

    // Search functionality - recursively search through all items
    const searchAllItems = (items, query) => {
        const results = [];
        const lowerQuery = query.toLowerCase();
        let resultId = 0;

        const searchRecursive = (item, parentPath = "") => {
            const currentPath = parentPath ? `${parentPath} > ${item.name}` : item.name;
            
            if (item.name.toLowerCase().includes(lowerQuery)) {
                results.push({
                    ...item, 
                    searchPath: currentPath,
                    searchId: `search-${resultId++}`
                });
            }

            if (item.children && item.children.length > 0) {
                item.children.forEach(child => searchRecursive(child, currentPath));
            }
        };

        items.forEach(item => searchRecursive(item));
        return results;
    };

    const searchResults = useMemo(() => {
        if (!searchQuery.trim()) return [];
        return searchAllItems(Object.values(locations), searchQuery);
    }, [searchQuery]);

    const displayItems = searchQuery.trim() ? searchResults : activeLocation?.children || [];

    const toggleSearch = () => {
        setIsSearching(!isSearching);
        if (isSearching) {
            setSearchQuery("");
        }
    };

    const clearSearch = () => {
        setSearchQuery("");
    };

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
                <div className="flex items-center gap-2 ml-4">
                    <button
                        onClick={goBack}
                        disabled={!canGoBack}
                        className={clsx(
                            "p-1 rounded hover:bg-gray-200 transition-colors",
                            !canGoBack && "opacity-30 cursor-not-allowed hover:bg-transparent"
                        )}
                        title="Go back"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={goForward}
                        disabled={!canGoForward}
                        className={clsx(
                            "p-1 rounded hover:bg-gray-200 transition-colors",
                            !canGoForward && "opacity-30 cursor-not-allowed hover:bg-transparent"
                        )}
                        title="Go forward"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
                <div className="flex-1 flex justify-center items-center px-4">
                    {isSearching && (
                        <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-3 py-1 w-full max-w-md">
                            <Search size={16} className="text-gray-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search in Finder..."
                                className="flex-1 outline-none text-sm"
                                autoFocus
                            />
                            {searchQuery && (
                                <button
                                    onClick={clearSearch}
                                    className="p-0.5 hover:bg-gray-100 rounded"
                                >
                                    <X size={14} className="text-gray-500" />
                                </button>
                            )}
                        </div>
                    )}
                </div>
                <button 
                    onClick={toggleSearch}
                    className="p-1 hover:bg-gray-200 rounded transition-colors"
                    title={isSearching ? "Close search" : "Search"}
                >
                    <Search className={clsx("icon", isSearching && "text-blue-500")} />
                </button>
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
                <div className="content">
                    {searchQuery.trim() ? (
                        <div className="w-full h-full flex flex-col overflow-hidden">
                            <div className="p-4 border-b border-gray-200 bg-gray-50 shrink-0">
                                <p className="text-sm text-gray-600 font-medium">
                                    {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found for "{searchQuery}"
                                </p>
                            </div>
                            <div className="flex-1 overflow-y-auto">
                                <div className="grid grid-cols-4 gap-6 p-8">
                                    {displayItems.map((item, index) => (
                                        <div
                                            key={item.searchId || `${item.id}-${index}`}
                                            className="flex flex-col items-center gap-3 cursor-pointer group hover:bg-gray-50 p-3 rounded-lg transition-colors"
                                            onClick={() => openItem(item)}
                                        >
                                            <img
                                                src={item.icon}
                                                alt={item.name}
                                                className="size-16 object-contain group-hover:scale-105 transition-transform"
                                            />
                                            <p className="text-sm text-center font-medium w-full truncate">
                                                {item.name}
                                            </p>
                                            {item.searchPath && (
                                                <p className="text-xs text-gray-400 text-center w-full truncate">
                                                    {item.searchPath}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                {searchResults.length === 0 && (
                                    <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                        <Search size={48} className="mb-4" />
                                        <p className="text-lg">No results found</p>
                                        <p className="text-sm">Try searching for something else</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <ul className="relative w-full h-full">
                            {displayItems.map((item) => (
                                <li
                                    key={item.id}
                                    className={clsx("group", item.position)}
                                    onClick={() => openItem(item)}
                                >
                                    <img src={item.icon} alt={item.name} />
                                    <p>{item.name}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(Finder, 'finder')

export default FinderWindow
