import React, {useEffect, useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Slider from "react-slick";
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    AboutMeBottomBox,
    AboutMeGrid,
    AboutMeTopCategory,
    Card,
    CardContent,
    ContactDetails,
    ContactItem,
    EducationBox,
    EducationDetails,
    EducationLogo,
    FixedTagList,
    InfoBox,
    LeftContent,
    LowerSection,
    MainProjectCard,
    MainProjectMobile,
    MainSection,
    MobileButtonSection,
    PageWrapper,
    ProgressBar,
    ProjectCard,
    ProjectDescription,
    ProjectGrid,
    ProjectOverlay,
    ProjectTitle,
    ReadMore,
    ReadMoreArrowButton,
    ReadMoreButton,
    RightContent,
    Section,
    SkillBox,
    SkillCategory,
    SkillLegend,
    SkillList,
    SkillsContainer,
    SkillsGrid,
    SliderContainer,
    SocialButton,
    SocialLinks,
    SplitTextLine,
    StrengthItem,
    StrengthList,
    Tag,
    UpperSection
} from '../styles/HomeStyles';
import {
    FaArrowRight,
    FaAws,
    FaCloud,
    FaCss3Alt,
    FaDocker,
    FaEnvelope,
    FaGit,
    FaGithub,
    FaHtml5,
    FaJava,
    FaJsSquare,
    FaReact
} from 'react-icons/fa';
import {
    SiApachejmeter,
    SiApachekafka,
    SiElasticsearch,
    SiFigma,
    SiGithubactions,
    SiGrafana,
    SiKibana,
    SiKubernetes,
    SiLogstash,
    SiMariadb,
    SiMongodb,
    SiMysql,
    SiNotion,
    SiPrometheus,
    SiRabbitmq,
    SiRedis,
    SiSpring,
    SiSpringsecurity,
    SiVault,
    SiVelog
} from "react-icons/si";
import {CustomNextArrow, CustomPrevArrow} from '../components/CustomArrows';
import {Link, useNavigate} from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";
import {GoProjectSymlink} from "react-icons/go";

const lightTheme = {
    background: '#f0f0f5',
    textColor: '#000000',
    highlightColor: '#ff5959',
    backgroundHoverColor: '#dddcdc',
    primaryBackground: '#ffffff',
    linkHoverColor: '#1d51b8',
    borderColor: '#ddd',
    footerColor: '#d5d5d5',
    reverseColor: '#222',
    reverseTextColor: '#fff',
    skillGridColor: '#efeff3',
    inboxColor: '#f5f5f5',
    cardBackgroundColor: 'rgba(230,230,230,0.67)',
    buttonColor: '#5a5a5a',
    reverseButtonColor: '#ffffff',
    mainCardBackground: '#202632',
    mainCardHoverBackground: 'rgba(32,38,50,0.81)',
    mainCardBorder: 'rgba(255, 255, 255, 0.5)',
    mainCardHoverBorder: 'rgba(255, 255, 255, 0.8)',
    mainCardTextColor: '#ffffff',
    mainCardOverlayStart: 'rgba(32,38,50,0.81)',
    mainCardOverlayEnd: 'rgba(32,38,50,0.81)',
};

const darkTheme = {
    background: '#1e1e2f',
    textColor: '#ffffff',
    highlightColor: 'rgb(255,166,166)',
    backgroundHoverColor: '#7c7c8c',
    primaryBackground: '#0D1117',
    linkHoverColor: '#a6b1e1',
    borderColor: '#444',
    footerColor: '#000000',
    reverseColor: '#fff',
    reverseTextColor: '#222',
    skillGridColor: '#3f3f4a',
    inboxColor: '#595966',
    cardBackgroundColor: 'rgba(0,0,0,0.61)',
    buttonColor: '#fff',
    reverseButtonColor: '#4e4c4c',
    mainCardBackground: 'rgba(240, 250, 255, 0.35)',
    mainCardHoverBackground: 'rgba(240, 250, 255, 0.55)',
    mainCardBorder: 'rgba(255, 255, 255, 0.6)',
    mainCardHoverBorder: 'rgba(255, 255, 255, 0.85)',
    mainCardTextColor: '#111111',
    mainCardOverlayStart: 'rgba(240, 250, 255, 0.55)',
    mainCardOverlayEnd: 'rgba(240, 250, 255, 0.55)',
};

