import styled from 'styled-components';

export const PageWrapper = styled.div`
    background-color: ${({theme}) => theme.primaryBackground};
    color: ${({theme}) => theme.textColor};
    transition: all 0.3s ease;

    @media (max-width: 860px) {
        padding: 10px 0;
    }
`;

export const MainSection = styled.section`
    background-color: ${({theme}) => theme.primaryBackground};
    color: ${({theme}) => theme.textColor};
    padding: 80px 60px;
    text-align: center;
    transition: all 0.3s ease;
    user-select: none;

    @media (max-width: 860px) {
        padding: 30px 20px;
        flex-direction: column;
    }
`;

export const UpperSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 20px 60px;

    @media (max-width: 860px) {
        flex-direction: column;
        margin: 20px 0;
    }
`;

export const LowerSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 70px;

    @media (max-width: 860px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin-bottom: 40px;
    }
`;

export const LeftContent = styled.div`
    flex: 1;
    text-align: left;

    p {
        font-size: 2.5rem;
        font-family: "NanumSquareRound", sans-serif;
        font-weight: 400;
        font-style: italic;
        color: ${({theme}) => theme.textColor};

        @media (max-width: 1825px) {
            font-size: 2rem;
        }

        @media (max-width: 1330px) {
            font-size: 1.5rem;
        }

        @media (max-width: 860px) {
            font-size: 1.5rem;
            text-align: center;
        }
    }
`;

export const RightContent = styled.div`
    flex: 1;
    text-align: right;

    @media (max-width: 860px) {
        text-align: center;
    }
`;

export const SplitTextLine = styled.div`
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 10rem;
    line-height: 1;
    color: ${({theme}) => theme.primaryTextColor};

    @media (max-width: 1330px) {
        font-size: 6.5rem;
    }

    @media (max-width: 860px) {
        font-size: 4rem;
    }
`;

export const StyledButton = styled.button`
    background-color: ${({theme}) => theme.reverseColor};
    color: ${({theme}) => theme.reverseTextColor};
    border: none;
    border-radius: 50px;
    padding: 35px 120px;
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: 600;
    position: relative;
    overflow: hidden;
    outline: none;

    span {
        position: relative;
        z-index: 1;
        display: flex;
        gap: 10px;
        align-items: center;
        transition: transform 0.5s ease-in-out;
    }

    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 550%;
        width: 140%;
        background: #46929c;
        transition: all .5s ease-in-out;
        transform: translateX(-90%) translateY(-25%) rotate(45deg);
        z-index: 0;
    }

    &:hover:after {
        transform: translateX(-9%) translateY(-25%) rotate(45deg);
    }

    &:hover span {
        transform: scale(1.1);
    }

    @media (max-width: 1330px) {
        padding: 25px 100px;
        font-size: 20px;
    }

    @media (max-width: 940px) {
        display: none;
    }
`;

export const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 100px;

    @media (max-width: 860px) {
        gap: 30px;
        margin-top: 40px;
    }
`;

export const SocialButton = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px 60px;
    color: ${({theme}) => theme.textColor};
    border-radius: 40px;
    font-size: 1.6rem;
    position: relative;
    transition: background-color 0.3s, color 0.3s, border 0.3s ease-in-out;
    border: 1px solid ${({theme}) => theme.textColor};

    &:hover {
        color: ${({theme}) => theme.reverseTextColor};
        background-color: ${({theme}) => theme.reverseColor};
    }

    svg {
        font-size: 2rem;

        @media (max-width: 860px) {
            font-size: 1.6rem;
        }

        @media (max-width: 420px) {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 860px) {
        font-size: 1.2rem;
        padding: 15px 30px;
    }

    @media (max-width: 420px) {
        font-size: 1rem;
        padding: 15px 30px;
    }
`;

