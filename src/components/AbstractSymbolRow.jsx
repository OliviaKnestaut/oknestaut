import React from 'react';
import symbol1 from '../images/general/abstract-symbols/Abstract-Symbol-1.webp';
import symbol2 from '../images/general/abstract-symbols/Abstract-Symbol-2.webp';
import symbol3 from '../images/general/abstract-symbols/Abstract-Symbol-3.webp';
import symbol4 from '../images/general/abstract-symbols/Abstract-Symbol-4.webp';
import symbol5 from '../images/general/abstract-symbols/Abstract-Symbol-5.webp';
import symbol6 from '../images/general/abstract-symbols/Abstract-Symbol-6.webp';
import symbol7 from '../images/general/abstract-symbols/Abstract-Symbol-7.webp';
import symbol8 from '../images/general/abstract-symbols/Abstract-Symbol-8.webp';
import symbol9 from '../images/general/abstract-symbols/Abstract-Symbol-9.webp';
import symbol10 from '../images/general/abstract-symbols/Abstract-Symbol-10.webp';
import symbol11 from '../images/general/abstract-symbols/Abstract-Symbol-11.webp';
import symbol12 from '../images/general/abstract-symbols/Abstract-Symbol-12.webp';
import symbol13 from '../images/general/abstract-symbols/Abstract-Symbol-13.webp';
import symbol14 from '../images/general/abstract-symbols/Abstract-Symbol-14.webp';

const SYMBOLS = {
    1: symbol1,
    2: symbol2,
    3: symbol3,
    4: symbol4,
    5: symbol5,
    6: symbol6,
    7: symbol7,
    8: symbol8,
    9: symbol9,
    10: symbol10,
    11: symbol11,
    12: symbol12,
    13: symbol13,
    14: symbol14,
};

const VARIANTS = {
    upper: {
        desktop: [1, 2, 3, 4, 5, 6, 7],
        mobile: [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
        ],
    },
    lower: {
        desktop: [8, 9, 10, 11, 12, 13, 14],
        mobile: [
            [1, 2, 3, 4],
            [9, 10, 11, 12],
        ],
    },
    footer: {
        desktop: [8, 9, 10, 11, 12, 13, 14],
        mobile: [[1, 2, 3, 4]],
    },
};

function AbstractSymbol({ num, index }) {
    const delay = (index * -0.7).toFixed(2);
    const duration = (4.5 + (index % 3) * 0.5).toFixed(2);

    return (
        <img
            src={SYMBOLS[num]}
            alt=""
            className="abstract-symbol"
            style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
            }}
            aria-hidden="true"
        />
    );
}

function AbstractSymbolRow({ variant = 'upper', className = '' }) {
    const config = VARIANTS[variant];
    if (!config) return null;

    return (
        <div className={`abstract-symbol-row ${className}`.trim()} aria-hidden="true">
            <div className="abstract-symbol-row__desktop">
                {config.desktop.map((num, index) => (
                    <AbstractSymbol key={`desktop-${num}`} num={num} index={index} />
                ))}
            </div>
            <div className="abstract-symbol-row__mobile">
                {config.mobile.map((row, rowIndex) => (
                    <div key={`mobile-row-${row.join('-')}`} className="abstract-symbol-row__mobile-row">
                        {row.map((num, index) => (
                            <AbstractSymbol
                                key={`mobile-${rowIndex}-${num}`}
                                num={num}
                                index={rowIndex * row.length + index}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default React.memo(AbstractSymbolRow);
