// How to get inner HTML of an element in JS?

// InnerHTML property of HTML DOM is used to get inner Html of an element in JavaScript.

// Example Usage:

// This is inner Element

<script type="text/javascript">
	var  inner= document.getElementById("inner").innerHTML ;
	console.log(inner); // This is inner Element
	document.getElementById("inner").innerHTML = "Html changed!";
	var  inner= document.getElementById("inner").innerHTML ;
	console.log(inner); // Html changed!
</script>
