import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    cardBgColor: string;
  }
}

// Create a declarations file
// TypeScript definitions for styled-components can be extended by using declaration merging since version v4.1.4 of the definitions.
// So the first step is creating a declarations file. Let's name it styled.d.ts for example.
// DefaultTheme is being used as an interface of props.theme out of the box.
// By default the interface DefaultTheme is empty so that's why we need to extend it.
