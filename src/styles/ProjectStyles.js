import styled, {css, keyframes} from 'styled-components';
import {SiVelog} from "react-icons/si";
import {RiArrowDownDoubleLine, RiArrowDownWideLine} from "react-icons/ri";

export const PageWrapper = styled.div`
    background-color: ${({theme}) => theme.primaryBackground};
    color: ${({theme}) => theme.textColor};
    transition: all 0.3s ease;
`;

export const ProjectContainer = styled.div`
    padding: 60px 40px;
    text-align: center;
    max-width: 1400px;
    margin: 0 auto;
`;

export const ProjectTitle = styled.h1`
    font-size: 5rem;
    margin-bottom: 20px;
    color: ${({theme}) => theme.textColor};

    @media (max-width: 860px) {
        font-size: 4rem;
    }

    @media (max-width: 500px) {
        font-size: 3rem;
    }

    @media (max-width: 420px) {
        font-size: 2.5rem;
    }
`;

export const ProjectMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ProjectSlide = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

export const MainContent = styled.div`
    position: relative;
    z-index: 2;

    h2 {
        font-size: 2rem;

        @media (max-width: 860px) {
            font-size: 1.6rem;
        }

        @media (max-width: 500px) {
            font-size: 1.3rem;
        }

        @media (max-width: 420px) {
            font-size: 1.1rem;
        }
    }

    p {
        margin-top: 10px;
        margin-right: 80px;
        margin-left: 80px;
        font-size: 1.5rem;
        white-space: pre-line;

        @media (max-width: 860px) {
            font-size: 1.3rem;
        }

        @media (max-width: 500px) {
            font-size: 1.1rem;
            margin-right: 0;
            margin-left: 0;
        }

        @media (max-width: 420px) {
            font-size: 1rem;
        }
    }
`;

export const SlideImg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-repeat: repeat-x;
    animation: slide-left 60s linear infinite;
    opacity: 0.2;
    z-index: 1;

    @keyframes slide-left {
        from {
            background-position: 5000px 0;
        }
        to {
            background-position: 0 0;
        }
    }
`;

export const BackImg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    border-radius: 20px;
    opacity: 0.2;
    z-index: 1;
`;

export const Social = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 40px;

    @media (max-width: 860px) {
        margin: 25px;
    }
