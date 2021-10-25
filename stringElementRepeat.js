// Write down a function that takes in a string and returns a count of each character in the string. Alpha numerical 
//values only. No special characters or spaces etc. 

/*

Problems solving approach

Step One understand the problem:

reinstate the problem: 
the problem asks to tally up all repeating elements of the sring 

what are the inputs? 
what inputs are we tallying up from the string is it just letters, or numbers as well. Do we count any special characters
or do we omit them? Are we differentiating between the capitalized and lowercase elements in the string?

what are the outputs? 
how are we going to present the output is it going to be an aray or are we setting up an object with the results?

Can the output be determined by the input?
what are the edgecase scenarios if the value passed in that is not a string but a null, or undefined, or an object. 
how to handle that 

What is the labeling of the important pieces?
IN this case well have char representing each character, our return { object name } will be elements, the function name 
will be chartCount(str) and str being the string passed into the function

Examples for the problem:
easy : 
'aaaa' //{a:4}
'hello' //{h:1, e:1, l:2, o:1}

complex :
"my phone number is 1234" 
"Hello hi HoW are You !!! "

empty inputs: 
''
charCount()


invalid inputs:
charCount({})
charCount(null)


*/

//step 3 brak it down pseudocode the process


function charCount(str){
    //create an object where indivisual char will go
    

    //loop through string to check each value 
        //if  char is letter or number AND char is the key in object add 1 count to it
        //if char is letter or number AND is not a key in the object object add key and add 1 to it
        //if char is cometihng else do nothing 
    //return object as output 
}