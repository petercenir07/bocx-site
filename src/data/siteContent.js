import {
  Activity,
  BadgeCheck,
  Cpu,
  Crosshair,
  Fingerprint,
  Gauge,
  Landmark,
  Layers3,
  LockKeyhole,
  Network,
  Radar,
  ServerCog,
  ShieldCheck,
  Target,
  Waypoints,
  Workflow,
  Wrench,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export const heroHighlights = [
  "Security-first architectures designed for mission-critical environments",
  "Consulting and sustainment supporting defense, government, and healthcare operations",
  "Infrastructure resilience and operational readiness for high-availability systems",
];

export const aboutPoints = [
  "BOCX brings cybersecurity, information technology, and information assurance together in a single operating model designed for high-trust environments.",
  "The firm is built to support military operations, government systems, and healthcare infrastructure with secure modernization and disciplined execution.",
  "Enterprise consulting, engineering, and sustainment services are aligned to reliability, accountability, and continuity across critical programs.",
];

export const services = [
  {
    title: "Cybersecurity Solutions",
    description:
      "Security strategy, architecture hardening, and risk reduction for critical systems that demand resilience and continuous protection.",
    icon: ShieldCheck,
  },
  {
    title: "Managed Security Services",
    description:
      "Persistent monitoring, incident visibility, and defensive operations supporting high-availability environments and rapid response requirements.",
    icon: Radar,
  },
  {
    title: "IT Architecture",
    description:
      "Secure, scalable infrastructure design aligned to resilience, compliance, continuity, and mission performance.",
    icon: Layers3,
  },
  {
    title: "Information Assurance",
    description:
      "Controls validation, policy alignment, and assurance practices that strengthen trust across regulated and mission-critical environments.",
    icon: Fingerprint,
  },
  {
    title: "Engineering Consulting",
    description:
      "Technical planning and modernization guidance for complex environments where uptime, readiness, and secure execution matter.",
    icon: Cpu,
  },
  {
    title: "Field Engineering",
    description:
      "On-site implementation and integration support for secure infrastructure, critical systems, and operationally sensitive deployments.",
    icon: Wrench,
  },
  {
    title: "Operations & Maintenance",
    description:
      "Lifecycle sustainment, performance optimization, and dependable O&M for resilient environments that require ongoing availability.",
    icon: Activity,
  },
];

export const industries = [
  {
    title: "Defense",
    description:
      "Designed for military environments requiring secure communications, resilient infrastructure, and operational readiness under demanding conditions.",
    icon: Crosshair,
    imageKey: "military",
  },
  {
    title: "Government",
    description:
      "Supporting government systems with security-first modernization, governance alignment, and dependable service continuity.",
    icon: Landmark,
    imageKey: "government",
  },
  {
    title: "Healthcare",
    description:
      "Built for healthcare infrastructure where data protection, system availability, and operational reliability are essential to care delivery.",
    icon: Activity,
    imageKey: "healthcare",
  },
];

export const whyChooseItems = [
  {
    title: "Built for High-Trust Environments",
    description:
      "Engagements are structured for organizations operating under strict security, continuity, and accountability expectations.",
    icon: BadgeCheck,
  },
  {
    title: "Mission-Critical Reliability",
    description:
      "Delivery emphasizes resilience, operational readiness, and sustained support for essential systems.",
    icon: LockKeyhole,
  },
  {
    title: "Security-First Architecture",
    description:
      "Security considerations are built into planning, design, implementation, and ongoing operations.",
    icon: Target,
  },
  {
    title: "Government-Grade Standards",
    description:
      "Approaches are aligned with disciplined governance, documentation, and control expectations common to public sector and regulated environments.",
    icon: Cpu,
  },
  {
    title: "Secure, Scalable Partnership",
    description:
      "BOCX supports confidential collaboration from assessment through deployment and sustainment as requirements evolve.",
    icon: Workflow,
  },
];

export const processSteps = [
  {
    title: "Assess",
    description:
      "Evaluate environment, mission priorities, risk posture, and operational constraints.",
    icon: Gauge,
  },
  {
    title: "Design",
    description:
      "Define secure architectures, workflows, and implementation plans with measurable objectives.",
    icon: Waypoints,
  },
  {
    title: "Secure",
    description:
      "Apply controls, validation, and hardening strategies that raise assurance before rollout.",
    icon: ShieldCheck,
  },
  {
    title: "Deploy",
    description:
      "Execute with precision through engineering coordination, field support, and stakeholder alignment.",
    icon: ServerCog,
  },
  {
    title: "Maintain",
    description:
      "Sustain reliability with monitoring, O&M support, iterative improvement, and long-term readiness.",
    icon: Network,
  },
];

export const stats = [
  { value: "24/7", label: "Operational readiness mindset" },
  { value: "3", label: "High-trust sectors supported" },
  { value: "5", label: "Delivery phases from assessment to sustainment" },
  { value: "7", label: "Core service lines across cyber, IT, and O&M" },
];

export const trustPoints = [
  "Built for executive trust across defense, government, and healthcare environments",
  "Designed to align security, engineering, and sustainment around critical systems",
  "Structured for secure modernization, operational continuity, and stakeholder accountability",
];

export const contactDetails = [
  "Built for high-trust enterprise and public sector environments",
  "Consultative delivery aligned with secure modernization and resilient operations",
  "Prepared to support defense, government, and healthcare priorities",
];