const projects = [
    {
        id: 5,
        title: 'FortiShop',
        description: '대규모 트래픽 환경에서의 장애 대응 경험 프로젝트',
        image: '/project5.png',
        galleryImage: '/project5-2.png',
        tags: ['Spring Cloud', 'MySQL', 'Redis', 'Kafka', 'Elasticsearch', 'Logstash', 'Prometheus', 'Grafana', 'Vault'],
        hoverDescription: [
            '장애 복원력을 갖춘 실전형 MSA 이커머스',
            'Kafka + Redis + Circuit Breaker 기반 복구 설계',
            'Saga 패턴 기반 분산 트랜잭션 처리',
            '적립금, 재고, 결제 등 장애 대응 시나리오 실습'
        ]
    },
    {
        id: 1,
        title: 'Zip Bob',
        description: '자취생을 위한, 집에 있는 재료로 다양한 레시피 추천',
        image: '/project1.png',
        galleryImage: '/project1-2.png',
        tags: ['Spring', 'Spring Cloud', 'MariaDB', 'MongoDB', 'Redis', 'RabbitMQ', 'Vault'],
        hoverDescription: [
            '냉장고 재료 기반 AI 레시피 추천 서비스',
            'Spring Cloud 기반 MSA 구조 적용',
            'Redis 캐싱 및 RabbitMQ 비동기 처리'
        ]
    },
    {
        id: 2,
        title: 'ChatEAT',
        description: '맛집 랜덤 추천 및 교통, 날씨 정보 제공 챗봇',
        image: '/project2.png',
        galleryImage: '/project2-2.png',
        tags: ['React', 'Spring', 'MySQL', 'MongoDB', 'Redis', 'AWS'],
        hoverDescription: [
            '특정 위치 주변 맛집 추천 AI 채팅 서비스',
            'OAuth2.0 및 JWT를 이용한 회원 인증',
            'WebSocket을 활용한 실시간 채팅 서비스 구현'
        ]
    },
    {
        id: 3,
        title: 'Golang',
        description: '갈등 완화/커뮤니케이션 상승 채팅 웹 서비스',
        image: '/project3.png',
        galleryImage: '/project3.png',
        tags: ['React', 'Spring', 'MariaDB', 'MongoDB', 'Redis', 'Docker'],
        hoverDescription: [
            'LLM을 이용한 갈등 완화 채팅 서비스',
            'Nginx를 이용한 서버 배포 및 Https 구성',
            'Redis pub/sub 구조를 활용한 실시간 채팅'
        ]
    },
    {
        id: 4,
        title: 'Portfolio',
        description: '포트폴리오 웹사이트 제작',
        image: '/project4.png',
        galleryImage: '/project4.png',
        tags: ['React'],
        hoverDescription: [
            'React + Vite를 이용한 안정성 높은 포트폴리오 사이트 구현',
            '모든 디바이스 최적화, 반응형 디자인 구현',
            '문제 해결 중심의 포트폴리오 사이트 제작'
        ]
    }
];

const highlights = ["장애와 여러 문제를 직접 정의하고 끝까지 해결", "높은 문제 해결 능력", "대규모 트래픽 처리 경험",
    "MSA 환경과 무중단 배포에 최적화된 아키텍처를 설계", "복원력 있고 정합성 높은 시스템을 만드는 데 기여", "비즈니스 문제 해결과 협업의 중요성을 깊이 이해", "적극적인 태도와 긍정적인 성격"];

const strengths = [
    "실제 서비스 환경에서 마주할 수 있는 장애와 여러 문제를 직접 정의하고 끝까지 해결하는 서버 개발자입니다.",
    "항상 “왜?”라는 질문을 던지며 문제에 접근하고 높은 문제 해결 능력을 가지고 있습니다.",
    "대규모 트래픽 처리 경험을 바탕으로 MSA 환경과 무중단 배포에 최적화된 아키텍처를 설계할 수 있습니다.",
    "기능 구현을 넘어서, 복원력 있고 정합성 높은 시스템을 만드는 데 기여할 수 있는 개발자입니다.",
    "다양한 팀 프로젝트를 통해 비즈니스 문제 해결과 협업의 중요성을 깊이 이해하고 있습니다.",
    "적극적인 태도와 긍정적인 성격으로 팀의 시너지를 높입니다."
];

