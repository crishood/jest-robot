const robot = require("./robot")


describe("Robot", () => {
    test("robot moving down from origin", () => {
        expect(robot(0,0).movedown()).toBe('Está fuera de los limites');
    });
    test("robot moving down from top", () => {
        expect(robot(0,1).movedown()).toStrictEqual([0, 0]);
    });
    test("robot moving up from origin", () => {
        expect(robot(0,0).moveup()).toStrictEqual([0, 1]);
    });
})