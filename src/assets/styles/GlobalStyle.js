import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }

    a {
        text-decoration:none;
        color:inherit;

      &:hover {
        text-decoration: none;
        }
    }
    
    ul {
        list-style:none;
    }

    img {
        max-width: 100%;
    }
    
    body {
        background-color: #FFF159;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.4rem;
    }
`;

export default GlobalStyle;
