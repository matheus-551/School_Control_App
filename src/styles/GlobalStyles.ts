import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    html {
        background: var(--primary);
    }

    :root {
        --primary: #f2f2f2;
        --secondary: #161b1d;
        --white: #fff;
        --gray-500: #f1f1f1;
        --gray-300: #ddd;
        --dark-gray-200: #292427;
        --dark-gray-100: #1b181a;
        --black: #000;
        --red-300: #E32636;
        --blue-400: #80abfe;
        --green-300: #04aa6d;
    }
`