/**
 * IEEE Student Branch – Sri Sairam College of Engineering, Bengaluru
 * Student Branch Code: STB60209825
 * Official Institutional Data Registry with Verified Official Logos
 */

const SB_INFO = {
  name: "IEEE Student Branch – Sri Sairam College of Engineering",
  shortName: "IEEE SSCE SB",
  code: "STB60209825",
  section: "IEEE Bangalore Section",
  region: "Region 10 – Asia-Pacific",
  masterLogo: {
    remote: "https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg",
    local: "assets/logos/ieee-master.svg",
    white: "assets/logos/ieee-master.svg"
  },
  campus: {
    name: "Sri Sairam College of Engineering",
    location: "Bengaluru, Karnataka, India",
    address: "Sai Leo Nagar, Guddanahalli Post, Samandur, Anekal, Bengaluru – 562106, Karnataka, India",
    phones: ["+91 80 2783 0221", "+91 99005 45103", "+91 99005 45104"],
    emails: ["info@sairamce.edu.in", "principal@sairamce.edu.in"],
    website: "https://sairamce.edu.in",
    established: 1997,
    founder: "MJF.Ln.Leo Muthu",
    trust: "Sapthagiri Educational Trust",
    affiliation: "Visvesvaraya Technological University (VTU), Belagavi",
    accreditation: "NBA & NAAC Accredited",
    logo: "assets/logos/sairam-bengaluru-logo.png",
    logoSvg: "assets/logos/sairam-bengaluru-logo.png"
  }
};

const WIE_GROUP = {
  name: "IEEE Women in Engineering (WIE) Affinity Group",
  shortName: "IEEE WIE SSCE",
  ieeeCode: "WIE",
  sbaCode: "SBA60209825",
  category: "Affinity Group",
  remoteLogo: "https://wie.ieee.org/wp-content/uploads/2021/06/WIE-Logo.png",
  localLogo: "assets/logos/WIE.png",
  logo: "assets/logos/WIE.png",
  description: "IEEE Women in Engineering (WIE) is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in STEM.",
  mission: "To inspire, engage, and empower women engineers and scientists at Sri Sairam College of Engineering, Bengaluru, through technical mentorship, professional development, and community outreach."
};

