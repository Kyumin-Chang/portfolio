import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Slider from "react-slick";
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    AboutMeCategory,
    AboutMeGrid,
    Card,
    CardContent,
    ContactDetails,
    ContactItem,
    EducationInfo,
    EducationList,
    LeftContent,
    LowerSection,
    MainSection,
    PageWrapper,
    ReadMore,
    ReadMoreArrowButton,
    ReadMoreButton,
    RightContent,
    Section,
    SkillCategory,
    SkillItem,
    SkillList,
    SkillsGrid,
    SliderContainer,
    SocialButton,
    SocialLinks,
    SplitTextLine,
    StyledButton,
    UpperSection
} from '../styles/HomeStyles';
import {
    FaAws,
    FaCss3Alt,
    FaDocker,
    FaEnvelope,
    FaGit,
    FaGithub,
    FaHtml5,
    FaJava,
    FaJsSquare,
    FaNodeJs,
    FaPhone,
    FaReact
} from 'react-icons/fa';
import {
    SiFigma,
    SiGithubactions,
    SiJira,
    SiLinkedin,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNotion,
    SiRedis,
    SiSpring,
    SiSpringsecurity,
    SiTypescript,
    SiVelog,
    SiVercel
} from "react-icons/si";
import {CustomNextArrow, CustomPrevArrow} from '../components/CustomArrows';
import {Link} from "react-router-dom";

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

