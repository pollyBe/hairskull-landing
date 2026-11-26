import localFont from "next/font/local";

/**
 * Self-hosted fonts from Fontsource (npm), instead of next/font/google:
 * builds don't depend on fonts.googleapis.com, whose responses vary by
 * network and sometimes contain URLs Turbopack can't handle.
 *
 * Each typeface is split into latin + cyrillic families with unicode-range,
 * combined into one stack in globals.css, so the browser downloads only
 * the subsets a page actually uses.
 *
 * The latin family has no metric-adjusted fallback on purpose: a local
 * fallback face listed before the cyrillic family would render all Cyrillic
 * text in the system font. The cyrillic family (most of the site's text)
 * keeps next/font's size-adjusted fallback to limit layout shift.
 *
 * next/font is analyzed statically: arguments must be literals,
 * so paths and unicode ranges are written out in full.
 */

export const cormorantLatin = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-300-italic.woff2",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-cormorant-latin",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD",
    },
  ],
  adjustFontFallback: false,
});

export const cormorantCyrillic = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-cyrillic-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-cyrillic-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-cyrillic-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-cyrillic-300-italic.woff2",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-cormorant-cyrillic",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116",
    },
  ],
  adjustFontFallback: "Times New Roman",
});

export const caveatLatin = localFont({
  src: "../../node_modules/@fontsource-variable/caveat/files/caveat-latin-wght-normal.woff2",
  weight: "400 700",
  variable: "--font-caveat-latin",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD",
    },
  ],
  adjustFontFallback: false,
});

export const caveatCyrillic = localFont({
  src: "../../node_modules/@fontsource-variable/caveat/files/caveat-cyrillic-wght-normal.woff2",
  weight: "400 700",
  variable: "--font-caveat-cyrillic",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116",
    },
  ],
  adjustFontFallback: "Arial",
});

export const plexMonoLatin = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-plex-mono-latin",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD",
    },
  ],
  adjustFontFallback: false,
});

export const plexMonoCyrillic = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-cyrillic-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-cyrillic-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-plex-mono-cyrillic",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116",
    },
  ],
  adjustFontFallback: "Arial",
});

export const interLatin = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-inter-latin",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD",
    },
  ],
  adjustFontFallback: false,
});

export const interCyrillic = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-cyrillic-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-inter-cyrillic",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116",
    },
  ],
  adjustFontFallback: "Arial",
});

export const fontVariables = [
  cormorantLatin,
  cormorantCyrillic,
  caveatLatin,
  caveatCyrillic,
  plexMonoLatin,
  plexMonoCyrillic,
  interLatin,
  interCyrillic,
]
  .map((font) => font.variable)
  .join(" ");
