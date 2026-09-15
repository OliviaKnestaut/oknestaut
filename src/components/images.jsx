import kimsDragonCover from '../images/home/Kim-Dragon-Cover.png';
import letterboxdCover from '../images/home/Letterboxd-Cover.png';
import rightOnCover from '../images/home/RightOn-Cover.png';
import riverfrontCover from '../images/home/RiverfrontWilm-Cover.png';
import tesseraCover from '../images/home/Tessera-Cover.png';
import intealthCover from '../images/intealth/Intealth-Cover.png';

export const abstractGraphics = {
    upper: {
        full: `${process.env.PUBLIC_URL}/images/general/upper-absract-full-row.svg`,
        mobile: `${process.env.PUBLIC_URL}/images/general/upper-abstract-2-rows.svg`,
    },
    lower: {
        full: `${process.env.PUBLIC_URL}/images/general/lower-absract-full-row.svg`,
        mobile: `${process.env.PUBLIC_URL}/images/general/lower-absract-mobile-row.svg`,
    },
};

export const caseStudyCovers = {
    kimsDragon: kimsDragonCover,
    rightOn: rightOnCover,
    riverfront: riverfrontCover,
    letterboxd: letterboxdCover,
    tessera: tesseraCover,
    intealth: intealthCover,
};
