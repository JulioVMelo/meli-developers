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
        background-color: #fff;
        font-family: 'Raleway', sans-serif;
        font-size: 1.4rem;
    }

    .content-centralized {
        max-width: 1144px;
        width: 100%;
        margin: 0 auto;
    }

    .btn {
      background-color: #0084fe;
      color: #fff;
      border: 0;
      font-size: 16px;
      border-radius: 4px;
      padding: 14px 32px;
      cursor: pointer;
      transition: background-color 0.2s ease-out;

      &:hover {
        background-color: #1e6dff;
      }
    }
`;

export default GlobalStyle;
