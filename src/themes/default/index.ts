import { createElement } from 'react';
import { Theme } from '../interface';
import bgm from './sounds/ordinary-disco.m4a?url';
import clickSound from './sounds/click.wav';
import mergeSound from './sounds/merge.mp3';

const imageUrls = import.meta.glob<string>('./images/*.png', {
    import: 'default',
    eager: true,
});

const icons = Object.entries(imageUrls)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src], index) => ({
        name: `奶龙${index + 1}`,
        content: createElement('img', {
            src,
            alt: `奶龙形象${index + 1}`,
            draggable: false,
        }),
    }));

export type DefaultSoundNames = 'button-click' | 'triple';

export const getDefaultTheme: () => Theme<DefaultSoundNames> = () => {
    return {
        title: '奶了个奶',
        desc: '真的可以通关~',
        dark: true,
        maxLevel: 20,
        backgroundColor: '#8dac85',
        icons: icons.map((icon) => ({
            ...icon,
            clickSound: 'button-click',
            tripleSound: 'triple',
        })),
        sounds: [
            {
                name: 'button-click',
                src: clickSound,
            },
            {
                name: 'triple',
                src: mergeSound,
            },
        ],
        bgm,
    };
};
