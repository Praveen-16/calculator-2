let buttons =document.getElementsByTagName('button');

let result = document.getElementById('result');
// document.addEventListener('keydown', e=>{
//     console.log(e)
// })



for(i=0;i<buttons.length;i++){
    buttons[i].onclick = function(){
        let input = this.innerText;
        updateDisplay(input)
        
    }
}
function updateDisplay(input){
    let currentDisplay = result.innerText
    if(currentDisplay=="0"){
    
        if(input!="C"&&input!="DEL" && input!="="){
            result.innerText=""
            result.innerText=input
        }

    }
    else{
       
    
        if(input=="DEL"){
            result.innerText = currentDisplay.substring(0,currentDisplay.length-1)
            // if(result.innerText==""){
            //     result.innerText="0"
            // }
        }
        if(input=="C"){
            result.innerText="0"
        }
        if(input!="C"&&input!="DEL"&&input!="="){
            result.innerText+=input
          
        }

        if(input=="="){          
            let display = result.innerText
            result.innerText= eval(display)
        }
    }

}

document.addEventListener('keydown', e=>{
    let nowDispaly=  result.innerHTML
    let displayKey=e.key
    if (nowDispaly=="0") {
        result.innerText=""

        // result.innerText=displayKey
        
        switch (e.key) {
            case "1":
                result.innerHTML+=e.key
                break;
            case '2':
                result.innerHTML+=e.key
                break;
            case "3":
                result.innerHTML+=e.key
                break;
            case "4":
                    result.innerHTML+=e.key
                break;
            case "5":
                        result.innerHTML+=e.key
                break;
            case "6":
                 result.innerHTML+=e.key
            break;
                    case "7":
                                result.innerHTML+=e.key
                                break;
                                case "8":
                                    result.innerHTML+=e.key
                                    break;
                                    case "9":
                                        result.innerHTML+=e.key
                                        break;
                                        case "0":
                                            result.innerHTML+=e.key
                                        break;
                                        case "/":
                                            result.innerHTML+=e.key
                                            break;
                                            case "*":
                                                result.innerHTML+=e.key
                                                break;
                                                case "-":
                                                    result.innerHTML+=e.key
                                                    break;
                                                    case "+":
                                                        result.innerHTML+=e.key
                                                        break;
                                                    
                                                        // result.innerText = displayKey
                                                        // console.log(displayKey)
                                                        // displayKey= result.innerText
        
                                                        // result.innerText= eval(displayKey)
                                                        // console.log(eval(displayKey))
                                                        
        
            default:
                break;
        }
      
       
    }
    else{
        switch (e.key) {
            case "1":
                result.innerHTML+=e.key
                break;
            case '2':
                result.innerHTML+=e.key
                break;
            case "3":
                result.innerHTML+=e.key
                break;
            case "4":
                    result.innerHTML+=e.key
                break;
            case "5":
                        result.innerHTML+=e.key
                break;
            case "6":
                 result.innerHTML+=e.key
            break;
                    case "7":
                                result.innerHTML+=e.key
                                break;
                                case "8":
                                    result.innerHTML+=e.key
                                    break;
                                    case "9":
                                        result.innerHTML+=e.key
                                        break;
                                        case "0":
                                            result.innerHTML+=e.key
                                        break;
                                        case "/":
                                            result.innerHTML+=e.key
                                            break;
                                            case "*":
                                                result.innerHTML+=e.key
                                                break;
                                                case "-":
                                                    result.innerHTML+=e.key
                                                    break;
                                                    case "+":
                                                        result.innerHTML+=e.key
                                                        break;
                                                    case "Backspace":
                                                        result.innerText = nowDispaly.substring(0,nowDispaly.length-1)
                                                        
                                                    // case 'Enter':
                                                    //     let displayKey = result.innerHTML
                                                    //     console.log(displayKey)
                                                    //     resultCame = eval(displayKey)
                                                    //     console.log(resultCame)
        
                                                    //     console.log(eval(displayKey))
                                                    //     result.innerText= resultCame
                                                    //     // eval(displayKey)=result.innerHTML
                                                        break;
        
            default:
                break;
        }
    }
  

    }
)


document.addEventListener('keydown', e=>{
    let enter = e.key


    if ( enter =="Enter"){

        console.log("hello")
        let finalResult = result.innerHTML
        let val=eval(finalResult)
        result.innerHTML=eval(finalResult)
        console.log(result.innerHTML)
        finalResult = result.innerHTML
        result.innerHTML= finalResult
        console.log(finalResult)
      /*  if(val.contains('+') || val.contains('-')  || val.contains('%')  || val.contains('*')  || val.contains('/')){

        }
        else{
        result.innerHTML=val
        }*/
    }
})
