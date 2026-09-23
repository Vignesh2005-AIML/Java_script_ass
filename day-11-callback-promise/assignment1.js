//Write a callback-based function that simulates a delayed task using setTimeout

function task(callback){
    console.log("task started")
    setTimeout(()=>{
        callback()
    },3000)
}

function task2(){
    console.log("task2 is delayed")
}

task(task2)
console.log("all task are completed")

//Rewrite the same logic using a Promise that resolves after 2 seconds

function promise(){
    console.log("task started")
    let task= new Promise((resolve)=>{
          setTimeout(()=>{
            console.log("task2 delayed")
            // resolve()
    },2000)
    })
    console.log("all task are completed")
    return task
}

promise()

//Chain two Promises together to simulate a sequence of steps (e.g. login then fetch profile)

  function login() {
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("Login successful");
            resolve("user123");
        }, 2000);

    });
}

function fetchProfile(userId) {
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("Profile fetched for:", userId);
            resolve({
                name: "Vignesh",
                age: 21
            });
        }, 2000);

    });
}

login()
    .then((userId) => {
        return fetchProfile(userId);
    })
    .then((profile) => {
        console.log("Profile:", profile);
    });

// Deliberately reject a Promise and handle it with .catch()

login=new Promise((resolve, reject) => {
    
    let success = false;
     if (success) {
         resolve("Login successful")
        }else {
            // reject("Login failed")
            reject(new Error("Login failed"))
        }

});


login
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(error)
    });