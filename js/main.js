// var newStudent = new Student('bobby', 'Johnson');

// console.log(newStudent);


// var student = {
// 	first: 'Josue',
// 	last: 'Rivera',
// 	fullName: function(){
// 		return this.first + ' ' + this.last;
// 	}
// }



// constructor function example
// this function creates an object, can be reused
// function Students(first, last){
// 	this.first = first,
// 	this.last = last,
// 	this.fullName = function(){
// 		return this.first + ' ' + this.last;
// 	}
// }



// adding new student to class
// when creating a new object it has to be announced using 'new'
// var newStudent = new Students('Bobby', 'Johnson'); 
// var newStudent2 = new Students('Joe', 'Montana'); 

// console.log(newStudent);



// to add newStudent to an array
// var arr = [];

// arr.push(newStudent2);
// arr.push(newStudent);
// console.log(arr);
















// new example
var array = [];
// this creates an object
function Students(first, last){
	this.first = first,
	this.last = last,
	this.fullName = function(){
		return this.first + ' ' + this.last;
	}
	pushToArray(array, this); // this line was added
};

function pushToArray(arr, object){
	arr.push(object);
}

var obj1 = new Students('Jerry', 'Rice');
var obj2 = new Students('Kamila', 'Weiland');
var obj3 = new Students('Alejandrina', 'Rivera');

console.log(array);

// to call whats inside the function
for(i=0; i<array.length; i++){
	console.log(array[i].fullName());
}




























// for(prop in student){
// 	if(typeof (student[prop]) == 'function'){
// 		console.log(student[prop]())
// 	}else{
// 		console.log(student[prop])
// 	}
	
// }

// function calculate(a,b){
// 	return a + b;
// }

// var ten = calculate(10, 5);
// console.log(ten);



