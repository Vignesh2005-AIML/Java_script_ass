//Rewrite the Day 11 Promise chain using async/await

// function login() {
//     return new Promise((resolve) => {

//         setTimeout(() => {
//             console.log("Login successful");
//             resolve("user123");
//         }, 2000);

//     });
// }

// function fetchProfile(userId) {
//     return new Promise((resolve) => {

//         setTimeout(() => {
//             console.log("Profile fetched for:", userId);
//             resolve({
//                 name: "Vignesh",
//                 age: 21
//             });
//         }, 2000);

//     });
// }

// async function promise() {
//     let value= await login()
//     let data= await fetchProfile(value)
//     console.log(data)
// }

// promise()

//Use fetch() to call the public GitHub Users API: https://api.github.com/users/{username}

async function getUser() {

    try {
        const response = await fetch(
            "https://api.github.com/users/arul637"
        );

        const data = await response.json();

        console.log(data)
        console.log(data.name)
        console.log(data.email)
        console.log(data.location)
        console.log(data.bio)
        console.log(data.followers)


    } catch (error) {
        console.log("Error:", error)
    }
}

getUser();