`;

export const SocialLink = styled.a`
    display: flex;
    width: 200px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 15px 25px;
    color: ${({theme}) => theme.textColor};
    border-radius: 40px;
    font-size: 1.4rem;
    transition: background-color 0.3s, color 0.3s, border 0.3s ease-in-out;
    border: 1px solid ${({theme}) => theme.textColor};

    &:hover {
        color: ${({theme}) => theme.reverseTextColor};
        background-color: ${({theme}) => theme.reverseColor};
    }

    svg {
        font-size: 2rem;
        @media (max-width: 860px) {
            font-size: 1.5rem;
        }

        @media (max-width: 500px) {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 860px) {
        width: 180px;
        padding: 15px 15px;
        font-size: 1.2rem;
    }

    @media (max-width: 500px) {
        width: 120px;
        padding: 10px 10px;
        font-size: 1rem;
    }
`;

export const ProjectSummary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    margin: auto;
    padding: 20px;
    font-size: 1.5rem;
    border-radius: 10px;
    text-align: left;

    p {
        font-size: 1.5rem;
        color: ${({theme}) => theme.textColor};
        margin-top: 0;
        margin-bottom: 10px;

        @media (max-width: 860px) {
            font-size: 1.3rem;
        }

        @media (max-width: 500px) {
            font-size: 1.1rem;
        }

        @media (max-width: 420px) {
            font-size: 1rem;
        }
    }

    strong {
        font-weight: 600;
        color: ${({theme}) => theme.textColor};
    }

    ul {
        padding-left: 20px;
        margin-top: 10px;
    }

    li {
        line-height: 1.8;
        margin-bottom: 8px;
        color: ${({theme}) => theme.textColor};
    }

    span {
        color: #FF9800;
        font-weight: 500;
    }

    @media (max-width: 860px) {
        font-size: 1.4rem;
    }

    @media (max-width: 500px) {
        font-size: 1.1rem;
    }

    @media (max-width: 420px) {
        font-size: 1rem;
    }

    @media (max-width: 622px) {
        ul li span {
            display: block;
            margin-top: 4px;
        }
    }
`;

export const ProjectDetails = styled.div`
    margin-top: 20px;

    @media (max-width: 500px) {
        margin-top: 10px;
    }
`;

export const Section = styled.div`
    padding: 60px 40px;
    text-align: center;

    h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        color: ${({theme}) => theme.textColor};
        position: relative;
        display: inline-block;

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 4px;
            background-color: ${({theme}) => theme.linkHoverColor};
            bottom: -10px;
            left: 0;
            transform: translateX(0%);
        }

        @media (max-width: 860px) {
            font-size: 1.8rem;
        }

        @media (max-width: 500px) {
            font-size: 1.5rem;
        }

        @media (max-width: 420px) {
            font-size: 1.3rem;
        }
    }

    p {
        font-size: 1.5rem;
        line-height: 1.8;
        color: ${({theme}) => theme.textColor};
        text-align: center;
        max-width: 900px;
        margin: 10px auto;

        @media (max-width: 860px) {
            font-size: 1.3rem;
            white-space: pre-line;
        }

        @media (max-width: 500px) {
            font-size: 1.1rem;
        }

        @media (max-width: 420px) {
            font-size: 0.9rem;
            margin: 0;
        }
    }

    @media (max-width: 860px) {
        padding: 40px 10px;
    }
`;

const glow = keyframes`
    0% {
        box-shadow: 0 0 5px rgba(181, 159, 176, 0.8);
    }
    50% {
        box-shadow: 0 0 15px rgba(181, 159, 176, 1);
    }
    100% {
        box-shadow: 0 0 5px rgba(181, 159, 176, 0.8);
    }
`;

export const TechContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin-top: 20px;

    @media (max-width: 500px) {
        gap: 20px;
        margin-top: 10px;
    }
`;

export const TechnologyCard = styled.div`
    background: ${({theme}) => theme.skillGridColor};
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 400px;
    text-align: center;
`;

export const TechSectionTitle = styled.h3`
    font-size: 1.6rem;
    color: ${({theme}) => theme.textColor};
    margin-bottom: 20px;
    text-transform: uppercase;
    border-bottom: 2px solid ${({theme}) => theme.textColor};
    padding-bottom: 5px;

    @media (max-width: 500px) {
        font-size: 1.3rem;
    }

    @media (max-width: 420px) {
        font-size: 1.1rem;
    }
`;

export const TechnologyList = styled.div`
    display: flex;
    gap: 15px;
    flex-direction: column;
`;

export const TechnologyItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: 12px 15px;
    border-radius: 8px;
    background: ${({theme, $highlighted}) =>
            $highlighted ? theme.highlightedColor : theme.inboxColor};
    color: ${({theme}) => theme.textColor};
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    ${({$highlighted}) =>
            $highlighted &&
            css`
                animation: ${glow} 1.5s infinite alternate;
            `
    }
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        background: ${({theme}) => theme.techCardBackgroundColor};
    }

    svg {
        margin-right: 8px;
        font-size: 1.8rem;

        @media (max-width: 500px) {
            font-size: 1.4rem;
        }

        @media (max-width: 420px) {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
        padding: 8px 12px;
    }

    @media (max-width: 420px) {
        font-size: 1rem;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const ProjectArchitectureImage = styled.img`
    width: 110%;
    max-width: 1300px;
    border-radius: 12px;

    @media (max-width: 860px) {
        width: 110%;
    }
`;

export const ProjectContentGrid = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 40px;
    align-items: center;

    @media (max-width: 500px) {
        gap: 20px;
    }
`;

export const ContentCategoryBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1400px;
    padding: 25px;
    border-radius: 15px;
    border: 3px solid ${({theme}) => theme.borderColor};
    font-size: 1.8rem;
    font-weight: bold;
    align-items: center;

    @media (max-width: 860px) {
        font-size: 1.6rem;
    }

    @media (max-width: 500px) {
        width: 120%;
        font-size: 1.4rem;
    }

    @media (max-width: 420px) {
        font-size: 1.2rem;
    }
`;

export const ContentCategory = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    border-radius: 12px;
    border: 2px solid ${({theme}) => theme.borderMainContentColor};
    position: relative;
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;

    &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -20px;
        width: 2px;
        height: 15px;
        background: ${({theme}) => theme.borderColor};
        transform: translateX(-50%);
        border-left: 2px dashed ${({theme}) => theme.borderColor};

        @media (max-width: 500px) {
            bottom: -20px;
            width: 1px;
            height: 15px;
        }
    }

    @media (max-width: 860px) {
        font-size: 1.4rem;
    }

    @media (max-width: 500px) {
        width: 110%;
        padding: 15px;
        font-size: 1.2rem;
    }

    @media (max-width: 420px) {
        font-size: 1rem;
    }
`;

export const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;
    max-width: 1100px;
    padding: 15px;
    border-radius: 12px;
    border: 2px solid ${({theme}) => theme.borderColor};
    position: relative;

    ${({hasBlogIcon}) => hasBlogIcon && `padding-bottom: 90px;`}
    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 500px) {
        padding: 10px;
        width: 110%;
    }

    @media (max-width: 420px) {
        ${({hasBlogIcon}) => hasBlogIcon && `padding-bottom: 60px;`}
    }
