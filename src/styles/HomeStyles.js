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

    @media (max-width: 860px) {
        padding: 40px 20px;
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
    }
`;

export const LeftContent = styled.div`
    flex: 1;
    text-align: left;

    p {
        font-size: 1.5rem;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: italic;
        color: ${({theme}) => theme.textColor};

        @media (max-width: 1120px) {
            font-size: 1.4rem;
        }

        @media (max-width: 860px) {
            font-size: 1.1rem;
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

    @media (max-width: 1120px) {
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
    padding: 25px 100px;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-transform: uppercase;
    font-weight: 700;
    position: relative;
    overflow: hidden;
    outline: none;

    span {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        transition: transform 0.5s ease-in-out;
    }

    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 490%;
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
        transform: scale(1.2);
    }

    @media (max-width: 1120px) {
        padding: 20px 60px;
        font-size: 15px;
    }

    @media (max-width: 860px) {
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
        margin-top: 50px;
    }
`;

export const SocialButton = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 30px;
    color: ${({theme}) => theme.textColor};
    border-radius: 40px;
    font-size: 1.2rem;
    position: relative;
    transition: background-color 0.3s, color 0.3s, border 0.3s ease-in-out;
    border: 1px solid ${({theme}) => theme.textColor};

    &:hover {
        color: ${({theme}) => theme.reverseTextColor};
        background-color: ${({theme}) => theme.reverseColor};
    }

    svg {
        font-size: 1.6rem;

        @media (max-width: 860px) {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 860px) {
        font-size: 1rem;
        padding: 10px 20px;
    }
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
    }

    p {
        font-size: 1.2rem;
        line-height: 1.8;
        color: ${({theme}) => theme.textColor};
        text-align: center;
        max-width: 800px;
        margin: 10px auto;

        @media (max-width: 860px) {
            font-size: 1rem;
        }
    }

    @media (max-width: 860px) {
        padding: 30px 40px;
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
    width: 500px !important;
    height: 300px !important;
    background-image: url(${({$image}) => $image});
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    display: flex !important;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;

    @media (max-width: 860px) {
        width: 350px !important;
        height: 220px !important;
    }

    @media (max-width: 700px) {
        width: 250px !important;
        height: 150px !important;
    }
`;

export const CardContent = styled.div`
    width: 300px;
    height: 300px;
    background-color: ${({theme}) => theme.cardBackgroundColor};
    padding: 20px;
    border-radius: 0 20px 20px 0;

    h3 {
        font-size: 2rem;
        margin-top: 40px;
        margin-bottom: 15px;
        margin-left: 40px;
        color: ${({theme}) => theme.textColor};
        text-align: left;

        @media (max-width: 860px) {
            font-size: 1.8rem;
            margin-top: 10px;
            margin-left: 5px;
            margin-bottom: 0;
        }

        @media (max-width: 700px) {
            font-size: 1.6rem;
            margin-top: 10px;
            margin-left: 5px;
            margin-bottom: 0;
        }
    }

    p {

        font-size: 1.2rem;
        margin-bottom: 20px;
        margin-left: 40px;
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
            margin-left: 5px;
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
    margin-left: 40px;
    font-size: 1rem;
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
    padding: 11px 14px;
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
    margin-top: 20px;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
`
export const AboutMeCategory = styled.div`
    width: 600px;
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

    p {
        font-size: 1.4rem;
        color: ${({theme}) => theme.textColor};
        text-align: left;
        width: 60%;
        @media (max-width: 860px) {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 860px) {
        padding: 10px;
    }
`;

export const EducationList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    img {
        margin-top: 10px;
        margin-bottom: 10px;
        width: 90px;
        @media (max-width: 860px) {
            width: 60px;
        }
    }

    @media (max-width: 860px) {
        gap: 15px;
    }
`;

export const EducationInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    color: ${({theme}) => theme.textColor};

    p {
        margin: 0;
        font-size: 1.2rem;
        text-align: left;
        color: ${({theme}) => theme.textColor};
        width: 100%;
        @media (max-width: 860px) {
            font-size: 1rem;
        }
    }

    @media (max-width: 860px) {
        font-size: 1.1rem;
    }
`;

export const SkillsGrid = styled.div`
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;

    @media (max-width: 860px) {
        gap: 30px;
    }
`;

export const SkillCategory = styled.div`
    width: 600px;
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
`;

export const SkillList = styled.div`
    margin: auto 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

export const SkillItem = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
    margin-bottom: 15px;
    font-size: 1.4rem;
    color: ${({theme}) => theme.textColor};

    .skill-icon {
        margin-right: 10px;
        font-size: 2rem;
        @media (max-width: 860px) {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 860px) {
        font-size: 1.1rem;
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
    font-size: 1.5rem;
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
        font-size: 1.4rem;
        color: ${({theme}) => theme.textColor};
        @media (max-width: 860px) {
            font-size: 1.1rem;
        }
    }
`;
