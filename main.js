//Canada Quiz 

//global variables
let score = 0;

//Event Listeners 
document.getElementById('submit').addEventListener('click', markQuiz)

//Event Functions
function markQuiz () { 
    //get input value (what answers to looks for)
    let answer1 = document.getElementById('a1').value;
    answer1 = answer1.toLowerCase();

    let answer2 = document.getElementById('a2').value;
    answer2 = answer2.toLowerCase();

    let answer3 = document.getElementById('a3').value;
    answer3 = answer3.toLowerCase();

    let answer4 = document.getElementById('a4').value;
    answer4 = answer4.toLowerCase();


    //test input variable and check if answer is correct 

    if (answer1 == 'red and white' || answer1 == 'white and red') {
        //mark question 1 
        document.getElementById('a1').style.backgroundColor = "#b9e69f"; 
        document.getElementById('a1feedback').innerHTML = 'Correct!';
        score++; 
        

    } else {
        document.getElementById('a1').style.backgroundColor = "#f57c57";
        document.getElementById('a1feedback').innerHTML = 'Incorrect!';
        
    }

    if (answer2 == 'french and english' || answer2 == 'english and french') {
        //mark question 2 
        document.getElementById('a2').style.backgroundColor = "#b9e69f"; 
        document.getElementById('a2feedback').innerHTML = 'Correct!';
        score++; 
    
        
    } else {
        document.getElementById('a2').style.backgroundColor = "#f57c57";
        document.getElementById('a2feedback').innerHTML = 'Incorrect!';
        
    }

    if (answer3 == 'ottawa' || answer3 == 'City of Ottawa') {
        //mark question 3 
        document.getElementById('a3').style.backgroundColor = "#b9e69f";
        document.getElementById('a3feedback').innerHTML = 'Correct!'; 
        score++; 
        
    } else {
        document.getElementById('a3').style.backgroundColor = "#f57c57";
        document.getElementById('a3feedback').innerHTML = 'Incorrect!';
    }

    if (answer4 == 'beaver' || answer4 == 'a beaver' || answer4 == 'the beaver') {
        //mark question 4 
        document.getElementById('a4').style.backgroundColor = "#b9e69f";
        document.getElementById('a4feedback').innerHTML = 'Correct!';
        score++; 
        
    } else {
        document.getElementById('a4').style.backgroundColor = "#f57c57";
        document.getElementById('a4feedback').innerHTML = 'Incorrect!';
    }

    document.getElementById("results").innerHTML = score ; 
    document.getElementById("resultspt2").innerHTML = score / 4 * 100 ; 


    //display final results
    if (score <= 2) {
        document.getElementById('message').innerHTML = 'Uh Oh! Better Luck Next Time! :( ';
        
    } else if (score == 3) {
        document.getElementById('message').innerHTML = "Nice job! Try to get 100% next time! "
    } else  {
        document.getElementById('message').innerHTML = "Perfect! Great Job! :)"
    }


}