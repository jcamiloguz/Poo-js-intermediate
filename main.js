const juan = {
  name: "Juan",
  age: 25,
  approvedCourses: ["HTML", "CSS", "JS"],
  address: {
    street: "123 Main St",
    city: "Miami",
    state: "FL",
  },
  addCourse: function (course) {
    this.approvedCourses.push(course)
  },
}

// console.log(Object.keys(juan))
// console.log(Object.getOwnPropertyNames(juan))
// console.log(Object.entries(juan))

// console.log(Object.getOwnPropertyDescriptors(juan));

// Object.defineProperty(juan, 'prueba', {
//   writable: false,
//   enumerable: false,
//   configurable: false,
//   value:'aliens'})
// Object.defineProperty(juan, 'navigator', {
//   value:'chrome',
//   writable: true,
//   enumerable: false,
//   configurable: true,
// })
// Object.defineProperty(juan, 'editor', {
//   value:'vscode',
//   writable: false,a
//   enumerable: true,
//   configurable: true,
// })
// Object.defineProperty(juan, 'terminal', {
//   value:'iterm',
//   writable: true,
//   enumerable: true,
//   configurable: false,
// })
// Object.seal(juan)

// console.log(Object.getOwnPropertyDescriptors(juan));

// function recursiva (){
//   if(){
//     //recursiva()
//   }else{
//     // sin recursiva()
//   }
// }

const nums = [1, 2, 3, 4, 5, 66, 7, 8, 9, 10]
// let num = 0

// for(let i = 0; i < nums.length; i++){
//   console.log(nums[i]);
// }

// function recursiva (numbersArray){
//   if(numbersArray.length != 0){
//     console.log(numbersArray[0]);
//     numbersArray.shift();
//     recursiva(numbersArray);
//   }
// }

// recursiva(nums)

function deepCopy(obj) {
  let copyObject

  if (typeof obj === "object") {
    copyObject = {}
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        copyObject[key] = deepCopy(obj[key])
      } else {
        copyObject[key] = obj[key]
      }
    }
  } else {
    copyObject = obj
  }

  return copyObject
}

const pepe = deepCopy(juan)
pepe.name = "Pepe"

// const StudentBase = {
//   name:undefined,
//   age:undefined,
//   approvedCourses:undefined,
//   learningPaths:undefined,
//   socialMedia:{
//     facebook:undefined,
//     twitter:undefined,
//     instagram:undefined,
//   }
// }

// const nath = deepCopy(StudentBase)
// Object.seal(nath)
// nath.name = 'Nath'
// nath.age = 25

// Object.isSealed(nath)

function requiredParam(param) {
  throw new Error("Missing required param: " + param)
}

// function createStudent({name = requiredParam("name"), age, courses=[], paths=[], twitter, facebook, instagram}={}){
//   const student = deepCopy(StudentBase)
//   Object.seal(student)
//   student.name = name
//   student.age = age
//   student.approvedCourses = courses
//   student.learningPaths = paths
//   student.socialMedia = {
//     facebook,
//     twitter,
//     instagram,
//   }
//   return student
// }
// function createStudent({
//   name = requiredParam("name"),
//   age,
//   courses = [],
//   paths = [],
//   twitter,
//   facebook,
//   instagram,
// } = {}) {
//   const private = {
//     _name: name,
//     _learningPaths: paths,
//   }
//   const public = {
//     // changeName: function(newName){
//     //   private._name = newName
//     // },
//     // readName: function(){
//     //   return private._name
//     // },
//     age,
//     approvedCourses: courses,
//     learningPaths: paths,
//     socialMedia: {
//       facebook,
//       twitter,
//       instagram,
//     },
//     get name() {
//       return private._name
//     },
//     set name(newName) {
//       if (newName.length !== 0) {
//         private._name = newName
//       } else {
//         throw new Error("Name cannot be empty")
//       }
//     },
//     get learningPaths() {
//       return private._name
//     },
//     set learningPaths(newLp) {
//       if (newName.newLp !== 0) {
//         private._learningPaths = this.learningPaths
//       } else {
//         throw new Error("Name cannot be empty")
//       }
//     },
//   }

//   //   Object.defineProperties(public,{
//   //     readName:{
//   //       writable:false,},
//   //   changeName:{
//   //     writable:false,
//   //   }
//   // }
//   //   )

//   return public
// }

function isArray(array) {
  return Array.isArray(array)
}
function LearningPath({
  name = requiredParam("name"),
  description,
  courses = [],
} = {}) {
  this.name = name
  this.description = description
  this.courses = courses
}

function Student({
  name = requiredParam("name"),
  age,
  courses = [],
  paths = [],
  twitter,
  facebook,
  instagram,
} = {}) {
  this.name = name
  this.age = age
  this.approvedCourses = courses
  this.socialMedia = {
    facebook,
    twitter,
    instagram,
  }
  if (!isArray(paths)) {
    console.warn("paths is not an array")
  }
  const private = {
    _learningPaths: [],
  }

  Object.defineProperty(this, "learningPaths", {
    get: function () {
      return private._learningPaths
    },
    set: function (newLP) {
      if (!(path instanceof LearningPath)) {
        console.log("Path is not a LearningPath")
      } else {
        private._learningPaths.push(newLP)
      }
    },
  })

  for (path of paths) {
    this.learningPaths = path
  }
}

const web = new LearningPath({
  name: "Web",
  description: "Learn how to build a web app",
  courses: ["HTML", "CSS", "JS"],
})

const jose = new Student({
  name: "Jose",
  age: 25,
  courses: ["HTML", "CSS", "JS"],
  paths: [web, { name: "d" }],
  twitter: "@jose",
  facebook: "jose",
  instagram: "jose",
})
