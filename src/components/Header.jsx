import React, {useState} from 'react';
import styled from 'styled-components';
import {FaBars, FaMoon, FaSun, FaTimes} from 'react-icons/fa';
import {Link as ScrollLink} from 'react-scroll';
import {Link, useLocation} from 'react-router-dom';

const Header = ({toggleTheme, isDarkMode}) => {
    const location = useLocation();
    const isProjectPage = location.pathname.startsWith('/project');
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const renderNavItems = () => (
        isProjectPage ? (
            <>
                <NavItem><Link to="/">Home</Link></NavItem>
                <NavItem><ScrollLink to="techstack" smooth duration={500} offset={-50}>Tech Stack</ScrollLink></NavItem>
                <NavItem><ScrollLink to="architecture" smooth duration={500}
                                     offset={-50}>Architecture</ScrollLink></NavItem>
                <NavItem><ScrollLink to="details" smooth duration={500} offset={-50}>Details</ScrollLink></NavItem>
                <NavItem><ScrollLink to="implementation" smooth duration={500} offset={-50}>Implementation</ScrollLink></NavItem>
            </>
        ) : (
            <>
                <NavItem><ScrollLink to="projects" smooth duration={500} offset={-120}>Projects</ScrollLink></NavItem>
                <NavItem><ScrollLink to="about-me" smooth duration={500} offset={-40}>About me</ScrollLink></NavItem>
                <NavItem><ScrollLink to="skills" smooth duration={500} offset={-40}>Skills</ScrollLink></NavItem>
                <NavItem><ScrollLink to="contacts" smooth duration={500} offset={-40}>Contacts</ScrollLink></NavItem>
            </>
        )
    );

    return (
        <HeaderWrapper>
            <Navbar>
                <Logo>
                    <Link to="/">Kyumin Chang</Link>
                </Logo>
                <HamburgerIcon onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes/> : <FaBars/>}
                </HamburgerIcon>
                <DesktopNavListWrapper>
                    <NavList>
                        {renderNavItems()}
                    </NavList>
                </DesktopNavListWrapper>
                <ThemeToggleWrapper>
                    <ThemeToggleInput type="checkbox" id="theme-toggle" checked={isDarkMode} onChange={toggleTheme}/>
                    <ThemeToggleLabel htmlFor="theme-toggle" $isDarkMode={isDarkMode}>
                        <ToggleIcon $isDarkMode={isDarkMode}>
                            {isDarkMode ? <FaSun/> : <FaMoon/>}
                        </ToggleIcon>
                    </ThemeToggleLabel>
                </ThemeToggleWrapper>
            </Navbar>
            <MobileMenuContainer isMenuOpen={isMenuOpen}>
                <NavList>
                    {renderNavItems()}
                </NavList>
            </MobileMenuContainer>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.header`
    background-color: ${({theme}) => theme.primaryBackground};
    color: ${({theme}) => theme.textColor};
    padding: 20px 80px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid ${({theme}) => theme.borderColor};
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    @media (max-width: 860px) {
        padding: 10px 20px;
    }
`;

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
`;

const Logo = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 30px;

    a {
        text-decoration: none;
        color: ${({theme}) => theme.primaryTextColor};
        cursor: pointer;
    }

    @media (max-width: 860px) {
        font-size: 24px;
    }
`;

const HamburgerIcon = styled.div`
    display: none;
    font-size: 24px;
    cursor: pointer;
    color: ${({theme}) => theme.textColor};
    margin-right: 20px;

    @media (max-width: 860px) {
        display: flex;
        justify-content: center;
        margin-left: auto;
    }
`;

const DesktopNavListWrapper = styled.div`
    display: flex;

    @media (max-width: 860px) {
        display: none;
    }
`;

const MobileMenuContainer = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: ${({theme}) => `rgba(${hexToRgb(theme.primaryBackground)}, 0.7)`};
    color: ${({theme}) => theme.textColor};
    display: ${({isMenuOpen}) => (isMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    z-index: 999;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media (min-width: 860px) {
        display: none;
    }
`;

const NavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 30px;

    @media (max-width: 860px) {
        flex-direction: column;
    }
`;

const NavItem = styled.li`
    font-size: 20px;

    a {
        text-decoration: none;
        color: ${({theme}) => theme.textColor};
        transition: color 0.3s;
        cursor: pointer;

        &:hover {
            color: ${({theme}) => theme.linkHoverColor};
        }
    }
`;

const ThemeToggleWrapper = styled.div`
    position: relative;
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 860px) {
        width: 60px;
        height: 30px;
    }
`;

const ThemeToggleInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

const ThemeToggleLabel = styled.label`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({theme}) => theme.textColor};
    border-radius: 34px;
    transition: background-color 0.3s ease;

    &::before {
        position: absolute;
        content: "";
        height: 28px;
        width: 28px;
        left: 6px;
        bottom: 6px;
        background-color: ${({theme}) => theme.primaryBackground};
        border-radius: 50%;
        transition: transform 0.3s ease;
        transform: ${({$isDarkMode}) => ($isDarkMode ? 'translateX(40px)' : 'translateX(0)')};
    }

    @media (max-width: 860px) {
        &::before {
            height: 20px;
            width: 20px;
            transform: ${({$isDarkMode}) => ($isDarkMode ? 'translateX(30px)' : 'translateX(0)')};
        }
    }
`;

const ToggleIcon = styled.div`
    position: absolute;
    top: 60%;
    left: ${({$isDarkMode}) => ($isDarkMode ? '10px' : 'calc(100% - 28px)')};
    transform: translateY(-50%);
    font-size: 20px;
    color: ${({$isDarkMode}) => ($isDarkMode ? '#0D1117' : '#ffffff')};
    transition: left 0.3s ease;

    @media (max-width: 860px) {
        font-size: 16px;
        left: ${({$isDarkMode}) => ($isDarkMode ? '8px' : 'calc(100% - 24px)')};
    }
`;

const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
};
