const generateComputersChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

export { generateComputersChoice };
