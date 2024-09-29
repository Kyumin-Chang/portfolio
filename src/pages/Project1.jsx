import React, {useEffect, useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    ArchitectureDiagram,
    ImageGallery,
    PageWrapper,
    ProjectContainer,
    ProjectDescription,
    ProjectDetails,
    ProjectImage,
    ProjectSummary,
    ProjectTitle,
    Section,
    TechnologyItem,
    TechnologyList
} from '../styles/ProjectStyles';
import {FaAws, FaDocker, FaReact} from 'react-icons/fa';
import {SiMongodb, SiMysql, SiNginx, SiRedis, SiSpring, SiSpringsecurity} from 'react-icons/si';

const lightTheme = {
    background: '#f0f0f5',
    textColor: '#000000',
    primaryBackground: '#ffffff',
    linkHoverColor: '#1d51b8',
    borderColor: '#ddd',
    footerColor: '#d5d5d5',
    reverseColor: '#222',
    reverseTextColor: '#fff',
    skillGridColor: '#efeff3',
    cardBackgroundColor: 'rgba(255,255,255,0.77)',
    buttonColor: '#5a5a5a',
    reverseButtonColor: '#ffffff',
};

const darkTheme = {
    background: '#1e1e2f',
    textColor: '#ffffff',
    primaryBackground: '#0D1117',
    linkHoverColor: '#a6b1e1',
    borderColor: '#444',
    footerColor: '#000000',
    reverseColor: '#fff',
    reverseTextColor: '#222',
    skillGridColor: '#3f3f4a',
    cardBackgroundColor: 'rgba(0,0,0,0.61)',
    buttonColor: '#fff',
    reverseButtonColor: '#4e4c4c',
};

const Project1 = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const theme = isDarkMode ? darkTheme : lightTheme;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <PageWrapper>
                <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
                <ProjectContainer>
                    <ProjectTitle>ChatEAT</ProjectTitle>
                    <ProjectDescription>
                        맛집 랜덤 추천 및 교통, 날씨 정보 제공 챗봇
                        <ProjectSummary>
                            <p><strong>개발 기간:</strong> 2024.08 ~ 2024.09 <span>(2개월)</span></p>
                            <p><strong>개발 인원:</strong> 6명 <span>(팀프로젝트)</span></p>
                            <p><strong>담당 역할:</strong> 백엔드, 프론트엔드</p>
                            <p>
                                <strong>세부 내용:</strong>
                                <ul>
                                    <li>서비스 기획 및 전체 프로젝트 진행 <span>(기여도 60%)</span></li>
                                    <li>로그인 및 회원 관리, 관련 페이지 <span>(기여도 100%)</span></li>
                                    <li>관리자 기능 및 관리자 페이지 <span>(기여도 100%)</span></li>
                                    <li>채팅 기능 <span>(기여도 40%)</span></li>
                                    <li>인증 및 보안 <span>(기여도 100%)</span></li>
                                </ul>
                            </p>
                        </ProjectSummary>

                    </ProjectDescription>
                    <ProjectDetails>
                        <Section id="techstack">
                            <h2>사용한 기술 스택</h2>
                            <TechnologyList>
                                <TechnologyItem>
                                    <FaReact/> React
                                </TechnologyItem>
                                <TechnologyItem>
                                    <SiSpring/> Spring
                                </TechnologyItem>
                                <TechnologyItem>
                                    <SiSpringsecurity/> Spring Security
                                </TechnologyItem>
                                <TechnologyItem>
                                    <SiMysql/> MySQL
                                </TechnologyItem>
                                <TechnologyItem>
                                    <SiMongodb/> MongoDB
                                </TechnologyItem>
                                <TechnologyItem>
                                    <SiRedis/> Redis
                                </TechnologyItem>
                                <TechnologyItem>
                                    <FaAws/> AWS
                                </TechnologyItem>
                                <TechnologyItem>
                                    <FaDocker/> Docker
                                </TechnologyItem>
                                <TechnologyItem>
                                    <SiNginx/> Nginx
                                </TechnologyItem>
                            </TechnologyList>
                        </Section>
                        <Section id="architecture">
                            <h2>프로젝트 아키텍쳐</h2>
                            <ArchitectureDiagram>
                                <ProjectImage
                                    src="/src/assets/project1.png"
                                    alt="ChatEAT Architecture Diagram"
                                />
                            </ArchitectureDiagram>
                        </Section>
                        <Section id="details">
                            <h2>세부 설명</h2>
                            <p>
                                ChatEAT은 사용자에게 맛집을 랜덤으로 추천하고, 추가로 해당 맛집의 교통 정보와 날씨 정보를 제공하는 챗봇 서비스입니다. 이 서비스는 사용자의 위치를
                                기반으로 하여 최적의 맛집을 추천하며, 사용자는 간편하게 챗봇을 통해 정보를 얻을 수 있습니다.
                            </p>
                            <p>
                                또한, 이 프로젝트는 React와 Node.js를 기반으로 구축되었으며, MongoDB를 사용하여 데이터를 관리하고 있습니다. 전체적인 아키텍처는 AWS와
                                Docker를 사용하여 클라우드 환경에서 안정적으로 서비스될 수 있도록 설계되었습니다.
                            </p>
                        </Section>
                        <Section id="implementation">
                            <h2>구현 이미지</h2>
                            <ImageGallery>
                                <ProjectImage
                                    src="/src/assets/project1.png"
                                    alt="ChatEAT Implementation Image 1"
                                />
                                <ProjectImage
                                    src="/src/assets/project1.png"
                                    alt="ChatEAT Implementation Image 2"
                                />
                            </ImageGallery>
                        </Section>
                    </ProjectDetails>
                </ProjectContainer>
                <Footer/>
            </PageWrapper>
        </ThemeProvider>
    );
};

export default Project1;
