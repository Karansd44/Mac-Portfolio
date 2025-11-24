import {Mail, Search} from "lucide-react"
import WindowWrapper from "#hoc/WindowWrapper"
import WindowControls from "#components/WindowControls"
import {gallery, photosLinks} from "../constants"
import useWindowStore from "#store/window"

const Photos = () => {
    const {openWindow} = useWindowStore()
    return (
        <>
            <div id="window-header">
                <WindowControls target="photos"/>
                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon"/>
                    <Search className="icon"/>
                </div>
            </div>

            <div className="flex w-full"
                style={
                    {height: 'calc(600px - 56px)'}
            }>
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul> {
                        photosLinks.map(({id, icon, title}) => (
                            <li key={id}>
                                <img src={icon}
                                    alt={title}/>
                                <p>{title}</p>
                            </li>
                        ))
                    } </ul>
                </div>

                <div className="gallery"
                    style={
                        {
                            overflowY: 'auto',
                            flex: 1
                        }
                }>
                    <ul style={
                        {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(6, 1fr)',
                            gridAutoRows: '100px',
                            gap: '12px',
                            padding: '20px'
                        }
                    }>
                        {
                        gallery.map(({
                            id,
                            img
                        }, index) => { // Bento grid pattern - different sizes for different items
                            let gridStyle = {};
                            if (index === 0) { // First image - large horizontal
                                gridStyle = {
                                    gridColumn: 'span 6',
                                    gridRow: 'span 1'
                                };
                            } else if (index === 1) { // Second image - medium vertical
                                gridStyle = {
                                    gridColumn: 'span 3',
                                    gridRow: 'span 1'
                                };
                            } else if (index === 2) { // Third image - medium square
                                gridStyle = {
                                    gridColumn: 'span 3',
                                    gridRow: 'span 1'
                                };
                            } else { // Additional images - smaller
                                gridStyle = {
                                    gridColumn: 'span 2',
                                    gridRow: 'span 1'
                                };
                            }

                            return (
                                <li key={id}
                                    onClick={
                                        () => openWindow("imgfile", {
                                            id,
                                            name: "image",
                                            icon: "/images/image.png",
                                            kind: "file",
                                            fileType: "img",
                                            imageUrl: img
                                        })
                                    }
                                    style={
                                        {
                                            cursor: 'pointer',
                                            ... gridStyle,
                                            overflow: 'hidden',
                                            borderRadius: '12px'
                                        }
                                }>
                                    <img src={img}
                                        alt={
                                            `Gallery ${id}`
                                        }
                                        style={
                                            {
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }
                                        }/>
                                </li>
                            );
                        })
                    } </ul>
                </div>
            </div>
        </>
    )
}

const PhotoWindow = WindowWrapper(Photos, "photos")

export default PhotoWindow
