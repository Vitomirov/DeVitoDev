// Fade-in animacija: postepeno pojavljivanje
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 3 } },
};

// Klizanje sa leve strane sa "spring" efektom
export const slideInFromLeft = {
  hidden: { x: -150, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 5,
      mass: 1,
    },
  },
};

// Klizanje sa desne strane sa "spring" efektom
export const slideInFromRight = {
  hidden: { x: 150, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 5,
      mass: 1,
    },
  },
};

// Kontejner sa efektom sekvencijalnog pojavljivanja dece
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

// Stavka koja klizi sa dna sa promenom opacity
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Klizanje odozdo sa postepenim pojavljivanjem
export const slideInFromBottom = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 4, ease: "easeOut" } },
};

// Dinamična animacija klizanja gore sa podešenim kašnjenjem
export const createSlideUpVariant = (delay = 0) => ({
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

// Efekat iskačućeg i pojavljivanja sa "spring" animacijom
export const popUpAndFadeIn = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
