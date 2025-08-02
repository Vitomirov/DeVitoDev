export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 3 } },
};

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

export const slideInFromRight = {
  hidden: { x: 150, opacity: 0 },
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

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Animate children with a delay
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: -30 },
};

// Nova varijanta za klizanje od dole - DODATO OVDE
export const slideInFromBottom = {
  hidden: { y: 100, opacity: 0 }, // Počinje 100px ispod i nevidljiv
  visible: { y: 0, opacity: 1, transition: { duration: 4, ease: "easeOut" } }, // Klizi gore i postaje vidljiv
};

// You can also export functions for more dynamic animations
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

export const popUpAndFadeIn = {
  hidden: { opacity: 0, scale: 0.9, y: 20 }, // Počinje malo manji, providan, i niže
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring", // Koristimo "spring" tranziciju za lepši "iskok" efekat
      stiffness: 100, // Jačina opruge (veći broj = brže i "tvrđe")
      damping: 10, // Prigušenje (manji broj = više oscilacija)
      duration: 0.6, // Ukupno trajanje tranzicije
      ease: "easeOut",
    },
  },
};
