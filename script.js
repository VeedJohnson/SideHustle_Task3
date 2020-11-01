'use strict'

    const txtOutput = document.getElementById("txtOutput");
    const evaluate = document.getElementById("evaluate");

    evaluate.addEventListener("click", function(){
        const names = document.getElementById("name").value;
        const hours = document.getElementById("salary").value;
        // const extra = document.getElementById("tip").value;
        let salary;
        if (hours > 4) {
            let extra = hours - 4 //To get the number of extra hours worked for tipping
            salary = hours * 1000;
            let tip = extra * 200;
            let total = salary + tip;
    
            txtOutput.value = `Hi ${names},
Your salary for today is:  N${total} 
You got a tip of N${tip} for working extra ${extra} hours`
        }   else if(hours <= 4){
            salary = hours * 1000;

            txtOutput.value = `Hi ${names}, \n\
            Your salary for today is:  N${salary}`
        }; 
    });