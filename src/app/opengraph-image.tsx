import { ImageResponse } from "next/og";

// Latin-only text: the default OG font has no Cyrillic glyphs
export const alt = "HAIRSKULL — Alexey Platun, hair stylist & educator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#050505",
        color: "#edeae4",
        borderBottom: "8px solid #c9a84c",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <div style={{ width: 64, height: 2, background: "#c9a84c" }} />
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#c9a84c" }}>
          MINSK
        </div>
      </div>
      <div
        style={{
          marginTop: 40,
          fontSize: 132,
          letterSpacing: 16,
          color: "#c9a84c",
        }}
      >
        HAIRSKULL
      </div>
      <div style={{ marginTop: 24, fontSize: 40, color: "#bdb8b0" }}>
        Alexey Platun · Hair stylist & educator
      </div>
    </div>,
    size,
  );
}
