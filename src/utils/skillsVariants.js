const skillVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100, duration: 5 }
    }
  },
  closed:  (i) => {
    const position = i * -10
    return {
      x: position,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  }
}


export { 
  skillVariants 
}