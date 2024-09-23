import React from 'react';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import {NextArrow, PrevArrow} from '../styles/HomeStyles';

export const CustomPrevArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <PrevArrow
            className={className}
            style={{...style}}
            onClick={onClick}
        >
            <FaChevronLeft/>
        </PrevArrow>
    );
};

export const CustomNextArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <NextArrow
            className={className}
            style={{...style}}
            onClick={onClick}
        >
            <FaChevronRight/>
        </NextArrow>
    );
};
