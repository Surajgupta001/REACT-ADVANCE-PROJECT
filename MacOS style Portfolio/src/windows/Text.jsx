import React from 'react';
import { WindowControls } from '#/components';
import WindowWrapper from '#/hoc/WindowWrapper';
import useWindowStore from '#/store/window';

function Text() {
    const { windows } = useWindowStore();
    const data = windows.txtfile.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <div className="bg-white p-5 space-y-4">
                {subtitle && (
                    <h3 className="text-lg font-semibold">{subtitle}</h3>
                )}

                {image && (
                    <div className="w-full max-w-sm">
                        <img src={image} alt={name} className="rounded-md" />
                    </div>
                )}

                {Array.isArray(description) && (
                    <div className="space-y-3">
                        {description.map((para, i) => (
                            <p key={i} className="text-sm leading-relaxed">
                                {para}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

const TextWindow = WindowWrapper(Text, 'txtfile');
export default TextWindow;