export const MainProjectMobile = styled.div`
    display: none;
    @media (max-width: 940px) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        max-width: 340px;
        padding: 12px 85px;
        color: ${({theme}) => theme.textColor};
        border-radius: 40px;
        font-size: 1.4rem;
        transition: background-color 0.3s, color 0.3s, border 0.3s ease-in-out;
        border: 1px solid ${({theme}) => theme.textColor};

        &:hover {
            color: ${({theme}) => theme.reverseTextColor};
            background-color: ${({theme}) => theme.reverseColor};
        }
    }

    @media (max-width: 420px) {
        font-size: 1.2rem;
    }

    @media (max-width: 350px) {
        font-size: 1rem;
    }
`;

export const MobileButtonSection = styled.div`
    display: flex;
    justify-content: center;
    user-select: none;
`;

export const Section = styled.section`
    padding: 50px 40px;
    text-align: center;

    h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        color: ${({theme}) => theme.textColor};
        position: relative;
        display: inline-block;
        user-select: none;

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
            margin-bottom: 10px;
        }

        @media (max-width: 420px) {
            font-size: 1.3rem;
        }
    }

    p {
        max-width: 800px;

        @media (max-width: 860px) {
            font-size: 1rem;
        }
    }

    @media (max-width: 860px) {
        padding: 15px 20px;
    }
`;

export const SliderContainer = styled.div`
    position: relative;
    margin: 30px auto;
    max-width: 1600px;

    .slick-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .slick-center {
        transform: scale(1.0);
        opacity: 1;
    }

    .slick-slide:not(.slick-center) {
        transform: scale(1.0);
        opacity: 0.5;
    }

    .slick-list {
        overflow: hidden;
    }

    .slick-track {
        display: flex;
        align-items: center;
    }

    @media (max-width: 860px) {
        max-width: 100%;
        padding: 0 10px;
    }
`;

export const Card = styled.div`
    width: 600px !important;
    height: 350px !important;
    background-image: url(${({$image}) => $image});
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    display: flex !important;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
    user-select: none;

    @media (max-width: 860px) {
        width: 350px !important;
        height: 220px !important;
    }

    @media (max-width: 700px) {
        width: 300px !important;
        height: 180px !important;
    }
`;

export const CardContent = styled.div`
    width: 300px;
    height: 350px;
    background-color: ${({theme}) => theme.cardBackgroundColor};
    padding: 20px;
    border-radius: 0 20px 20px 0;

    h3 {
        font-size: 3rem;
        font-family: NanumSquareRound, sans-serif;
        margin-top: 40px;
        margin-bottom: 15px;
        margin-left: 30px;
        color: ${({theme}) => theme.textColor};
        text-align: left;

        @media (max-width: 860px) {
            font-size: 1.8rem;
            margin-top: 10px;
            margin-left: 5px;
            margin-bottom: 0;
        }

        @media (max-width: 700px) {
            font-size: 1.2rem;
            margin-top: 10px;
            margin-left: 0;
            margin-bottom: 0;
        }
    }

    p {

        font-size: 1.3rem;
        margin-bottom: 20px;
        margin-left: 30px;
        color: ${({theme}) => theme.textColor};
        text-align: left;

        @media (max-width: 860px) {
            font-size: 1rem;
            margin-bottom: 10px;
            margin-left: 5px;
        }

        @media (max-width: 700px) {
            font-size: 0.8rem;
            margin-bottom: 5px;
            margin-left: 0;
        }
    }

    @media (max-width: 860px) {
        width: 220px;
        height: 220px;
    }

    @media (max-width: 700px) {
        width: 180px;
        height: 180px;
    }

`;

export const ReadMore = styled.div`
    display: flex;
    gap: 10px;
`;

export const ReadMoreButton = styled.button`
    background-color: ${({theme}) => theme.buttonColor};
    color: ${({theme}) => theme.reverseTextColor};
    border: none;
    padding: 15px 30px;
    border-radius: 30px;
    margin-left: 30px;
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: ${({theme}) => theme.reverseButtonColor};
        color: ${({theme}) => theme.textColor};;
    }

    @media (max-width: 860px) {
        padding: 12px 25px;
        margin-left: 5px;
        font-size: 1rem;
    }

    @media (max-width: 700px) {
        padding: 8px 15px;
        margin-left: 5px;
        font-size: 0.8rem;
    }
`;

