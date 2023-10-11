const title = document.getElementById('header-title')
const conversionButton = document.getElementById('input-button')

// conversionButton.addEventListener('click', function(){
//     title.innerHTML = "wassaf"
// })

conversionButton.addEventListener('click', changeTitle)

function changeTitle(){
    title.innerHTML = "hello"
}

const integerRegex = /^-?\d+$/
console.log(integerRegex.test("asade"))
console.log(integerRegex.test("123"))
console.log(integerRegex.test(456))
console.log(integerRegex.test("1asf"))

//INI HASIL EDITAN