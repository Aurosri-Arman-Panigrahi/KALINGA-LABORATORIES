# Kalinga Laboratories 🔬

> **Cyber-Odisha** — A Sci-Fi AR Educational Ecosystem fusing Odishan temple geometry with dark-futuristic immersive 3D education.

[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)](https://vercel.com)
[![NASA API](https://img.shields.io/badge/Powered%20By-NASA%20API-blue)](https://api.nasa.gov)
[![Three.js](https://img.shields.io/badge/3D-Three.js%20%2B%20R3F-orange)](https://threejs.org)

---

## ✨ Features

| Module | Highlights |
|---|---|
| **3D Lobby** | Full-screen R3F canvas · 3 interactive portals · GSAP camera transitions · Stars + rotunda rings |
| **Chemistry Lab** | 4 pre-built reactions · Animated particle system · Beaker + molecule bonds · Reaction log |
| **Physics Lab** | NASA APOD live · Solar system simulator (8 planets) · NEO feed · Mars Curiosity photos · Exoplanet data |
| **Biology Lab** | Procedural anatomy viewer · 5 body systems · Explode view · Quiz mode · AR mode |
| **Profile** | Editable name/avatar · XP system · Levels · Recharts radar chart · Lab history timeline |
| **Achievements** | 12 achievements · Stagger animations · XP rewards · Locked silhouettes |
| **HUD** | Persistent glassmorphism logo + sidebar · Achievement badge · Framer Motion animations |

---

## 🚀 Setup

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/your-org/kalinga-labs.git
cd kalinga-labs
npm install
```

### Environment Setup

Copy or create `.env`:
```env
VITE_NASA_API_KEY=your_nasa_api_key_here
```

Get a free NASA API key at **[api.nasa.gov](https://api.nasa.gov)**.

### Development

```bash
npm run dev
```

Open `http://localhost:5173`

---

## 🌐 Deployment

### One-Click Vercel

1. Push to GitHub
2. Import repo at **[vercel.com/new](https://vercel.com/new)**
3. Set environment variable `VITE_NASA_API_KEY`
4. Deploy ✓

### GitHub Pages

```bash
npm run build
npm run deploy
```

> The `vercel.json` includes SPA rewrites and COEP/COOP headers for SharedArrayBuffer support.

---

## 🛸 Tech Stack

- **Vite 5** + **React 18** + **TypeScript**
- **Three.js** + **React Three Fiber** + **@react-three/drei**
- **GSAP** (camera transitions) + **Framer Motion** (page transitions, HUD)
- **Zustand** (state, localStorage persistence) + **TanStack Query** (NASA API caching)
- **Recharts** (radar chart) + **Lucide React** (icons) + **Tailwind CSS 3**
- **@react-spring/three** (explode view spring physics)

---

## 🔭 NASA API Integration

This project uses the following NASA endpoints:

| Endpoint | Purpose |
|---|---|
| `/planetary/apod` | Astronomy Picture of the Day |
| `/mars-photos/api/v1/rovers/curiosity/photos` | Mars surface imagery |
| `/neo/rest/v1/feed` | Near Earth Object feed |
| Exoplanet Archive TAP | Exoplanet database |

---

## 📡 AR Mode

AR modes use **AR.js** (iframe-sandboxed) for React compatibility.

**To use AR:**
1. Open any lab and click `📡 ENABLE AR MODE`
2. Allow camera access
3. Print or display a **Hiro marker**: [AR.js Hiro Marker](https://ar-js-org.github.io/AR.js/)
4. Point camera at marker

---

## 🏛️ Open Source Credits

This project integrates concepts from:

1. **CRYPTOcoderAS/AR-Based-Laboratory** — AR chemistry lab reference implementation
2. **Hasyimmuarifin/StellarMind_AR** — AR astronomy viewer concepts
3. **shivakantkurmi/AR-Anatomy** — AR anatomy overlay approach

---

## 📁 Project Structure

```
src/
├── components/
│   ├── HUD/          # Logo, Sidebar, AchievementsBadge
│   ├── Lobby/        # LobbyScene + 3 portals (DNA, Atom, Solar)
│   ├── Labs/
│   │   ├── Chemistry/  # ReactionCanvas, ControlPanel, reactions.ts
│   │   ├── Physics/    # APODHero, SolarCanvas, DataDashboard
│   │   └── Biology/    # AnatomyCanvas, InfoPanel, organData.ts
│   ├── Pages/        # ScientistProfile, Achievements
│   └── Shared/       # GlassPanel, NeonText, LoadingPortal
├── hooks/            # useNASA.ts, useRaycaster.ts
└── store/            # labStore.ts (Zustand)
```

---

## 🌺 Design Philosophy — Cyber-Odisha

The aesthetic fuses the curved **shikhara** forms of Kalinga architecture (Odishan temples) with a dark sci-fi HUD aesthetic:

- **Colors**: Bioluminescent teal `#00f5c4` · Electric cyan `#1af0ff` · Neon purple `#b44fff`
- **Typography**: Orbitron (display) · Rajdhani (body) · Share Tech Mono (data)
- **Glass**: `backdrop-filter: blur(16px) saturate(180%)` panels throughout

---

*Built with ❤️ for education · Kalinga Laboratories © 2025*
