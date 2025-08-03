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
      stiffness: 150, // Tvrdoća opruge
      damping: 5, // Kočenje opruge
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
      staggerChildren: 0.2, // Redom animira decu sa odloženjem
    },
  },
};

// Stavka koja klizi sa dna sa promenom opacity
export const itemVariants = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: -30 },
};

// Klizanje odozdo sa postepenim pojavljivanjem
export const slideInFromBottom = {
  hidden: { y: 100, opacity: 0 }, // Start ispod i nevidljiv
  visible: { y: 0, opacity: 1, transition: { duration: 4, ease: "easeOut" } }, // Klizi gore i pojavljuje se
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
  hidden: { opacity: 0, scale: 0.9, y: 20 }, // Početno stanje: manji, providan i pomeren naniže
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring", // Opruga za prirodniji efekat
      stiffness: 100, // Jačina opruge
      damping: 10, // Prigušenje oscilacija
      duration: 0.6, // Trajanje animacije
      ease: "easeOut",
    },
  },
};
