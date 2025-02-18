import React, {useEffect, useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    ContentCategory,
    ContentCategoryBox,
    DetailBox,
    DetailContent,
    FinalContent,
    ImageContainer,
    ImageGallery,
    MainContent,
    PageWrapper,
    ProblemContent,
    ProjectArchitectureImage,
    ProjectContainer,
    ProjectContentGrid,
    ProjectDetails,
    ProjectImage,
    ProjectMain,
    ProjectSlide,
    ProjectSummary,
    ProjectTitle,
    ProjectTSGrid,
    ProjectVideo,
    Section,
    SlideImg,
    Social,
    SocialLink,
    SolvingContent,
    StyledArrowDown,
    StyledVelog,
    StyledVisualArrowDown,
    TechContainer,
    TechnologyCard,
    TechnologyItem,
    TechnologyList,
    TechSectionTitle,
    TSBasicBox,
    TSBlogIcon,
    TSBlogIconWrapper,
    TSBox,
    TSHeader,
    TSHeaderBox,
    TSMainContent,
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
    inboxColor: '#f4f4f4',
    highlightedColor: '#fff',
    cardBackgroundColor: 'rgba(255,255,255,0.77)',
    buttonColor: '#5a5a5a',
    reverseButtonColor: '#ffffff',
    imageBorderColor: '#dadada',
};

const darkTheme = {
    background: '#1e1e2f',
    textColor: '#ffffff',
    primaryBackground: '#0D1117',
    linkHoverColor: '#a6b1e1',
    borderColor: '#444',
    borderMainContentColor: '#d9d8d8',
    footerColor: '#000000',
    reverseColor: '#fff',
    reverseTextColor: '#222',
    skillGridColor: '#2f2f36',
    inboxColor: '#35353d',
    highlightedColor: '#494952',
    cardBackgroundColor: 'rgba(0,0,0,0.61)',
    buttonColor: '#fff',
    reverseButtonColor: '#4e4c4c',
    imageBorderColor: '#3c3c3c',
};

