function showStatus(_user :User) : boolean
{
    if(_user.status)
        return true;
    else return false;
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
    if(showStatus(_firstUser)) console.log(`Yes, this user have status : ${_firstUser.status}`);
    else console.log("This user does not have status");
}

function case2()
{

    let _secondUser: User = 
    {
        name:"Alexis",
        id:2,
        status:"Zzz"
    }
    if(showStatus(_secondUser)) console.log(`Yes, this user have status : ${_secondUser.status}`);
    else console.log("This user does not have status");
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