
printPyramid(10);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) 
{
  let emptyString = " ";
  let x = 0;
  let y = 0;
  let z = 0;
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

