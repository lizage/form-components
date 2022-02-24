export interface ThemeProps {
  fontColor: string;
  borderColor: string;
  buttonFontColor: string;
  buttonIconColor: string;
  brightColor: string;
  delicateColor: string;
  focusedColor: string;
  focusedFontColor: string;
  fontFamily: string;
  direction: string;
  fontSize: string;
  borderRadius: string;
  dropListZIndex: number;
}

export const defaultTheme: ThemeProps = {
  fontColor: "#666",
  borderColor: "#ccc",
  buttonFontColor: "#999",
  buttonIconColor: "#bfbfbf",
  brightColor: "#2c89ca",
  delicateColor: "#2c89ca1a",
  focusedColor: "#fcaf66b3",
  focusedFontColor: "#fff",
  fontFamily: "Arial, sans-serif",
  direction: "rtl",
  fontSize: "1.6rem",
  borderRadius: "0.5rem",
  dropListZIndex: 1,
};
