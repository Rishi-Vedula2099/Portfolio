/* ── TYPES ─────────────────────────────────────────────────── */

export interface Skill {
  name: string;
  jp: string;
  val: number;
  color: string;
}

export interface TreeNode {
  id: string;
  x: number;
  y: number;
  label: string;
  jp: string;
  tier: number;
  req: string[];
  desc: string;
}

export interface Tree {
  id: string;
  jp: string;
  en: string;
  sub: string;
  color: string;
  glow: string;
  bg: string;
  lore: string;
  nodes: TreeNode[];
  edges: [string, string][];
}

export interface Work {
  no: string;
  en: string;
  title: string;
  sub: string;
  kanji: string;
  desc: string;
  year: string;
  tags: string[];
}



export interface Social {
  label: string;
  icon: string;
  href: string;
  tooltip?: string;
}

export interface Petal {
  id: number;
  left: string;
  size: number;
  dur: string;
  delay: string;
  drift: string;
  spin: string;
  sway: string;
  color: string;
}

export interface Streak {
  id: number;
  top: string;
  w: number;
  h: number;
  dur: string;
  delay: string;
  driftY: number;
  angle: number;
  opMax: number;
  warm: boolean;
}

export interface SparkItem {
  id: string;
  x: number;
  y: number;
}

export interface ConstellationStar {
  x: number;
  y: number;
  r: number;
}

export interface ConstellationLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}
