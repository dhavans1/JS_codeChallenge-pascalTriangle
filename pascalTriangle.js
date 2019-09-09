//Factorial function
function getFactorial(x){

    return x == 0 ? 1 : x * getFactorial(x-1);
}

//Pascal triangle function
function printPascalTriangle(rows){
       
    //Loop for rows - n
    for( n=0; n<rows; n++ ){        
        // Declare string to store triangle row values
        var pascalRow = "";
        //Initialize pascalRow with whitespaces for triangle display - Uncomment for triangular display(works better with <6 rows)
        /*for(w=1; w<= rows-(n+1); w++) 
            pascalRow += ' ';*/

        //Loop for columns - k
        for( k=0; k<=n; k++ ){
            //Implement nCk formula - n!/(k!*(n-k)!)
            pascalRow += getFactorial(n)/(getFactorial(k) * getFactorial(n-k)) + ' ';
        }
        
        console.log(pascalRow);
    }
}

//Get Process' standard input object for user input
var std_in = process.stdin;

//Set character encoding
std_in.setEncoding('utf-8');

//Prompt user for n (Pascal triangle rows)
console.log("Enter number of rows for Pascal triangle(n). Hit Ctrl+C to exit");

std_in.on('data', (rows) =>{

    //Validate user input
    if( isNaN(parseInt(rows)))
        console.log('Invalid entry. Please enter a number');
    else if( rows < 0)
            console.log('Invalid entry. Please enter non-negative number(K should be positive)');
         else{
            console.log('Pascal triangle with '+ parseInt(rows) +' rows');
            printPascalTriangle(parseInt(rows));
            console.log("Enter number of rows for Pascal triangle(n). Hit Ctrl+C to exit");
         }
})