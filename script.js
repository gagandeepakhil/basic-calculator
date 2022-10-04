//stack operations define
stack=[0]
function push(val,stack){
    stack[stack.length]=val
}
function pop(stack){
    me=stack[stack.length-1]
    stack.length=stack.length-1
    return me
}
//stack operations end
//printing to screen start
    //capturing buttons
    buttons=document.getElementsByClassName('con')[0].getElementsByTagName('button')
    //capturing screen
    screentexts=document.getElementsByClassName('screen')[0].querySelector('h3')
    //change text
    function change(totext){
        document.getElementsByClassName('screen')[0].querySelector('h3').innerText = document.getElementsByClassName('screen')[0].querySelector('h3').innerText + totext
    }
    //delete text
    function deleteit(){
        document.getElementsByClassName('screen')[0].querySelector('h3').innerText=""
    }
    function delp(){
        mil=document.getElementsByClassName('screen')[0].querySelector('h3')
        mil.innerText=mil.innerText.slice(0,-1)
    }
    //adding event listeners to button
    buttons[0].addEventListener('click',()=>{change(1)})
    buttons[1].addEventListener('click',()=>{change(2)})
    buttons[2].addEventListener('click',()=>{change(3)})
    buttons[3].addEventListener('click',()=>{change(4)})
    buttons[4].addEventListener('click',()=>{change(5)})
    buttons[5].addEventListener('click',()=>{change(6)})
    buttons[6].addEventListener('click',()=>{change(7)})
    buttons[7].addEventListener('click',()=>{change(8)})
    buttons[8].addEventListener('click',()=>{change(9)})
    buttons[9].addEventListener('click',()=>{deleteit()})
    buttons[10].addEventListener('click',()=>{change(0)})
    buttons[11].addEventListener('click',()=>{deleteit()})
    buttons[12].addEventListener('click',()=>{change('(')})
    buttons[13].addEventListener('click',()=>{change(')')})
    buttons[14].addEventListener('click',()=>{delp()})
    buttons[15].addEventListener('click',()=>{change('+')})
    buttons[16].addEventListener('click',()=>{change('-')})
    buttons[17].addEventListener('click',()=>{change('*')})
    buttons[18].addEventListener('click',()=>{change('/')})
//screen printing ends
//capturing expression on screen
    i=0
    while(i<18 && i!=11){
        buttons[i].addEventListener('click',()=>{
            expression=document.getElementsByClassName('screen')[0].querySelector('h3').innerText
            push(expression,stack) 
        })
        i++
    }
    expr=stack
//code for evaluation
 
function evaluate(expression)
{
    let tokens = expression.split('');
    let values = [];
    let ops = [];
    for (let i = 0; i < tokens.length; i++)
    {
        if (tokens[i] == ' ')
        {
            continue;
        }
        if (tokens[i] >= '0' && tokens[i] <= '9' )
        {
            let sbuf = "";
            while (i < tokens.length &&
                    tokens[i] >= '0' &&
                        tokens[i] <= '9')
            {
                sbuf = sbuf + tokens[i++];
            }
            values.push(parseInt(sbuf, 10));
              i--;
        }
        else if (tokens[i] == '(')
        {
            ops.push(tokens[i]);
        }
        else if (tokens[i] == ')')
        {
            while (ops[ops.length - 1] != '(')
            {
              values.push(applyOp(ops.pop(),
                               values.pop(),
                              values.pop()));
            }
            ops.pop();
        }
        else if (tokens[i] == '+' ||
                 tokens[i] == '-' ||
                 tokens[i] == '*' ||
                 tokens[i] == '/')
        {
            while (ops.length > 0 &&
                     hasPrecedence(tokens[i],
                                 ops[ops.length - 1]))
            {
              values.push(applyOp(ops.pop(),
                               values.pop(),
                             values.pop()));
            }
            ops.push(tokens[i]);
        }
    }
    while (ops.length > 0)
    {
        values.push(applyOp(ops.pop(),
                         values.pop(),
                        values.pop()));
    }
    return values.pop();
}
function hasPrecedence(op1, op2)
{
    if (op2 == '(' || op2 == ')')
    {
        return false;
    }
    if ((op1 == '*' || op1 == '/') &&
           (op2 == '+' || op2 == '-'))
    {
        return false;
    }
    else
    {
        return true;
    }
}
function applyOp(op, b, a)
{
    switch (op)
    {
    case '+':
        return a + b;
    case '-':
        return a - b;
    case '*':
        return a * b;
    case '/':
        if (b == 0)
        {
            return ("undefined");
        }
        return (parseInt(a / b ,10) );
    }
    return 0;
}
document.getElementsByClassName('enter')[0].addEventListener('click',()=>{
    expi=stack[ stack.length - 1]
    document.getElementsByClassName('screen')[0].querySelector('h3').innerText=evaluate(expi)
})

    
    










