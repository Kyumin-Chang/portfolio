import React from 'react';
import {FaArrowUp} from 'react-icons/fa'; // Font Awesome에서 화살표 아이콘 임포트
import styled from 'styled-components';

function ScrollToTopButton() {
    // 맨 위로 스크롤하는 함수
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 부드럽게 스크롤
        });
    };

    return (
        <ScrollButton onClick={scrollToTop}>
            <FaArrowUp/>
        </ScrollButton>
    );
}

const ScrollButton = styled.button`
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 50px;
    height: 50px;
    background-color: transparent;
    color: ${({theme}) => theme.textColor};
    border: 1px solid ${({theme}) => theme.textColor};
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({theme}) => theme.textColor};
        color: ${({theme}) => theme.reverseTextColor};
    }

    @media (max-width: 860px) {
        display: none;
    }
`;

export default ScrollToTopButton;
