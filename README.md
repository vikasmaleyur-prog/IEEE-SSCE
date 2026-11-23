# IEEE Student Branch – Sri Sairam College of Engineering (STB60209825)

Official web portal for the **IEEE Student Branch (STB60209825)** at **Sri Sairam College of Engineering, Bengaluru**, operating under the **IEEE Bangalore Section** (Region 10 – Asia Pacific).

Featuring:
- **Dual Institutional Branding**: Official Sri Sairam College of Engineering Bengaluru emblem & official IEEE Master Brand Logo.
- **21 IEEE Technical Societies & Councils**: Complete chapters registry with verified official logos and chapter scopes (`SYS45`, `TEC802`, `PEL35`, `BT02`, `C16`, `CAS04`, `COM19`, `E25`, `ED15`, `EP21`, `IA34`, `IE13`, `IT12`, `MAG33`, `NANO42`, `PHO36`, `RA24`, `RL07`, `SP01`, `TEM14`, `VT06`).
- **IEEE Women in Engineering (WIE) Affinity Group** (`SBA60209825`).
- **Interactive Multi-Page Architecture**:
  - `index.html` – Full-bleed hero banner, About Us, dynamic statistics, chapter showcase grid, live filter controls, interactive modal dialogs.
  - `about.html` – Institutional leadership, SCOPE team, Office Bearers, and MAGIC members.
  - `chapters.html` – Searchable and filterable registry across all 21 Societies/Councils + WIE.
  - `contact.html` – Bengaluru campus directory, interactive location map, and contact channels.

---

## 🚀 Running the Portal Locally

No build tools or Node dependencies required. You can serve the static site using Python or VS Code:

### Option 1: Python 3 HTTP Server (Recommended)
Open your terminal in this repository folder and run:

```bash
# Start a local static file server on port 8089
python3 -m http.server 8089
```

Then visit:
```
http://localhost:8089/index.html
```

### Option 2: VS Code Live Server
1. Open the repository in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and select **"Open with Live Server"**.

---

## 📂 Project Structure

```
├── index.html                # Main homepage & interactive chapter showcase
├── about.html                # About Us, leadership & office bearers
├── chapters.html             # Comprehensive chapters registry
├── contact.html              # Campus directory and reach us section
├── css/
│   └── style.css             # Main stylesheet (IEEE Region 10 design system)
├── js/
│   ├── data.js               # Centralized registry data for all 21 chapters & WIE
│   └── main.js               # Interactive filtering, modals, search & UI animations
├── assets/
│   └── logos/                # Official IEEE society & institutional logos
└── README.md
```

---

## 🏛️ Institutional Identification
- **Institution**: Sri Sairam College of Engineering, Bengaluru, Karnataka, India
- **Student Branch Code**: `STB60209825`
- **WIE Affinity Group Code**: `SBA60209825`
- **Section**: IEEE Bangalore Section
- **Region**: Region 10 (Asia-Pacific)
