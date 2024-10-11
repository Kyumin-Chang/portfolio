import React, {useEffect, useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    ContentCategory,
    ImageGallery,
    MainContent,
    PageWrapper,
    ProjectContainer,
    ProjectContentGrid,
    ProjectDetails,
    ProjectImage,
    ProjectMain,
    ProjectSlide,
    ProjectSummary,
    ProjectTitle,
    Section,
    SlideImg,
    Social,
    SocialLink,
    TechnologyItem,
    TechnologyList
} from '../styles/ProjectStyles';
import {FaGithub, FaReact} from 'react-icons/fa';
import {SiVercel, SiVite} from 'react-icons/si';
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

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

const Project5 = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem('isDarkMode');
        return storedTheme ? JSON.parse(storedTheme) : true;
    });
    const theme = isDarkMode ? darkTheme : lightTheme;

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <PageWrapper>
                <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
                <ProjectContainer>
                    <ProjectMain>
                        <ProjectSlide>
                            <SlideImg bgImage="/pfSlide.png"/>
                            <MainContent>
                                <ProjectTitle>Portfolio WebSite</ProjectTitle>
                                <h2>나의 프로젝트를 소개하는 포트폴리오 웹사이트 제작</h2>
                                <p>개발자로서의 장규민과 주요 프로젝트를 소개하는 웹사이트를 직접 제작하였습니다.</p>
                                <Social>
                                    <SocialLink href="https://github.com/Kyumin-Chang/portfolio"
                                                target="_blank"><FaGithub/> Github</SocialLink>
                                </Social>
                            </MainContent>
                        </ProjectSlide>
                        <ProjectSummary>
                            <p><strong>개발 기간:</strong> 2024.09 ~ <span>(계속해서 내용 추가 중)</span></p>
                            <p><strong>개발 인원:</strong> 1명 <span>(개인 프로젝트)</span></p>
                            <strong>세부 내용:</strong>
                            <ul>
                                <li>디자인 및 전체 프로젝트 진행 <span>(기여도 100%)</span></li>
                            </ul>
                        </ProjectSummary>
                    </ProjectMain>
                    <ProjectDetails>
                        <Section id="techstack">
                            <h2>사용한 기술 스택</h2>
                            <TechnologyList>
                                <TechnologyItem>
                                    <FaReact/> React
                                </TechnologyItem>
                                <TechnologyItem>
                                    <SiVite/> Vite
                                </TechnologyItem>
                                <TechnologyItem>
                                    <SiVercel/> Vercel
                                </TechnologyItem>
                            </TechnologyList>
                        </Section>
                        <Section id="details">
                            <h2>세부 설명</h2>
                            <p>프로젝트에 대한 세부 내용입니다.</p>
                            <ProjectContentGrid>
                                <ContentCategory>
                                    <h3>Frontend</h3>
                                    <h4>[ 프로젝트 시작 배경 ]</h4>
                                    <ul>
                                        <li>백엔드 개발자로서 프론트엔드 기술에 대한 이해가 필요하다고 느껴, React를 공부하며 실제 프로젝트에 적용해보고자 포트폴리오 사이트를
                                            개발하게 되었습니다. 이를 통해 프론트엔드 개발의 전반적인 흐름과 기술을 직접 경험하고, 배운 내용을 실무에 적용할 수 있는 기회를
                                            만들고자 하였습니다.
                                        </li>
                                    </ul>
                                    <br/>
                                    <h4>[ 디자인 및 기획 ]</h4>
                                    <ul>
                                        <li>직관적인 UI/UX로 디자인하여 사이트 방문자가 쉽게 저에 대해 알 수 있도록 하였습니다.</li>
                                        <li>다양한 디바이스에서 사이트를 확인할 수 있도록 반응형 웹 구조를 적용하였습니다.</li>
                                        <li>프로젝트르 슬라이드 형식으로 볼 수 있게 하여 사용자로 하여금 재미와 편리함이 향상되도록 하였습니다.</li>
                                    </ul>
                                    <br/>
                                    <h4>[ 개발 부분 ]</h4>
                                    <ul>
                                        <li>각 컴포넌트의 스타일을 모듈화하여 유지보수를 쉽게 하였습니다.</li>
                                        <li>react slick과 같은 최적의 애니메이션을 적용하여 사용자가 사이트를 편리하게 이용할 수 있도록 하였습니다.</li>
                                        <li>Vercel 플랫폼을 활용하여 배포 및 자동화에 대한 파이프 라인을 구축하였습니다.</li>
                                    </ul>
                                </ContentCategory>
                            </ProjectContentGrid>
                        </Section>
                        <Section id="implementation">
                            <h2>프로젝트 시연 이미지</h2>
                            <ImageGallery>
                                {[
                                    {
                                        description: '<span class="image-title">홈 화면입니다.</span><br/>다크모드/라이트모드를 구별하여 사용자들의 편리성을 강화하였습니다.<br/>헤더 내비게이션 바를 이용하여 사용자가 원하는 섹션으로 이동할 수 있도록 하고, 다양한 버튼을 만들어 깃허브와 블로그 링크로 바로 이동할 수 있도록 하였습니다. 모바일 화면에서는 버튼을 이용하여 헤더의 요소를 볼 수 있도록 구현하였습니다.',
                                        src: '/pf1.png',
                                        alt: 'PF Implementation Image 1',
                                    },
                                    {
                                        description: '<span class="image-title">프로젝트 슬라이드 화면입니다.</span><br/>프로젝트가 일정 주기마다 자동으로 슬라이드되어 사용자가 편리하게 프로젝트의 리스트를 볼 수 있도록 하였습니다.',
                                        src: '/pf2.png',
                                        alt: 'PF Implementation Image 2',
                                    },
                                    {
                                        description: '<span class="image-title">기술 스택 화면입니다.</span><br/>기술 스택을 분야별로 나누어 각각 로고와 함께 배치하였습니다.',
                                        src: '/pf3.png',
                                        alt: 'PF Implementation Image 3',
                                    },
                                    {
                                        description: '<span class="image-title">프로젝트 페이지 메인 화면입니다.</span><br/>프로젝트 구현 이미지를 배경으로 하여 슬라이드가 되게 하였습니다.</br>프로젝트 관련 각종 링크와 함께 프로젝트에 대한 기본적인 내용들을 담았습니다.</br>헤더의 경우 프로젝트 페이지에서는 다른 메뉴가 나타나도록 구현하였습니다.',
                                        src: '/pf4.png',
                                        alt: 'PF Implementation Image 4',
                                    },
                                    {
                                        description: '<span class="image-title">프로젝트 페이지 기술 스택 화면입니다.</span><br/>프로젝트에 사용된 기술 스택을 배치하였습니다.',
                                        src: '/pf5.png',
                                        alt: 'PF Implementation Image 5',
                                    },
                                    {
                                        description: '<span class="image-title">프로젝트 페이지 세부 내용 화면입니다.</span><br/>프로젝트에서 직접 구현한 부분을 기술 중심으로 설명하였습니다.</br>또한, 트러블슈팅 내용들도 포함하여 프로젝트를 통해 배운 점들도 함께 서술하였습니다.',
                                        src: '/pf6.png',
                                        alt: 'PF Implementation Image 6',
                                    },
                                    {
                                        description: '<span class="image-title">프로젝트 구현 화면입니다.</span><br/>프로젝트 구현 영상과 이미지 및 관련 설명를 포함하였습니다.',
                                        src: '/pf7.png',
                                        alt: 'PF Implementation Image 7',
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="image-wrapper">
                                        <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                                        <ProjectImage
                                            src={item.src}
                                            alt={item.alt}
                                            width="80%"
                                        />
                                    </div>
                                ))}
                            </ImageGallery>
                        </Section>
                    </ProjectDetails>
                </ProjectContainer>
                <Footer/>
            </PageWrapper>
            <ScrollToTopButton/>
        </ThemeProvider>
    );
};

export default Project5;
