const robot = require("./robot")


describe("Robot", () => {
    test("robot moving", () => {
        expect(robot(0,0)).toBe('Error')
    })
})