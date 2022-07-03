// How do you validate null or empty value in JS?

// You can check a value for null or empty in javascript by using below code snippet

function isnotEmpty(foo){

	if(foo==null || foo===""){
		return false;

	}
	return true;
}