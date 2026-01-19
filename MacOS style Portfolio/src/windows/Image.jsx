import React from 'react';
import { WindowControls } from '#/components';
import WindowWrapper from '#/hoc/WindowWrapper';
import useWindowStore from '#/store/window';

function Image() {
    const { windows } = useWindowStore();
    const data = windows.imgfile.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>

            <div className="bg-white p-5">
                <div className="w-full max-w-2xl">
                    <img src={imageUrl} alt={name} className="rounded-md w-full h-auto" />
                </div>
            </div>
        </>
    );
}

const ImageWindow = WindowWrapper(Image, 'imgfile');
export default ImageWindow;
