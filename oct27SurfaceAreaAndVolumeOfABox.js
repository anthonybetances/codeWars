//Surface Area and Volume of a Box

//INSTRUCTIONS:
//Write a function that returns the total surface area and volume of a box as an array: [area, volume]


function getSize(width, height, depth){
let area = 2*depth*width + 2*depth*height + 2*width*height
let volume =  depth*height*width
return [area,volume]
}
