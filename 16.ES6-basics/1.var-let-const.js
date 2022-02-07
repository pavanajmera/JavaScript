// // // function sample(){
// // //     var foo = 'blue'
// // //     console.log(foo) // blue
// // // }

// // // console.log(foo) // Reference Error


// // /**
// //  * ? Block Scoped
// //  */

// // if(true){
// //     var foo = 'Hello'
// //     let bar = 'How are you?'
// //     const baz = 'I am Fine'

// //     console.log(foo)
// //     console.log(bar)
// //     console.log(baz)
// // }

// // console.log(foo)
// // // console.log(bar) // Reference Error
// // // console.log(baz) // Reference Error


// // for (var count=0; count<3; count++){
// //     console.log(count)
// // }

// // console.log(count)

// // for (let total=0; total<3; total++){
// //     console.log(total)
// // }

// // console.log(total)


// function sample(){
//     let foo = 1;
//     foo = 100

//     // let foo = 101 // foo has already declared
//     // console.log(foo)

//     const count =200
//         count = 300

//         console.log(count)
// }


const skills = ['JavaScript', 'ReacJS', 'NodeJS']

//skills[3] = 'Angular'
skills.push('VueJs')

console.log(skills)


const API_URL           = ''
const DB_SOURCE_NAME    = ''
const USERNAME          = ''
const PASSWORD          = ''