const Project2 = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem('isDarkMode');
        return storedTheme ? JSON.parse(storedTheme) : true;
    });
    const theme = isDarkMode ? darkTheme : lightTheme;

    const [openStates, setOpenStates] = useState({});
    const [renderStates, setRenderStates] = useState({});

    const toggleBox = (boxId) => {
        setOpenStates((prev) => ({
            ...prev,
            [boxId]: !prev[boxId],
        }));
    };

    useEffect(() => {
        Object.keys(openStates).forEach((boxId) => {
            if (openStates[boxId]) {
                setRenderStates((prev) => ({
                    ...prev,
                    [boxId]: true,
                }));
            } else {
                const timer = setTimeout(() => {
                    setRenderStates((prev) => ({
                        ...prev,
                        [boxId]: false,
                    }));
                }, 500);

                return () => clearTimeout(timer);
            }
        });
    }, [openStates]);

    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const techCategories = [
        {
            title: "Frontend",
            techs: [
                {icon: <FaReact/>, name: "React", highlighted: true},
            ],
        },
        {
            title: "Backend",
            techs: [
                {icon: <SiSpring/>, name: "Spring", highlighted: true},
                {icon: <SiSpringsecurity/>, name: "Spring Security", highlighted: true},
            ],
        },
        {
            title: "Database",
            techs: [
                {icon: <SiMysql/>, name: "MySQL", highlighted: true},
                {icon: <SiMongodb/>, name: "MongoDB", highlighted: true},
                {icon: <SiRedis/>, name: "Redis", highlighted: true},
            ],
        },
        {
            title: "Cloud",
            techs: [
                {icon: <FaAws/>, name: "AWS", highlighted: true},
                {icon: <FaDocker/>, name: "Docker", highlighted: false},
                {icon: <SiNginx/>, name: "Nginx", highlighted: true},
            ],
        },
    ];

    return (
        <ThemeProvider theme={theme}>
            <PageWrapper>
                <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
                <ProjectContainer>
                    <ProjectMain>
                        <ProjectSlide>
                            <SlideImg bgImage="/chatEATslide.png"/>
                            <MainContent>
                                <ProjectTitle>ChatEAT</ProjectTitle>
                                <h2>맛집 랜덤 추천 및 교통, 날씨 정보 제공 챗봇</h2>
                                <p>ChatEAT은 사용자에게 판교 주변 맛집을 랜덤으로 추천하고, {"\n"} 추가로 교통 정보와 날씨 정보를 제공하는 챗봇 서비스입니다.</p>
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
                            <p>하이라이트된 스택은 직접 개발을 진행한 {"\n"} 기술 스택입니다.</p>
                            <TechContainer>
                                {techCategories.map(({title, techs}) => (
                                    <TechnologyCard key={title}>
                                        <TechSectionTitle>{title}</TechSectionTitle>
                                        <TechnologyList>
                                            {techs.map(({icon, name, highlighted}) => (
                                                <TechnologyItem key={name} $highlighted={highlighted}>
                                                    {icon} {name}
                                                </TechnologyItem>
                                            ))}
                                        </TechnologyList>
                                    </TechnologyCard>
                                ))}
                            </TechContainer>
                        </Section>
                        <Section id="architecture">
                            <h2>프로젝트 아키텍쳐</h2>
                            <p>프로젝트의 기본 아키텍처입니다.</p>
                            <ImageContainer>
                                <ProjectArchitectureImage
                                    src="/chatEATArchitechture.png"
                                    alt="ChatEAT Architecture Diagram"
                                />
                            </ImageContainer>
                        </Section>
                        <Section id="details">
                            <h2>세부 설명</h2>
                            <p>프로젝트에서 직접 구현을 맡은 부분에 대한 {"\n"} 세부 내용입니다.</p>
                            <ProjectContentGrid>
                                <ContentCategoryBox>
                                    Backend
                                    <ContentCategory>
                                        회원 인증 및 보안 강화
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            JWT 기반 인증을 구현하고 Access Token(1시간), Refresh Token(2주)을 활용하여 {"\n"} 보안을
                                            강화하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            OAuth2.0 소셜 로그인(Kakao)과 기존 JWT 인증을 통합하여 사용자 인증을 구현하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            커스텀 JWT 인증 필터를 적용하여 특정 API를 제외하고 항상 인증이 실행되도록 구성하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <ContentCategory>
                                        데이터베이스 마이그레이션 및 관리
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            Flyway를 적용하여 데이터베이스 변경 이력을 추적하고, 배포 환경 간 스키마 차이를 방지하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <ContentCategory>
                                        실시간 좋아요 및 채팅 데이터 관리
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            Redis를 활용하여 좋아요 및 채팅 데이터를 실시간으로 반영하고 {"\n"} 빠르게 조회할 수 있도록 최적화하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            채팅 데이터는 MongoDB에 저장하고, WebSocket을 활용해 실시간 메시징 기능을 구현하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <ContentCategory>
                                        Nginx를 활용한 서버 배포
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            Nginx를 리버스 프록시로 설정하여 백엔드 서버를 배포하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                </ContentCategoryBox>
                                <ContentCategoryBox>
                                    Frontend
                                    <ContentCategory>
                                        회원 관리 및 UI 개선
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            닉네임 변경, 비밀번호 변경, 회원 탈퇴 시 확인 메시지를 추가하여 UX를 개선하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            카카오 소셜 로그인 시 신규 유저는 별도의 회원가입 페이지로 이동하여 추가 정보를 입력하도록 {"\n"} 처리하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <ContentCategory>
                                        좋아요 및 채팅 UI 실시간 반영
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            좋아요 상태 변경과 채팅 목록 갱신을 실시간으로 반영하여 사용자 경험을 향상시켰습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <ContentCategory>
                                        보안 및 인증 유지
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            Access Token은 Local Storage에, Refresh Token은 쿠키로 관리하여 보안을 강화하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                </ContentCategoryBox>
                            </ProjectContentGrid>
                        </Section>
                        <Section id="troubleshooting">
                            <h2>트러블 슈팅</h2>
                            <p>프로젝트에서 발생한 트러블 슈팅에 대한 내용입니다.</p>
                            <p>박스를 클릭하면 각 항목에 대한 상세 내용을 {"\n"} 확인할 수 있습니다.</p>
                            <ProjectTSGrid>
                                <TSBox isOpen={openStates[1]} hasBlogIcon={true} onClick={() => toggleBox(1)}>
                                    <TSHeader>
                                        <TSHeaderBox>
                                            <TSMainContent>UserDetails와 OAuth2User 통합</TSMainContent>
                                            {(
                                                <TSBlogIconWrapper onClick={(event) => event.stopPropagation()}>
                                                    <TSBlogIcon
                                                        href="https://velog.io/@lord/Trouble-Shooting-Spring-Security%EC%99%80-OAuth-2.0-%EB%B0%98%ED%99%98-%EA%B0%9D%EC%B2%B4-%ED%86%B5%ED%95%A9%ED%95%98%EA%B8%B0"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <StyledVelog/> 블로그 바로가기
                                                    </TSBlogIcon>
                                                </TSBlogIconWrapper>
                                            )}
                                        </TSHeaderBox>
                                        <StyledVisualArrowDown isOpen={openStates[1]} hasBlogIcon={true}/>
                                    </TSHeader>
                                    {renderStates[1] && (
                                        <>
                                            <TSBasicBox>
                                                문제 상황
                                                <ProblemContent>
                                                    일반 로그인과 OAuth2.0 로그인에서 각각 다른 객체(UserDetails, OAuth2User)가 반환되어 인증 처리
                                                    로직이 복잡해졌습니다.
                                                </ProblemContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                해결 방안
                                                <SolvingContent>
                                                    두 객체를 통합한 PrincipalDetails 클래스를 정의하여 로그인 방식과 무관하게 일관된 인증 객체를 반환하도록
                                                    변경하였습니다.
                                                </SolvingContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                결론
                                                <FinalContent>
                                                    인증 로직이 단순해지고 유지보수성이 향상되었습니다.
                                                </FinalContent>
                                            </TSBasicBox>
                                        </>
                                    )}
                                </TSBox>
                                <TSBox isOpen={openStates[2]} hasBlogIcon={false} onClick={() => toggleBox(2)}>
                                    <TSHeader>
                                        <TSMainContent>로그아웃 후 Access Token 보안 강화</TSMainContent>
                                        <StyledVisualArrowDown isOpen={openStates[2]} hasBlogIcon={false}/>
                                    </TSHeader>
                                    {renderStates[2] && (
                                        <>
                                            <TSBasicBox>
                                                문제 상황
                                                <ProblemContent>
                                                    로그아웃 후에도 Access Token이 일정 시간 동안 유효하여 보안 취약점이 발생하였습니다.
                                                </ProblemContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                해결 방안
                                                <SolvingContent>
                                                    로그아웃 시 Access Token을 Redis에 저장하고 1시간 만료 설정을 적용하여 동일 토큰
                                                    재사용을 {"\n"} 차단하였습니다.
                                                </SolvingContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                결론
                                                <FinalContent>
                                                    로그아웃 후에도 Access Token을 악용할 가능성을 차단하여 보안성을 높였습니다.
                                                </FinalContent>
                                            </TSBasicBox>
                                        </>
                                    )}
                                </TSBox>
                                <TSBox isOpen={openStates[3]} hasBlogIcon={true} onClick={() => toggleBox(3)}>
                                    <TSHeader>
                                        <TSHeaderBox>
                                            <TSMainContent>Refresh Token URL-safe Encoding 적용</TSMainContent>
                                            {(
                                                <TSBlogIconWrapper onClick={(event) => event.stopPropagation()}>
                                                    <TSBlogIcon
                                                        href="https://velog.io/@lord/RefreshToken-Url-Safe-Encoding-%EC%A0%81%EC%9A%A9%EA%B3%BC-%EC%BF%A0%ED%82%A4%EB%A1%9C-%EC%A0%84%EB%8B%AC%ED%95%98%EA%B8%B0"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <StyledVelog/> 블로그 바로가기
                                                    </TSBlogIcon>
                                                </TSBlogIconWrapper>
                                            )}
                                        </TSHeaderBox>
                                        <StyledVisualArrowDown isOpen={openStates[3]} hasBlogIcon={true}/>
                                    </TSHeader>
                                    {renderStates[3] && (
                                        <>
                                            <TSBasicBox>
                                                문제 상황
                                                <ProblemContent>
                                                    Refresh Token을 암호화(AES-128) 후 전달하였으나, OAuth 로그인 리다이렉트 과정에서 URL
                                                    encoding {"\n"} 문제가 발생하였습니다.
                                                </ProblemContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                해결 방안
                                                <SolvingContent>
                                                    Refresh Token을 URL-safe encoding 처리하여, OAuth 로그인 과정에서 정상적으로 전달될 수
                                                    있도록 {"\n"} 수정하였습니다.
                                                </SolvingContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                결론
                                                <FinalContent>
                                                    OAuth 로그인 과정에서 발생하던 토큰 전달 오류를 해결하고 보안성을 유지하였습니다.
                                                </FinalContent>
                                            </TSBasicBox>
                                        </>
                                    )}
                                </TSBox>
                                <TSBox isOpen={openStates[4]} hasBlogIcon={false} onClick={() => toggleBox(4)}>
                                    <TSHeader>
                                        <TSMainContent>Refresh Token을 HTTP-Only 쿠키로 저장</TSMainContent>
                                        <StyledVisualArrowDown isOpen={openStates[4]} hasBlogIcon={false}/>
                                    </TSHeader>
                                    {renderStates[4] && (
                                        <>
                                            <TSBasicBox>
                                                문제 상황
                                                <ProblemContent>
                                                    Access Token과 Refresh Token을 모두 LocalStorage에 저장하여 XSS 공격에 취약하다고
                                                    판단하였습니다.
                                                </ProblemContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                해결 방안
                                                <SolvingContent>
                                                    Refresh Token을 HTTP-Only 쿠키로 저장하여 클라이언트 측 스크립트 접근을 차단하고
                                                    보안을 {"\n"} 강화하였습니다.
                                                </SolvingContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                결론
                                                <FinalContent>
                                                    XSS 공격으로부터 Refresh Token을 보호하고 보안성을 향상시켰습니다.
                                                </FinalContent>
                                            </TSBasicBox>
                                        </>
                                    )}
                                </TSBox>
                                <TSBox isOpen={openStates[5]} hasBlogIcon={false} onClick={() => toggleBox(5)}>
                                    <TSHeader>
                                        <TSMainContent>브라우저별 UI 레이아웃 일관성 확보</TSMainContent>
                                        <StyledVisualArrowDown isOpen={openStates[5]} hasBlogIcon={false}/>
                                    </TSHeader>
                                    {renderStates[5] && (
                                        <>
                                            <TSBasicBox>
                                                문제 상황
                                                <ProblemContent>
                                                    Flexbox 및 Grid 레이아웃이 브라우저별로 다르게 렌더링되어 UI가 깨지는 현상이 발생하였습니다.
                                                </ProblemContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                해결 방안
                                                <SolvingContent>
                                                    Autoprefixer를 적용하여 CSS에 필요한 브라우저 벤더 프리픽스를 자동 추가하고 크로스 브라우저 테스트를
                                                    진행하였습니다.
                                                </SolvingContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                결론
                                                <FinalContent>
                                                    모든 주요 브라우저에서 UI가 동일하게 렌더링되도록 개선하였습니다.
                                                </FinalContent>
                                            </TSBasicBox>
                                        </>
                                    )}
                                </TSBox>
                            </ProjectTSGrid>
                        </Section>
                        <Section id="implementation">
                            <h2>프로젝트 시연</h2>
                            <VideoContainer>
                                <p>프로젝트 시연 영상입니다.</p>
                                <ProjectVideo controls>
                                    <source src="/chateatImpl.mp4" type="video/mp4"/>
                                    브라우저가 동영상을 지원하지 않습니다.
                                </ProjectVideo>
                            </VideoContainer>
                            <ImageGallery>
                                {[
                                    {
                                        src: '/chatEAThome.png',
                                        description: '<span class="image-title">홈 화면입니다.' +
                                            '</span>로그인 또는 회원가입을 진행할 수 있습니다.'
                                    },
                                    {
                                        src: '/chatEATregister.png',
                                        description: '<span class="image-title">회원가입 화면입니다.' +
                                            '</span>이메일과 닉네임을 입력하면 자동으로 중복 검사를 수행합니다.'
                                    },
                                    {
                                        src: '/chatEATlogin.png',
                                        description: '<span class="image-title">로그인 화면입니다.' +
                                            '</span>이메일 로그인 또는 카카오 간편 로그인을 진행할 수 있습니다.' +
                                            '<br />사용자 친화적인 UI/UX를 디자인 하였습니다.'
                                    },
                                    {
                                        src: '/chatEAThomelogin.png',
                                        description: '<span class="image-title">로그인 후, 메인 화면입니다.' +
                                            '</span>왼쪽 사이드바에 다양한 메뉴가 있으며 열고 닫을 수 있도록 하였습니다.' +
                                            '<br />가운데 버튼으로 채팅을 한번에 보낼 수 있으며 아래 채팅창을 통해 AI와 대화할 수 있습니다.'
                                    },
                                    {
                                        src: '/chatEATinfo.png',
                                        description: '<span class="image-title">회원 정보 화면입니다.' +
                                            '</span>소셜 로그인의 경우 카카오 로그인이라는 표시가 생성됩니다.' +
                                            '<br />회원 탈퇴 버튼을 통해 회원 탈퇴를 진행할 수 있습니다.'
                                    },
                                    {
                                        src: '/chatEATedit.png',
                                        description: '<span class="image-title">회원정보 수정 화면입니다..' +
                                            '</span>아바타, 닉네임, 비밀번호를 변경할 수 있습니다.'
                                    },
                                    {
                                        src: '/chatEATavatar.png',
                                        description: '<span class="image-title">아바타 변경 화면입니다.' +
                                            '</span>내장되어 있는 6개의 아바타 중에 사용자가 선택하여 프로필 이미지 변경이 가능합니다.'
                                    },
                                    {
                                        src: '/chatEATchat.png',
                                        description: '<span class="image-title">채팅 화면입니다.' +
                                            '</span>채팅을 보내면 AI 서버와 통신하여 응답을 받아옵니다.'
                                    },
                                    {
                                        src: '/chatEATlike.png',
                                        description: '<span class="image-title">좋아요 화면입니다.' +
                                            '</span>사용자가 마음에 든 채팅에 좋아요 표시를 할 수 있으며 서버에 실시간으로 반영됩니다.' +
                                            '<br />왼쪽 사이드바의 좋아요 탭에서 좋아요한 채팅의 목록을 확인할 수 있습니다.'
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="image-wrapper">
                                        <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                                        <ProjectImage
                                            src={item.src}
                                            alt={`ChatEAT Implementation Image ${index + 1}`}
                                            width="100%"
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

export default Project2;
