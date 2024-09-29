import React from 'react';
import styled from 'styled-components';
import {FaMoon, FaSun} from 'react-icons/fa';
import {Link as ScrollLink} from 'react-scroll';
import {Link, useLocation} from 'react-router-dom';

const Header = ({toggleTheme, isDarkMode}) => {
    const location = useLocation();

    const isProjectPage = location.pathname.startsWith('/project');

    return (
        <HeaderWrapper>
            <Navbar>
                <Logo><Link to={"/"}>Kyumin Chang</Link></Logo>
                <NavListWrapper>
                    <NavList>
                        {isProjectPage ? (
                            <>
                                <NavItem><Link to="/">Home</Link></NavItem>
                                <NavItem>
                                    <ScrollLink to="techstack" smooth={true} duration={500} offset={-100}>
                                        Tech Stack
                                    </ScrollLink>
                                </NavItem>
                                <NavItem>
                                    <ScrollLink to="architecture" smooth={true} duration={500} offset={-100}>
                                        Architecture
                                    </ScrollLink>
                                </NavItem>
                                <NavItem>
                                    <ScrollLink to="details" smooth={true} duration={500} offset={-100}>
                                        Details
                                    </ScrollLink>
                                </NavItem>
                                <NavItem>
                                    <ScrollLink to="implementation" smooth={true} duration={500} offset={-100}>
                                        Implementation
                                    </ScrollLink>
                                </NavItem>
                            </>
                        ) : (
                            <>
                                <NavItem>
                                    <ScrollLink to="about-me" smooth={true} duration={500} offset={-40}>
                                        About me
                                    </ScrollLink>
                                </NavItem>
                                <NavItem>
                                    <ScrollLink to="skills" smooth={true} duration={500} offset={-40}>
                                        Skills
                                    </ScrollLink>
                                </NavItem>
                                <NavItem>
                                    <ScrollLink to="projects" smooth={true} duration={500} offset={-120}>
                                        Projects
                                    </ScrollLink>
                                </NavItem>
                                <NavItem>
                                    <ScrollLink to="careers" smooth={true} duration={500} offset={-40}>
                                        Careers
                                    </ScrollLink>
                                </NavItem>
                                <NavItem>
                                    <ScrollLink to="contacts" smooth={true} duration={500} offset={-40}>
                                        Contacts
                                    </ScrollLink>
                                </NavItem>
                            </>
                        )}
                    </NavList>
                </NavListWrapper>
                <ThemeToggleWrapper>
                    <ThemeToggleInput
                        type="checkbox"
                        id="theme-toggle"
                        checked={isDarkMode}
                        onChange={toggleTheme}
                    />
                    <ThemeToggleLabel
                        htmlFor="theme-toggle"
                        $isDarkMode={isDarkMode}
                    >
                        <ToggleIcon $isDarkMode={isDarkMode}>
                            {isDarkMode ? <FaSun/> : <FaMoon/>}
                        </ToggleIcon>
                    </ThemeToggleLabel>
                </ThemeToggleWrapper>
            </Navbar>
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
`;

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 30px;

    a {
        text-decoration: none;
        color: ${({theme}) => theme.primaryTextColor};
        cursor: pointer;
    }
`;

const NavListWrapper = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

const NavList = styled.ul`
    display: flex;
    gap: 35px;
`;

const NavItem = styled.li`
    list-style: none;

    a {
        text-decoration: none;
        font-size: 20px;
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
        transform: ${({$isDarkMode}) => $isDarkMode ? 'translateX(40px)' : 'translateX(0)'};
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
`;
