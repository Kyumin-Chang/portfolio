import React from 'react';
import styled from 'styled-components';

const Footer = () => (
    <FooterWrapper>
        <p>© 2024 Kyumin's Portfolio. All rights reserved.</p>
    </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.footer`
    background-color: ${({theme}) => theme.footerColor};
    color: ${({theme}) => theme.textColor};
    text-align: center;
    padding: 80px;
    transition: background-color 0.3s ease, color 0.3s ease;
`;