const highlightText = (text) => {
    const regex = new RegExp(`(${highlights.join("|")})`, "g");

    return text.split(regex).map((part, index) =>
        highlights.includes(part) ? <strong key={index}>{part}</strong> : part
    );
};

const skills = {
    Backend: [
        {icon: <FaJava className="skill-icon" color={"#FF7800"}/>, name: "Java", level: "advanced"},
        {icon: <SiSpring className="skill-icon" color={"#6DB33F"}/>, name: "Spring", level: "advanced"},
        {
            icon: <SiSpringsecurity className="skill-icon" color={"#6DB33F"}/>,
            name: "Spring Security",
            level: "advanced"
        },
        {
            icon: <FaCloud className="skill-icon" color={"#6DB33F"}/>,
            name: "Spring Cloud",
            level: "intermediate"
        }
    ],
    Database: [
        {icon: <SiMysql className="skill-icon" color={"#4479A1"}/>, name: "MySQL", level: "advanced"},
        {icon: <SiMariadb className="skill-icon" color={"#003545"}/>, name: "MariaDB", level: "advanced"},
        {icon: <SiMongodb className="skill-icon" color={"#47A248"}/>, name: "MongoDB", level: "advanced"},
        {icon: <SiRedis className="skill-icon" color={"#FF4438"}/>, name: "Redis", level: "advanced"},
        {icon: <SiVault className="skill-icon" color={"#FFEC6E"}/>, name: "Vault", level: "intermediate"},
        {
            icon: <SiElasticsearch className="skill-icon" color={"#005571"}/>,
            name: "Elasticsearch",
            level: "intermediate"
        }
    ],
    Deployment: [
        {icon: <FaAws className="skill-icon" color={"#FF9900"}/>, name: "AWS", level: "intermediate"},
        {icon: <FaDocker className="skill-icon" color={"#2496ED"}/>, name: "Docker", level: "intermediate"},
        {icon: <SiKubernetes className="skill-icon" color={"#326CE5"}/>, name: "Kubernetes", level: "basic"},
        {icon: <SiGithubactions className="skill-icon" color={"#2088FF"}/>, name: "Github Actions", level: "basic"}
    ],
    "Monitoring Tools": [
        {icon: <SiPrometheus className="skill-icon" color={"#E6522C"}/>, name: "Prometheus", level: "intermediate"},
        {icon: <SiGrafana className="skill-icon" color={"#F46800"}/>, name: "Grafana", level: "intermediate"},
        {icon: <SiLogstash className="skill-icon" color={"#005571"}/>, name: "Logstash", level: "intermediate"},
        {icon: <SiKibana className="skill-icon" color={"#005571"}/>, name: "Kibana", level: "intermediate"}
    ],
    Frontend: [
        {icon: <FaReact className="skill-icon" color={"#61DAFB"}/>, name: "React", level: "intermediate"},
        {icon: <FaHtml5 className="skill-icon" color={"#E34F26"}/>, name: "HTML", level: "intermediate"},
        {icon: <FaCss3Alt className="skill-icon" color={"#1572B6"}/>, name: "CSS", level: "intermediate"},
        {icon: <FaJsSquare className="skill-icon" color={"#F7DF1E"}/>, name: "JavaScript", level: "intermediate"},
    ],
    "Other Tools": [
        {icon: <SiApachekafka className="skill-icon" color={"#000000"}/>, name: "Kafka", level: "intermediate"},
        {icon: <SiRabbitmq className="skill-icon" color={"#FF6600"}/>, name: "RabbitMQ", level: "advanced"},
        {icon: <SiApachejmeter className="skill-icon" color={"#D22128"}/>, name: "JMeter", level: "intermediate"},
        {icon: <FaGit className="skill-icon" color={"#F05032"}/>, name: "Git", level: "advanced"},
        {icon: <SiNotion className="skill-icon" color={"#000000"}/>, name: "Notion", level: "advanced"},
        {icon: <SiFigma className="skill-icon" color={"#F24E1E"}/>, name: "Figma", level: "basic"}
    ]
};