const CHAPTERS = [
  {
    slNo: 1,
    name: "IEEE Systems Council",
    ieeeCode: "SYS45",
    sbcCode: "SBC60209825D",
    category: "Technical Council",
    domain: "Systems Engineering, Architecture & Complex Systems",
    remoteLogo: "https://ieeesystemscouncil.org/files/ieeesystemscouncil/styles/large/public/2021-05/IEEE_Systems_Council_Logo.png",
    localLogo: "assets/logos/SYS45.png",
    logo: "assets/logos/SYS45.png",
    description: "The IEEE Systems Council integrates IEEE activities regarding aspects of systems engineering, covering system architecture, modeling, simulation, and integration."
  },
  {
    slNo: 2,
    name: "IEEE Transportation Electrification Council",
    ieeeCode: "TEC802",
    sbcCode: "SBC60209825D",
    category: "Technical Council",
    domain: "Electric Vehicles, Powertrains & Charging Infrastructure",
    remoteLogo: "https://tec.ieee.org/images/files/template/tec-logo.png",
    localLogo: "assets/logos/TEC802.png",
    logo: "assets/logos/TEC802.png",
    description: "Advances electric propulsion, vehicle electrification, smart charging grids, and electrified transit systems."
  },
  {
    slNo: 3,
    name: "IEEE Power Electronics Society",
    ieeeCode: "PEL35",
    sbcCode: "SBC60209825D",
    category: "Society",
    domain: "Power Conversion, Renewable Energy & Solid-State Systems",
    remoteLogo: "https://www.ieee-pels.org/images/pels-logo.png",
    localLogo: "assets/logos/PEL35.png",
    logo: "assets/logos/PEL35.png",
    description: "Focuses on the development and use of power electronic technology, power management, converters, and energy storage integration."
  },
  {
    slNo: 4,
    name: "IEEE Broadcast Technology Society",
    ieeeCode: "BT02",
    sbcCode: "SBC60209825G",
    category: "Society",
    domain: "Broadcast Systems, Digital Media & Transmission",
    remoteLogo: "https://bts.ieee.org/images/files/template/bts-logo.png",
    localLogo: "assets/logos/BT02.png",
    logo: "assets/logos/BT02.png",
    description: "Encompasses devices, systems, techniques, and theoretical foundations for broadcast production, distribution, and transmission."
  },
  {
    slNo: 5,
    name: "IEEE Computer Society",
    ieeeCode: "C16",
    sbcCode: "SBC60209825B",
    category: "Society",
    domain: "Computer Science, Software Engineering & AI",
    remoteLogo: "https://upload.wikimedia.org/wikipedia/commons/8/86/IEEE_Computer_Society_Logo.svg",
    localLogo: "assets/logos/C16.png",
    logo: "assets/logos/C16.png",
    description: "The premier source for information, inspiration, and collaboration in computer science and engineering worldwide."
  },
  {
    slNo: 6,
    name: "IEEE Circuits and Systems Society",
    ieeeCode: "CAS04",
    sbcCode: "SBC60209825A",
    category: "Society",
    domain: "Circuits, VLSI Design, Bio-CAS & Neural Systems",
    remoteLogo: "https://ieee-cas.org/files/ieeecas/CASS_Logo.png",
    localLogo: "assets/logos/CAS04.png",
    logo: "assets/logos/CAS04.png",
    description: "Spans the theory, analysis, design, and practical implementation of circuits and the application of circuit theoretical techniques to systems."
  },
  {
    slNo: 7,
    name: "IEEE Communications Society",
    ieeeCode: "COM19",
    sbcCode: "SBC60209825",
    category: "Society",
    domain: "Telecommunications, Wireless, 5G/6G & Optical Networks",
    remoteLogo: "https://www.comsoc.org/themes/custom/comsoc/logo.svg",
    localLogo: "assets/logos/COM19.png",
    logo: "assets/logos/COM19.png",
    description: "Promotes the advancement of science, technology and applications in communications and related networking disciplines."
  },
  {
    slNo: 8,
    name: "IEEE Education Society",
    ieeeCode: "E25",
    sbcCode: "SBC60209825I",
    category: "Society",
    domain: "Engineering Pedagogy, EdTech & Academic Research",
    remoteLogo: "https://ieee-edusociety.org/files/ieeeedusociety/EdSoc_Logo.png",
    localLogo: "assets/logos/E25.png",
    logo: "assets/logos/E25.png",
    description: "Promotes, advances, and facilitates engineering education, curriculum development, and innovative instructional technology."
  },
  {
    slNo: 9,
    name: "IEEE Electron Devices Society",
    ieeeCode: "ED15",
    sbcCode: "SBC60209825M",
    category: "Society",
    domain: "Semiconductor Physics, Microelectronics & Quantum Devices",
    remoteLogo: "https://eds.ieee.org/images/files/template/eds-logo.png",
    localLogo: "assets/logos/ED15.png",
    logo: "assets/logos/ED15.png",
    description: "Dedicated to the physics, modeling, design, and manufacture of electron and ion devices, semiconductors, and integrated systems."
  },
  {
    slNo: 10,
    name: "IEEE Electronics Packaging Society",
    ieeeCode: "EP21",
    sbcCode: "SBC60209825E",
    category: "Society",
    domain: "Electronic Packaging, Heterogeneous Integration & Interconnects",
    remoteLogo: "https://eps.ieee.org/images/files/template/eps-logo.png",
    localLogo: "assets/logos/EP21.png",
    logo: "assets/logos/EP21.png",
    description: "Focuses on the packaging and manufacturing of microelectronic components, heterogeneous integration, thermal management, and reliability."
  },
  {
    slNo: 11,
    name: "IEEE Industry Applications Society",
    ieeeCode: "IA34",
    sbcCode: "SBC60209825N",
    category: "Society",
    domain: "Industrial Automation, Motor Drives & Power Apparatus",
    remoteLogo: "https://ias.ieee.org/images/files/template/ias-logo.png",
    localLogo: "assets/logos/IA34.png",
    logo: "assets/logos/IA34.png",
    description: "Leads the development and application of electrical systems, apparatus, devices, and controls to the processes and equipment of industry."
  },
  {
    slNo: 12,
    name: "IEEE Industrial Electronics Society",
    ieeeCode: "IE13",
    sbcCode: "SBC60209825Q",
    category: "Society",
    domain: "Industrial Automation, Mechatronics, Sensors & Cyber-Physical Systems",
    remoteLogo: "https://www.ieee-ies.org/images/ies_logo.png",
    localLogo: "assets/logos/IE13.png",
    logo: "assets/logos/IE13.png",
    description: "Applies electronics and electrical sciences for the enhancement of industrial processes, robotics, factory automation, and IoT."
  },
  {
    slNo: 13,
    name: "IEEE Information Theory Society",
    ieeeCode: "IT12",
    sbcCode: "SBC60209825P",
    category: "Society",
    domain: "Information Processing, Cryptography & Coding Theory",
    remoteLogo: "https://www.itsoc.org/themes/custom/itsoc/logo.svg",
    localLogo: "assets/logos/IT12.png",
    logo: "assets/logos/IT12.png",
    description: "Dedicated to the processing, transmission, storage, and protection of information, and the mathematical foundations of communication."
  },
  {
    slNo: 14,
    name: "IEEE Magnetics Society",
    ieeeCode: "MAG33",
    sbcCode: "SBC60209825J",
    category: "Society",
    domain: "Magnetic Materials, Spintronics & Magnetic Recording",
    remoteLogo: "https://ieeemagnetics.org/files/ieeemagnetics/Magnetics_Logo.png",
    localLogo: "assets/logos/MAG33.png",
    logo: "assets/logos/MAG33.png",
    description: "Covers the physics, materials science, and engineering of magnetic phenomena, spintronic devices, and magnetic recording."
  },
  {
    slNo: 15,
    name: "IEEE Nanotechnology Council",
    ieeeCode: "NANO42",
    sbcCode: "SBC60209825O",
    category: "Technical Council",
    domain: "Nanomaterials, Nanodevices, Nanomedicine & Nanosensors",
    remoteLogo: "https://ieeenano.org/wp-content/uploads/2020/05/NTC-Logo.png",
    localLogo: "assets/logos/NANO42.png",
    logo: "assets/logos/NANO42.png",
    description: "Promotes research, development, and application of nanotechnology across multiple IEEE disciplines."
  },
  {
    slNo: 16,
    name: "IEEE Photonics Society",
    ieeeCode: "PHO36",
    sbcCode: "SBC60209825K",
    category: "Society",
    domain: "Optics, Lasers, Optical Communications & Biophotonics",
    remoteLogo: "https://www.photonicssociety.org/images/files/template/ips-logo.png",
    localLogo: "assets/logos/PHO36.png",
    logo: "assets/logos/PHO36.png",
    description: "Spans research, development, design, and manufacture of optical and quantum systems, devices, and materials."
  },
  {
    slNo: 17,
    name: "IEEE Robotics and Automation Society",
    ieeeCode: "RA24",
    sbcCode: "SBC60209825R",
    category: "Society",
    domain: "Robotics, Autonomous Systems, Computer Vision & HRI",
    remoteLogo: "https://www.ieee-ras.org/images/ras-logo.png",
    localLogo: "assets/logos/RA24.png",
    logo: "assets/logos/RA24.png",
    description: "Advances robotics and automation engineering and science for applications in manufacturing, space, defense, and human healthcare."
  },
  {
    slNo: 18,
    name: "IEEE Reliability Society",
    ieeeCode: "RL07",
    sbcCode: "SBC60209825H",
    category: "Society",
    domain: "Reliability Engineering, Fault-Tolerance & Risk Assessment",
    remoteLogo: "https://rs.ieee.org/images/files/template/rs-logo.png",
    localLogo: "assets/logos/RL07.png",
    logo: "assets/logos/RL07.png",
    description: "Addresses the attainment of reliability, maintainability, and safety across hardware, software, and systems."
  },
  {
    slNo: 19,
    name: "IEEE Signal Processing Society",
    ieeeCode: "SP01",
    sbcCode: "SBC60209825F",
    category: "Society",
    domain: "Signal, Image, Speech, Video & Audio Processing",
    remoteLogo: "https://signalprocessingsociety.org/sites/default/files/SPS_Logo.png",
    localLogo: "assets/logos/SP01.png",
    logo: "assets/logos/SP01.png",
    description: "IEEE's first society, dedicated to the theory and application of filtering, coding, analyzing, and transforming signals."
  },
  {
    slNo: 20,
    name: "IEEE Technology and Engineering Management Society",
    ieeeCode: "TEM14",
    sbcCode: "SBC60209825L",
    category: "Society",
    domain: "Engineering Management, Innovation, Entrepreneurship & Leadership",
    remoteLogo: "https://www.ieee-tems.org/wp-content/uploads/2021/03/TEMS-Logo.png",
    localLogo: "assets/logos/TEM14.png",
    logo: "assets/logos/TEM14.png",
    description: "Advancing technology leadership, engineering management sciences, entrepreneurship, and organizational governance."
  }
];

