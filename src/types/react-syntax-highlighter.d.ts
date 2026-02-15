import type { CSSProperties, ComponentType } from "react";

declare module "react-syntax-highlighter" {
  type SyntaxHighlighterProps = {
    language?: string;
    style?: Record<string, CSSProperties>;
    showLineNumbers?: boolean;
    wrapLongLines?: boolean;
    customStyle?: CSSProperties;
    codeTagProps?: {
      style?: CSSProperties;
    };
    lineNumberStyle?: CSSProperties;
    children?: string;
  };

  export const Prism: ComponentType<SyntaxHighlighterProps>;
}

declare module "react-syntax-highlighter/dist/esm/styles/prism" {
  export const oneDark: Record<string, CSSProperties>;
}
