let output=document.getElementById("result");


function display(num)
{
    output.value += num;
}
function equal()
{
    try
    {
        output.value = eval(output.value);
    }
    catch(err)
    {
        alert("not valid")
    }
}
function c()
{
    output.value =" ";
}
function del()
{
    output.value =output.value.slice(0,-1);
}