// Featured Chapters for the Interactive Showcase Carousel
const FEATURED_SPOTLIGHTS = [
  {
    code: "PHO36",
    name: "IEEE Photonics Society",
    sbcCode: "SBC60209825K",
    category: "Society",
    tagline: "Illuminating the Future of Optical Communications & Laser Science",
    highlight: "Hosting the 2026 Region 10 Distinguished Lecturer Series on Silicon Photonics and Quantum Sensing. Connecting student researchers with global optics labs.",
    domain: "Optics, Lasers, Optical Communications & Biophotonics"
  },
  {
    code: "C16",
    name: "IEEE Computer Society",
    sbcCode: "SBC60209825B",
    category: "Society",
    tagline: "Empowering Next-Gen Software Architects, AI Engineers & Developers",
    highlight: "Home of our competitive IEEEXtreme collegiate teams. Conducting bi-weekly competitive coding bootcamps, full-stack workshops, and AI hackathons.",
    domain: "Computer Science, Software Engineering & AI"
  },
  {
    code: "CAS04",
    name: "IEEE Circuits and Systems Society",
    sbcCode: "SBC60209825A",
    category: "Society",
    tagline: "Pioneering VLSI Design, Neuromorphic Chips & Embedded Systems",
    highlight: "Fostering semiconductor innovation with dedicated CADENCE and FPGA tool suites. Preparing student members for leading microelectronics careers.",
    domain: "Circuits, VLSI Design, Bio-CAS & Neural Systems"
  },
  {
    code: "RA24",
    name: "IEEE Robotics and Automation Society",
    sbcCode: "SBC60209825R",
    category: "Society",
    tagline: "Driving Autonomous Mechatronics, Drones & Human-Robot Interaction",
    highlight: "Active robotics development teams building autonomous unmanned aerial vehicles (UAVs) and industrial AGVs for national collegiate challenges.",
    domain: "Robotics, Autonomous Systems, Computer Vision & HRI"
  },
  {
    code: "WIE",
    name: "IEEE Women in Engineering (WIE)",
    sbcCode: "SBA60209825",
    category: "Affinity Group",
    tagline: "Inspiring & Empowering Women Engineers and Scientists Worldwide",
    highlight: "Recognized by IEEE Bangalore Section for excellence in STEM diversity outreach, technical mentorship circles, and leadership development symposia.",
    domain: "Women in STEM, Leadership, Mentoring & Diversity Outreach"
  }
];

