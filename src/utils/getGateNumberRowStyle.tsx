const getGateNumberRowStyle = (gateNumber: number) => {
  let color;
  let backgroundColor;

  switch (gateNumber) {
    case 1:
      color = "#000000";
      backgroundColor = "#FFFFFF";
      break;
    case 2:
      color = "#FFFFFF";
      backgroundColor = "#444444";
      break;
    case 3:
      color = "#FFFFFF";
      backgroundColor = "#E95556";
      break;
    case 4:
      color = "#FFFFFF";
      backgroundColor = "#416CBA";
      break;
    case 5:
      color = "#FFFFFF";
      backgroundColor = "#E7C52C";
      break;
    case 6:
      color = "#FFFFFF";
      backgroundColor = "#45AF4C";
      break;
    case 7:
      color = "#FFFFFF";
      backgroundColor = "#EE9738";
      break;
    case 8:
      color = "#FFFFFF";
      backgroundColor = "#EF8FA0";
      break;
  }

  return {
    color: color,
    backgroundColor: backgroundColor,
  };
};

export default getGateNumberRowStyle;
