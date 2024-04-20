
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    renderText() {
        return `<text x="95" y="95" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
    setColor(color){
        this.shapeColor = color;
    }
};


class Triangle extends Shape {
constructor(text, textColor,shapeColor){
    super(text, textColor,shapeColor)
}
render(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
}
}

class Circle extends Shape{
constructor(text, textColor,shapeColor){
    super(text, textColor,shapeColor)
}
render(){
    return `<circle cx="100" cy="100" r="73" fill="${this.shapeColor}"/>`
}
}

class Square extends Shape{
    constructor(text, textColor,shapeColor){
        super(text, textColor,shapeColor)
    }
render(){
    return`<rect x="40" y="21" width="120" height="120" fill="${this.shapeColor}"/>`
}
}

module.exports = {Triangle, Circle, Square};
