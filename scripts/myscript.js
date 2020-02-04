document.getElementById("UseThisDiv").innerHTML = "Hello"

document.getElementById("MyButton").onclick = () => {
	displayFirstNameFunction(document.getElementById("FirstName").value, document.getElementById("LastName").value)
	takeBathWaterQuanity(document.getElementById("BathwaterQuantity").value)
}

function displayFirstNameFunction (fName, lName) {
	document.getElementById("UseThisDiv").innerHTML = `Hello there ${fName} ${lName}`
}

function takeBathWaterQuanity (gallons) {
	document.getElementById("CustomerTotalDiv").innerHTML = `Hello you have ${gallons} on the way!`
}
