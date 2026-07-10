export const pillars = [
  {
    cta: "Join Waitlist",
    description:
      "Trust architecture, asset protection, IP shielding, and legacy planning for creators with something real to protect.",
    element: "Ether",
    href: "/guardian",
    name: "Guardian",
    solid: "Dodecahedron",
    status: "Coming Soon",
    tone: "violet",
    whatYouGet: "Trusts, LLCs, IP shielding",
  },
  {
    cta: "Listen",
    description:
      "Production, distribution, sync readiness, and artist development where the artist eats first.",
    element: "Water",
    href: "/studios",
    name: "Studios",
    solid: "Icosahedron",
    status: "Active",
    tone: "teal",
    whatYouGet: "Music production and release support",
  },
  {
    cta: "Read",
    description:
      "Manuals, author infrastructure, print paths, and sovereign publishing where authors retain their IP.",
    element: "Air",
    href: "/press",
    name: "Press",
    solid: "Octahedron",
    status: "Active",
    tone: "gold",
    whatYouGet: "Whole Body Series, author platform, print",
  },
  {
    cta: "Join",
    description:
      "Circles, retreats, rites, and the relational field where the Living Earth becomes embodied.",
    element: "Fire",
    href: "/presence",
    name: "Presence",
    solid: "Tetrahedron",
    status: "Active",
    tone: "ember",
    whatYouGet: "Circles, retreats, rites",
  },
  {
    cta: "Follow",
    description:
      "Sacred design, land projects, regenerative builds, and the long-range blueprint for built coherence.",
    element: "Earth",
    href: "/foundation",
    name: "Foundation",
    solid: "Hexahedron",
    status: "In Progress",
    tone: "sage",
    whatYouGet: "Sacred geometry builds",
  },
] as const

export const consultations = [
  {
    description: "A quick orientation call to identify the right first step.",
    duration: "20 min",
    href: "/book?type=free_20",
    name: "Free Discovery",
    price: "Free",
  },
  {
    description: "A focused working session for one pillar or one decision.",
    duration: "60 min",
    href: "/book?type=full_60",
    name: "Full Session",
    price: "$111",
  },
  {
    description:
      "Whole Body architecture across business, protection, land, and legacy.",
    duration: "90 min",
    href: "/book?type=architect_90",
    name: "Architect & Sovereign",
    price: "$333",
  },
] as const

export const manuals = [
  {
    description:
      "The foundation. Before you play the song, you build the instrument. This volume covers the architecture of the self, the Five Bodies, the Body Matrix, and the practice of becoming coherent.",
    href: "/manuals/vol-i",
    number: "I",
    slug: "vol-i",
    tagline: "Build the instrument.",
    title: "Whole Body Presence",
  },
  {
    description:
      "The Dodecahedron has twelve faces. Your life has twelve frequencies. This volume maps the Twelve Houses, their archetypes, elements, and how they interact.",
    href: "/manuals/vol-ii",
    number: "II",
    slug: "vol-ii",
    tagline: "Play the song.",
    title: "Twelvefold Harmonics",
  },
  {
    description:
      "Between the notes, there is space. This volume explores the Ethereal Body, the Bindu point, and how to access the field that holds everything.",
    href: "/manuals/vol-iii",
    number: "III",
    slug: "vol-iii",
    tagline: "Be the silence.",
    title: "Infinite Presence",
  },
  {
    description:
      "Growth is not linear. It spirals. This volume teaches the mechanics of the spiral and how to use the vortex math loop as a practical life-planning tool.",
    href: "/manuals/vol-iv",
    number: "IV",
    slug: "vol-iv",
    tagline: "Dance the turn.",
    title: "The Living Spiral",
  },
  {
    description:
      "The final volume. Everything converges here. The Triangle of Trust is the legal, relational, and spiritual structure that holds a sovereign life.",
    href: "/manuals/vol-v",
    number: "V",
    slug: "vol-v",
    tagline: "Build the home.",
    title: "Triangle of Trust",
  },
] as const

export const products = [
  {
    category: "Music",
    description: "Twelve tracks. Twelve houses.",
    href: "/studios/vol-1",
    name: "Living Earth: Vol. 1 Digital",
    price: "$25",
  },
  {
    category: "Music",
    description: "First physical pressing.",
    href: "/studios/vol-1",
    name: "Living Earth: Vol. 1 Vinyl",
    price: "$150",
  },
  {
    category: "Music",
    description: "Sandabado vinyl pressing.",
    href: "/studios/sandabado",
    name: "Sandabado Vinyl",
    price: "$33",
  },
  ...manuals.flatMap((manual) => [
    {
      category: "Books",
      description: `Digital edition of Volume ${manual.number}.`,
      href: manual.href,
      name: `${manual.title} Digital`,
      price: "$22",
    },
    {
      category: "Books",
      description: `Physical edition of Volume ${manual.number}.`,
      href: manual.href,
      name: `${manual.title} Physical`,
      price: "$77",
    },
  ]),
  {
    category: "Bundles",
    description: "All five volumes in the digital reader library.",
    href: "/store/books",
    name: "Digital Whole Body Series Bundle",
    price: "$111",
  },
  {
    category: "Bundles",
    description: "All five volumes printed and bound.",
    href: "/store/books",
    name: "Physical Whole Body Series Bundle",
    price: "$333",
  },
  ...consultations.map((consultation) => ({
    category: "Consultations",
    description: consultation.description,
    href: consultation.href,
    name: consultation.name,
    price: consultation.price,
  })),
] as const
