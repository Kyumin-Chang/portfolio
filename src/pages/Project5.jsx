import React, {useEffect, useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    BackImg,
    CloseButton,
    ContentCategory,
    ContentCategoryBox,
    DetailBox,
    DetailContent,
    FinalContent,
    ImageContainer,
    MainContent,
    ModalBox,
    ModalOverlay,
    PageWrapper,
    ProblemContent,
    ProjectArchitectureImage,
    ProjectContainer,
    ProjectContentGrid,
    ProjectDetails,
    ProjectMain,
    ProjectSlide,
    ProjectSummary,
    ProjectTitle,
    ProjectTSGrid,
    Section,
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
import {FaCloud, FaGithub} from 'react-icons/fa';
import {
    SiApachekafka,
    SiElasticsearch,
    SiGrafana,
    SiKibana,
    SiLogstash,
    SiMongodb,
    SiMysql,
    SiPrometheus,
    SiRedis,
    SiSpring,
    SiSpringsecurity
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
    techCardBackgroundColor: '#e5ecff'
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
    techCardBackgroundColor: '#757688'
};

const Project5 = () => {
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

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const techCategories = [
        {
            title: "Backend",
            techs: [
                {icon: <SiSpring/>, name: "Spring", highlighted: true},
                {icon: <FaCloud/>, name: "Spring Cloud", highlighted: true},
                {icon: <SiSpringsecurity/>, name: "Spring Security", highlighted: true},
                {icon: <SiApachekafka/>, name: "Kafka", highlighted: true},
            ],
        },
        {
            title: "Database & Caching",
            techs: [
                {icon: <SiMysql/>, name: "MySQL", highlighted: true},
                {icon: <SiMongodb/>, name: "MongoDB", highlighted: true},
                {icon: <SiRedis/>, name: "Redis + Redisson", highlighted: true},
            ],
        },
        {
            title: "Search",
            techs: [
                {icon: <SiElasticsearch/>, name: "ElasticSearch", highlighted: true}
            ],
        },
        {
            title: "Monitoring & Logging",
            techs: [
                {icon: <SiPrometheus/>, name: "Prometheus", highlighted: true},
                {icon: <SiGrafana/>, name: "Grafana", highlighted: true},
                {icon: <SiLogstash/>, name: "Logstash", highlighted: true},
                {icon: <SiKibana/>, name: "Kibana", highlighted: true},
            ],
        },
    ];

    const techDescriptions = {
        "Spring": `FortiShop의 모든 마이크로서비스는 Spring Boot 기반으로 개발되었으며, 각 도메인별 서비스(order, member, inventory 등)를 독립적으로 구축하여 유지보수성과 확장성을 극대화했습니다.`,

        "Spring Cloud": `서비스 간 통신을 위한 API Gateway(Spring Cloud Gateway), 공통 설정 관리를 위한 Config Server(Spring Cloud Config), 장애 복원을 위한 Circuit Breaker 및 LoadBalancer 기능 등을 통해 MSA 인프라의 핵심 요소로 활용했습니다.`,

        "Spring Security": `JWT 기반 인증 및 인가 로직을 구성하여 보안성과 확장성을 동시에 확보했습니다. 사용자 Role(ADMIN/USER)에 따라 접근 권한을 분리하여 관리합니다.`,

        "Kafka": `Kafka는 주문-결제-재고-배송 간의 메시지를 전달하는 비동기 이벤트 처리의 핵심으로 사용되며, Saga 패턴과 DLQ(Dead Letter Queue), Retry Topic 등을 적용하여 장애 상황에도 트랜잭션의 일관성을 유지할 수 있도록 했습니다.`,

        "MySQL": `주요 트랜잭션 데이터(회원, 주문, 결제, 재고 등)는 MySQL에 저장되며, Master-Slave 구조로 구성하여 읽기/쓰기 분리 및 장애 복구 전략을 실험했습니다.`,

        "MongoDB": `비정형 데이터(알림 메시지, 로그 등)를 저장하기 위한 저장소로 사용되며, 알림 서비스(notification-service)와 연동되어 이메일, Slack 알림 로그를 관리합니다.`,

        "Redis + Redisson": `재고 차감 시 분산락을 위한 Redisson 락 처리, 로그인 시 토큰 저장, 인기 상품 캐싱, Rate Limiter 구현 등 다양한 실시간 캐시/락 기능을 구현하였습니다.`,

        "ElasticSearch": `상품 검색 기능을 위해 Elasticsearch를 도입했으며, 검색 장애 발생 시 DB 기반 fallback 처리를 통해 사용자 경험을 유지했습니다. 또한 인기 상품 순위를 Redis와 함께 연동하여 정렬 처리했습니다.`,

        "Prometheus": `서비스 메트릭(CPU, Memory, TPS 등)을 수집하여 Grafana로 시각화하는 기반 시스템으로, 각 서비스에 Actuator를 연동하여 데이터 노출을 자동화했습니다.`,

        "Grafana": `Prometheus에서 수집한 메트릭을 기반으로 대시보드를 구성하여 실시간으로 시스템 상태 및 장애 징후를 시각적으로 확인하고 경고 임계치를 설정하였습니다.`,

        "Logstash": `Filebeat를 통해 수집된 로그 데이터를 구조화하여 Elasticsearch로 전달하며, 로그 분석과 장애 추적을 위한 전처리 역할을 수행합니다.`,

        "Kibana": `Logstash → Elasticsearch로 전달된 로그를 시각화하여 장애 발생 시 원인을 추적하고 검색할 수 있도록 지원하는 도구로, 로그 기반 문제 해결을 강화하였습니다.`
    };

    const [selectedTech, setSelectedTech] = useState(null);

    return (
        <ThemeProvider theme={theme}>
            <PageWrapper>
                <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
                <ProjectContainer>
                    <ProjectMain>
                        <ProjectSlide>
                            <BackImg bgImage="/project5Back.png"/>
                            <MainContent>
                                <ProjectTitle>FortiShop</ProjectTitle>
                                <h2>대규모 트래픽으로 인한 장애 상황을 시뮬레이션하며 장애 복원력을 검증하는 실전 이커머스 플랫폼</h2>
                                <p>FortiShop은 Kafka 기반의 비동기 이벤트 아키텍처와 Redis, Vault, Circuit Breaker, Saga 트랜잭션 등을 활용하여
                                    실무에서 발생 가능한 다양한 장애 시나리오를 직접 구현하고 복구하는 경험을 제공하는 MSA 기반 이커머스 프로젝트입니다.</p>
                                <p>주문, 결제, 재고, 배송, 알림 등 전 과정을 마이크로서비스로 분리하고 각 단계에서 장애 전파 및 복구 흐름을 체계적으로 설계함으로써 실무 수준의
                                    복원력 있는 아키텍처를 구축하였습니다.</p>
                                <Social>
                                    <SocialLink href="https://github.com/FortiShop"
                                                target="_blank"><FaGithub/> Github</SocialLink>
                                </Social>
                            </MainContent>
                        </ProjectSlide>
                        <ProjectSummary>
                            <p><strong>개발 기간:</strong> 2025.3 ~ 2024.5 <span>(3개월)</span></p>
                            <p><strong>개발 인원:</strong> 1명 <span>(개인 프로젝트)</span></p>
                            <strong>세부 내용:</strong>
                            <ul>
                                <li>서비스 기획 및 전체 프로젝트 진행 <span>(기여도 100%)</span></li>
                                <li>백엔드 아키텍처 설계 및 구현 <span>(기여도 100%)</span></li>
                                <li>장애 상황 기획 및 대규모 트래픽 테스트 <span>(기여도 100%)</span></li>
                            </ul>
                        </ProjectSummary>
                    </ProjectMain>
                    <ProjectDetails>
                        {selectedTech && (
                            <ModalOverlay onClick={() => setSelectedTech(null)}>
                                <ModalBox onClick={(e) => e.stopPropagation()}>
                                    <CloseButton onClick={() => setSelectedTech(null)}>닫기</CloseButton>
                                    <h2>{selectedTech}</h2>
                                    <p>{techDescriptions[selectedTech]}</p>
                                </ModalBox>
                            </ModalOverlay>
                        )}
                        <Section id="techstack">
                            <h2>사용한 기술 스택</h2>
                            <p>하이라이트된 스택은 직접 개발을 진행한 {"\n"} 기술 스택입니다.</p>
                            <p>기술 스택을 클릭하면 프로젝트에서의 {"\n"} 적용 사례와 역할을 자세히 확인할 수 있습니다.</p>
                            <TechContainer>
                                {techCategories.map(({title, techs}) => (
                                    <TechnologyCard key={title}>
                                        <TechSectionTitle>{title}</TechSectionTitle>
                                        <TechnologyList>
                                            {techs.map(({icon, name, highlighted}) => (
                                                <TechnologyItem onClick={() => setSelectedTech(name)} key={name}
                                                                $highlighted={highlighted}>
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
                                    src="/fortishopArchitecture.png"
                                    alt="Fortishop Architecture"
                                />
                            </ImageContainer>
                        </Section>
                        <Section id="kafka">
                            <h2>Kafka 시퀀스 다이어그램</h2>
                            <p>전체 카프카 메시지 흐름을 그린 다이어그램입니다.</p>
                            <ImageContainer>
                                <ProjectArchitectureImage
                                    src={isDarkMode ? "/fortishopSequenceDark.png" : "/fortishopSequenceLight.png"}
                                    alt="Fortishop Sequence"
                                />
                            </ImageContainer>
                        </Section>
                        <Section id="details">
                            <h2>세부 설명</h2>
                            <p>프로젝트에서 직접 구현을 맡은 부분에 대한 {"\n"} 세부 내용입니다.</p>
                            <ProjectContentGrid>
                                <ContentCategoryBox>
                                    Server
                                    <ContentCategory>
                                        Kafka 기반 비동기 이벤트 아키텍처 설계
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            주문부터 적립금 처리까지 모든 서비스 간의 흐름을 Kafka 기반 이벤트로 처리하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            Kafka의 Topic 설계를 서비스 목적에 따라 명확히 구분하고, `order.created`, `inventory.reserved`,
                                            `payment.completed` 등 도메인 이벤트를 기반으로 메시지를 발행하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            모든 메시지에는 `traceId`를 포함하여 이벤트의 전체 흐름을 추적할 수 있도록 하였고 {"\n"} DLQ(Dead Letter
                                            Queue) 및
                                            Retry Topic을 통해 실패한 메시지의 복구 가능성도 확보하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <ContentCategory>
                                        다양한 장애 상황을 가정한 복원력 테스트 및 설계
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            실제 운영 환경에서 발생할 수 있는 Redis, Kafka, DB 장애를 직접 시뮬레이션하며 {"\n"} 복원 시나리오를 설계하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            Redis 락 실패, Kafka 브로커 중단, MySQL Master 장애 발생 등을 유도하고 {"\n"} 각각의 장애 상황에서 서비스가
                                            어떻게 복구되고 fallback되는지를 테스트하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            장애 발생 시 Circuit Breaker를 통한 요청 차단과 fallback 로직이 정상적으로 동작하도록 {"\n"} 설계하여 전체
                                            시스템의 복원력을 강화하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <ContentCategory>
                                        트랜잭션 일관성 유지를 위한 Saga 패턴 적용
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            Kafka 기반의 Saga 패턴을 활용하여 각 서비스 간 트랜잭션의 일관성을 유지하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            주문 생성 이후 재고 차감, 결제 승인, 적립금 적립 등 순차적으로 처리되는 과정에서 어느 하나라도 실패할 경우, {"\n"} 보상
                                            트랜잭션을 통해 상태를 되돌리는 구조를 구성하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            재고 차감에 실패하면 주문을 취소하고, 이미 결제가 완료되었을 경우에는 결제를 환불하고 {"\n"} 적립금을 차감하는 보상 이벤트를
                                            발행합니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <ContentCategory>
                                        설정 외부화 및 시크릿 보호, 인증 전략 구성
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            모든 서비스의 설정 파일은 Spring Cloud Config Server를 통해 중앙 집중적으로 관리하였으며, {"\n"}
                                            시크릿 정보(JWT 서명 키, DB 비밀번호 등)는 HashiCorp Vault를 연동하여 {"\n"} Github나 코드에 노출되지
                                            않도록 보안성을 확보하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            인증 방식은 JWT 기반으로 구성하고, 자체 로그인 방식을 지원하며, Refresh Token은 Redis에
                                            저장하여 {"\n"} 로그아웃 시 토큰을 무효화하고 블랙리스트를 통해 재사용 공격을 방지하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            API Gateway에서 사용자 Role과 MemberId를 헤더에 삽입하는 방식을 적용하여 내부 서비스의 인증 로직을 단순화하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <ContentCategory>
                                        실시간 상태 모니터링 및 로그 기반 장애 분석 시스템 설계
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            Prometheus와 Grafana를 연동하여 모든 마이크로서비스의 CPU, Memory, TPS, GC 등의 상태를 실시간으로 수집하고
                                            시각화하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            로그 수집과 장애 분석을 위해 ELK(Elasticsearch, Logstash, Kibana) 기반 로깅 시스템을 구축하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            모든 마이크로서비스에 Filebeat를 연동하여 애플리케이션 로그를 실시간으로 수집하고, Logstash에서 JSON 파싱 및 필터링을
                                            거쳐 Elasticsearch에 저장하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            Kafka, DB, Redis 등 핵심 구성요소를 포함한 통합 테스트 환경을 Testcontainers로
                                            구축하고, {"\n"} Kafka 이벤트 발행/소비 흐름까지 포함한 테스트를 통해 전체 서비스 품질을 유지하였습니다.
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
                                            <TSMainContent>포인트 중복 적립 방지를 위한 TrasactionId 기반 Idempotent Consumer
                                                설계</TSMainContent>
                                            {(
                                                <TSBlogIconWrapper onClick={(event) => event.stopPropagation()}>
                                                    <TSBlogIcon
                                                        href="https://velog.io/@lord/Kafka%EC%97%90%EC%84%9C-%EB%A9%94%EC%8B%9C%EC%A7%80%EA%B0%80-%EC%A4%91%EB%B3%B5%EC%9C%BC%EB%A1%9C-%EC%B2%98%EB%A6%AC%EB%90%9C%EB%8B%A4%EA%B3%A0"
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
                                                    Kafka consumer 장애 및 서버 재시작 시, 포인트 변경 메시지가 중복 처리되어 {"\n"} 동일한 포인트가 여러
                                                    번 적립되는 문제가 발생하였습니다.
                                                </ProblemContent>
                                                <ProblemContent>
                                                    Kafka는 기본적으로 at-least-once 전송을 보장하기 때문에 메시지가 중복 소비될 수 있으며, {"\n"} 당시
                                                    구조는 메시지 처리 후에만 offset을 커밋하도록 되어 있어 consumer 종료 전 커밋되지 않은
                                                    메시지가 {"\n"} 다시 처리되는 구조였습니다.
                                                </ProblemContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                해결 방안
                                                <SolvingContent>
                                                    Kafka 메시지에 transactionId를 포함시키고, 포인트 내역 테이블의 해당 컬럼에 UNIQUE 제약 조건을
                                                    부여하여 중복 여부를 판단할 수 있도록 변경하였습니다.
                                                </SolvingContent>
                                                <SolvingContent>
                                                    Consumer 로직에서는 이미 처리된 transactionId가 존재하면 메시지를 무시하고 다음 처리로
                                                    넘어가도록 {"\n"} 설계하여, 중복 메시지도 안전하게 무시할 수 있도록 보장하였습니다.
                                                </SolvingContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                결론
                                                <FinalContent>
                                                    포인트 중복 적립률이 기존 12.8%에서 0%로 감소하였습니다.
                                                </FinalContent>
                                            </TSBasicBox>
                                        </>
                                    )}
                                </TSBox>
                                <TSBox isOpen={openStates[2]} hasBlogIcon={true} onClick={() => toggleBox(2)}>
                                    <TSHeader>
                                        <TSHeaderBox>
                                            <TSMainContent>Redisson 기반 재고 동시성 제어 실패에 대한 개선</TSMainContent>
                                            {(
                                                <TSBlogIconWrapper onClick={(event) => event.stopPropagation()}>
                                                    <TSBlogIcon
                                                        href="https://velog.io/@lord/Redisson%EB%A7%8C%EC%9C%BC%EB%A1%9C%EB%8A%94-%EB%9D%BD%EC%9D%B4-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EA%B1%B8%EB%A6%AC%EC%A7%80-%EC%95%8A%EC%95%98%EB%8D%98-%EB%AC%B8%EC%A0%9C%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95"
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
                                                    Kafka를 통해 주문 이벤트를 수신한 후 상품 재고를 차감하는 구조에서 Redisson 락을 적용했음에도
                                                    불구하고, {"\n"} TPS 1000 수준의 부하 테스트 시 동시 처리된 요청이 충돌하며 재고 정합성이 깨지는
                                                    문제가 발생하였습니다.
                                                </ProblemContent>
                                                <ProblemContent>
                                                    트랜잭션 커밋 이전에 락이 해제되었고, 다음 스레드가 아직 반영되지 않은 값을 읽어 차감하면서 마지막 커밋만 반영되는
                                                    race condition 현상이 발생하였습니다.
                                                </ProblemContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                해결 방안
                                                <SolvingContent>
                                                    락 해제 시점을 트랜잭션 커밋 이후로 지연시키기 위해 TransactionSynchronizationManager를
                                                    사용하여 {"\n"} 트랜잭션 commit 이후에 락이 해제되도록 조정하였습니다.
                                                </SolvingContent>
                                                <SolvingContent>
                                                    일정 시간 내 락 획득에 실패한 요청은 Kafka를 통해 inventory.failed 이벤트를 발행하여 보상 트랜잭션
                                                    흐름으로 분기할 수 있도록 구성하였습니다.
                                                </SolvingContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                결론
                                                <FinalContent>
                                                    동일 상품에 대한 동시 재고 차감 요청 충돌 문제 발생률 0%를 달성하였습니다.
                                                </FinalContent>
                                                <FinalContent>
                                                    재고 차감의 정합성과 일관성이 안정적으로 유지되었습니다.
                                                </FinalContent>
                                            </TSBasicBox>
                                        </>
                                    )}
                                </TSBox>
                                <TSBox isOpen={openStates[3]} hasBlogIcon={true} isDoubleLine={true}
                                       onClick={() => toggleBox(3)}>
                                    <TSHeader>
                                        <TSHeaderBox>
                                            <TSMainContent>Kafka 메시지 처리 실패 대응 : Retry Topic, DLQ, 운영자 알림 기반 복구
                                                설계</TSMainContent>
                                            {(
                                                <TSBlogIconWrapper onClick={(event) => event.stopPropagation()}>
                                                    <TSBlogIcon
                                                        href="https://velog.io/@lord/Kafka%EC%97%90-%EB%A9%94%EC%8B%9C%EC%A7%80-%EC%9E%AC%EC%B2%98%EB%A6%AC%EC%99%80-DLQ%EB%A5%BC-%EB%8F%84%EC%9E%85%ED%95%B4%EB%B3%B4%EC%9E%90"
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
                                                    Kafka 기반 이벤트 처리 중 역직렬화 실패 등의 이유로 메시지가 무한 재시도 루프에 빠지면서 파티션 전체가 블로킹되는
                                                    현상이 발생하였습니다.
                                                </ProblemContent>
                                                <ProblemContent>
                                                    단일 메시지 실패로 인해 이후 모든 이벤트 처리가 중단되었고 알림 누락 및 주문 실패가 계속적으로 이어졌습니다.
                                                </ProblemContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                해결 방안
                                                <SolvingContent>
                                                    Retry Topic을 구성하여 최대 3회까지 재시도를 시도하고, 이후에도 실패할 경우 Dead Letter
                                                    Queue(DLQ)로 메시지를 격리시켜 파티션 블로킹을 방지하였습니다.
                                                </SolvingContent>
                                                <SolvingContent>
                                                    DLQ로 적재된 메시지에 대해서는 운영자에게 실시간 Slack 알림을 전송하고, 해당 메시지를 수동으로 재처리할 수 있도록
                                                    관리 도구를 구성하였습니다.
                                                </SolvingContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                결론
                                                <FinalContent>
                                                    consumer 블로킹 현상이 사라졌으며, 전체 트랜잭션 실패율이 눈에 띄게 감소하였습니다.
                                                </FinalContent>
                                                <FinalContent>
                                                    운영자 대응 시간은 기존 평균 15분 이상에서 2분 이내로 단축되었고, 운영 안정성과 사용자 경험 모두 크게
                                                    향상되었습니다.
                                                </FinalContent>
                                            </TSBasicBox>
                                        </>
                                    )}
                                </TSBox>
                                <TSBox isOpen={openStates[4]} hasBlogIcon={false} onClick={() => toggleBox(4)}>
                                    <TSHeader>
                                        <TSHeaderBox>
                                            <TSMainContent>보상 트랜잭션 범위 정의 및 흐름 개선</TSMainContent>
                                        </TSHeaderBox>
                                        <StyledVisualArrowDown isOpen={openStates[4]} hasBlogIcon={false}/>
                                    </TSHeader>
                                    {renderStates[4] && (
                                        <>
                                            <TSBasicBox>
                                                문제 상황
                                                <ProblemContent>
                                                    Kafka 기반 Saga 구조에서 배송 단계에서 실패가 발생했을 때 주문은 실패로 처리되었지만, {"\n"} 포인트는
                                                    적립되고 재고는 차감된 채 유지되어 데이터 정합성 오류가 발생하였습니다.
                                                </ProblemContent>
                                                <ProblemContent>
                                                    보상 트랜잭션의 대상과 기준이 명확히 정의되어 있지 않아, 중간 실패 시 복구 흐름이 일관되지 않았습니다.
                                                </ProblemContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                해결 방안
                                                <SolvingContent>
                                                    주문 처리 단계별로 실패 발생 시 어떤 보상 이벤트가 발행되어야 하는지 명확히 정의하고, {"\n"} 이를 Kafka
                                                    메시지 구조에 반영하였습니다.
                                                </SolvingContent>
                                                <SolvingContent>
                                                    각 보상 이벤트에는 rollbackTransactionId를 부여하여 메시지가 중복 처리되지 않도록 idempotent
                                                    소비 구조를 적용하였고, 전체 흐름에는 traceId를 부여하여 이벤트 추적성을 확보하였습니다.
                                                </SolvingContent>
                                            </TSBasicBox>
                                            <StyledArrowDown/>
                                            <TSBasicBox>
                                                결론
                                                <FinalContent>
                                                    보상 범위 정의와 흐름 개선 이후 포인트 중복 적립, 재고 차감 누락, 사용자 데이터 불일치 등 {"\n"} 주요 문제가
                                                    완전히 해소되었습니다.
                                                </FinalContent>
                                                <FinalContent>
                                                    전체 트랜잭션 흐름에 대한 추적성과 제어 가능성이 확보되었으며, {"\n"} 운영자 및 개발자의 유지보수 효율도 크게
                                                    향상되었습니다.
                                                </FinalContent>
                                            </TSBasicBox>
                                        </>
                                    )}
                                </TSBox>
                            </ProjectTSGrid>
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
