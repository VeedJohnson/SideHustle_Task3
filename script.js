'use strict'

    const txtOutput = document.getElementById("txtOutput");
    const evaluate = document.getElementById("evaluate");

    evaluate.addEventListener("click", function(){
        const names = document.getElementById("name").value;
        const hours = document.getElementById("salary").value;
        const extra = document.getElementById("tip").value;

        let salary = hours * 1000;
        let tip = extra * 200;
        let total = salary + tip;
        let hoursWorked = Number(hours) + Number(extra);

        txtOutput.value = `Hi ${names}, \n\
Your salary for total "${hoursWorked}" hours worked is: N${total}`
    });