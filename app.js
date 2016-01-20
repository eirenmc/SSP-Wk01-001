//Just printing to the console
console.log("hello world");

function add (a, b){
	var ans = a + b;
	return ans;
};

var theAns;
theAns =  add(5,3);
console.log("the ans is" + theAns);

//part 2

var name = "John"; //string
var age = 21; //number
var male = true; //boolean
var myArray = new Array(); //creates an array
if (age == 21){
	console.log("Your still young");
};

//part 3
var o = new Object(); //an empty object
var anotherObject = {}; //another empty object


/* AS code

public class Person{
	public var name:string;
	public var age:int;
	public var male:boolean
	
	function person(){
		//default  to female
		this.male = false;
	}
	
	public growOld():void{
		this.age++;
	}
}

//somewhere else
var p:Person = new Person();

p.name = "John";
p.age = 21;
p.male = true;

//calls the method growOld
p.growOld();

*/


//Creating an empty object
var person = {};
person.name = "John";
person.age = 21;
person.male = true;

person.growOld = function(){
	this.age++;
};

//another way to create an empty object
var anotherPerson = {
	name:"mary",
	age: 24,
	male:false,
	growOld:function(){
		this.age++;
	}
	//friends: new Array(); - creating a friends rray thats empty
	//friends: ["Tom", "Pat"]
};

for(var i = 0; i < 10; i++){
	console.log(anotherPerson.name + "is" + anotherPerson.age);
	anotherPerson.growOld();
}

