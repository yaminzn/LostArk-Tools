export enum Color {
  Red = 1,
  Purple = 2,
}

interface Grid120I {
  top: Color;
  left: Color;
  middle: Color;
  right: Color;
  bottom: Color;
}

export interface PatternI {
  grid: Grid120I;
  answer: Color;
}

export const PATTERNS: PatternI[] = [
  {
    grid: {
      top: Color.Red,
      left: Color.Purple,
      middle: Color.Red,
      right: Color.Red,
      bottom: Color.Purple,
    },
    answer: Color.Red,
  },
  {
    grid: {
      top: Color.Red,
      left: Color.Red,
      middle: Color.Purple,
      right: Color.Purple,
      bottom: Color.Red,
    },
    answer: Color.Red,
  },
  {
    grid: {
      top: Color.Purple,
      left: Color.Red,
      middle: Color.Red,
      right: Color.Red,
      bottom: Color.Purple,
    },
    answer: Color.Red,
  },
  {
    grid: {
      top: Color.Red,
      left: Color.Purple,
      middle: Color.Purple,
      right: Color.Red,
      bottom: Color.Purple,
    },
    answer: Color.Purple,
  },
  {
    grid: {
      top: Color.Purple,
      left: Color.Red,
      middle: Color.Red,
      right: Color.Purple,
      bottom: Color.Purple,
    },
    answer: Color.Purple,
  },
  {
    grid: {
      top: Color.Purple,
      left: Color.Red,
      middle: Color.Purple,
      right: Color.Purple,
      bottom: Color.Red,
    },
    answer: Color.Purple,
  },
]
