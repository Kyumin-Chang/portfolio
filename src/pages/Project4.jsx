import React, {useEffect, useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    ContentCategory,
    ContentCategoryBox,
    DetailBox,
    DetailContent,
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
    TechContainer,
    TechnologyCard,
    TechnologyItem,
    TechnologyList,
    TechSectionTitle
} from '../styles/ProjectStyles';
import {FaGithub, FaReact} from 'react-icons/fa';
import {SiVercel, SiVite} from 'react-icons/si';
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

const Project4 = () => {
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
                {icon: <SiVite/>, name: "Vite", highlighted: true},
                {icon: <SiVercel/>, name: "Vercel", highlighted: true},
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
                            <SlideImg bgImage="/pfSlide.png"/>
                            <MainContent>
                                <ProjectTitle>Portfolio WebSite</ProjectTitle>
                                <h2>나의 프로젝트를 소개하는 포트폴리오 웹사이트 제작</h2>
                                <p>개발자로서의 장규민과 주요 프로젝트를 소개하는 웹사이트를 직접 제작하였습니다.</p>
                                <Social>
                                    <SocialLink href="https://github.com/Kyumin-Chang/portfolio"
                                                target="_blank"><FaGithub/> Github</SocialLink>
                                </Social>
                            </MainContent>
                        </ProjectSlide>
                        <ProjectSummary>
                            <p><strong>개발 기간:</strong> 2024.09 ~ ing</p>
                            <p><strong>개발 인원:</strong> 1명 <span>(개인 프로젝트)</span></p>
                            <strong>세부 내용:</strong>
                            <ul>
                                <li>디자인 및 전체 프로젝트 기획과 개발 <span>(기여도 100%)</span></li>
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
                        <Section id="details">
                            <h2>세부 설명</h2>
                            <p>프로젝트에서 직접 구현을 맡은 부분에 대한 {"\n"} 세부 내용입니다.</p>
                            <ProjectContentGrid>
                                <ContentCategoryBox>
                                    Frontend
                                    <ContentCategory>
                                        백엔드 개발자로서 React 학습 및 프론트엔드 기술 경험을 위해 포트폴리오 사이트 개발
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            백엔드 개발자로서 프론트엔드 기술에 대한 깊은 이해가 필요하다고 판단하여, React를 학습하며 {"\n"} 실제 프로젝트에
                                            적용하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            프론트엔드 개발의 흐름을 직접 경험하고, 백엔드-프론트엔드 간의 원활한 협업을 위한 기술적 인사이트를 확보하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            포트폴리오 사이트를 개발하면서 컴포넌트 기반 아키텍처, 상태 관리, 성능 최적화 등의 핵심 프론트엔드 {"\n"} 기술을 습득하고, 이를
                                            실무에 적용할 수 있도록 정리하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <ContentCategory>
                                        UI/UX 최적화 및 반응형 디자인 적용
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            사용자 경험을 고려하여 직관적인 UI/UX를 설계하였으며, 방문자가 쉽게 정보를 탐색할 수 있도록 {"\n"} 구성하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            다양한 디바이스에서도 최적의 경험을 제공하기 위해 반응형 웹 디자인을 적용하였으며, 모바일 환경에서도 원활한 사용이 가능하도록
                                            최적화하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            프로젝트를 슬라이드 형식으로 볼 수 있도록 구현하여, 정적인 포트폴리오 페이지가 아닌 역동적인 콘텐츠 {"\n"} 탐색 경험을
                                            제공하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <ContentCategory>
                                        성능 최적화 및 유지보수성 향상
                                    </ContentCategory>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            컴포넌트 단위로 스타일을 모듈화하여 유지보수성을 높이고, 코드 재사용성을 극대화하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            `react-slick`을 활용하여 애니메이션을 최적화하고, 페이지 로딩 속도를 개선하여 사용자 경험을 {"\n"} 향상시켰습니다.
                                        </DetailContent>
                                    </DetailBox>
                                    <DetailBox hasBlogIcon={false}>
                                        <DetailContent>
                                            Vercel을 활용하여 CI/CD 파이프라인을 구축하고, 코드 변경 사항이 자동으로 배포되도록 설정하여 {"\n"} 개발 효율성을
                                            극대화하였습니다.
                                        </DetailContent>
                                    </DetailBox>
                                </ContentCategoryBox>
                            </ProjectContentGrid>
                        </Section>
                        <Section id="implementation">
                            <h2>프로젝트 시연</h2>
                            <ImageGallery>
                                {[
                                    {
                                        src: '/pf1.png',
                                        description: '<span class="image-title">메인 화면입니다.' +
                                            '</span>✓ 다크모드/라이트모드를 구별하여 사용자들의 편리성을 강화하였습니다.' +
                                            '<br />✓ 헤더 내비게이션 바를 이용하여 사용자가 원하는 섹션으로 이동할 수 있습니다.' +
                                            '<br />✓ 버튼을 통해 Github와 블로그로 바로 이동할 수 있도록 구현하였습니다.' +
                                            '<br />✓ 모바일 화면에서는 햄버거 버튼을 이용하여 헤더의 요소를 볼 수 있도록 하였습니다.'
                                    },
                                    {
                                        src: '/pf2.png',
                                        description: '<span class="image-title">프로젝트 슬라이드 화면입니다.' +
                                            '</span>✓ 프로젝트가 일정 주기마다 자동으로 슬라이드되어 사용자가 편리하게 프로젝트의 리스트를 볼 수 있습니다.'
                                    },
                                    {
                                        src: '/pf3.png',
                                        description: '<span class="image-title">About Me 섹션입니다.' +
                                            '</span>✓ 저에 대한 정보 및 교육 내용을 작성하였고, 저의 강점에 대해 작성하였습니다.' +
                                            '<br />✓ 마우스를 올려 놓으면 주요 단어가 강조되도록 하여 사용자 경험을 향상하였습니다.'
                                    },
                                    {
                                        src: '/pf4.png',
                                        description: '<span class="image-title">기술 스택 화면입니다.' +
                                            '</span>✓ 기술 스택을 분야별로 나누고 해당 기술에 대한 저의 숙련도를 상태바로 표시하였습니다.'
                                    },
                                    {
                                        src: '/pf5.png',
                                        description: '<span class="image-title">Contact 및 Footer 입니다.' +
                                            '</span>✓ 이메일을 아이콘과 함께 작성하였고 화면 오른쪽 아래에는 언제든지 사용자가 맨 위로 이동할 수 있도록 버튼을 넣었습니다.'
                                    },
                                    {
                                        src: '/pf6.png',
                                        description: '<span class="image-title">프로젝트 메인 화면입니다.' +
                                            '</span>✓ 프로젝트에 대한 기본적인 내용들을 담았습니다.' +
                                            '<br />✓ 백그라운드에는 프로젝트 구현 이미지가 슬라이드되도록 하였습니다.' +
                                            '<br />✓ 헤더의 경우 프로젝트 페이지에서는 다른 메뉴가 나타나도록 구현하였습니다.'
                                    },
                                    {
                                        src: '/pf7.png',
                                        description: '<span class="image-title">프로젝트 기술 스택화면입니다.' +
                                            '</span>✓ 프로젝트에 사용된 기술 스택을 배치하였습니다.' +
                                            '<br />✓ 제가 직접 개발을 진행한 스택에 대해서는 강조 표시를 적용하였습니다.'
                                    },
                                    {
                                        src: '/pf8.png',
                                        description: '<span class="image-title">프로젝트 아키텍처 화면입니다.' +
                                            '</span>✓ 프로젝트에 대한 아키텍처 이미지를 삽입하였습니다.'
                                    },
                                    {
                                        src: '/pf9.png',
                                        description: '<span class="image-title">프로젝트 세부 설명 부분입니다.' +
                                            '</span>✓ 프로젝트에서 제가 개발한 내용에 대한 세부 내용을 여러 주제로 나누고 해당 주제에 대한 간단한 설명을 작성하였습니다.' +
                                            '<br />✓ 각 설명에 대해서 제가 작성한 블로그 포스팅으로 이동하도록 버튼을 넣었습니다.'
                                    },
                                    {
                                        src: '/pf10.png',
                                        description: '<span class="image-title">프로젝트 트러블 슈팅 부분입니다.' +
                                            '</span>✓ 프로젝트를 하면서 경험하였던 트러블 슈팅 내용에 대해 작성하였습니다.' +
                                            '<br />✓ 세부 내용이 많아 각 주제에 대해 열고 닫을 수 있도록 구현하였습니다.' +
                                            '<br />✓ 각 주제에 대한 저의 블로그 내용을 볼 수 있도록 버튼을 넣었습니다.'
                                    },
                                    {
                                        src: '/pf11.png',
                                        description: '<span class="image-title">트러블 슈팅 부분을 열었을 때의 화면입니다.' +
                                            '</span>✓ 각 주제별로 열고 닫힘의 상태가 따로 구현되도록 하였습니다.' +
                                            '<br />✓ 문제상황 - 해결 방안 - 결론의 구성으로 작성하였으며 단순한 내용이 아니라 해당 경험에서 저의 생각과 고민, 해결 과정이 잘 들어나도록 작성하였습니다.'
                                    },
                                    {
                                        src: '/pf12.png',
                                        description: '<span class="image-title">프로젝트 시연 화면입니다.' +
                                            '</span>해당 프로젝트의 시연 이미지 또는 영상을 설명과 함께 삽입하였습니다.'
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="image-wrapper">
                                        <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                                        <ProjectImage
                                            src={item.src}
                                            alt={`Zipbob Implementation Image ${index + 1}`}
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

export default Project4;
