import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    ContentCategory,
    ImageContainer,
    ImageGallery,
    PageWrapper,
    ProjectContainer,
    ProjectContentGrid,
    ProjectDescription,
    ProjectDetails,
    ProjectImage,
    ProjectSummary,
    ProjectTitle,
    Section,
    Social,
    SocialLink,
    TechnologyItem,
    TechnologyList
} from '../styles/ProjectStyles';
import {FaAws, FaDocker, FaGithub, FaReact} from 'react-icons/fa';
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

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

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
                        <h2>맛집 랜덤 추천 및 교통, 날씨 정보 제공 챗봇 </h2>
                        <p>ChatEAT은 사용자에게 판교 주변 맛집을 랜덤으로 추천하고, 추가로 교통 정보와 날씨 정보를 제공하는 챗봇 서비스입니다.</p>
                        <Social>
                            <SocialLink href="https://github.com/orgs/kakaotechbootcamp-team13/repositories"
                                        target="_blank"><FaGithub/> Github</SocialLink>
                        </Social>
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
                        <Section id="projectSchedule">
                            <h2>프로젝트 수행 기간</h2>
                            <ImageContainer>
                                <ProjectImage
                                    src="/src/assets/ChatEATSchedule.png"
                                    alt="ChatEAT Schedule"
                                />
                            </ImageContainer>
                        </Section>
                        <Section id="flowChart">
                            <h2>전체 플로우 차트</h2>
                            <ImageContainer>
                                <ProjectImage
                                    src="/src/assets/chatEatFlowChart.png"
                                    alt="ChatEAT Flow Chart"
                                />
                            </ImageContainer>
                        </Section>
                        <Section id="architecture">
                            <h2>프로젝트 아키텍쳐</h2>
                            <ImageContainer>
                                <ProjectImage
                                    src="/src/assets/chatEATArchitechture.png"
                                    alt="ChatEAT Architecture Diagram"
                                />
                            </ImageContainer>
                        </Section>
                        <Section id="details">
                            <h2>세부 설명</h2>
                            <p>프로젝트에서 직접 구현한 세부 내용입니다.</p>
                            <ProjectContentGrid>
                                <ContentCategory>
                                    <h3>Frontend</h3>
                                    <h4>[회원 관리]</h4>
                                    <ul>
                                        <li>사용자의 이메일과 패스워드, 닉네임을 받아 회원가입을 진행합니다.</li>
                                        <ul>
                                            <li>
                                                이메일, 닉네임의 경우 중복된 값을 확인하기 위해 백엔드 api를 활용합니다.
                                            </li>
                                        </ul>
                                        <li>닉네임, 비밀번호, 회원탈퇴의 경우 변경 완료 메시지를 추가하여 사용자의 편의성을 증가시켰습니다.</li>
                                        <li>카카오 소셜 로그인을 처음 사용한 유저는 소셜 로그인 전용 회원가입 페이지로 Redirect되어 닉네임을 추가로 입력합니다.</li>
                                        <li>유저의 프로필 사진은 6개의 이미지가 존재하며 이를 선택하여 적용할 수 있습니다.</li>
                                        <li>accessToken을 local storage에 저장하여 로그인 여부를 확인합니다.</li>
                                        <li>refreshToken은 쿠키로 전달하여 보안성을 유지합니다.</li>
                                    </ul>
                                    
                                </ContentCategory>
                                <ContentCategory>
                                    <h3>Education</h3>
                                </ContentCategory>
                            </ProjectContentGrid>
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
