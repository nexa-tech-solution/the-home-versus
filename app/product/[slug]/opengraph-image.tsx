import { ImageResponse } from "next/og";
import { PRODUCT_DATA } from "@/lib/constants";

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
  const product = PRODUCT_DATA[slug];

  if (!product) {
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
          Product Not Found
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
          background: "linear-gradient(135deg, #f8f4ed 0%, #efe3d1 50%, #ddd1bf 100%)",
          color: "#2f2923",
          padding: "48px",
          fontFamily: "Georgia, serif",
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
              {product.category}
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

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                display: "flex",
                fontSize: 60,
                lineHeight: 1.05,
                fontWeight: 700,
                maxWidth: 980,
              }}
            >
              {product.name}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                lineHeight: 1.35,
                color: "#5c4c3f",
                maxWidth: 920,
              }}
            >
              {product.highlight}
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
                gap: 18,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  background: "rgba(255,255,255,0.82)",
                  padding: "14px 18px",
                  borderRadius: 20,
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                {product.price}
              </div>
              <div
                style={{
                  display: "flex",
                  background: "rgba(47,41,35,0.92)",
                  color: "#fff",
                  padding: "14px 18px",
                  borderRadius: 20,
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                {product.rating} stars
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 20,
                fontWeight: 700,
                color: "#6b5848",
              }}
            >
              Product Review
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
