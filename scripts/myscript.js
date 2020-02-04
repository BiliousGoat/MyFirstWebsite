
document.getElementById("UseThisDiv").innerHTML = "Hello"

document.getElementById("MyButton").onclick = () => {
	displayFirstNameFunction(document.getElementById("FirstName").value, document.getElementById("LastName").value)
	anotherFunctionHello(document.getElementById("UseThisDiv"))
}

function displayFirstNameFunction (fName, lName) {
	document.getElementById("UseThisDiv").innerHTML = "Hello there: " + fName + " " + lName
}

document.getElementById("UseThisDiv").innerHTML = "Hello"
