import React, {useEffect, useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    BlogIcon,
    BlogIconWrapper,
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
    TSMainContent
} from '../styles/ProjectStyles';
import {FaAws, FaCloud, FaDocker, FaGithub, FaReact} from 'react-icons/fa';
import {
    SiFastapi,
    SiKubernetes,
    SiMariadb,
    SiMongodb,
    SiNotion,
    SiPython,
    SiRedis,
    SiSpring,
    SiSpringsecurity,
    SiTypescript
} from 'react-icons/si';
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

const Project1 = () => {
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const techCategories = [
        {
            title: "Frontend",
            techs: [
                {icon: <FaReact/>, name: "React", highlighted: false},
                {icon: <SiTypescript/>, name: "Typescript", highlighted: false}
            ],
        },
        {
            title: "Backend",
            techs: [
                {icon: <SiSpring/>, name: "Spring", highlighted: true},
                {icon: <SiSpringsecurity/>, name: "Spring Security", highlighted: true},
                {icon: <FaCloud/>, name: "Spring Cloud", highlighted: true},
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
                {icon: <SiKubernetes/>, name: "Kubernetes", highlighted: false},
                {icon: <FaAws/>, name: "AWS", highlighted: false},
                {icon: <FaDocker/>, name: "Docker", highlighted: false},
            ],
        },
        {
            title: "Artificial Intelligence (A.I)",
            techs: [
                {icon: <SiPython/>, name: "Python", highlighted: false},
                {icon: <SiFastapi/>, name: "FastAPI", highlighted: false},
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
                            <SlideImg bgImage="/zipbobslide.png"/>
                            <MainContent>
                                <ProjectTitle>집밥 요리사</ProjectTitle>
                                <h2>냉장고에 있는 재료를 기반으로 요리 레시피를 추천하는 서비스</h2>
                                <p>집밥 요리사는 사용자가 가지고 있는 재료를 기반으로 다양한 레시피를 추천해주고 다른 사용자들과 공유할 수 있는 서비스입니다.</p>
                                <Social>
                                    <SocialLink href="https://github.com/Kakao-Tech-Bootcamp-Team2/edge-service"
                                                target="_blank"><FaGithub/> Github</SocialLink>
                                    <SocialLink
                                        href="https://closed-resonance-28e.notion.site/2-10c15f4b247d81baaae0fe1b7a0b7694?pvs=4"
                                        target="_blank"><SiNotion/> Notion</SocialLink>
                                </Social>
                            </MainContent>
                        </ProjectSlide>
                        <ProjectSummary>
                            <p><strong>개발 기간:</strong> 2024.10 ~ 2024.12 <span>(3개월)</span></p>
                            <p><strong>개발 인원:</strong> 4명 <span>(팀프로젝트)</span></p>
                            <p><strong>담당 파트:</strong> 백엔드</p>
                            <strong>세부 내용:</strong>
                            <ul>
                                <li>서비스 기획 및 전체 프로젝트 진행 <span>(기여도 60%)</span></li>
                                <li>전체 백엔드 총괄 <span>(기여도 100%)</span></li>
                                <li>인증 및 보안 <span>(기여도 100%)</span></li>
                                <li>대규모 트래픽 부하 테스트 <span>(기여도 70%)</span></li>
                                <li>성능 최적화 및 유지 보수<span>(기여도 90%)</span></li>
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
                            <h2>프로젝트 아키텍처 (Backend)</h2>
                            <p>백엔드 부분을 집중하여 그린 아키텍처입니다.</p>
                            <ImageContainer>
                                <ProjectArchitectureImage
                                    src="/zipbobarchitecture.png"
                                    alt="Zipbob Architecture"
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
                                        Spring Cloud 기반 MSA를 구축하고, Gateway를 활용해 서비스 간 부하 분산과 효율적인 라우팅 구현
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            Spring Cloud Gateway를 활용해 API Gateway를 구축하고, 라우팅 및 부하 분산을 최적화하여 {"\n"} 서비스
                                            간의 트래픽을
                                            효율적으로 관리하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={true}>
                                        <DetailContent>
                                            Spring Cloud Config와 Cloud Bus를 통해 환경별 설정을 통합 관리하고 {"\n"} 서비스 재배포 없이 쉽게 설정
                                            변경이
                                            가능하도록 구현하였습니다.
                                        </DetailContent>
                                        {(
                                            <BlogIconWrapper>
                                                <BlogIcon
                                                    href="https://velog.io/@lord/Spring-Config-Server%EC%97%90%EC%84%9C-Config-%ED%8C%8C%EC%9D%BC%EB%93%A4%EC%9D%84-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%89%BD%EA%B2%8C-%EA%B0%B1%EC%8B%A0%ED%95%A0%EA%B9%8C"
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    <StyledVelog/> Velog
                                                </BlogIcon>
                                            </BlogIconWrapper>
                                        )}
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            공통 모듈을 분리하고 서비스 간 결합도를 낮춰 유지보수성과 확장성을 고려한 {"\n"} MSA 아키텍처를 설계하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <ContentCategory>
                                        고성능 데이터베이스 설계 및 대규모 트래픽 테스트를 통한 최적화
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={true}>
                                        <DetailContent>
                                            Read API의 트래픽 부하를 줄이기 위해 Redis를 활용한 캐싱 전략을 적용하여 {"\n"} 데이터베이스 조회 요청을
                                            최소화하였습니다.
                                        </DetailContent>
                                        {(
                                            <BlogIconWrapper>
                                                <BlogIcon
                                                    href="https://velog.io/@lord/%EB%8C%80%EA%B7%9C%EB%AA%A8-%ED%8A%B8%EB%9E%98%ED%94%BD-%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%A5%BC-%ED%86%B5%ED%95%B4-Redis-%EC%BA%90%EC%8B%B1-%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0"
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    <StyledVelog/> Velog
                                                </BlogIcon>
                                            </BlogIconWrapper>
                                        )}
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={true}>
                                        <DetailContent>
                                            읽기/쓰기 분리를 위한 Master-Slave 구조를 적용하고, AOP 기반 동적 라우팅을 통해 {"\n"} API 요청별로 적절한
                                            데이터베이스를 자동으로 선택하도록 최적화하였습니다
                                        </DetailContent>
                                        {(
                                            <BlogIconWrapper>
                                                <BlogIcon
                                                    href="https://velog.io/@lord/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4-%EC%9D%B4%EC%A4%91%ED%99%94-%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0-Master-Slave-With-MariaDB"
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    <StyledVelog/> Velog
                                                </BlogIcon>
                                            </BlogIconWrapper>
                                        )}
                                    </DetailBox>
                                    <ContentCategory>
                                        Spring Security와 JWT, OAuth2.0으로 간편하고 안전한 로그인 제공
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            OAuth 2.0을 적용하여 Google, Kakao 등의 소셜 로그인 기능을 구현하고, {"\n"} 기존의 JWT 기반 인증과 통합하여
                                            관리하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={true}>
                                        <DetailContent>
                                            OAuth2User, UserDetails를 통합한 PrincipalDetails 객체를 만들어 {"\n"} 일반 로그인과 소셜 로그인의
                                            인증 로직을
                                            일관되게 처리하였습니다.
                                        </DetailContent>
                                        {(
                                            <BlogIconWrapper>
                                                <BlogIcon
                                                    href="https://velog.io/@lord/Trouble-Shooting-Spring-Security%EC%99%80-OAuth-2.0-%EB%B0%98%ED%99%98-%EA%B0%9D%EC%B2%B4-%ED%86%B5%ED%95%A9%ED%95%98%EA%B8%B0"
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    <StyledVelog/> Velog
                                                </BlogIcon>
                                            </BlogIconWrapper>
                                        )}
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={true}>
                                        <DetailContent>
                                            JWT를 활용해 OAuth 2.0 로그인 후 액세스 토큰과 리프레시 토큰을 발급하고, Redis를 활용해 로그아웃 시 리프레시 토큰을
                                            무효화하고, 블랙리스트 처리로 토큰 재사용 공격을 방지하였습니다.
                                        </DetailContent>
                                        {(
                                            <BlogIconWrapper>
                                                <BlogIcon
                                                    href="https://velog.io/@lord/sessionvsjwt"
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    <StyledVelog/> Velog
                                                </BlogIcon>
                                            </BlogIconWrapper>
                                        )}
                                    </DetailBox>
                                    <ContentCategory>
                                        RabbitMQ를 통한 비동기 서비스 통신
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            RabbitMQ를 도입하여 마이크로서비스 간 비동기 메시지 큐를 구축하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            Spring AMQP와 RabbitTemplate을 활용해 메시지 생산자와 소비자를 구현하고, {"\n"} DLX(Dead Letter
                                            Exchange)를 적용하여 메시지 재처리 전략을 적용하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <ContentCategory>
                                        안정적인 서비스 운영을 위한 테스트 전략
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            Testcontainers를 활용해 데이터베이스와 메시지 브로커를 컨테이너화하고, {"\n"} 운영 환경과 유사한 통합 테스트를
                                            수행하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            단위 테스트에서는 Mockito와 JUnit5를 활용하여 독립적인 로직 검증을 수행하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            전체 테스트 커버리지를 80% 이상 유지하며, 주요 기능과 API를 철저히 검증하였습니다. {"\n"} 이를 통해 코드 변경에도 안정적인
                                            서비스 운영이 가능하도록 설계하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <ContentCategory>
                                        SSE를 활용한 실시간 레시피 제공
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            SSE(Server-Sent Events)를 활용하여 레시피가 완성되면 실시간으로 사용자에게 알림을 보내, {"\n"} 사용자 경험을
                                            향상시켰습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            RabbitMQ와 결합하여 서버에서 발생하는 이벤트를 SSE를 통해 {"\n"} 즉시 클라이언트에 전달하도록 설계하였습니다.
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
                                            <TSMainContent>대규모 트래픽 테스트 및 성능 최적화</TSMainContent>
                                            {(
                                                <TSBlogIconWrapper onClick={(event) => event.stopPropagation()}>
                                                    <TSBlogIcon
                                                        href="https://velog.io/@lord/%EB%8C%80%EA%B7%9C%EB%AA%A8-%ED%8A%B8%EB%9E%98%ED%94%BD-%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%A5%BC-%ED%86%B5%ED%95%B4-Redis-%EC%BA%90%EC%8B%B1-%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0"
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
                                                    Read API(냉장고 데이터 조회)가 트래픽 증가 시 데이터베이스 부하가 급격히 증가하며 {"\n"} 응답 시간이
                                                    느려지는 문제가
                                                    발생하였습니다.
                                                </ProblemContent>
                                                <ProblemContent>
                                                    JMeter를 활용한 대규모 트래픽 테스트 결과, 회원 정보 조회 응답 시간이 평균 1874ms로
                                                    측정되었으며, {"\n"} 대량의 데이터베이스 조회로 인해 성능 저하가 발생하였습니다.
                                                </ProblemContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                해결 방안
                                                <SolvingContent>
                                                    Redis 캐싱을 도입, @Cacheable을 적용하여 반복적인 데이터베이스 조회를 줄이고, {"\n"} 캐시에서 데이터를
                                                    즉시
                                                    제공하도록 개선하였습니다.
                                                </SolvingContent>
                                                <SolvingContent>
                                                    @CacheEvict을 활용하여 회원 정보 수정 및 삭제 시 캐시를 자동으로 갱신하여 캐시 무효화 전략을 도입,
                                                    {"\n"} 데이터 정합성을 유지하였습니다.
                                                </SolvingContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                결론
                                                <FinalContent>
                                                    회원 정보 조회 응답 시간이 1874ms → 610ms 으로 약 67% 개선되었습니다.
                                                </FinalContent>
                                                <FinalContent>
                                                    Cache Warm-Up 효과를 활용하여 반복적인 조회 요청에서 성능을 더욱 최적화하였습니다.
                                                </FinalContent>
                                                <FinalContent>
                                                    대규모 트래픽에서도 안정적인 서비스 운영이 가능한 구조를 구축하였습니다.
                                                </FinalContent>
                                            </TSBasicBox>
                                        </>
                                    )}
                                </TSBox>
                                <TSBox isOpen={openStates[2]} hasBlogIcon={true} onClick={() => toggleBox(2)}>
                                    <TSHeader>
                                        <TSHeaderBox>
                                            <TSMainContent>Vault를 활용한 시크릿 관리 최적화</TSMainContent>
                                            {(
                                                <TSBlogIconWrapper onClick={(event) => event.stopPropagation()}>
                                                    <TSBlogIcon
                                                        href="https://velog.io/@lord/%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-MSA%EB%A5%BC-%EC%9C%84%ED%95%9C-%EC%8B%9C%ED%81%AC%EB%A6%BF-%EA%B4%80%EB%A6%AC-Spring-Cloud-Config%EC%99%80-Vault"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <StyledVelog/> 블로그 바로가기
                                                    </TSBlogIcon>
                                                </TSBlogIconWrapper>
                                            )}
                                        </TSHeaderBox>
                                        <StyledVisualArrowDown isOpen={openStates[2]} hasBlogIcon={true}/>
                                    </TSHeader>
                                    {renderStates[2] && (
                                        <>
                                            <TSBasicBox>
                                                문제 상황
                                                <ProblemContent>
                                                    기존에는 Git 저장소(Config Server의 Native Repo)에서 시크릿을 관리했으며, {"\n"} Git
                                                    Secret 이용시 관리에 대한 불편함이 있었습니다.
                                                </ProblemContent>
                                                <ProblemContent>
                                                    Config Server에서 환경 변수를 통해 시크릿을 관리하던 방식은 버전 관리가 어렵고, {"\n"} 접근 제어가
                                                    불가능하여 운영의 불편함이 있었습니다.
                                                </ProblemContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                해결 방안
                                                <SolvingContent>
                                                    Vault를 도입하여 시크릿을 중앙 집중적으로 관리하고, Config Server에서만 Vault에 접근하도록
                                                    하여 {"\n"} 개별 서비스는 Config Server를 통해 설정값을 가져오도록 개선하였습니다.
                                                </SolvingContent>
                                                <SolvingContent>
                                                    환경별 시크릿 관리를 위해 Vault 내부에 각 서비스별(dev, prod, test)로 분리된 저장소를
                                                    구축하여 {"\n"} 운영 환경별로 다른 설정을 적용할 수 있도록 구성하였습니다.
                                                </SolvingContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                결론
                                                <FinalContent>
                                                    Git에서 시크릿을 제거하여 보안성을 강화하고 운영 편의성을 향상하였습니다.
                                                </FinalContent>
                                                <FinalContent>
                                                    Vault를 활용한 접근 제어 및 버전 관리로 보안성과 안정성을 개선하였습니다.
                                                </FinalContent>
                                                <FinalContent>
                                                    Spring Cloud Config와 Vault 통합으로 유지보수성과 확장성을 향상하였습니다.
                                                </FinalContent>
                                            </TSBasicBox>
                                        </>
                                    )}
                                </TSBox>
                                <TSBox isOpen={openStates[3]} hasBlogIcon={true} isDoubleLine={true}
                                       onClick={() => toggleBox(3)}>
                                    <TSHeader>
                                        <TSHeaderBox>
                                            <TSMainContent>이메일 전송 성능 저하 문제 발생 및 최적화 {"\n"} (With
                                                RabbitMQ)</TSMainContent>
                                            {(
                                                <TSBlogIconWrapper onClick={(event) => event.stopPropagation()}>
                                                    <TSBlogIcon
                                                        href="https://velog.io/@lord/Spring-%EC%9D%B4%EB%A9%94%EC%9D%BC-%EC%A0%84%EC%86%A1-%EC%84%B1%EB%8A%A5-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EB%B0%8F-%EC%B5%9C%EC%A0%81%ED%99%94"
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
                                                    회원가입 및 회원탈퇴 시 Java Mail Sender를 활용하여 이메일을 전송하는 로직을 {"\n"} 컨트롤러 내부에
                                                    직접 구현하였습니다.
                                                </ProblemContent>
                                                <ProblemContent>
                                                    SMTP 서버와의 통신이 동기적으로 처리되면서 응답 시간이 증가하였으며, {"\n"} 실제 측정 결과 95ms →
                                                    4797ms(약 50배 증가) 로 확인되었습니다.
                                                </ProblemContent>
                                                <ProblemContent>
                                                    사용자가 많아질 경우, 스레드 부족으로 인해 작업 처리 지연 및 시스템 과부하가 발생할 가능성이 있었습니다.
                                                </ProblemContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                해결 방안
                                                <SolvingContent>
                                                    @Async를 사용하여 이메일 전송을 비동기로 처리하고, 응답 시간을 4797ms → 88ms로 단축하였습니다.
                                                </SolvingContent>
                                                <SolvingContent>
                                                    기존에 사용 중인 RabbitMQ를 도입하여 이메일 요청을 큐에 적재하고, 별도의 Consumer가 메일을 전송하는 구조로
                                                    변경하였습니다.
                                                </SolvingContent>
                                                <SolvingContent>
                                                    rabbitTemplate.convertAndSend()를 사용하여 메시지를 전송하고, @RabbitListener를
                                                    활용해 {"\n"} 큐에서 처리하도록 구현하였습니다.
                                                </SolvingContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                결론
                                                <FinalContent>
                                                    응답 시간 4797ms → 89ms 으로 약 98% 개선하였습니다.
                                                </FinalContent>
                                                <FinalContent>
                                                    대규모 트래픽 테스트 및 쿠버네티스 환경에서도 안정적인 이메일 전송이 가능하도록 최적화하였습니다.
                                                </FinalContent>
                                            </TSBasicBox>
                                        </>
                                    )}
                                </TSBox>
                                <TSBox isOpen={openStates[4]} hasBlogIcon={true} isDoubleLine={true}
                                       onClick={() => toggleBox(4)}>
                                    <TSHeader>
                                        <TSHeaderBox>
                                            <TSMainContent>인증된 사용자가 다른 사용자의 정보를 {"\n"} 조회할 수 있는 문제 해결</TSMainContent>
                                            {(
                                                <TSBlogIconWrapper onClick={(event) => event.stopPropagation()}>
                                                    <TSBlogIcon
                                                        href="https://velog.io/@lord/Spring-Cloud-Gateway%EC%97%90%EC%84%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B2%80%EC%A6%9D-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0-feat.-GatewayFilter"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <StyledVelog/> 블로그 바로가기
                                                    </TSBlogIcon>
                                                </TSBlogIconWrapper>
                                            )}
                                        </TSHeaderBox>
                                        <StyledVisualArrowDown isOpen={openStates[4]} hasBlogIcon={true}/>
                                    </TSHeader>
                                    {renderStates[4] && (
                                        <>
                                            <TSBasicBox>
                                                문제 상황
                                                <ProblemContent>
                                                    Edge Service에서 인증을 처리했지만, 내부 서비스에서 추가 검증 없이 요청을 처리하면서 {"\n"} 다른 사용자의
                                                    데이터를 조회할 수 있는 보안 취약점이 발생하였습니다.
                                                </ProblemContent>
                                                <ProblemContent>
                                                    클라이언트에서 임의의 memberId를 포함한 요청을 보내면, 데이터 소유자 여부와 관계없이 {"\n"} 정보가 반환될 수
                                                    있는
                                                    문제였습니다.
                                                </ProblemContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                해결 방안
                                                <SolvingContent>
                                                    Edge Service에서 memberId를 추출해 X-Member-Id 헤더에 포함하여 내부 서비스로 전달하도록
                                                    {"\n"} Gateway 필터를 구현하였습니다.
                                                </SolvingContent>
                                                <SolvingContent>
                                                    내부 서비스에서 X-Member-Id와 요청된 memberId를 비교하여 사용자가 본인의 데이터에만 접근할
                                                    수 {"\n"} 있도록 검증
                                                    로직을 추가하였습니다.
                                                </SolvingContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                결론
                                                <FinalContent>
                                                    인증된 사용자라도 자신의 데이터만 조회할 수 있도록 보안을 강화하여 {"\n"}
                                                    불법적인 데이터 접근 차단하였습니다.
                                                </FinalContent>
                                            </TSBasicBox>
                                        </>
                                    )}
                                </TSBox>
                                <TSBox isOpen={openStates[5]} hasBlogIcon={true} onClick={() => toggleBox(5)}>
                                    <TSHeader>
                                        <TSHeaderBox>
                                            <TSMainContent>냉장고와 재료 엔티티 간의 N+1 문제 해결</TSMainContent>
                                            {(
                                                <TSBlogIconWrapper onClick={(event) => event.stopPropagation()}>
                                                    <TSBlogIcon
                                                        href="https://velog.io/@lord/JPA-N1-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0-%EB%B0%8F-%EC%84%B1%EB%8A%A5-%EB%B9%84%EA%B5%90%ED%95%98%EA%B8%B0"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <StyledVelog/> 블로그 바로가기
                                                    </TSBlogIcon>
                                                </TSBlogIconWrapper>
                                            )}
                                        </TSHeaderBox>
                                        <StyledVisualArrowDown isOpen={openStates[5]} hasBlogIcon={true}/>
                                    </TSHeader>
                                    {renderStates[5] && (
                                        <>
                                            <TSBasicBox>
                                                문제 상황
                                                <ProblemContent>
                                                    Refrigerator(냉장고)와 Ingredient(재료) 엔티티가 양방향 연관관계(@OneToMany,
                                                    @ManyToOne)로 설정되어 있어, 냉장고를 조회할 때 N+1 문제가 발생하였습니다.
                                                </ProblemContent>
                                                <ProblemContent>
                                                    findAll()을 실행하면 냉장고를 조회하는 쿼리는 1회 실행되지만, 각 냉장고에 포함된 재료를 조회하기
                                                    위해 {"\n"} 추가적으로 냉장고 개수만큼 쿼리가 발생하였습니다.
                                                </ProblemContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                해결 방안
                                                <SolvingContent>
                                                    Fetch Join을 사용하여 @Query(SELECT r FROM Refrigerator r JOIN FETCH
                                                    r.ingredients) 를 적용하고, 냉장고와 재료를 한 번의 쿼리로 조회하도록 최적화하였습니다.
                                                </SolvingContent>
                                                <SolvingContent>
                                                    Entity Graph(@EntityGraph(attributePaths = ingredients)) 를
                                                    활용하여 연관된 엔티티를 효율적으로 {"\n"} 로딩하였습니다.
                                                </SolvingContent>
                                                <SolvingContent>
                                                    Batch Size (@BatchSize(size = 100)) 를 설정하여, 냉장고 10개 조회 시 발생하는 쿼리를
                                                    10개 → 1개로 {"\n"} 줄여 성능을 개선하였습니다.
                                                </SolvingContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                결론
                                                <FinalContent>
                                                    냉장고 전체 조회 시 응답 시간을 3526ms → 540ms 으로 약 85% 개선하였습니다.
                                                </FinalContent>
                                                <FinalContent>
                                                    재료 전체 조회 시 응답 시간 을 3383ms → 206ms 으로 약 94% 개선하였습니다.
                                                </FinalContent>
                                            </TSBasicBox>
                                        </>
                                    )}
                                </TSBox>
                                <TSBox isOpen={openStates[6]} hasBlogIcon={false} onClick={() => toggleBox(6)}>
                                    <TSHeader>
                                        <TSMainContent>순환 참조로 인한 무한 루프 해결</TSMainContent>
                                        <StyledVisualArrowDown isOpen={openStates[6]} hasBlogIcon={false}/>
                                    </TSHeader>
                                    {renderStates[6] && (
                                        <>
                                            <TSBasicBox>
                                                문제 상황
                                                <ProblemContent>
                                                    Refrigerator와 Ingredient 엔티티 간 양방향 관계를 설정하면서, Jackson이 직렬화할 때 무한 루프가
                                                    {"\n"} 발생하여 API 응답이 정상적으로 반환되지 않는 문제가 발생하였습니다.
                                                </ProblemContent>
                                                <ProblemContent>
                                                    @OneToMany와 @ManyToOne 관계에서 서로 참조하는 객체를 JSON으로 변환하는 과정에서
                                                    발생한 {"\n"} 문제였습니다.
                                                </ProblemContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                해결 방안
                                                <SolvingContent>
                                                    @JsonIgnore를 사용하여 한쪽 방향의 직렬화를 방지하고, 불필요한 필드가 직렬화되지
                                                    않도록 {"\n"} 설정하였습니다.
                                                </SolvingContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                결론
                                                <FinalContent>
                                                    정상적으로 API 응답이 반환되고, 불필요한 데이터를 줄여 API 응답 크기가 약 60% 감소하였습니다.
                                                </FinalContent>
                                            </TSBasicBox>
                                        </>
                                    )}
                                </TSBox>
                            </ProjectTSGrid>
                        </Section>
                        <Section id="implementation">
                            <h2>프로젝트 시연</h2>
                            <ImageGallery>
                                {[
                                    {
                                        src: '/zipbob1.png',
                                        description: '<span class="image-title">로그인 및 회원가입 화면입니다.' +
                                            '</span>간편 로그인으로 로그인 후, 신규 회원이면 닉네임 생성 페이지로 이동합니다.'
                                    },
                                    {
                                        src: '/zipbob2.png',
                                        description: '<span class="image-title">회원의 냉장고 화면입니다.' +
                                            '</span>재료를 종류별로 보여줍니다. 소비기한이 만료된 재료는 (X) 표시로 알려줍니다.'
                                    },
                                    {
                                        src: '/zipbob3.png',
                                        description: '<span class="image-title">식재료 관리 화면입니다.' +
                                            '</span>사용자의 냉장고의 식재료를 관리할 수 있으며, ' +
                                            '<br />각 재료에 대한 양, 칼로리, 소비기한을 설정할 수 있습니다.'
                                    },
                                    {
                                        src: '/zipbob4.png',
                                        description: '<span class="image-title">레시피 추천 화면입니다.' +
                                            '</span>사용자의 냉장고에서 재료를 선택하고 추천 버튼을 클릭하면 로딩이 되며,' +
                                            '<br />이때 홈 버튼을 클릭하면 로딩 중 다른 화면을 볼 수 있습니다.'
                                    },
                                    {
                                        src: '/zipbob5.png',
                                        description: '<span class="image-title">레시피 추천 결과 화면입니다.' +
                                            '</span>레시피 추천이 완료되면 사용자에게 알림을 보내고 추천 결과 화면으로 이동합니다.'
                                    },
                                    {
                                        src: '/zipbob6.png',
                                        description: '<span class="image-title">레시피 화면입니다.' +
                                            '</span>레시피에 필요한 재료, 요리 방법이 자세하게 나와있으며, ' +
                                            '<br />리뷰 보기를 누르면 각 레시피에 대한 다른 사용자들의 리뷰를 확인할 수 있습니다.'
                                    },
                                    {
                                        src: '/zipbob7.png',
                                        description: '<span class="image-title">리뷰 작성 및 내 정보 화면입니다.' +
                                            '</span>요리 완성 버튼을 클릭하면 해당 요리에 대한 리뷰를 작성할 수 있습니다. ' +
                                            '<br />하단의 내 정보를 클릭하면 현재 사용자의 닉네임을 확인 및 수정할 수 있습니다.'
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="image-wrapper">
                                        <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                                        <ProjectImage
                                            src={item.src}
                                            alt={`Zipbob Implementation Image ${index + 1}`}
                                            width="70%"
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

export default Project1;
