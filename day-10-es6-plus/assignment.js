let student={
    name:"vignesh",
    class:'cse',
    year:null,
    // address:{
    //     state:"Tamil Nadu",
    //     city:'chennai',
    // }
}

// console.log(student.address.country) //TypeError: Cannot read properties of undefined (reading 'country')
console.log(student.address?.country) //undefined
console.log(student.name?.address?.country) //undefined
console.log(student.year?.age)
//Use nullish coalescing to provide default values for missing user settings
let user ={
    profile:{
        firstname:'vignesh',
        secondname:null,
        age:21,

    },
    hobby:"movies",

}

console.log(user.profile.secondname??"N")
console.log(user.hobby??"series")
// Write a settings object and safely read deeply nested optional fields

let settings={
    user:{
        name:'vignesh',
        address:{
          country:"india",
          state:{
            place:"tamil_nadu",
            district:"chennai"
          }
        }

    }
}

console.log(settings.user.address.state.district)
console.log(settings.user.address.state.district.area?.pincode)


