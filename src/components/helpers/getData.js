

export const getData = async () => {

    try {
        
        const url = 'https://jsonfy.com/users';
        const resp = await fetch( url );
        const users = await resp.json();
        console.log(users);
        
        
        return users;

    } catch (error) {
        console.log(error)
    }
}
