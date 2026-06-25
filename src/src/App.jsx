import { useState, useRef, useEffect } from "react";
import { Megaphone, Upload, Download, Image as ImageIcon } from "lucide-react";

const C = {
  bg: "#07090F",
  card: "#121826",
  cardBorder: "#233047",
  chipBg: "#15233A",
  accent: "#2F8FFF",
  accentGlow: "#7FD8E8",
  textHeading: "#F4F7FB",
  textBody: "#D7DEEA",
  textMuted: "#5C7090",
  white: "#FFFFFF",
};

export default function Hector365() {
  const [imgSrc, setImgSrc] = useState(null);
  const [headline, setHeadline] = useState("बड़ा ऑफर!");
  const [subtext, setSubtext] = useState("आज ही दुकान पर आएं");
  const canvasRef = useRef(null);
  const fileRef = useRef(null);

  const onFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImgSrc(reader.result);
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!imgSrc || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      const W = 800, H = 800;
      canvas.width = W;
      canvas.height = H;
      const scale = Math.max(W / img.width, H / img.height);
      const w = img.width * scale, h = img.height * scale;
      ctx.drawImage(img, (W - w) / 2, (H - h) / 2, w, h);

      const grad = ctx.createLinearGradient(0, H * 0.55, 0, H);
      grad.addColorStop(0, "rgba(7,9,15,0)");
      grad.addColorStop(1, "rgba(7,9,15,0.88)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      if (headline) {
        ctx.fillStyle = "#F4F7FB";
        ctx.font = "bold 56px Georgia";
        ctx.textAlign = "left";
        ctx.fillText(headline, 36, H - 110, W - 72);
      }
      if (subtext) {
        ctx.fillStyle = "#7FD8E8";
        ctx.font = "28px Georgia";
        ctx.fillText(subtext, 36, H - 60, W - 72);
      }
      ctx.fillStyle = "#2F8FFF";
      ctx.fillRect(0, 0, 170, 44);
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 20px Georgia";
      ctx.textAlign = "center";
      ctx.fillText("Hector365", 85, 29);
    };
    img.src = imgSrc;
  }, [imgSrc, headline, subtext]);

  const download = () => {
    const link = document.createElement("a");
    link.download = "poster.png";
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: C.bg }}>
      <div className="flex items-center gap-3 px-5 py-4" style={{ background: "#0B0F1A", borderBottom: `1px solid ${C.cardBorder}` }}>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: C.chipBg, border: `1px solid ${C.accent}`, boxShadow: `0 0 12px ${C.accent}66` }}
        >
          <Megaphone className="w-4.5 h-4.5" style={{ color: C.accentGlow }} />
        </div>
        <div>
          <p className="font-semibold text-[17px] tracking-wide" style={{ color: C.textHeading, fontFamily: "Georgia, serif" }}>
            HECTOR<span style={{ color: C.accent }}>365</span>
          </p>
          <p className="text-[11px]" style={{ color: C.textMuted }}>Poster Maker — free</p>
        </div>
      </div>

      <div className="flex-1 max-w-2xl w-full mx-auto px-5 py-6">
        <p className="text-sm mb-4" style={{ color: C.textMuted }}>
          अपने product/दुकान की फोटो डालें, headline और subtext लिखें — तैयार पोस्टर डाउनलोड करें।
        </p>

        {!imgSrc && (
          <button
            onClick={() => fileRef.current?.click()}
            className="w-full flex flex-col items-center gap-2 py-12 rounded-xl border-2 border-dashed"
            style={{ borderColor: C.cardBorder, color: C.textMuted, background: C.card }}
          >
            <Upload className="w-6 h-6" />
            <span className="text-sm">फोटो चुनें</span>
          </button>
        )}
        <input ref={fileRef} type="file" accept="image/*" onChange={onFile} className="hidden" />

        {imgSrc && (
          <div>
            <canvas ref={canvasRef} className="w-full rounded-xl mb-4" style={{ border: `1px solid ${C.cardBorder}` }} />
            <div className="flex flex-col gap-2 mb-4">
              <input
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                placeholder="Headline (जैसे: 50% तक की छूट!)"
                className="px-4 py-2.5 rounded-xl outline-none text-[15px]"
                style={{ background: C.card, border: `1px solid ${C.cardBorder}`, color: C.textBody }}
              />
              <input
                value={subtext}
                onChange={(e) => setSubtext(e.target.value)}
                placeholder="Subtext (जैसे: सिर्फ इस हफ्ते)"
                className="px-4 py-2.5 rounded-xl outline-none text-[15px]"
                style={{ background: C.card, border: `1px solid ${C.cardBorder}`, color: C.textBody }}
              />
            </div>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={download}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium"
                style={{ background: C.accent, color: C.white, boxShadow: `0 0 16px ${C.accent}55` }}
              >
                <Download className="w-4 h-4" />
                Poster Download करें
              </button>
              <button
                onClick={() => setImgSrc(null)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium"
                style={{ background: C.card, border: `1px solid ${C.cardBorder}`, color: C.textBody }}
              >
                नई फोटो
              </button>
            </div>
          </div>
        )}

        {!imgSrc && (
          <div className="flex items-start gap-2 mt-6 text-xs" style={{ color: C.textMuted }}>
            <ImageIcon className="w-4 h-4 mt-0.5 shrink-0" />
            <span>ये पूरी तरह free है, कोई account/login नहीं चाहिए — फोटो आपके browser में ही process होती है, कहीं भेजी नहीं जाती।</span>
          </div>
        )}
      </div>
    </div>
  );
}
