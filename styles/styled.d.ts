import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            sign: string;
            lightSign: string;
            grey: string;
            midGrey: string;
            lightGrey: string;
            black: string;
        };
        devices : {
            mobileS:string;
            mobileM:string;
            mobileL:string;
            tablet: string;
            laptop: string;
            laptopL:string;
            desktop:string;
        };
        displayFlex: (i?: string, e?: string, x?: string) => string;
        lineEllipsis: (i?: string) => string;
        titleEllipsis: (i?: string) => string;
    }
}