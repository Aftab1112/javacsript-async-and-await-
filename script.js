// function getData(dataId,getNextData){
//     setTimeout(() =>{
//         console.log("data",dataId)
//         if(getNextData){
//             getNextData()
//         }
//     },2000)
// }

// getData(1,() =>{
//     console.log("getting data 2....")
//     getData(2 ,() =>{
//         console.log("getting data 3....")
//         getData(3 , () => {
//             console.log("getting data 4....")
//             getData(4, () =>{
//                 console.log("Completed")
//             })
//         })
//     })
// })

// let promise = new Promise((resolve,reject) =>{
//     console.log("I am a promise")
//     reject("WOW")
// })

// const getPromise = () =>{
//     return new Promise((resolve,reject) =>{
//         console.log("I am A Promise")
//         // resolve("success")
//         reject("error")
//     })
// }

// let promise = getPromise()

// promise.then(() => {
//     console.log("Promised Fulfilled")
// })

// promise.catch(() =>{
//     console.log("Rejected")
// })

// function asyncFunc(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             console.log("data 1 ")
//             resolve("success")
//         },4000)
//     })

// }

// function asyncFunc2(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             console.log("data 2 ")
//             resolve("success")
//         },4000)
//     })

// }

// console.log("fetching data 1.....")

// let p1 = asyncFunc()
// p1.then((res) =>{
//     console.log("fetching data 2.....")
//     let p2 = asyncFunc2()
//     p2.then((res) =>{})
// })



// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//             console.log("data",dataId)
//             resolve("success")
//         },5000)
//     })
// }

// console.log("getting data 1.....")
// getData(1)
// .then((res) =>{
//     console.log("getting data 2.....")
//     return getData(2)
// })
// .then((res) =>{
//     console.log("getting data 3.....")
//     return getData(3)
// })
// .then((res) =>{
//     console.log("getting data 4.....")
//     return getData(4)
// })
// .then((res) =>{
//     console.log(res)
// })



// function api(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             console.log("weather data")
//         resolve(200)
//         },3000)
//     })
// }

// async function getWeatherData(){
//     await api()
//     await api()
// }

function dataId(dataId){
    return new Promise ((resolve,reject) =>{
        setTimeout(() =>{
            console.log("data" ,dataId)
            resolve("success")
        },5000)
    })
}

// async function getDataId(){
//     console.log("fetching data 1.....")
//     await dataId(1)
//     console.log("fetching data 2.....")
//     await dataId(2)
//     console.log("fetching data 3.....")
//     await dataId(3)
//     console.log("success")
// }

// getDataId()

(async function (){
    console.log("fetching data 1.....")
    await dataId(1)
    console.log("fetching data 2.....")
    await dataId(2)
    console.log("fetching data 3.....")
    await dataId(3)
    console.log("success")
})()












