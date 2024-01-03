let arguements = process.argv.slice(2);

function CircleArea(radius){
    console.log(`The area of a circle with radius ${radius} should be:  ${Math.round(Math.PI * radius ** 2)}`) 
}

CircleArea(arguements[0])