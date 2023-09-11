function showStatus(_user :User) : string
{
    if(_user.status)
        return `Yes, this user have status : ${_user.status}`;
    else return "This user does not have status";
}

interface User 
{
    name: string;
    id: number;
    status?: string; // attribut facultatif
}

function case1()
{
    let _firstUser: User = 
    {
        name:"Alexis",
        id:1
    }
    console.log(showStatus(_firstUser));
}

function case2()
{

    let _secondUser: User = 
    {
        name:"Alexis",
        id:2,
        status:"Zzz"
    }
    console.log(showStatus(_secondUser));
}

function main()
{
    try
    {
        case1();
        case2();
    }
    catch(e)
    {
        console.error(e);
    }
}

main();