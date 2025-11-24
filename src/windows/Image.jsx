import {WindowControls} from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
    const {windows} = useWindowStore();
    const data = windows.imgfile ?. data;

    if (! data) 
        return null;
    


    const {name, imageUrl} = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile"/>
                <h2>{name}</h2>
            </div>
            <div className="preview">
                <img src={imageUrl}
                    alt={name}/>
            </div>
        </>
    );
};

export default WindowWrapper(Image, "imgfile");