// Campus Flagship Activities & Events
const ACTIVITIES_EVENTS = [
  {
    id: "event-1",
    title: "Annual IEEE Day 2026 Celebration & Project Expo",
    category: "Symposia",
    categoryLabel: "FLAGSHIP CELEBRATION",
    date: "OCTOBER 2026",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    excerpt: "Commemorating IEEE's historic foundation with keynote addresses by IEEE Bangalore Section leaders, inter-collegiate project exhibitions, and award ceremonies.",
    details: {
      venue: "Main Auditorium, Sri Sairam College of Engineering, Bengaluru",
      chiefGuest: "IEEE Bangalore Section Executive Committee Delegates",
      participants: "500+ Engineering Students & Faculty Members",
      schedule: "Keynote Addresses, Technical Paper Presentations, Student Project Exhibition & Best Chapter Awards."
    }
  },
  {
    id: "event-2",
    title: "IEEEXtreme 20.0 Global 24-Hour Programming Hackathon",
    category: "Competitions",
    categoryLabel: "COMPETITIVE PROGRAMMING",
    date: "OCTOBER 2026",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    excerpt: "Proctored collegiate coding teams from Sri Sairam College of Engineering competing against thousands of IEEE student branches worldwide in real-time problem solving.",
    details: {
      venue: "Advanced Computing Laboratories, SSCE Bengaluru Campus",
      proctors: "IEEE Senior Member Faculty Advisors",
      duration: "24 Continuous Hours (Global Virtual Competition)",
      schedule: "Algorithmic challenges, data structures, competitive mathematics, and artificial intelligence problems."
    }
  },
  {
    id: "event-3",
    title: "Next-Gen Photonics & Semiconductor Integration DLP",
    category: "Lectures",
    categoryLabel: "DISTINGUISHED LECTURE SERIES",
    date: "NOVEMBER 2026",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    excerpt: "Joint DLP session hosted by IEEE Photonics Society (PHO36) & Electron Devices Society (ED15) featuring visiting international researchers and industry delegates.",
    details: {
      venue: "Dr. Leo Muthu Seminar Hall, SSCE Campus, Anekal",
      speakers: "IEEE Region 10 Distinguished Lecturers & Industry Leaders",
      topics: "Silicon Photonics, 2.5D/3D Chiplet Heterogeneous Packaging & Quantum Optical Transceivers."
    }
  }
];

if (typeof window !== 'undefined') {
  window.IEEE_DATA = { SB_INFO, WIE_GROUP, CHAPTERS, FEATURED_SPOTLIGHTS, ACTIVITIES_EVENTS };
}
