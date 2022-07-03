// How to add/remove properties to object dynamically in JS?

// You can add a property to an object using object.property_name =value, delete object.property_name is used to delete a property.

// Example:

    let user = new Object();
    // adding a property
    user.name='Anil';
    user.age  =25;
    console.log(user);
    delete user.age;
    console.log(user);