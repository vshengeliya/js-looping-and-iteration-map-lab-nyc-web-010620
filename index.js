function lowerCaseDrivers(array) {
 return array.map(function(name){
     return name.toLowerCase();
 });
}

function nameToAttributes(array){
     return array.map(function (item){
    
        let fName  = item.split(' ')[0];
        let lName  = item.split(' ')[1];
        return {firstName: fName, lastName:lName}
        });
};


function attributesToPhrase(array){
    return array.map(function(item){
        return `${item.name} is from ${item.hometown}`
    });
}