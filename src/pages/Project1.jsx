import React, {useEffect, useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    ContentCategory,
    ImageContainer,
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
    ProjectVideo,
    Section,
    SlideImg,
    Social,
    SocialLink,
    TechnologyItem,
    TechnologyList,
    VideoContainer
} from '../styles/ProjectStyles';
import {FaAws, FaDocker, FaGithub, FaReact} from 'react-icons/fa';
import {SiMongodb, SiMysql, SiNginx, SiNotion, SiRedis, SiSpring, SiSpringsecurity} from 'react-icons/si';
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
                    <ProjectMain>
                        <ProjectSlide>
                            <SlideImg/>
                            <MainContent>
                                <ProjectTitle>ChatEAT</ProjectTitle>
                                <h2>맛집 랜덤 추천 및 교통, 날씨 정보 제공 챗봇 </h2>
                                <p>ChatEAT은 사용자에게 판교 주변 맛집을 랜덤으로 추천하고, 추가로 교통 정보와 날씨 정보를 제공하는 챗봇 서비스입니다.</p>
                                <Social>
                                    <SocialLink href="https://github.com/orgs/kakaotechbootcamp-team13/repositories"
                                                target="_blank"><FaGithub/> Github</SocialLink>
                                    <SocialLink
                                        href="https://ktb-1-group-13.notion.site/Chat-EAT-a28d1080473940cc93481185200653a1?pvs=4"
                                        target="_blank"><SiNotion/> Notion</SocialLink>
                                </Social>
                            </MainContent>
                        </ProjectSlide>
                        <ProjectSummary>
                            <p><strong>개발 기간:</strong> 2024.08 ~ 2024.09 <span>(2개월)</span></p>
                            <p><strong>개발 인원:</strong> 6명 <span>(팀프로젝트)</span></p>
                            <p><strong>담당 역할:</strong> 백엔드, 프론트엔드</p>
                            <strong>세부 내용:</strong>
                            <ul>
                                <li>서비스 기획 및 전체 프로젝트 진행 <span>(기여도 60%)</span></li>
                                <li>로그인 및 회원 관리, 관련 페이지 <span>(기여도 100%)</span></li>
                                <li>관리자 기능 및 관리자 페이지 <span>(기여도 100%)</span></li>
                                <li>채팅 기능 <span>(기여도 40%)</span></li>
                                <li>인증 및 보안 <span>(기여도 100%)</span></li>
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
                                    src="/chatEATSchedule.png"
                                    alt="ChatEAT Schedule"
                                />
                            </ImageContainer>
                        </Section>
                        <Section id="flowChart">
                            <h2>전체 플로우 차트</h2>
                            <ImageContainer>
                                <ProjectImage
                                    src="/chatEATFlowChart.png"
                                    alt="ChatEAT Flow Chart"
                                />
                            </ImageContainer>
                        </Section>
                        <Section id="architecture">
                            <h2>프로젝트 아키텍쳐</h2>
                            <ImageContainer>
                                <ProjectImage
                                    src="/chatEATArchitechture.png"
                                    alt="ChatEAT Architecture Diagram"
                                />
                            </ImageContainer>
                        </Section>
                        <Section id="details">
                            <h2>세부 설명</h2>
                            <p>프로젝트에서 직접 구현을 맡은 부분에 대한 세부 내용입니다.</p>
                            <ProjectContentGrid>
                                <ContentCategory>
                                    <h3>Frontend</h3>
                                    <h4>[ 회원 관리 ]</h4>
                                    <ul>
                                        <li>사용자의 이메일과 패스워드, 닉네임을 받아 회원가입을 진행합니다.</li>
                                        <ul>
                                            <li>이메일, 닉네임의 경우 중복된 값을 확인하기 위해 백엔드 api를 활용합니다.</li>
                                        </ul>
                                        <li>닉네임, 비밀번호, 회원탈퇴의 경우 변경 완료 메시지를 추가하여 사용자의 편의성을 증가시켰습니다.</li>
                                        <li>카카오 소셜 로그인을 처음 사용한 유저는 소셜 로그인 전용 회원가입 페이지로 Redirect되어 닉네임을 추가로 입력합니다.</li>
                                        <li>유저의 프로필 사진은 6개의 이미지가 존재하며 이를 선택하여 적용할 수 있습니다.</li>
                                        <li>accessToken을 local storage에 저장하여 로그인 여부를 확인합니다.</li>
                                        <li>refreshToken은 쿠키로 전달하여 보안성을 유지합니다.</li>
                                    </ul>
                                    <br/>
                                    <h4>[ 좋아요 관리 ]</h4>
                                    <ul>
                                        <li>채팅 목록에서 Client가 하트를 클릭하면 좋아요 상태가 Backend로 전송되어 데이터베이스에 저장됩니다. 이후 Client가
                                            Like 탭을 클릭하면, 좋아요한 채팅만 필터링되어 표시됩니다.
                                        </li>
                                        <ul>
                                            <li>하트 클릭, 채팅 보기 등의 사용자 액션에 대해 실시간으로 반응하는 UI/UX를 구현하여 사용자 경험을 개선하고
                                                상호작용성을
                                                상승시켰습니다.
                                            </li>
                                        </ul>
                                    </ul>
                                </ContentCategory>
                                <ContentCategory>
                                    <h3>Backend</h3>
                                    <h4>[ 회원 인증 관리 ]</h4>
                                    <ul>
                                        <li>JWT를 사용하여 api 및 회원 인증을 구현하였습니다. access token과 refresh token을 사용하였고, 각각 1시간,
                                            2주의 만료기간을 설정하여 보안성을 높였습니다. refresh token의 경우 AES-128을 통해 한번 더 암호화하여 사용자에게
                                            전달하였으며, redis를 이용해 토큰 검증을 빠르게 처리하였습니다.
                                        </li>
                                        <li>access token이 만료되면 쿠키에 저장되어있던 refresh token을 이용하여 새로운 access token을 발급하고 만약
                                            refresh token이 만료되었으면 로그아웃 처리가 되도록 처리하였습니다.
                                        </li>
                                        <li>커스텀 필터를 구현하여 JWT 인증 필터가 특정 api를 제외하고 항상 사용되도록 하였으며, 커스텀 handler를 통해 각종 예외처리를
                                            구현하였습니다.
                                        </li>
                                    </ul>
                                    <br/>
                                    <h4>[ OAuth 2.0 ]</h4>
                                    <ul>
                                        <li>일반 유저 details와 oauth2 user details를 합친 principal details를 새로 정의하여 하나의 객체로
                                            반환되도록 구현하였습니다.
                                        </li>
                                        <ul>
                                            <li>결국 토큰의 경우 oauth2.0 서버가 아닌 기존 서버에서 발급한 토큰을 사용하기 때문에 위와 같이 구현하였습니다.</li>
                                        </ul>
                                        <li>성공 핸들러와 실패 핸들러의 경우 프론트엔드 url로 직접 redirect 하도록 구현하였습니다.</li>
                                    </ul>
                                    <br/>
                                    <h4>[ Migraion ]</h4>
                                    <ul>
                                        <li>Flyway를 활용하여 데이터 마이그레이션을 진행하였습니다.</li>
                                        <ul>
                                            <li>팀원과의 협업시 데이터베이스베이스 변경 이력을 명확하게 확인할 수 있습니다.</li>
                                            <li>배포 환경 간의 스키마 차이를 방지할 수 있습니다.</li>
                                        </ul>
                                    </ul>
                                </ContentCategory>
                            </ProjectContentGrid>
                        </Section>
                        <Section id="implementation">
                            <h2>프로젝트 시연 영상 및 이미지</h2>
                            <VideoContainer>
                                <h3> 프로젝트 시연 영상 </h3>
                                <ProjectVideo controls>
                                    <source src="/chateatImpl.mp4" type="video/mp4"/>
                                    브라우저가 동영상을 지원하지 않습니다.
                                </ProjectVideo>
                            </VideoContainer>
                            <ImageGallery>
                                <h3>프로젝트 시연 이미지</h3>
                                <p>홈 화면입니다.</p>
                                <ProjectImage
                                    src="/chatEAThome.png"
                                    alt="ChatEAT Implementation Image 1"
                                />
                                <p>회원가입 화면입니다. 이메일과 닉네임을 입력하면 자동으로 중복 검사를 수행합니다.</p>
                                <ProjectImage
                                    src="/chatEATregister.png"
                                    alt="ChatEAT Implementation Image 2"
                                />
                                <p>로그인 화면입니다.</p>
                                <ProjectImage
                                    src="/chatEATlogin.png"
                                    alt="ChatEAT Implementation Image 3"
                                />
                                <p>로그인 후 홈 화면입니다.</p>
                                <ProjectImage
                                    src="/chatEAThomelogin.png"
                                    alt="ChatEAT Implementation Image 4"
                                />
                                <p>회원 정보 화면입니다.</p>
                                <ProjectImage
                                    src="/chatEATinfo.png"
                                    alt="ChatEAT Implementation Image 5"
                                />
                                <p>회원 정보 수정 화면입니다.</p>
                                <ProjectImage
                                    src="/chatEATedit.png"
                                    alt="ChatEAT Implementation Image 6"
                                />
                                <p>아바타 수정 화면입니다.</p>
                                <ProjectImage
                                    src="/chatEATavatar.png"
                                    alt="ChatEAT Implementation Image 7"
                                />
                                <p>채팅 화면입니다. 채팅을 보내면 AI 서버와 통신하여 응답을 받아옵니다.</p>
                                <ProjectImage
                                    src="/chatEATchat.png"
                                    alt="ChatEAT Implementation Image 8"
                                />
                                <p>좋아요 화면입니다.</p>
                                <ProjectImage
                                    src="/chatEATlike.png"
                                    alt="ChatEAT Implementation Image 9"
                                />
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

export default Project1;
