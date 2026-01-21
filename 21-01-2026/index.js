var data = prompt("Enter address");
var country = prompt("Enter coutnry");

const obj3 = {
    bio:["ali","khan", 20],
    address:{city:"karachi", country:"pakistan", state:"sindh"},
} 
console.log(obj3[data]);
console.log(obj3[data][country]);

// var firstKey = prompt("Enter address");
// var SecondKey = prompt("Enter coutnry");

const obj4 = {
    bio:["ali","khan", 20],
    address:{city:"karachi", country:"pakistan", state:{smallState:"shara-e-faisal",largeState:"PAF"}}
} ;

console.log(obj4["address"]["state"]["largeState"]);

const gender = "male";
switch (gender) {
    case "male":
        console.log("Gender is male");
        break;

    default:
        break;
}

const Gender = "male" ? "male" : "female";
console.log(Gender);