const projects = [
    {
        id: 1,
        title: 'ChatEAT',
        description: '맛집 랜덤 추천 및 교통, 날씨 정보 제공 챗봇',
        image: '/src/assets/project1.png',
    },
    {
        id: 2,
        title: 'Orli Climbing',
        description: '주변 클라이밍 센터에 대한 정보 제공 서비스',
        image: '/src/assets/project2.png',
    },
    {
        id: 3,
        title: 'Golang',
        description: '갈등 완화/커뮤니케이션 상승 채팅 웹 서비스',
        image: '/src/assets/project3.png',
    },
    {
        id: 4,
        title: 'Daily Nest',
        description: '나만의 일상을 기록하는 공간 웹 서비스',
        image: '/src/assets/project4.png',
    }
];

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const theme = isDarkMode ? darkTheme : lightTheme;

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const sliderSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "450px",
        prevArrow: <CustomPrevArrow/>,
        nextArrow: <CustomNextArrow/>,
    };

    return (
        <ThemeProvider theme={theme}>
            <PageWrapper>
                <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
                <MainSection>
                    <UpperSection>
                        <SplitTextLine>Backend</SplitTextLine>
                        <StyledButton>
                            <span>Projects →</span>
                        </StyledButton>
                    </UpperSection>
                    <LowerSection>
                        <LeftContent>
                            <p>
                                A developer who never stops exploring new technologies.
                                Driving greater results through teamwork.
                            </p>
                        </LeftContent>
                        <RightContent>
                            <SplitTextLine>Developer</SplitTextLine>
                        </RightContent>
                    </LowerSection>
                    <SocialLinks>
                        <SocialButton href="https://github.com/Kyumin-Chang"
                                      target="_blank"><FaGithub/> Github</SocialButton>
                        <SocialButton href="https://kr.linkedin.com/"
                                      target="_blank"><SiLinkedin/> LinkedIn</SocialButton>
                        <SocialButton href="https://velog.io/@lord/posts"
                                      target="_blank"><SiVelog/> Velog</SocialButton>
                    </SocialLinks>
                </MainSection>
                <SliderContainer id="projects">
                    <Slider {...sliderSettings}>
                        {projects.map((project) => (
                            <Card key={project.id} $image={project.image}>
                                <CardContent>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <ReadMore>
                                        <ReadMoreButton><Link to={`/project/${project.id}`}>Read
                                            more</Link></ReadMoreButton>
                                        <ReadMoreArrowButton><Link
                                            to={`/project/${project.id}`}> → </Link></ReadMoreArrowButton>
                                    </ReadMore>
                                </CardContent>
                            </Card>
                        ))}
                    </Slider>
                </SliderContainer>
                <Section id="about-me">
                    <h2>About Me</h2>
                    <AboutMeGrid>
                        <AboutMeCategory>
                            <h3>Info</h3>
                            <p>이름 : 장규민</p>
                            <p>생년월일 : 1998.05.29</p>
                            <p>학력 : 고려대학교 컴퓨터학과</p>
                            <p>부전공 : 정보보호융합전공</p>
                        </AboutMeCategory>
                        <AboutMeCategory>
                            <h3>Education</h3>
                            <EducationList>
                                <img className="skill-icon" src="/src/assets/ktbIcon.png" alt="KTB Icon"/>
                                <EducationInfo>
                                    <p>2024.07.~2024.12.</p>
                                    카카오테크부트캠프 1기
                                </EducationInfo>
                            </EducationList>
                        </AboutMeCategory>
                    </AboutMeGrid>
                </Section>
                <Section id="skills">
                    <h2>Skills</h2>
                    <SkillsGrid>
                        <SkillCategory>
                            <h3>Frontend</h3>
                            <SkillList>
                                <SkillItem>
                                    <FaReact className="skill-icon" color={"#61DAFB"}/> React
                                </SkillItem>
                                <SkillItem>
                                    <FaHtml5 className="skill-icon" color={"#E34F26"}/> HTML
                                </SkillItem>
                                <SkillItem>
                                    <FaCss3Alt className="skill-icon" color={"#1572B6"}/> CSS
                                </SkillItem>
                                <SkillItem>
                                    <FaJsSquare className="skill-icon" color={"#F7DF1E"}/> JavaScript
                                </SkillItem>
                                <SkillItem>
                                    <SiTypescript className="skill-icon" color={"#3178C6"}/> TypeScript
                                </SkillItem>
                                <SkillItem>
                                    <SiNextdotjs className="skill-icon" color={"#000000"}/> Next.js
                                </SkillItem>
                            </SkillList>
                        </SkillCategory>
                        <SkillCategory>
                            <h3>Backend</h3>
                            <SkillList>
                                <SkillItem>
                                    <FaJava className="skill-icon" color={"#FF7800"}/> Java
                                </SkillItem>
                                <SkillItem>
                                    <SiSpring className="skill-icon" color={"#6DB33F"}/> Spring
                                </SkillItem>
                                <SkillItem>
                                    <SiSpringsecurity className="skill-icon" color={"#6DB33F"}/> Spring Security
                                </SkillItem>
                                <SkillItem>
                                    <FaNodeJs className="skill-icon" color={"#5FA04E"}/> Node.js
                                </SkillItem>
                                <SkillItem>
                                    <SiNextdotjs className="skill-icon" color={"#000000"}/> Next.js
                                </SkillItem>
                            </SkillList>
                        </SkillCategory>
                        <SkillCategory>
                            <h3>Database</h3>
                            <SkillList>
                                <SkillItem>
                                    <SiMysql className="skill-icon" color={"#4479A1"}/> MySQL
                                </SkillItem>
                                <SkillItem>
                                    <SiMongodb className="skill-icon" color={"#47A248"}/> MongoDB
                                </SkillItem>
                                <SkillItem>
                                    <SiRedis className="skill-icon" color={"#FF4438"}/> Redis
                                </SkillItem>
                            </SkillList>
                        </SkillCategory>
                        <SkillCategory>
                            <h3>Deployment</h3>
                            <SkillList>
                                <SkillItem>
                                    <FaAws className="skill-icon" color={"#FF9900"}/> AWS
                                </SkillItem>
                                <SkillItem>
                                    <FaDocker className="skill-icon" color={"#2496ED"}/> Docker
                                </SkillItem>
                                <SkillItem>
                                    <SiVercel className="skill-icon" color={"#000000"}/> Vercel
                                </SkillItem>
                                <SkillItem>
                                    <SiGithubactions className="skill-icon" color={"#2088FF"}/> Github Actions
                                </SkillItem>
                            </SkillList>
                        </SkillCategory>
                        <SkillCategory>
                            <h3>Version Control</h3>
                            <SkillList>
                                <SkillItem>
                                    <FaGit className="skill-icon" color={"#F05032"}/> Git
                                </SkillItem>
                                <SkillItem>
                                    <FaGithub className="skill-icon" color={"#181717"}/> Github
                                </SkillItem>
                            </SkillList>
                        </SkillCategory>
                        <SkillCategory>
                            <h3>Communication</h3>
                            <SkillList>
                                <SkillItem>
                                    <SiJira className="skill-icon" color={"#0052CC"}/> Jira
                                </SkillItem>
                                <SkillItem>
                                    <SiNotion className="skill-icon" color={"#000000"}/> Notion
                                </SkillItem>
                                <SkillItem>
                                    <SiFigma className="skill-icon" color={"#F24E1E"}/> Figma
                                </SkillItem>
                            </SkillList>
                        </SkillCategory>
                    </SkillsGrid>
                </Section>
                <Section id="contacts">
                    <h2>Contacts</h2>
                    <ContactDetails>
                        <ContactItem>
                            <FaPhone className="contact-icon"/>
                            <span>+82 10-1234-5678</span>
                        </ContactItem>
                        <ContactItem>
                            <FaEnvelope className="contact-icon"/>
                            <span>kyumin0529@naver.com</span>
                        </ContactItem>
                    </ContactDetails>
                </Section>
                <Footer/>
            </PageWrapper>
        </ThemeProvider>
    );
};

export default Home;
