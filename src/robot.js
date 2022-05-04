function createRobot(x, y) {
    return {
      movedown() {
        y -= 1;
        if (y >= 0 && y <= 10 && x >= 0 && x <= 10) {
          return [x, y];
        } else {
          return 'Está fuera de los limites';
        }
      },
      moveup() {
        y += 1;
        if (y >= 0 && y <= 10 && x >= 0 && x <= 10) {
          return [x, y];
        } else {
          return "Está fuera de los limites";
        }
      },
    };
  }

  module.exports = createRobot;

