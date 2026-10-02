import React, { FC, useState } from 'react';
import './App.scss';
import {
    LAST_LEVEL_STORAGE_KEY,
    LAST_SCORE_STORAGE_KEY,
    LAST_TIME_STORAGE_KEY,
} from './utils';
import { Theme } from './themes/interface';
import Game from './components/Game';
import { Title } from './components/Title';
const App: FC<{ theme: Theme<any> }> = ({ theme }) => {
    // 读取缓存关卡得分
    const [initLevel] = useState<number>(
        Number(localStorage.getItem(LAST_LEVEL_STORAGE_KEY) || '1')
    );
    const [initScore] = useState<number>(
        Number(localStorage.getItem(LAST_SCORE_STORAGE_KEY) || '0')
    );
    const [initTime] = useState<number>(
        Number(localStorage.getItem(LAST_TIME_STORAGE_KEY) || '0')
    );

    return (
        <>
            {theme.background && (
                <img
                    alt="background"
                    src={theme.background}
                    className="background"
                    style={{
                        filter: theme.backgroundBlur ? 'blur(8px)' : 'none',
                    }}
                />
            )}
            <Title title={theme.title} desc={theme.desc} />
            <Game
                key={theme.title}
                theme={theme}
                initLevel={initLevel}
                initScore={initScore}
                initTime={initTime}
            />
        </>
    );
};

export default App;
