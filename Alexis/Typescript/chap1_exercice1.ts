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
    let _result = false;
    const _resultFunction = showStatus(_firstUser);
    if(_result != _resultFunction) throw new Error("This user doest'n have status");
    else console.log(`This result we need ${_result} and the one we obtained ${_resultFunction}`);
}

function case2()
{
    let _secondUser: User = 
    {
        name:"Alexis",
        id:2,
        status:"Zzz"
    }
    let _result = true;
    const _resultFunction = showStatus(_secondUser);
    if(_result != _resultFunction) throw new Error("This user doest'n have status");
    else console.log(`This result we need ${_result} and the one we obtained ${_resultFunction}`);
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