export const ReadMoreArrowButton = styled.button`
    background-color: ${({theme}) => theme.buttonColor};
    color: ${({theme}) => theme.reverseTextColor};
    border: none;
    justify-content: center;
    padding: 11px 18px;
    border-radius: 30px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: ${({theme}) => theme.reverseButtonColor};
        color: ${({theme}) => theme.textColor};;
    }

    @media (max-width: 860px) {
        display: none;
    }
`;

export const AboutMeGrid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1300px;
    margin: 20px auto;
    padding: 30px;
    border-radius: 15px;
    border: 1px solid ${({theme}) => theme.borderColor};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    background-color: ${({theme}) => theme.skillGridColor};

    @media (max-width: 860px) {
        padding: 20px;
    }

    @media (max-width: 430px) {
        padding: 10px;
    }
`;

export const AboutMeTopCategory = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 20px;

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

export const InfoBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    border-radius: 12px;
    border: 1px solid ${({theme}) => theme.borderColor};
    background-color: ${({theme}) => theme.inboxColor};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;

    p {
        font-size: 1.7rem;
        font-weight: 600;
        color: ${({theme}) => theme.textColor};
        margin: 8px 0;
    }

    @media (max-width: 1130px) {
        p {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 860px) {
        p {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 430px) {
        padding: 20px;
        p {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 390px) {
        padding: 20px;
        p {
            font-size: 1rem;
        }
    }
`;

export const EducationBox = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    border-radius: 12px;
    border: 1px solid ${({theme}) => theme.borderColor};
    background-color: ${({theme}) => theme.inboxColor};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    gap: 20px;
`;

export const EducationLogo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;

    @media (max-width: 1130px) {
        width: 80px;
        height: 80px;
    }

    @media (max-width: 860px) {
        width: 60px;
        height: 60px;
    }

    @media (max-width: 500px) {
        width: 50px;
        height: 50px;
    }
`;

export const EducationDetails = styled.div`
    text-align: left;

    h3 {
        font-size: 1.6rem;
        font-weight: bold;
        margin-bottom: 5px;
        color: ${({theme}) => theme.textColor};
    }

    p {
        font-size: 1.2rem;
        color: ${({theme}) => theme.textColor};
        margin: 2px 0;
    }

    @media (max-width: 1130px) {
        h3 {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 860px) {
        h3 {
            font-size: 1.2rem;
        }

        p {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 420px) {
        h3 {
            font-size: 1rem;
        }

        p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 390px) {
        h3 {
            font-size: 1rem;
        }

        p {
            font-size: 0.9rem;
        }
    }
`;

export const AboutMeBottomBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
`;

export const StrengthList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 1200px;
`;

export const StrengthItem = styled.li`
    font-size: 1.5rem;
    color: ${({theme}) => theme.textColor};
    background-color: ${({theme}) => theme.inboxColor};
    border: 1px solid ${({theme}) => theme.borderColor};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
    border-radius: 12px;
    padding: 30px;
    width: 100%;
    text-align: center;
    position: relative;
    line-height: 1.7;
    overflow: hidden;

    transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
        background-color: ${({theme}) => theme.backgroundHoverColor};
        transform: scale(1.02);
    }

    strong {
        position: relative;
        color: ${({theme}) => theme.textColor};
        font-size: 1.6rem;
        font-weight: bold;
    }

    strong::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 0;
        height: 3px;
        background: ${({theme}) => theme.highlightColor};
        transition: width 0.4s ease-in-out;
    }

    &:hover strong::after {
        width: 100%;
    }

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 860px) {
        font-size: 1.3rem;

        strong {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 420px) {
        font-size: 1rem;

        strong {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 390px) {
        font-size: 0.9rem;

        strong {
            font-size: 1rem;
        }
    }
`;

export const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    justify-content: center;
    align-items: start;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;

    @media (max-width: 960px) {
        grid-template-columns: 1fr;
        justify-content: center;
    }
`;

export const ProjectCard = styled.div`
    position: relative;
    width: 100%;
    max-width: 550px;
    height: 335px;
    display: flex;
    flex-direction: column;

    background-image: url(${({$image}) => $image});
    background-size: cover;
    background-position: center;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    margin: 0 auto;
