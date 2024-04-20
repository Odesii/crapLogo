 const {Triangle, Circle, Square} = require('./shapes.js')


describe('TriForce', () => {
    test('Triangle should be the blue', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
})
});

describe('Halo', () => {
    test('Circle should do the green', () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="100" cy="100" r="73" fill="green"/>');
})
});

describe('Box', () => {
    test('Square should be cardboard', () => {
        const shape = new Square();
        shape.setColor("brown");
        expect(shape.render()).toEqual('<rect x="40" y="21" width="120" height="120" fill="brown"/>');
})
});