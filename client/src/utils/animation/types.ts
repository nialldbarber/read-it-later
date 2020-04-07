interface Initial {
  y: number;
  opacity: number;
  transition: {
    duration: number;
    ease: Array<number>;
  };
}

interface Animate {
  y: number;
  opacity: number;
  transition: {
    duration: number;
    ease: Array<number>;
  };
}

export interface FadeInUp {
  initial: Initial;
  animate: Animate;
}
