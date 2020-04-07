import { FadeInUp } from '~/utils/animation/types';

const easing: Array<number> = [0.6, -0.05, 0.01, 0.99];

// Animations
export const fadeInUp: FadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: {
      duration: 0.45,
      ease: easing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: easing,
    },
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

// Functions
export const onPageExit = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
    });
  }
};
