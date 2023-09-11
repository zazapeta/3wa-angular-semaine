interface User 
{
    name: string;
    id: number;
    status?: string; // attribut facultatif
}

class AddUser
{
    private mTabUser : User[];

    constructor()
    {
        this.mTabUser = [];
    }

    Add(_user : User)
    {
        if(!_user) return;
        if(this.find(_user))
        {
            throw new Error("this user already exist in table");
        }
        else 
        {
            console.log("Add new user in the table");
            this.mTabUser.push(_user);
        }
    }

    private find(_user : User) : boolean
    {
        for(let _i = 0;_i<this.mTabUser.length;_i++)
        {
            if(this.mTabUser[_i] === _user)
                return true;
        }
        return false;
    }

    get getLength() {return this.mTabUser.length;}
}

function case1()
{
    let _firstUser: User = 
    {
        name:"Alexis",
        id:1,
        status:"Zzz"
    }

    let _add = new AddUser();
    _add.Add(_firstUser);
    let _result = 1;

    if(_result != _add.getLength)
    {
        throw new Error(`Le résultat attendu et ${_result} mais on obtiens ${_add.getLength}`);
    }
    else console.log(`Le résultat attendu et ${_result} et on obtiens ${_add.getLength}`);
}

function case2()
{
    let _secondUser: User = 
    {
        name:"Pierre",
        id:2,
        status:"Zzz"
    }
    let _thirdUser: User = 
    {
        name:"Test",
        id:3,
        status:"Zzz"
    }
    let _result = 2;
    let _add = new AddUser();

    try
    {
        _add.Add(_secondUser);
        _add.Add(_thirdUser);
        _add.Add(_secondUser);
    }
    catch(e)
    {
        console.error(e);
    }

    if(_result != _add.getLength)
    {
        throw new Error(`Le résultat attendu et ${_result} mais on obtiens ${_add.getLength}`);
    }
    else console.log(`Le résultat attendu et ${_result} et on obtiens ${_add.getLength}`);
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