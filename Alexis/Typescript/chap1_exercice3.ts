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
    const _fakeStudents : number[] = [12, 11, 123, 8, 9, 100, 90, 23, 22, 99, 198, 202, 11, 19, 78, 112] ;
    let _groups = RandomGroup(students,2);
    console.log(_groups);
    let _count = 0;
    let _result = 8;

    _fakeStudents.forEach((student) =>
    {
        for(let i = 1;i<_groups.size;i++)
        {
            let _tmp = _groups.get(i);
            if(_tmp)
            {
                for(let j = 0;j<_tmp.length;j++)
                {
                    if(_tmp[j] === student)
                    {
                        _count++;
                    }
                }
            }

        }
    });

    if(_groups.size === _result && _count === _fakeStudents.length)
    {
        console.log("Vous avez la bonne taille de groupe et tout les étudiants on était placer");
    } else throw new Error("Vous avez pas la bonne taille de groupe ou tout les étudiants on pas était placer");
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