const inquirer = require('inquirer')
const {Triangle, Circle, Square} =  require('./lib/shapes.js')
const fs = require('fs')


// our list of prompts for the user 
const questions = [
    {
        type: 'input',
        name:'text',
        message:'!Feed Me 3 Letters!',
        validate: function(answers){
            if (answers.length > 3){
                return console.log('WHY SOME MANY? TO MANY! TRY AGAIN!')
            }
            return true;
        }
    },
    {
        type: 'input',
        name:'txtColor',
        message:'I NEED MORE! HEX COLOR NOW!!',
    },
    {
        type:'list',
        name:'listShapes',
        message:'NOW YOU GET SHAPE!',
        choices:['Circle','Square','Triangle']
    },
    {
        type:'input',
        name:'shapeColor',
        message:'NOW SHAPE COLOR!!!!!!!!!!',
    },
]

inquirer.prompt(questions).then(answers =>{
   
    switch(answers.listShapes){
     case 'Triangle':
        return new Triangle(answers.text, answers.txtColor, answers.shapeColor);
    case 'Circle':
        return new Circle(answers.text, answers.txtColor, answers.shapeColor);
    case 'Square':
        return new Square(answers.text, answers.txtColor, answers.shapeColor);
    }
}).then(shap =>{
    const svg = `
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

    ${shap.render()}
    ${shap.renderText()}
    
    </svg>`;

    fs.writeFile('./examples/logo.svg', svg, err => {
        if (err) {
            console.error('git GUD:', err);
            return;
        }
        console.log('SHIT LOGO!!!!');
    });
})