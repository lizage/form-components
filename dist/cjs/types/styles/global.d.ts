/// <reference types="react" />
import { ThemeProps } from "./theme";
declare type GlobalThemeProps = {
    theme: ThemeProps;
};
declare const _default: import("react").ForwardRefExoticComponent<{
    ref?: import("react").Ref<import("react").Component<import("styled-components").ThemedGlobalStyledClassProps<GlobalThemeProps, import("styled-components").DefaultTheme>, any, any>> | undefined;
    suppressMultiMountWarning?: boolean | undefined;
    key?: import("react").Key | null | undefined;
} & {
    theme?: any;
}>;
export default _default;
