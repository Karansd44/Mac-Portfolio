import {WindowControls} from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
    const {windows} = useWindowStore();
    const data = windows.txtfile?.data;

    if (! data) 
        return null;
    

    const {name, image, subtitle, description} = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile"/>
                <h2>{name}</h2>
            </div>
            <div className="bg-white h-full overflow-y-auto p-6 text-black">
                {
                image && (
                    <img src={image}
                        alt={name}
                        className="w-full h-auto object-cover rounded-lg mb-6"/>
                )
            }

                {
                subtitle && (
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                        {subtitle}</h2>
                )
            }

                <div className="space-y-4">
                    {
                    description && description.map((paragraph, index) => (
                        <p key={index}
                            className="text-black leading-relaxed">
                            {paragraph} </p>
                    ))
                } </div>
            </div>
        </>
    );
};

export default WindowWrapper(Text, "txtfile");
