interface Animate {
  y: number;
  opacity: number;
  transition: {
    duration: number;
    ease: Array<number>;
  };
}

export interface FadeInUp {
  initial: Animate;
  animate: Animate;
}
