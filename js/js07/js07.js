console.log("Sesion Js07");

const getUsers = (page) => {

    const url = `https://reqres.in/api/users?page=${page}`;

    fetch(url)
        .then( response=> {
            console.log("Status "+response.status);
            return response.json(); 
        })
        .then(users=>{
            console.log(users);
            console.log("Total de elementos: "+ users.total);
            console.log(users.data);
            for (const user of users.data) {
                console.log(`${user.id} - ${user.first_name} ${user.last_name}`);
                
            }
            
            
            
        })
        .catch( error => console.log(error));

} 