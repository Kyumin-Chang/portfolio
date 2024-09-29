import styled from 'styled-components';

export const PageWrapper = styled.div`
    background-color: ${({theme}) => theme.primaryBackground};
    color: ${({theme}) => theme.textColor};
    transition: all 0.3s ease;
`;

export const ProjectContainer = styled.div`
    padding: 60px 40px;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
`;

export const ProjectTitle = styled.h1`
    font-size: 3.5rem;
    margin-bottom: 20px;
    color: ${({theme}) => theme.textColor};
`;

export const ProjectDescription = styled.p`
    font-size: 1.5rem;
    margin-bottom: 40px;
    color: ${({theme}) => theme.textColor};
`;

export const ProjectDetails = styled.div`
    margin-top: 40px;
`;

export const Section = styled.div`
    padding: 60px 40px;
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
    font-size: 1.5rem;
    color: ${({theme}) => theme.textColor};
    justify-content: center;

    svg {
        margin-right: 10px;
        font-size: 2.2rem;
    }
`;

export const ArchitectureDiagram = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const ImageGallery = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ProjectImage = styled.img`
    width: 100%;
    max-width: 600px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;
