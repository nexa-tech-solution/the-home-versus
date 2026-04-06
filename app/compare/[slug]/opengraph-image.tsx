import { ImageResponse } from "next/og";
import { ARTICLE_DATA } from "@/lib/constants";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLE_DATA[slug];

  if (!article) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #f5efe6 0%, #e6dccf 100%)",
            color: "#2f2923",
            fontSize: 52,
            fontWeight: 700,
          }}
        >
          Comparison Not Found
        </div>
      ),
      size,
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #f5efe6 0%, #e6dccf 48%, #d7c2a3 100%)",
          color: "#2f2923",
          fontFamily: "Georgia, serif",
          padding: "48px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 24,
            border: "2px solid rgba(47, 41, 35, 0.08)",
            borderRadius: 28,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                background: "#b4642a",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: 999,
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              {article.category}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              TheHomeVersus
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                display: "flex",
                fontSize: 58,
                lineHeight: 1.08,
                fontWeight: 700,
                maxWidth: 980,
              }}
            >
              {article.title}
            </div>
            <div
              style={{
                display: "flex",
                gap: 18,
                alignItems: "center",
                fontSize: 28,
                color: "#6b5848",
                fontWeight: 600,
              }}
            >
              <div style={{ display: "flex" }}>{article.productA.name}</div>
              <div
                style={{
                  display: "flex",
                  background: "#2f2923",
                  color: "#fff",
                  padding: "8px 14px",
                  borderRadius: 999,
                  fontSize: 22,
                  fontWeight: 800,
                }}
              >
                VS
              </div>
              <div style={{ display: "flex" }}>{article.productB.name}</div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                maxWidth: 830,
                fontSize: 24,
                lineHeight: 1.35,
                color: "#5c4c3f",
              }}
            >
              {article.snippet}
            </div>
            <div
              style={{
                display: "flex",
                background: "rgba(255,255,255,0.78)",
                padding: "14px 18px",
                borderRadius: 20,
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              {article.readTime}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
