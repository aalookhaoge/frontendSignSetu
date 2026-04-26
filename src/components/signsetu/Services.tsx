import { useState } from "react";
import type { ReactNode, CSSProperties } from "react";

type Service = {
  icon: ReactNode;
  title: string;
  sub: string;
  desc: string;
  bg: string;
  image?: string;    // ASL gesture image URL
  emoji?: string;    // fallback if no image
};

const whatsappImageBase = "/WhatsApp Unknown 2026-04-26 at 7.42.26 AM";

const services: Service[] = [
  {
    icon: <svg fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>,
    title: "Yes",
    sub: "Affirmation",
    desc: "Patient confirms symptoms or agrees with the doctor's diagnosis during consultation.",
    bg: "linear-gradient(135deg,#1a1a2e,#2d1b4e,#1a3a2e)",
    image: `${whatsappImageBase}/WhatsApp Image 2026-04-26 at 7.42.14 AM.jpeg`,
  },
  {
    icon: <svg fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>,
    title: "No",
    sub: "Denial",
    desc: "Patient denies a symptom or declines a procedure, helping doctors rule out conditions.",
    bg: "linear-gradient(135deg,#2a1a0e,#4a2a1e)",
    emoji: "👎",
  },
  {
    icon: <svg fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>,
    title: "Water",
    sub: "Basic Needs",
    desc: "Patient requests water during examination, a critical need often unspoken in clinical settings.",
    bg: "linear-gradient(135deg,#0a1a2e,#1a2a3e)",
    image: `${whatsappImageBase}/WhatsApp Image 2026-04-26 at 7.42.13 AM (1).jpeg`,
  },
  {
    icon: <svg fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    title: "Pain",
    sub: "Symptom Alert",
    desc: "Patient communicates they are experiencing pain, enabling the doctor to begin targeted diagnosis.",
    bg: "linear-gradient(135deg,#2a1a1a,#3d1b1b)",
    image: `${whatsappImageBase}/WhatsApp Image 2026-04-26 at 7.42.13 AM.jpeg`,
  },
  {
    icon: <svg fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/></svg>,
    title: "Fever",
    sub: "Temperature Check",
    desc: "Patient indicates high body temperature, helping doctors prioritize infection screening.",
    bg: "linear-gradient(135deg,#2a1a0e,#3d2a1a)",
    image: `${whatsappImageBase}/WhatsApp Image 2026-04-26 at 7.42.12 AM.jpeg`,
  },
  {
    icon: <svg fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="14" rx="8" ry="6"/><path d="M12 8v6"/></svg>,
    title: "Stomach",
    sub: "Digestive Issue",
    desc: "Patient signals stomach discomfort, guiding the doctor toward gastrointestinal diagnosis.",
    bg: "linear-gradient(135deg,#0a1a2e,#1a1a1a)",
    image: `${whatsappImageBase}/WhatsApp Image 2026-04-26 at 7.42.12 AM (1).jpeg`,
  },
  {
    icon: <svg fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg>,
    title: "Chest",
    sub: "Critical Zone",
    desc: "Patient communicates chest-related symptoms, critical for cardiac and respiratory assessment.",
    bg: "linear-gradient(135deg,#1a1a2e,#2d1b4e)",
    image: `${whatsappImageBase}/WhatsApp Image 2026-04-26 at 7.42.15 AM.jpeg`,
  },
  {
    icon: <svg fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
    title: "Help",
    sub: "Emergency Signal",
    desc: "Patient urgently requests medical assistance when they cannot verbally call for aid.",
    bg: "linear-gradient(135deg,#1a1a1a,#2a2a2a)",
    image: `${whatsappImageBase}/WhatsApp Image 2026-04-26 at 7.42.14 AM (2).jpeg`,
  },
  {
    icon: <svg fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/></svg>,
    title: "Medicine",
    sub: "Treatment",
    desc: "Patient asks about or requests medication, bridging the prescription communication gap.",
    bg: "linear-gradient(135deg,#1a1a2e,#1a3a2e)",
    image: `${whatsappImageBase}/WhatsApp Image 2026-04-26 at 7.42.15 AM (1).jpeg`,
  },
  {
    icon: <svg fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: "Stop",
    sub: "Boundary Signal",
    desc: "Patient asks the doctor to pause or halt a procedure, asserting comfort boundaries.",
    bg: "linear-gradient(135deg,#2a1a1a,#1a1a1a)",
    image: `${whatsappImageBase}/WhatsApp Image 2026-04-26 at 7.42.14 AM (1).jpeg`,
  },
];

const Services = () => {
  

  return (
    <section className="services" id="services">
      <div className="services-rays"></div>
      <div className="services-header">
        <div className="section-badge fade-up">
          <span className="dot">
            <svg fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
            </svg>
          </span>
          ASL Sign Library
        </div>
        <h2 className="fade-up">Essential Medical Signs for<br /><span className="grey">Doctor–Patient Communication</span></h2>
        <p className="services-sub fade-up">Core ASL gestures that enable deaf patients to express symptoms, needs, and responses during clinical consultations.</p>
      </div>

      <div className="services-cards">
        {services.map((s, i) => (
          <div
            className="service-card fade-up"
            key={i}
            
          >
            <div className="service-card-head">
              <div className="service-icon">{s.icon}</div>
              <span className="service-arrow">↗</span>
            </div>
            <h3>{s.title}</h3>
            <div className="service-sub">{s.sub}</div>
            <p>{s.desc}</p>
            <div className="service-img" style={{ background: s.bg } as CSSProperties}>
              {s.image ? (
                <img
                  src={s.image}
                  alt={`ASL sign for ${s.title}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "7px",
                    background: "rgba(0,0,0,0.2)",
                  }}
                />
              ) : (
                s.emoji
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── Popup Overlay ── */}

    </section>
  );
};

export default Services;
