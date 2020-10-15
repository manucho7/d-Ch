

export const getData = async () => {

    const getData = async () => {

        const url = 'https://jsonfy.com/users';
        const resp = await fetch( url );
        const data = await resp.json();
        console.log(data);
        
        const users = data.map( (user) => {
            return {
                id: user.id,
                name: user.name
            }
        })
        
        console.log(users);
        return users;

    }

    getData();

}