const skillLevels = {
    basic: "#f9d985",
    intermediate: "#4CAF50",
    advanced: "#7b97ff"
};

const tagColorMap = {
    // ✅ Backend
    Java: '#FF7800',
    Spring: '#6DB33F',
    'Spring Security': '#6DB33F',
    'Spring Cloud': '#6DB33F',

    // ✅ Frontend
    React: '#61DAFB',
    HTML: '#E34F26',
    CSS: '#1572B6',
    JavaScript: '#F7DF1E',

    // ✅ Database
    MySQL: '#4479A1',
    MariaDB: '#003545',
    MongoDB: '#47A248',
    Redis: '#FF4438',
    Vault: '#FFEC6E',
    Elasticsearch: '#005571',

    // ✅ Deployment
    AWS: '#FF9900',
    Docker: '#2496ED',
    Kubernetes: '#326CE5',
    'Github Actions': '#2088FF',

    // ✅ Monitoring Tools
    Prometheus: '#E6522C',
    Grafana: '#F46800',
    Logstash: '#005571',
    Kibana: '#005571',

    // ✅ Other Tools
    Kafka: '#231F20',
    RabbitMQ: '#FF6600',
    JMeter: '#D22128',
    Git: '#F05032',
    Notion: '#000000',
    Figma: '#F24E1E',
};

