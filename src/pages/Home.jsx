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
    InfoBox,
    LeftContent,
    LowerSection,
    MainProjectMobile,
    MainSection,
    MobileButtonSection,
    PageWrapper,
    ProgressBar,
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
    StyledButton,
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
    SiFigma,
    SiGithubactions,
    SiKubernetes,
    SiMariadb,
    SiMongodb,
    SiMysql,
    SiNotion,
    SiRabbitmq,
    SiRedis,
    SiSpring,
    SiSpringsecurity,
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
};

const projects = [
    {
        id: 1,
        title: 'Zip Bob',
        description: '자취생을 위한, 집에 있는 재료로 다양한 레시피 추천',
        image: '/project1.png',
    },
    {
        id: 2,
        title: 'ChatEAT',
        description: '맛집 랜덤 추천 및 교통, 날씨 정보 제공 챗봇',
        image: '/project2.png',
    },
    {
        id: 3,
        title: 'Golang',
        description: '갈등 완화/커뮤니케이션 상승 채팅 웹 서비스',
        image: '/project3.png',
    },
    {
        id: 4,
        title: 'Portfolio',
        description: '포트폴리오 웹사이트 제작',
        image: '/project4.png',
    }
];

const highlights = ["뛰어난 문제 해결 능력", "협업", "소통과 협력", "대규모 트래픽 처리 경험", "꾸준한 학습과 끈기", "보안과 사용자 경험을 최우선"];

const strengths = [
    "뛰어난 문제 해결 능력을 바탕으로 원인을 분석하고 더 나은 방법을 찾아냅니다.",
    "협업을 중요하게 생각하며, 팀원들과의 원활한 소통과 협력을 통해 최상의 결과를 만들어냅니다.",
    "대규모 트래픽 처리 경험을 바탕으로 안정적이고 확장 가능한 시스템을 구현합니다.",
    "꾸준한 학습과 끈기를 바탕으로 어려운 문제를 끝까지 해결해냅니다.",
    "보안과 사용자 경험을 최우선으로 고려하여 신뢰할 수 있는 서비스를 개발합니다."
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
    Frontend: [
        {icon: <FaReact className="skill-icon" color={"#61DAFB"}/>, name: "React", level: "intermediate"},
        {icon: <FaHtml5 className="skill-icon" color={"#E34F26"}/>, name: "HTML", level: "intermediate"},
        {icon: <FaCss3Alt className="skill-icon" color={"#1572B6"}/>, name: "CSS", level: "intermediate"},
        {icon: <FaJsSquare className="skill-icon" color={"#F7DF1E"}/>, name: "JavaScript", level: "intermediate"},
    ],
    Database: [
        {icon: <SiMysql className="skill-icon" color={"#4479A1"}/>, name: "MySQL", level: "advanced"},
        {icon: <SiMariadb className="skill-icon" color={"#003545"}/>, name: "MariaDB", level: "advanced"},
        {icon: <SiMongodb className="skill-icon" color={"#47A248"}/>, name: "MongoDB", level: "advanced"},
        {icon: <SiRedis className="skill-icon" color={"#FF4438"}/>, name: "Redis", level: "advanced"}
    ],
    Deployment: [
        {icon: <FaAws className="skill-icon" color={"#FF9900"}/>, name: "AWS", level: "intermediate"},
        {icon: <FaDocker className="skill-icon" color={"#2496ED"}/>, name: "Docker", level: "intermediate"},
        {icon: <SiKubernetes className="skill-icon" color={"#326CE5"}/>, name: "Kubernetes", level: "basic"},
        {icon: <SiGithubactions className="skill-icon" color={"#2088FF"}/>, name: "Github Actions", level: "basic"}
    ],
    "Version Control": [
        {icon: <FaGit className="skill-icon" color={"#F05032"}/>, name: "Git", level: "advanced"},
        {icon: <FaGithub className="skill-icon" color={"#181717"}/>, name: "Github", level: "advanced"}
    ],
    "Other Tools": [
        {icon: <SiRabbitmq className="skill-icon" color={"#FF6600"}/>, name: "RabbitMQ", level: "advanced"},
        {icon: <SiApachejmeter className="skill-icon" color={"#D22128"}/>, name: "JMeter", level: "intermediate"},
        {icon: <SiNotion className="skill-icon" color={"#000000"}/>, name: "Notion", level: "advanced"},
        {icon: <SiFigma className="skill-icon" color={"#F24E1E"}/>, name: "Figma", level: "basic"}
    ]
};

const skillLevels = {
    basic: "#f9d985",
    intermediate: "#4CAF50",
    advanced: "#7b97ff"
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
                        <SplitTextLine>Backend</SplitTextLine>
                        <Link
                            to={`/project/1`}><StyledButton>
                            <span>MAIN PROJECT</span>
                        </StyledButton>
                        </Link>
                    </UpperSection>
                    <LowerSection>
                        <LeftContent>
                            <p>
                                끊임없이 고민하며 성장하고
                            </p>
                            <p>
                                협업을 잘하는 개발자,
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
                            to={`/project/1`}>
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
                            <Card key={project.id} $image={project.image}>
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
                                <p>생년월일 : 1998.05.29</p>
                            </InfoBox>
                            <EducationBox>
                                <EducationLogo src="/kakao.png" alt="카카오테크부트캠프"/>
                                <EducationDetails>
                                    <h3>카카오 테크 부트캠프 1기</h3>
                                    <p>풀스택 과정</p>
                                    <p>2024.06 - 2024.12</p>
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
