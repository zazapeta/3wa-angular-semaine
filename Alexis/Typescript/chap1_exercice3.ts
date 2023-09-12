function RandomGroup(_array :number[],_max:number) :Map<number,number[]>
{
    let _group = new Map<number,number[]>();
    let _i :number = 2;
    let _index:number = 1;

    while(_array.length > 0)
    {
        if(_i === 2)
        {
            _group.set(_index,[]);
            _index++;
            _i=0;
        }
        else
        {
            let _rand :number = Math.floor(Math.random()*_array.length);
            _group.get(_index-1)?.push(_array[_rand]);
            _array.splice(_rand,1);
            _i++;
        }
       
    }
    return _group;
}


function case1()
{
    const students : number[] = [12, 11, 123, 8, 9, 100, 90, 23, 22, 99, 198, 202, 11, 19, 78, 112] ;
    let _groups = RandomGroup(students,2);
    console.log(_groups);
}

function main()
{
    try
    {
        case1();
    }
    catch(e)
    {
        console.error(e);
    }
}

main();