`;

export const DetailContent = styled.div`
    text-align: center;
    max-width: 1100px;
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 1.7;
    padding: 10px;
    white-space: pre-line;

    @media (max-width: 860px) {
        font-size: 1.3rem;
    }

    @media (max-width: 500px) {
        white-space: normal;
        font-size: 1.2rem;
    }

    @media (max-width: 420px) {
        font-size: 1rem;
    }
`;

export const BlogIconWrapper = styled.div`
    position: absolute;
    right: 20px;
    bottom: 20px;
    display: flex;
    align-items: center;
`;

export const TSBlogIconWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const BlogIcon = styled.a`
    display: flex;
    width: 150px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    color: ${({theme}) => theme.reverseTextColor};
    border-radius: 40px;
    font-size: 1.3rem;
    transition: background-color 0.3s, color 0.3s, border 0.3s ease-in-out;
    border: 1px solid ${({theme}) => theme.textColor};
    background-color: ${({theme}) => theme.textColor};

    &:hover {
        color: ${({theme}) => theme.textColor};
        background-color: ${({theme}) => theme.reverseTextColor};
    }

    svg {
        font-size: 1.5rem;
        @media (max-width: 860px) {
            font-size: 1.3rem;
        }

        @media (max-width: 500px) {
            font-size: 1.2rem;
        }

        @media (max-width: 420px) {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 860px) {
        padding: 10px 15px;
        font-size: 1.1rem;
    }

    @media (max-width: 500px) {
        font-size: 1rem;
    }

    @media (max-width: 420px) {
        width: 100px;
        padding: 7px 12px;
        font-size: 0.8rem;
    }
`;

export const TSBlogIcon = styled.a`
    display: flex;
    width: 250px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    color: ${({theme}) => theme.reverseTextColor};
    border-radius: 40px;
    font-size: 1.3rem;
    transition: background-color 0.3s, color 0.3s, border 0.3s ease-in-out;
    border: 1px solid ${({theme}) => theme.textColor};
    background-color: ${({theme}) => theme.textColor};

    &:hover {
        color: ${({theme}) => theme.textColor};
        background-color: ${({theme}) => theme.reverseTextColor};
    }

    svg {
        font-size: 1.5rem;
        @media (max-width: 860px) {
            font-size: 1.3rem;
        }
        @media (max-width: 500px) {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 860px) {
        padding: 10px 15px;
        font-size: 1.1rem;
    }

    @media (max-width: 500px) {
        padding: 6px 12px;
        font-size: 0.8rem;
        width: 150px;
    }
`;

export const StyledVelog = styled(SiVelog)`
    color: #20C997;
`;

export const ProjectTSGrid = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 40px;
    align-items: center;

    @media (max-width: 500px) {
        gap: 20px;
    }

    @media (max-width: 420px) {
        gap: 15px;
    }
`;

export const TSBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1400px;
    padding: 25px;
    border-radius: 15px;
    border: 3px solid ${({theme}) => theme.borderColor};
    align-items: center;
    cursor: pointer;
    user-select: none;
    transition: max-height 0.5s ease-in-out;

    max-height: ${({isOpen, hasBlogIcon}) =>
            isOpen ? "2000px" : hasBlogIcon ? "170px" : "100px"};
    overflow: hidden;

    @media (max-width: 500px) {
        width: 120%;
        max-height: ${({isOpen, hasBlogIcon, isDoubleLine}) =>
                isOpen ? "2000px" : hasBlogIcon ? isDoubleLine ? "150px" : "120px" : "70px"};
        padding: 20px;
    }
`;

export const StyledVisualArrowDown = styled(RiArrowDownDoubleLine)`
    font-size: 4rem;
    position: absolute;
    right: 20px;
    bottom: ${({hasBlogIcon}) => (hasBlogIcon ? "50px" : "15px")};
    transition: transform 0.3s ease-in-out;
    transform: ${({isOpen}) => (isOpen ? "rotate(180deg)" : "rotate(0)")};

    @media (max-width: 860px) {
        font-size: 3rem;
    }

    @media (max-width: 500px) {
        font-size: 2rem;
        right: -10px;
        bottom: ${({hasBlogIcon}) => (hasBlogIcon ? "20px" : "10px")};
    }
`;

export const TSHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
`;

export const TSHeaderBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
`;

export const TSMainContent = styled.div`
    font-size: 1.7rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    flex: 1;

    @media (max-width: 860px) {
        font-size: 1.5rem;
    }

    @media (max-width: 500px) {
        font-size: 1.2rem;
        margin-bottom: 15px;
    }

    @media (max-width: 420px) {
        font-size: 1rem;
        white-space: pre-line;
    }
`;

export const TSBasicBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    padding: 25px;
    border-radius: 15px;
    border: 3px solid ${({theme}) => theme.borderColor};
    align-items: center;
    font-size: 1.6rem;
    font-weight: bold;

    @media (max-width: 500px) {
        width: 105%;
        font-size: 1.2rem;
    }

    @media (max-width: 420px) {
        font-size: 1rem;
        padding: 20px;
    }
`;

export const ProblemContent = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 25px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: normal;
    white-space: pre-line;

    @media (max-width: 500px) {
        font-size: 1.2rem;
        width: 110%;
        padding: 15px;
        white-space: normal;
    }

    @media (max-width: 420px) {
        font-size: 0.9rem;
        width: 120%;
    }
`;

export const StyledArrowDown = styled(RiArrowDownWideLine)`
    font-size: 4rem;

    @media (max-width: 500px) {
        font-size: 2rem;
    }
`;

const glowAnimation = keyframes`
    0% {
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
    }
    50% {
        box-shadow: 0 0 10px rgba(215, 177, 251, 0.8);
    }
    100% {
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
    }
`;

export const SolvingContent = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px;
    padding: 25px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: normal;
    border-radius: 15px;
    border: 3px solid ${({theme}) => theme.borderColor};
    margin-top: 20px;
    background: transparent;
    animation: ${glowAnimation} 1.5s infinite alternate ease-in-out;
    white-space: pre-line;

    @media (max-width: 500px) {
        width: 105%;
        font-size: 1.2rem;
        padding: 20px;
        white-space: normal;
    }

    @media (max-width: 420px) {
        width: 105%;
        font-size: 0.9rem;
        padding: 15px;
    }
`;

export const FinalContent = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px;
    padding: 25px;
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
    border-radius: 15px;
    border: 3px solid ${({theme}) => theme.borderColor};
    margin-top: 20px;
    white-space: pre-line;

    @media (max-width: 860px) {
        font-size: 1.5rem;
    }

    @media (max-width: 500px) {
        width: 105%;
        font-size: 1.2rem;
        padding: 20px;
        white-space: normal;
    }

    @media (max-width: 420px) {
        width: 105%;
        font-size: 0.9rem;
        padding: 15px;
    }
`;

export const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;

    p {
        font-size: 1.6rem;
        margin-bottom: 20px;
        color: ${({theme}) => theme.textColor};

        @media (max-width: 860px) {
            font-size: 1rem;
        }
    }
`;

export const ProjectVideo = styled.video`
    width: 100%;
    max-width: 1200px;
    height: auto;
    border-radius: 12px;
`;

export const ImageGallery = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .image-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px 0;
        text-align: center;
        width: 100%;
        max-width: 1250px;
        padding: 0;
        border-radius: 15px;
        border: 1px solid ${({theme}) => theme.borderColor};

        p {
            margin: 30px 0;
            font-size: 1.5rem;
            color: ${({theme}) => theme.textColor};
            padding: 8px 16px;
            text-align: justify;
            text-justify: inter-word;

            @media (max-width: 860px) {
                font-size: 1.2rem;
                max-width: 90%;
            }

            @media (max-width: 500px) {
                font-size: 1rem;
                margin: 15px 0;
                max-width: 90%;
            }
        }

        .image-title {
            text-align: center;
            font-size: 1.6rem;
            display: block;
            margin: 0;

            @media (max-width: 860px) {
                font-size: 1.4rem;
            }

            @media (max-width: 500px) {
                font-size: 1.2rem;
            }
        }

        @media (max-width: 860px) {
            width: 110%;
        }

        @media (max-width: 500px) {
            width: 120%;
            margin: 10px 0;
        }
    }
`;

export const ProjectImage = styled.img`
    width: ${props => props.width || '100%'};
    max-width: 1200px;
    border-radius: 12px;
    margin-bottom: 40px;

    @media (max-width: 860px) {
        width: 90%;
    }

    @media (max-width: 500px) {
        width: 90%;
        margin-bottom: 10px;
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalBox = styled.div`
    background-color: ${({theme}) => theme.primaryBackground};
    color: ${({theme}) => theme.textColor};
    padding: 2rem;
    width: 600px;
    max-width: 90%;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    animation: fadeIn 0.3s ease-out;
    position: relative;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
        font-weight: bold;
        color: ${({theme}) => theme.linkHoverColor};

        @media (max-width: 768px) {
            font-size: 1.6rem;
        }

        @media (max-width: 500px) {
            font-size: 1.4rem;
        }

        @media (max-width: 420px) {
            font-size: 1.2rem;
        }
    }

    p {
        font-size: 1.3rem;
        line-height: 1.8;
        white-space: pre-line;

        @media (max-width: 768px) {
            font-size: 1.1rem;
        }

        @media (max-width: 500px) {
            font-size: 1rem;
        }

        @media (max-width: 420px) {
            font-size: 0.9rem;
        }
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: ${({theme}) => theme.buttonColor};
    color: ${({theme}) => theme.reverseButtonColor};
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background-color: ${({theme}) => theme.reverseColor};
        color: ${({theme}) => theme.reverseTextColor};
    }
`;