const getSkillLevel = (level) => {
    switch (level) {
        case "basic":
            return "30%";
        case "intermediate":
            return "60%";
        case "advanced":
            return "100%";
        default:
            return "0%";
    }
};

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem('isDarkMode');
        return storedTheme ? JSON.parse(storedTheme) : true;
    });
    const theme = isDarkMode ? darkTheme : lightTheme;
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const sliderSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 600,
        speed: 1000,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "450px",
        prevArrow: <CustomPrevArrow/>,
        nextArrow: <CustomNextArrow/>,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerPadding: "300px",
                },
            },
            {
                breakpoint: 1100,
                settings: {
                    centerPadding: "200px",
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    centerPadding: "120px",
                },
            },
            {
                breakpoint: 860,
                settings: {
                    centerPadding: "200px",
                },
            },
            {
                breakpoint: 800,
                settings: {
                    centerPadding: "150px",
                },
            },
            {
                breakpoint: 700,
                settings: {
                    centerPadding: "120px",
                },
            },
            {
                breakpoint: 590,
                settings: {
                    centerPadding: "100px",
                },
            },
            {
                breakpoint: 550,
                settings: {
                    centerPadding: "80px",
                },
            },
            {
                breakpoint: 520,
                settings: {
                    centerPadding: "70px",
                },
            },
            {
                breakpoint: 500,
                settings: {
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 420,
                settings: {
                    centerPadding: "30px",
                },
            },
            {
                breakpoint: 370,
                settings: {
                    centerPadding: "10px",
                },
            },
        ],
    };

    return (
        <ThemeProvider theme={theme}>
            <PageWrapper>
                <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
                <MainSection>
                    <UpperSection>
                        <SplitTextLine>Server</SplitTextLine>
                        <Link to={`/project/5`}>
                            <MainProjectCard>
                                <div className="center-label">MAIN PROJECT</div>
                                <div className="text-area">
                                    <h3>FortiShop</h3>
                                    <p>대규모 트래픽 환경에서의 장애 대응 경험 프로젝트</p>
                                </div>
                            </MainProjectCard>
                        </Link>
                    </UpperSection>
                    <LowerSection>
                        <LeftContent>
                            <p>
                                실전 문제 해결과 깊이 있는 몰입으로
                            </p>
                            <p>
                                성장의 곡선을 만들어 온 서버 개발자,
                            </p>
                            <p>
                                장규민입니다.
                            </p>
                        </LeftContent>
                        <RightContent>
                            <SplitTextLine>Developer</SplitTextLine>
                        </RightContent>
                    </LowerSection>
                    <MobileButtonSection>
                        <Link
                            to={`/project/5`}>
                            <MainProjectMobile><GoProjectSymlink/> Main Project</MainProjectMobile>
                        </Link>
                    </MobileButtonSection>
                    <SocialLinks>
                        <SocialButton href="https://github.com/Kyumin-Chang"
                                      target="_blank"><FaGithub/> Github</SocialButton>
                        <SocialButton href="https://velog.io/@lord/posts"
                                      target="_blank"><SiVelog/> Velog</SocialButton>
                    </SocialLinks>
                </MainSection>
                <SliderContainer id="projects">
                    <Slider {...sliderSettings}>
                        {projects.map((project) => (
                            <Card key={project.order} $image={project.image}>
                                <CardContent onClick={() => navigate(`/project/${project.id}`)}>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <ReadMore>
                                        <ReadMoreButton>더보기</ReadMoreButton>
                                        <ReadMoreArrowButton> <FaArrowRight/></ReadMoreArrowButton>
                                    </ReadMore>
                                </CardContent>
                            </Card>
                        ))}
                    </Slider>
                </SliderContainer>
                <Section id="about-me">
                    <h2>About Me</h2>
                    <AboutMeGrid>
                        <AboutMeTopCategory>
                            <InfoBox>
                                <p>이름 : 장규민</p>
                            </InfoBox>
                            <EducationBox>
                                <EducationLogo src="/kakao.png" alt="카카오테크부트캠프"/>
                                <EducationDetails>
                                    <h3>카카오 테크 부트캠프 1기</h3>
                                    <p>풀스택 과정</p>
                                    <p>2024.07 - 2024.12</p>
                                </EducationDetails>
                            </EducationBox>
                        </AboutMeTopCategory>
                        <AboutMeBottomBox>
                            <StrengthList>
                                {strengths.map((strength, index) => (
                                    <StrengthItem key={index}>{highlightText(strength)}</StrengthItem>
                                ))}
                            </StrengthList>
                        </AboutMeBottomBox>
                    </AboutMeGrid>
                </Section>
                <Section id="project-gallery">
                    <h2>Project Gallery</h2>
                    <ProjectGrid>
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                $image={project.galleryImage}
                                onClick={() => navigate(`/project/${project.id}`)}
                            >
                                <ProjectOverlay>
                                    <ProjectTitle>{project.title}</ProjectTitle>
                                    <ProjectDescription>
                                        {project.hoverDescription.map((line, idx) => (
                                            <p key={idx}>{line}</p>
                                        ))}
                                    </ProjectDescription>
                                </ProjectOverlay>
                                <FixedTagList>
                                    {project.tags.map((tag, idx) => (
                                        <Tag key={idx} color={tagColorMap[tag]}>{tag}</Tag>
                                    ))}
                                </FixedTagList>
                            </ProjectCard>
                        ))}
                    </ProjectGrid>
                </Section>
                <Section id="skills">
                    <h2>Skills</h2>
                    <SkillsContainer>
                        <SkillLegend>
                            <span><div style={{backgroundColor: "#f9d985"}}></div> Basic</span>
                            <span><div style={{backgroundColor: "#4CAF50"}}></div> Intermediate</span>
                            <span><div style={{backgroundColor: "#7b97ff"}}></div> Advanced</span>
                        </SkillLegend>
                        <SkillsGrid>
                            {Object.entries(skills).map(([category, skillList]) => (
                                <SkillCategory key={category}>
                                    <h3>{category}</h3>
                                    <SkillList>
                                        {skillList.map((skill, index) => (
                                            <SkillBox key={index}>
                                                {skill.icon}
                                                {skill.name}
                                                <ProgressBar color={skillLevels[skill.level]}>
                                                    <div style={{width: getSkillLevel(skill.level)}}/>
                                                </ProgressBar>
                                            </SkillBox>
                                        ))}
                                    </SkillList>
                                </SkillCategory>
                            ))}
                        </SkillsGrid>
                    </SkillsContainer>
                </Section>
                <Section id="contacts">
                    <h2>Contacts</h2>
                    <ContactDetails>
                        <ContactItem>
                            <FaEnvelope className="contact-icon"/>
                            <span>devharrychang@gmail.com</span>
                        </ContactItem>
                    </ContactDetails>
                </Section>
                <Footer/>
            </PageWrapper>
            <ScrollToTopButton/>
        </ThemeProvider>
    );
};

export default Home;
