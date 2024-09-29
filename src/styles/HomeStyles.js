import styled from 'styled-components';

export const PageWrapper = styled.div`
    background-color: ${({theme}) => theme.primaryBackground};
    color: ${({theme}) => theme.textColor};
    transition: all 0.3s ease;
`;

export const MainSection = styled.section`
    background-color: ${({theme}) => theme.primaryBackground};
    color: ${({theme}) => theme.textColor};
    padding: 80px 60px;
    text-align: center;
    transition: all 0.3s ease;
`;

export const UpperSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 20px 60px;
`;

export const LowerSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 70px;
`;

export const LeftContent = styled.div`
    flex: 1;
    text-align: left;

    p {
        font-size: 2rem;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: italic;
        color: ${({theme}) => theme.textColor};
    }
`;

export const RightContent = styled.div`
    flex: 1;
    text-align: right;
`;

export const SplitTextLine = styled.div`
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 10rem;
    line-height: 1;
    color: ${({theme}) => theme.primaryTextColor};
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
`;

export const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 100px;
`;

export const SocialButton = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 30px;
    color: ${({theme}) => theme.textColor};
    border-radius: 40px;
    font-size: 1.4rem;
    position: relative;
    transition: background-color 0.3s, color 0.3s, border 0.3s ease-in-out;
    border: 1px solid ${({theme}) => theme.textColor};

    &:hover {
        color: ${({theme}) => theme.reverseTextColor};
        background-color: ${({theme}) => theme.reverseColor};
    }

    svg {
        font-size: 1.7rem;
    }
`;

export const Section = styled.section`
    padding: 50px 40px;
    text-align: center;

    h2 {
        font-size: 2.5rem;
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
    }

    p {
        font-size: 1.2rem;
        line-height: 1.8;
        color: ${({theme}) => theme.textColor};
        text-align: center;
        max-width: 800px;
        margin: 10px auto;
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
`;

export const CardContent = styled.div`
    width: 350px;
    height: 350px;
    background-color: ${({theme}) => theme.cardBackgroundColor};
    padding: 20px;
    border-radius: 0 20px 20px 0;

    h3 {
        font-size: 2.5rem;
        margin-top: 40px;
        margin-bottom: 15px;
        margin-left: 40px;
        color: ${({theme}) => theme.textColor};
        text-align: left;
    }

    p {

        font-size: 1.5rem;
        margin-bottom: 20px;
        margin-left: 40px;
        color: ${({theme}) => theme.textColor};
        text-align: left;
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
    padding: 15px 40px;
    border-radius: 30px;
    margin-left: 40px;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: ${({theme}) => theme.reverseButtonColor};
        color: ${({theme}) => theme.textColor};;
    }
`;

export const ReadMoreArrowButton = styled.button`
    background-color: ${({theme}) => theme.buttonColor};
    color: ${({theme}) => theme.reverseTextColor};
    border: none;
    padding: 15px 20px;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: ${({theme}) => theme.reverseButtonColor};
        color: ${({theme}) => theme.textColor};;
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
        font-size: 2rem;
        margin-bottom: 15px;
        color: ${({theme}) => theme.textColor};
    }

    p {
        font-size: 1.4rem;
        color: ${({theme}) => theme.textColor};
        text-align: left;
        width: 60%;
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
    }
`;

export const SkillsGrid = styled.div`
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
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
        font-size: 2rem;
        margin-bottom: 15px;
        color: ${({theme}) => theme.textColor};
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
    font-size: 1.5rem;
    color: ${({theme}) => theme.textColor};

    .skill-icon {
        margin-right: 10px;
        font-size: 2.2rem;
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
    }

    span {
        font-size: 1.5rem;
        color: ${({theme}) => theme.textColor};
    }
`;
