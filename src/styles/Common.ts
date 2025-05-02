import {Theme} from "./Theme.ts";

type FontPropsType = {
    family?: string;
    weight?: number;
    color?: string;
    lineHeight?: number | string;
    Fmin?: number;
    Fmax?: number;
}

export const font = ({
                         family = "Epilogue",
                         weight = 400,
                         color = Theme.colors.accentBg,
                         lineHeight = 1.2,
                         Fmin = 16,
                         Fmax = 20
                     }: FontPropsType = {}) => `
  font-family: ${family};
  font-weight: ${weight};
  color: ${color};
  line-height: ${lineHeight};
  font-size: clamp(${Fmin}px, calc(${Fmin}px + (${Fmax} - ${Fmin}) * ((100vw - 360px) / (1440 - 360))), ${Fmax}px);
`;