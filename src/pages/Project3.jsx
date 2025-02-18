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
    Section,
    SlideImg,
    Social,
    SocialLink,
    SolvingContent,
    StyledArrowDown,
    StyledVisualArrowDown,
    TechContainer,
    TechnologyCard,
    TechnologyItem,
    TechnologyList,
    TechSectionTitle,
    TSBasicBox,
    TSBox,
    TSHeader,
    TSHeaderBox,
    TSMainContent
} from '../styles/ProjectStyles';
import {FaAws, FaDocker, FaGithub, FaReact} from 'react-icons/fa';
import {SiMariadb, SiMongodb, SiNginx, SiRedis, SiSpring, SiVite} from 'react-icons/si';
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

const Project3 = () => {
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
                {icon: <SiVite/>, name: "Vite", highlighted: false}
            ],
        },
        {
            title: "Backend",
            techs: [
                {icon: <SiSpring/>, name: "Spring", highlighted: true},
            ],
        },
        {
            title: "Database",
            techs: [
                {icon: <SiMariadb/>, name: "MariaDB", highlighted: true},
                {icon: <SiMongodb/>, name: "MongoDB", highlighted: true},
                {icon: <SiRedis/>, name: "Redis", highlighted: true},
            ],
        },
        {
            title: "Cloud",
            techs: [
                {icon: <FaAws/>, name: "AWS", highlighted: false},
                {icon: <FaDocker/>, name: "Docker", highlighted: true},
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
                            <SlideImg bgImage="/golangSlide.png"/>
                            <MainContent>
                                <ProjectTitle>Golang</ProjectTitle>
                                <h2>갈등 완화 / 커뮤니케이션 상승 채팅 웹 서비스</h2>
                                <p>Golang은 갈등을 줄이고 긍정적인 대화를 유도하여 건강한 소통 문화를 만드는 플랫폼입니다.</p>
                                <Social>
                                    <SocialLink href="https://github.com/KTB-Hackathon-GoLang/GoLang-Backend"
                                                target="_blank"><FaGithub/> Github</SocialLink>
                                </Social>
                            </MainContent>
                        </ProjectSlide>
                        <ProjectSummary>
                            <p><strong>개발 기간:</strong> 3일 <span>(해커톤 수상 프로젝트)</span></p>
                            <p><strong>개발 인원:</strong> 6명 <span>(팀프로젝트)</span></p>
                            <p><strong>담당 역할:</strong> 백엔드, 프론트엔드</p>
                            <strong>세부 내용:</strong>
                            <ul>
                                <li>서비스 기획 및 전체 프로젝트 진행 <span>(기여도 40%)</span></li>
                                <li>채팅관련 백엔드 개발 <span>(기여도 70%)</span></li>
                                <li>온보딩 페이지 구현 <span>(기여도 100%)</span></li>
                                <li>백엔드 서버 관리 <span>(기여도 70%)</span></li>
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
                            <ImageContainer>
                                <ProjectArchitectureImage
                                    src="/golangArchitechture.png"
                                    alt="Golang Architecture Diagram"
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
                                        채팅 기능 구현 및 WebSocket을 활용한 실시간 통신 최적화
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            클라이언트에서 전송된 채팅 메시지를 데이터베이스에 저장한 후, {"\n"} 이를 AI 서버로 전달하여 응답을 받아오는 기능을
                                            구현하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            Redis Pub/Sub을 활용하여 다중 서버 환경에서도 메시지 일관성을 유지하며, {"\n"} 중복 전송을 방지하는 로직을
                                            구현하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            WebSocket 서버의 성능 최적화를 위해 Redis 기반의 분산 처리 기법을 적용하여 {"\n"} 확장성과 부하 분산을 고려한 구조를
                                            설계하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            채팅 메시지를 MongoDB에 실시간으로 저장하여 이후 대화 기록을 효율적으로 {"\n"} 관리할 수 있도록 구현하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <ContentCategory>
                                        백엔드 서버 배포 및 Nginx 리버스 프록시 구성
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            Nginx를 리버스 프록시로 구성하여 클라이언트의 HTTP 요청을 백엔드(Spring Boot) 서버로 전달하고, 응답을
                                            반환하는 구조를 구축하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            Nginx의 리스닝 포트를 80(HTTP) 및 443(HTTPS)으로 설정하고, {"\n"} 백엔드 서버는 비공개 포트(예:
                                            8080)에서 실행되도록 하여 보안을 강화하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            Let’s Encrypt를 이용하여 SSL 인증서를 적용하고, {"\n"} HTTP 요청을 HTTPS로 자동 리디렉션하도록 설정하여
                                            보안성을 높였습니다.
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
                                <TSBox isOpen={openStates[1]} hasBlogIcon={false} onClick={() => toggleBox(1)}>
                                    <TSHeader>
                                        <TSHeaderBox>
                                            <TSMainContent>WebSocket 메시지 전송 문제 해결</TSMainContent>
                                        </TSHeaderBox>
                                        <StyledVisualArrowDown isOpen={openStates[1]} hasBlogIcon={false}/>
                                    </TSHeader>
                                    {renderStates[1] && (
                                        <>
                                            <TSBasicBox>
                                                문제 상황
                                                <ProblemContent>
                                                    Nginx를 리버스 프록시로 설정하여 WebSocket 서버와 클라이언트 간 통신을 구현하는 과정에서, WebSocket
                                                    연결은 성공했지만 메시지가 정상적으로 전달되지 않는 문제가 발생하였습니다.
                                                </ProblemContent>
                                                <ProblemContent>
                                                    실시간 채팅 메시지가 정상적으로 전송되지 않았으며, 로그 분석 결과 Nginx에서 WebSocket 연결이 수립되었음에도
                                                    불구하고 메시지 전송이 차단되고 있었습니다.
                                                </ProblemContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                해결 방안
                                                <SolvingContent>
                                                    문제 원인을 분석한 결과, Nginx에서 WebSocket 관련 헤더가 정상적으로 전달되지 않아 메시지가 차단되고
                                                    있었습니다. 이를 해결하기 위해 `Upgrade` 및 `Connection` 헤더를 명시적으로 설정하여 WebSocket
                                                    요청이 정상적으로 전달되도록 수정하였습니다.
                                                </SolvingContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                결론
                                                <FinalContent>
                                                    WebSocket 연결 후 메시지가 정상적으로 전달되지 않던 문제를 해결하여 {"\n"} 실시간 채팅 기능이 원활하게
                                                    작동하도록 개선하였습니다.
                                                </FinalContent>
                                            </TSBasicBox>
                                        </>
                                    )}
                                </TSBox>
                                <TSBox isOpen={openStates[2]} hasBlogIcon={false} onClick={() => toggleBox(2)}>
                                    <TSHeader>
                                        <TSHeaderBox>
                                            <TSMainContent>WebSocket 연결 유지 시간 문제 해결</TSMainContent>
                                        </TSHeaderBox>
                                        <StyledVisualArrowDown isOpen={openStates[2]} hasBlogIcon={false}/>
                                    </TSHeader>
                                    {renderStates[2] && (
                                        <>
                                            <TSBasicBox>
                                                문제 상황
                                                <ProblemContent>
                                                    기본 Nginx 설정에서는 WebSocket 연결 유지 시간이 짧아 일정 시간이 지나면 {"\n"} 연결이 자동으로
                                                    끊어지는 문제가 발생하였습니다.
                                                </ProblemContent>
                                                <ProblemContent>
                                                    실시간 채팅 기능을 사용하는 도중 연결이 예기치 않게 종료되었으며, 이로 인해 사용자 경험이 저하되었습니다.
                                                </ProblemContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                해결 방안
                                                <SolvingContent>
                                                    WebSocket 연결을 안정적으로 유지하기 위해 `proxy_read_timeout`과
                                                    `proxy_send_timeout` 값을 {"\n"} 증가시켜 연결 유지 시간을 연장하였습니다.
                                                </SolvingContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                결론
                                                <FinalContent>
                                                    WebSocket 연결이 안정적으로 유지되도록 설정을 조정하여, {"\n"} 실시간 채팅 기능이 지속적으로 원활하게
                                                    작동하도록 개선하였습니다.
                                                </FinalContent>
                                            </TSBasicBox>
                                        </>
                                    )}
                                </TSBox>
                                <TSBox isOpen={openStates[3]} hasBlogIcon={false} onClick={() => toggleBox(3)}>
                                    <TSHeader>
                                        <TSHeaderBox>
                                            <TSMainContent>SSL 환경에서 WebSocket 통신 문제 해결</TSMainContent>
                                        </TSHeaderBox>
                                        <StyledVisualArrowDown isOpen={openStates[3]} hasBlogIcon={false}/>
                                    </TSHeader>
                                    {renderStates[3] && (
                                        <>
                                            <TSBasicBox>
                                                문제 상황
                                                <ProblemContent>
                                                    SSL을 적용한 환경에서 WebSocket 연결이 암호화되지 않은 요청으로 처리되면서, {"\n"} 브라우저에서 혼합
                                                    콘텐츠 오류(Mixed Content Error)가 발생하는 문제가 발생하였습니다.
                                                </ProblemContent>
                                                <ProblemContent>
                                                    HTTPS 환경에서 WebSocket 통신이 정상적으로 이루어지지 않았으며, {"\n"} 클라이언트에서 `wss://`
                                                    프로토콜을 사용했음에도 불구하고 연결이 실패하는 문제가 있었습니다.
                                                </ProblemContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                해결 방안
                                                <SolvingContent>
                                                    Nginx의 SSL 환경에서 WebSocket 통신이 정상적으로 이루어지도록 하기 위해,
                                                    proxy_ssl_server_name on;을 추가하고, proxy_pass를 통해 WebSocket 요청을 올바르게
                                                    라우팅하여 wss:// 프로토콜이 HTTPS 환경에서도 정상적으로 동작하도록 수정하였습니다.
                                                </SolvingContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                결론
                                                <FinalContent>
                                                    SSL 환경에서도 WebSocket 통신이 정상적으로 이루어질 수 있도록 설정을 수정하여, 보안이 강화된 환경에서도 실시간
                                                    채팅 기능이
                                                    원활하게 동작하도록 개선하였습니다.
                                                </FinalContent>
                                            </TSBasicBox>
                                        </>
                                    )}
                                </TSBox>
                            </ProjectTSGrid>
                        </Section>
                        <Section id="implementation">
                            <h2>프로젝트 시연 이미지</h2>
                            <ImageGallery>
                                {[
                                    {
                                        src: '/golangHome.png',
                                        description: '<span class="image-title">홈 화면입니다.' +
                                            '</span>사용자들이 주로 모바일에서 채팅을 이용하기 때문에, 모바일 웹 환경에 맞춰 개발하였습니다.'
                                    },
                                    {
                                        src: '/golangChoice.png',
                                        description: '<span class="image-title">채팅 대상 선택 화면입니다.' +
                                            '</span>사용자는 사람과 채팅할 지, AI(가상인물)과 채팅할 지 선택할 수 있습니다.'
                                    },
                                    {
                                        src: '/golangInvite.png',
                                        description: '<span class="image-title">자료 업로드 및 사용자 초대 화면입니다.' +
                                            '</span>사용자는 자신의 갈등상황에 대한 근거 자료를 업로드하여 AI가 대화 맥락을 이해하는데 도움을 줄 수 있습니다. 채팅방 코드 보내기를 통해 상대방을 자신의 채팅방에 초대하여 채팅을 시작할 수 있습니다.'
                                    },
                                    {
                                        src: '/golangChat.png',
                                        description: '<span class="image-title">채팅 화면입니다.' +
                                            '</span>사용자는 자신이 하고 싶은 채팅을 입력하고 순화하기 또는 정리하기 기능을 사용할 수 있습니다. 순화하기의 경우 채팅 내용을 AI가 순화하여 3가지의 다른 문장을 추천해주고, 정리하기의 경우 채팅 내용이 길 경우 AI가 요약해서 채팅을 수정해줍니다.'

                                    },
                                    {
                                        src: '/golangResult.png',
                                        description: '<span class="image-title">채팅 결과 화면입니다.' +
                                            '</span>사용자는 채팅 끝내기 버튼을 누르면 해당 채팅방에서 자주 사용한 단어의 빈도수를 단어 구름 형태로 확인할 수 있습니다. 또한, 이전 채팅에 비해서 긍정적인 단어를 사용한 빈도수를 확인해서 점수로 보여줍니다. 마이페이지에서는 이전 채팅 대화에 대한 내역을 모두 확인할 수 있고, 일주일간 변화된 긍정 점수에 대한 그래프를 확인할 수 있습니다.'
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="image-wrapper">
                                        <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                                        <ProjectImage
                                            src={item.src}
                                            alt={`Golang Implementation Image ${index + 1}`}
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

export default Project3;
