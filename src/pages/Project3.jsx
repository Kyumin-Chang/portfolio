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
    Section,
    SlideImg,
    Social,
    SocialLink,
    TechnologyItem,
    TechnologyList
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

const Project3 = () => {
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
                            <SlideImg bgImage="/golangSlide.png"/>
                            <MainContent>
                                <ProjectTitle>Golang</ProjectTitle>
                                <h2>갈등 완화 / 커뮤니케이션 상승 채팅 웹 서비스</h2>
                                <p>Golang은 갈등을 줄이고 긍정적인 대화를 유도하여 건강한 소통 문화를 만드는 플랫폼입니다.</p>
                                <Social>
                                    <SocialLink href="https://github.com/KTB-Hackathon-GoLang"
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
                                <li>백엔드 서버 관리 <span>(기여도 80%)</span></li>
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
                                    <SiSpring/> Spring
                                </TechnologyItem>
                                <TechnologyItem>
                                    <SiMariadb/> MariaDB
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
                        <Section id="flowChart">
                            <h2>전체 플로우 차트</h2>
                            <ImageContainer>
                                <ProjectImage
                                    src="/golangFlowchart.png"
                                    alt="Golang Flow Chart"
                                />
                            </ImageContainer>
                        </Section>
                        <Section id="architecture">
                            <h2>프로젝트 아키텍쳐</h2>
                            <ImageContainer>
                                <ProjectImage
                                    src="/golangArchitechture.png"
                                    alt="Golang Architecture Diagram"
                                />
                            </ImageContainer>
                        </Section>
                        <Section id="details">
                            <h2>세부 설명</h2>
                            <p>프로젝트에서 직접 구현을 맡은 부분에 대한 세부 내용입니다.</p>
                            <ProjectContentGrid>
                                <ContentCategory>
                                    <h3>Backend</h3>
                                    <h4>[ 채팅, 웹소캣 구현 ]</h4>
                                    <ul>
                                        <li>클라이언트로부터 전달 받은 채팅을 데이터베이스에 전달하고 이를 AI 서버에 전달하여 응답을 받아옵니다.</li>
                                        <li>Redis Pub/Sub를 사용하여 여러 서버 간 메시지 일관성을 유지하며 브로드캐스트를 처리하고, 중복 전송을 방지하는 로직을
                                            구현하였습니다.
                                        </li>
                                        <li>Redis 기반의 분산 처리 및 WebSocket 서버의 성능 최적화를 통해 부하 분산 및 확장성을 고려한 성능 관리 방안을
                                            구현하였습니다.
                                        </li>
                                        <li>WebSocket을 통해 전달된 메시지를 MongoDB에 실시간으로 저장하여, 이후 대화 기록을 관리할 수 있도록 하였습니다.</li>
                                        <li>특정 채팅방에 대한 대화 기록을 사용자가 요청할 때, MongoDB에서 해당 채팅방의 대화 내역을 효율적으로 조회할 수 있도록
                                            구현하였습니다.
                                        </li>
                                    </ul>
                                </ContentCategory>
                                <ContentCategory>
                                    <h3>Server</h3>
                                    <h4>[ 백엔드 서버 배포 ]</h4>
                                    <ul>
                                        <li>Nginx를 리버스 프록시로 구성하여 클라이언트의 HTTP 요청을 백엔드 서버(예: Spring Boot 애플리케이션)로 전달하고,
                                            응답을 반환하는 흐름을 구현하였습니다. 이를 통해 클라이언트는 백엔드 서버의 실제 포트를 알지 못하고 Nginx가 모든 요청을 중계하게
                                            됩니다.
                                        </li>
                                        <li>Nginx의 리스닝 포트를 80(HTTP) 또는 443(HTTPS)으로 설정하고, 백엔드 서버는 비공개 포트(예: 8080)에서
                                            실행되도록 하여 외부 접근을 통제하였습니다.
                                        </li>
                                        <li>Let’s Encrypt 등의 SSL 인증서를 사용하여 HTTPS를 적용하였습니다. Nginx에서 SSL 인증서를 설정하고, 안전한
                                            통신을 위해 HTTP 요청을 HTTPS로 리디렉션하는 로직을 구현하였습니다.
                                        </li>
                                        <li>
                                            Nginx의 로드 밸런싱 기능을 활용하여 여러 백엔드 서버 인스턴스 간에 부하를 분산하였습니다. 이를 통해 대규모 트래픽을 처리할 때
                                            성능 저하를 방지하고, 서버 다운 시에도 다른 인스턴스로 요청이 전달될 수 있도록 하였습니다.
                                        </li>
                                    </ul>
                                </ContentCategory>
                            </ProjectContentGrid>
                        </Section>
                        <Section id="troubleshooting">
                            <h2>트러블 슈팅</h2>
                            <ProjectContentGrid>
                                <ContentCategory>
                                    <h3>Server (Nginx)</h3>
                                    <ul>
                                        <li>
                                            Nginx를 리버스 프록시로 설정하여 WebSocket 서버와 클라이언트 간 통신을 구현하는 과정에서, 클라이언트로부터 WebSocket
                                            연결은 성공했으나 메시지가 정상적으로 전달되지 않음.
                                        </li>
                                        <li>이로 인해 실시간 채팅 메시지가 전송되지 않는 문제가 발생함. 로그를 확인한 결과, Nginx에서 WebSocket 연결은 수립되었으나
                                            메시지 전송이 차단되는 것으로 확인됨.
                                        </li>
                                        <ul>
                                            <li>Nginx에서 WebSocket 관련 헤더가 전달되지 않아 메시지가 차단되는 문제를 발견함. 이를 해결하기 위해 Upgrade와
                                                Connection 헤더를 명시적으로 설정함.
                                            </li>
                                            <li>기본 Nginx 설정에서 WebSocket 연결 유지 시간이 짧아 연결이 끊어지는 문제가 발생함. 이를 해결하기 위해
                                                proxy_read_timeout과 proxy_send_timeout 값을 증가시켜 연결을 안정적으로 유지하도록 설정함.
                                            </li>
                                            <li>SSL을 사용하는 경우, WebSocket 통신이 암호화되지 않은 요청으로 처리되는 문제가 발생함. SSL 설정을 재검토하여
                                                Nginx의 HTTPS 설정에서 WebSocket을 통한 메시지 전송이 제대로 처리되도록 수정함.
                                            </li>
                                        </ul>
                                    </ul>
                                </ContentCategory>
                            </ProjectContentGrid>
                        </Section>
                        <Section id="implementation">
                            <h2>프로젝트 시연 이미지</h2>
                            <ImageGallery>
                                <p>홈 화면입니다.<br/>많은 사용자들이 채팅을 모바일로 많이 하기 때문에 모바일 웹으로 개발하였습니다.</p>
                                <ProjectImage
                                    src="/golangHome.png"
                                    alt="Golang Implementation Image 1"
                                    width="60%"
                                />
                                <p>채팅 대상 선택 화면입니다.<br/>사용자는 사람과 채팅할 지, AI(가상인물)과 채팅할 지 선택할 수 있습니다.</p>
                                <ProjectImage
                                    src="/golangChoice.png"
                                    alt="Golang Implementation Image 2"
                                    width="60%"
                                />
                                <p>자료 업로드 및 사용자 초대 화면입니다. <br/>사용자는 자신의 갈등상황에 대한 근거 자료를 업로드하여 AI가 대화 맥락을 이해하는데 도움을 줄 수
                                    있습니다. 채팅방 코드 보내기를 통해 상대방을 자신의 채팅방에 초대하여 채팅을 시작할 수 있습니다.</p>
                                <ProjectImage
                                    src="/golangInvite.png"
                                    alt="Golang Implementation Image 3"
                                    width="60%"
                                />
                                <p>채팅 화면입니다.<br/>사용자는 자신이 하고 싶은 채팅을 입력하고 순화하기 또는 정리하기 기능을 사용할 수 있습니다. 순화하기의 경우 채팅 내용을
                                    AI가 순화하여 3가지의 다른 문장을 추천해주고, 정리하기의 경우 채팅 내용이 길 경우 AI가 요약해서 채팅을 수정해줍니다.</p>
                                <ProjectImage
                                    src="/golangChat.png"
                                    alt="Golang Implementation Image 4"
                                    width="60%"
                                />
                                <p>채팅 결과 화면입니다.<br/>사용자는 채팅 끝내기 버튼을 누르면 해당 채팅방에서 자주 사용한 단어의 빈도수를 단어 구름 형태로 확인할 수 있습니다.
                                    또한, 이전 채팅에 비해서 긍정적인 단어를 사용한 빈도수를 확인해서 점수로 보여줍니다. 마이페이지에서는 이전 채팅 대화에 대한 내역을 모두 확인할 수
                                    있고,일주일간 변화된 긍정 점수에 대한 그래프를 확인할 수 있습니다.
                                </p>
                                <ProjectImage
                                    src="/golangResult.png"
                                    alt="Golang Implementation Image 5"
                                    width="60%"
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

export default Project3;
