interface Person{
    name: string;
    email: string;
    salary:string;
    active:boolean;
}
var valemail:any = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

var people = Array<Person>();
var people2 = Array<Person>();

function createPeople(): void{
    let newPerson:any;
    for (let i = 0; i < 10; i++) {
        newPerson = {
            name:`Ricardo${i}`,
            email:`i${i}@gmail.com`,
            salary:(i+1000),
            active: i%2==0?true:false
        }

        people.push(newPerson);
        
        
    }
   // console.log(people);
}

let noVal:any;
noVal = {
    name:"Jose Madero",
    email:"loma12com",
    salary:2000,
    active:true
}
people.push(noVal);
createPeople();

function Validos():void{
    for(let i=0;i<people.length;i++){
        if(people[i].active && (valemail.test(people[i].email))){
            console.log(people[i]);
        }
    }
}

Validos();




