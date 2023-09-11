function somme(_value :number, _value2 :number) : number
{
    return _value+_value2;
}

function main()
{
    let _value  = 0;
    let _value2 = 2;

    try
    {
        let _result = somme(_value,_value2);
        console.log(_result);
    }
    catch(e)
    {
        console.error(e);
    }
    //Test
}

main();