`;

export const ProjectOverlay = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;

    background-color: ${({theme}) => theme.cardBackgroundColor};
`;

export const ProjectTitle = styled.h3`
    font-size: 3rem;
    font-weight: 800;
    color: ${({theme}) => theme.textColor};
    margin-bottom: 12px;
    text-align: left;
`;

export const ProjectDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    text-align: left;

    p {
        font-size: 1.4rem;
        color: ${({theme}) => theme.textColor};
        line-height: 1.4;
        font-weight: 500;
        margin: 0;
    }
`;

export const FixedTagList = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.cardBackgroundColor};
    padding: 15px 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const Tag = styled.span`
    background-color: ${({color}) => `${color}66`};
    color: ${({theme}) => theme.textColor};
    padding: 6px 14px;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 500;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid ${({color}) => `${color}aa`};
    box-shadow: 0 4px 12px ${({color}) => `${color}44`};
`;

export const SkillsContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;;
`;

export const SkillLegend = styled.div`
    right: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.2rem;
    color: ${({theme}) => theme.textColor};
    border-radius: 8px;
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: flex-end;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    div {
        width: 40px;
        height: 10px;
        border-radius: 4px;
    }

    @media (max-width: 860px) {
        font-size: 1rem;
        margin-top: 10px;
        margin-bottom: -10px;
    }

    @media (max-width: 600px) {
        font-size: 0.9rem;
    }

    @media (max-width: 430px) {
        font-size: 0.8rem;
        width: 100%;
    }
`;


export const SkillsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin-top: 20px;

    @media (max-width: 860px) {
        gap: 30px;
    }
`;

export const SkillCategory = styled.div`
    width: 630px;
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

        @media (max-width: 430px) {
            font-size: 1.2rem;
        }
    }
`;

export const SkillList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;

    @media (max-width: 430px) {
        gap: 5px;
    }
`;

export const SkillBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    max-width: 100%;
    padding: 15px;
    font-size: 1.4rem;
    color: ${({theme}) => theme.textColor};
    text-align: center;
    border-radius: 10px;
    border: 1px solid ${({theme}) => theme.borderColor};
    background-color: ${({theme}) => theme.inboxColor};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .skill-icon {
        font-size: 3rem;
        margin-bottom: 8px;
        @media (max-width: 860px) {
            font-size: 2rem;
        }
    }

    @media (max-width: 860px) {
        font-size: 1.2rem;
    }

    @media (max-width: 500px) {
        width: 140px;
        font-size: 1rem;
    }

    @media (max-width: 370px) {
        width: 105px;
        font-size: 0.8rem;
    }

    @media (max-width: 300px) {
        width: 100%;
        flex-direction: column;
        text-align: center;
    }
`;

export const ProgressBar = styled.div`
    width: 100%;
    height: 12px;
    border-radius: 6px;
    background-color: ${({theme}) => theme.borderColor};
    margin-top: 10px;
    overflow: hidden;

    div {
        height: 100%;
        border-radius: 6px;
        transition: width 0.4s ease-in-out;
        background-color: ${({color}) => color};
    }
`;

export const Arrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    height: 350px;
    display: flex !important;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.textColor};
    cursor: pointer;
    z-index: 2;
    font-size: 50px;
    line-height: 60px;

    @media (max-width: 860px) {
        width: 100px;
        height: 150px;
        font-size: 25px;
        line-height: 30px;
    }
`;

export const PrevArrow = styled(Arrow)`
    left: 0;
    text-align: right;
`;

export const NextArrow = styled(Arrow)`
    right: 0;
    text-align: left;
`;

export const ContactDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    gap: 20px;
`;

export const ContactItem = styled.div`
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.textColor};
    gap: 15px;

    .contact-icon {
        font-size: 2rem;
        color: ${({theme}) => theme.linkHoverColor};

        @media (max-width: 860px) {
            font-size: 1.5rem;
        }
    }

    span {
        font-size: 1.5rem;
        color: ${({theme}) => theme.textColor};
        @media (max-width: 860px) {
            font-size: 1.1rem;
        }
    }
`;
