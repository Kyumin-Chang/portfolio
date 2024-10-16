import styled from 'styled-components';

export const PageWrapper = styled.div`
    background-color: ${({theme}) => theme.primaryBackground};
    color: ${({theme}) => theme.textColor};
    transition: all 0.3s ease;
`;

export const ProjectContainer = styled.div`
    padding: 60px 40px;
    text-align: center;
    max-width: 1300px;
    margin: 0 auto;
`;

export const ProjectTitle = styled.h1`
    font-size: 5rem;
    margin-bottom: 20px;
    color: ${({theme}) => theme.textColor};

    @media (max-width: 860px) {
        font-size: 3rem;
    }
`;

export const ProjectMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.2rem;
    color: ${({theme}) => theme.textColor};

    p {
        font-size: 1.2rem;
        color: ${({theme}) => theme.textColor};
        margin-top: 10px;

        @media (max-width: 860px) {
            font-size: 1rem;
        }
    }

    @media (max-width: 860px) {
        font-size: 1rem;
    }
`;

export const ProjectSlide = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

export const MainContent = styled.div`
    position: relative;
    z-index: 2;
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
    width: 150px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 15px 25px;
    color: ${({theme}) => theme.textColor};
    border-radius: 40px;
    font-size: 1.2rem;
    transition: background-color 0.3s, color 0.3s, border 0.3s ease-in-out;
    border: 1px solid ${({theme}) => theme.textColor};

    &:hover {
        color: ${({theme}) => theme.reverseTextColor};
        background-color: ${({theme}) => theme.reverseColor};
    }

    svg {
        font-size: 1.7rem;
        @media (max-width: 860px) {
            font-size: 1.3rem;
        }
    }

    @media (max-width: 860px) {
        padding: 10px 15px;
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
    border-radius: 10px;
    text-align: left;

    p {
        font-size: 1.2rem;
        color: ${({theme}) => theme.textColor};
        margin-top: 0;
        margin-bottom: 10px;
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
        font-size: 1.2rem;
        line-height: 1.8;
        margin-bottom: 8px;
        color: ${({theme}) => theme.textColor};
    }

    span {
        color: #FF9800;
        font-weight: 500;
    }
`;

export const ProjectDetails = styled.div`
    margin-top: 20px;
`;

export const Section = styled.div`
    padding: 60px 40px;
    text-align: center;

    h2 {
        font-size: 1.8rem;
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
            font-size: 1.5rem;
        }
    }

    p {
        font-size: 1.2rem;
        line-height: 1.8;
        color: ${({theme}) => theme.textColor};
        text-align: center;
        max-width: 900px;
        margin: 10px auto;
    }

    @media (max-width: 860px) {
        padding: 40px 10px;
    }
`;

export const TechnologyList = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
`;

export const TechnologyItem = styled.div`
    display: flex;
    flex: 1 1 30%;
    align-items: center;
    font-size: 1.4rem;
    color: ${({theme}) => theme.textColor};
    justify-content: center;

    svg {
        margin-right: 10px;
        font-size: 2rem;

        @media (max-width: 860px) {
            font-size: 1.6rem;
        }
    }

    @media (max-width: 860px) {
        font-size: 1.2rem;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const ProjectContentGrid = styled.div`
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
`;

export const ContentCategory = styled.div`
    width: 1000px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid ${({theme}) => theme.borderColor};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    background-color: ${({theme}) => theme.skillGridColor};

    h3 {
        font-size: 1.6rem;
        margin-bottom: 15px;
        color: ${({theme}) => theme.textColor};

        @media (max-width: 860px) {
            font-size: 1.4rem;
        }
    }

    h4 {
        font-size: 1.4rem;
        margin-bottom: 10px;

        @media (max-width: 860px) {
            font-size: 1.2rem;
        }
    }

    ul {
        text-align: left;
        padding-left: 40px;
        padding-right: 40px;
        margin-top: 10px;

        li {
            font-size: 1.2rem;
            line-height: 1.8;
            margin-bottom: 12px;
            position: relative;
            padding-left: 25px;

            &:before {
                content: "*";
                position: absolute;
                left: 0;
                top: 2px;
                font-size: 1.6rem;
            }

            @media (max-width: 860px) {
                font-size: 1rem;
            }
        }

        @media (max-width: 860px) {
            padding-right: 10px;
            padding-left: 10px;
        }

        ul li {
            padding-left: 20px;

            &:before {
                content: "✔";
                font-size: 1.2rem;
            }
        }
    }
}
`;

export const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0;

    h3 {
        font-size: 1.6rem;
        margin-bottom: 20px;
        color: ${({theme}) => theme.textColor};

        @media (max-width: 860px) {
            font-size: 1.4rem;
        }
    }
`;

export const ProjectVideo = styled.video`
    width: 80%;
    max-width: 900px;
    height: auto;
    border-radius: 12px;
`;

export const ImageGallery = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    h3 {
        font-size: 1.6rem;
        margin-bottom: 20px;
        color: ${({theme}) => theme.textColor};

        @media (max-width: 860px) {
            font-size: 1.4rem;
        }
    }

    .image-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px 0;
        text-align: center;
        width: 90%;
        max-width: 900px;
        padding: 0;
        border-radius: 15px;
        border: 1px solid ${({theme}) => theme.borderColor};

        p {
            margin: 30px 0;
            font-size: 1.2rem;
            color: ${({theme}) => theme.textColor};
            padding: 8px 16px;
            max-width: 80%;
            text-align: justify;
            text-justify: inter-word;

            @media (max-width: 860px) {
                font-size: 1rem;
                max-width: 90%;
            }
        }

        .image-title {
            text-align: center;
            display: block;
            margin: 0;
        }

        @media (max-width: 860px) {
            width: 110%;
        }
    }
`;

export const ProjectImage = styled.img`
    width: ${props => props.width || '100%'};
    max-width: 800px;
    border-radius: 12px;
    margin-bottom: 40px;

    @media (max-width: 860px) {
        width: 90%;
    }
`;
