import { createGlobalStyle, withTheme } from "styled-components";
import { ThemeProps } from "./theme";

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
html,
* {
    direction: ${({ theme }: GlobalThemeProps) => theme.direction};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 10px;
}

input:focus,
select:focus,
button:focus,
textarea:focus {
    outline: none;
}

input::placeholder,
select::placeholder,
button::placeholder,
textarea::placeholder {
    color: #999;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
 `;

export default withTheme(globalStyle);
