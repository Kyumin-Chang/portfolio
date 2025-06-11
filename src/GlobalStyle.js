import {createGlobalStyle} from 'styled-components';
import './GlobalFont.css'

const GlobalStyle = createGlobalStyle`

    * {
        font-family: 'Pretendard-Regular', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Pretendard-Regular', sans-serif;
        line-height: 1.6;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
    }

    img {
        height: auto;
    }
`;

export default GlobalStyle;
