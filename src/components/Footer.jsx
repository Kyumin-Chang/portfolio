import React from 'react';
import styled from 'styled-components';

const Footer = () => (
    <FooterWrapper>
        <p>© 2025 Kyumin's Portfolio. All rights reserved.</p>
    </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.footer`
    background-color: ${({theme}) => theme.footerColor};
    color: ${({theme}) => theme.textColor};
    font-size: 1.2rem;
    text-align: center;
    padding: 80px;
    transition: background-color 0.3s ease, color 0.3s ease;
    user-select: none;

    @media (max-width: 860px) {
        padding: 40px;
        font-size: 0.8rem;
    }
`;
