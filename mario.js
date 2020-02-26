
printPyramid(5);
function printPyramid(height) 
{
  let emptyString = " ";
  let x = 0;
  let y = 0;
  let output = "#"

  while (y <= height)
  {
    emptyString += " ";
    y++
  }
 for (x = 1; x <= height; x++)
 {  
    output += "#";
    console.log(emptyString + output);
    emptyString = emptyString.substring(0, emptyString.length -1);
 }
}

