export interface Theme {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
    border: string;
  };
}

export const themes: Theme[] = [
  {
    id: "default",
    name: "Ocean Blue",
    colors: {
      primary: "222.2 47.4% 11.2%",
      secondary: "210 40% 96.1%",
      accent: "210 40% 96.1%",
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
      muted: "210 40% 96.1%",
      border: "214.3 31.8% 91.4%",
    },
  },
  {
    id: "sunset",
    name: "Sunset Orange",
    colors: {
      primary: "24 95% 53%",
      secondary: "48 96% 89%",
      accent: "48 96% 89%",
      background: "0 0% 100%",
      foreground: "20 14.3% 4.1%",
      muted: "48 96% 89%",
      border: "48 96% 89%",
    },
  },
  {
    id: "forest",
    name: "Forest Green",
    colors: {
      primary: "142 76% 36%",
      secondary: "138 76% 97%",
      accent: "138 76% 97%",
      background: "0 0% 100%",
      foreground: "240 10% 3.9%",
      muted: "138 76% 97%",
      border: "138 76% 97%",
    },
  },
  {
    id: "purple",
    name: "Royal Purple",
    colors: {
      primary: "263 70% 50%",
      secondary: "270 95% 98%",
      accent: "270 95% 98%",
      background: "0 0% 100%",
      foreground: "224 71.4% 4.1%",
      muted: "270 95% 98%",
      border: "270 95% 98%",
    },
  },
  {
    id: "rose",
    name: "Rose Pink",
    colors: {
      primary: "346 77% 49%",
      secondary: "355 100% 97%",
      accent: "355 100% 97%",
      background: "0 0% 100%",
      foreground: "353 2.3% 8.7%",
      muted: "355 100% 97%",
      border: "355 100% 97%",
    },
  },
  {
    id: "coral",
    name: "Coral Blush",
    colors: {
      primary: "16 100% 66%",
      secondary: "13 100% 96%",
      accent: "13 100% 96%",
      background: "0 0% 100%",
      foreground: "20 14.3% 4.1%",
      muted: "13 100% 96%",
      border: "13 100% 96%",
    },
  },
  {
    id: "lavender",
    name: "Lavender Dream",
    colors: {
      primary: "280 100% 70%",
      secondary: "270 100% 98%",
      accent: "270 100% 98%",
      background: "0 0% 100%",
      foreground: "224 71.4% 4.1%",
      muted: "270 100% 98%",
      border: "270 100% 98%",
    },
  },
  {
    id: "mint",
    name: "Mint Fresh",
    colors: {
      primary: "160 84% 39%",
      secondary: "152 81% 96%",
      accent: "152 81% 96%",
      background: "0 0% 100%",
      foreground: "240 10% 3.9%",
      muted: "152 81% 96%",
      border: "152 81% 96%",
    },
  },
  {
    id: "peach",
    name: "Peach Glow",
    colors: {
      primary: "25 95% 53%",
      secondary: "24 100% 97%",
      accent: "24 100% 97%",
      background: "0 0% 100%",
      foreground: "20 14.3% 4.1%",
      muted: "24 100% 97%",
      border: "24 100% 97%",
    },
  },
  {
    id: "blush",
    name: "Blush Rose",
    colors: {
      primary: "350 89% 60%",
      secondary: "355 100% 97%",
      accent: "355 100% 97%",
      background: "0 0% 100%",
      foreground: "353 2.3% 8.7%",
      muted: "355 100% 97%",
      border: "355 100% 97%",
    },
  },
];
