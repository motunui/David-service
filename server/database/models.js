import db from "./i"
import Sequelize from "./i"
var faker = require('faker')

//create 2 set of promises, each an array of even and comment promises.

const Event = db.define('event', {name: Sequelize.STRING})

const Comment = db.define("comment", {title: Sequelize.STRING, 
  user: Sequalize.STRING,
  rating : Sequelize.INTEGER,
  body: Sequelize.TEXT, 
  // review_date: Sequelize.DATE, A time stamp is created when something is 
  //stored into db
  trip_date: Sequelize.DATE,
  pic_URL: Sequalize.STRING,
  mobile : Sequelize.BOOLEAN,
  Flag : Sequelize.BOOLEAN
})

Event.hasMany(Comment)
var events = [];
var comments = []

// var generateComments = function(){
for (let i = 0; i < Math.floor(Math.random()*25) +1; i++) {
  comments.push(Comment.create({user: faker.internet.userName, 
      rating: Math.floor(Math.random() * 5 + 1), 
      body: faker.lorem.paragraphs, 
      trip_date: faker.date.past, 
      pic_URL : faker.image.city, 
      mobile: Math.random() >= 0.5, 
      flag : Math.random() >= 0.95}))
}

Promise.all(comments)
  // .then()
  .then(console.log(comments))
  .catch(error => {
      console.error(error)
  })

  

for (var i = 0; i < 100; i++){

  events.push(Event.create({name: faker.address.city,
       comments: comments
          }))
  // return Event.create({title: faker.})
      
}

Promise.all(events)
  .then(console.log("events created"))
  .catch(error => {
      console.error(error)
  })




// const Comment = db.define('comment', {
//     title: Sequelize.STRING,
//     user: Sequalize.STRING,
//     rating: Sequelize.INTEGER,
//     body: Sequelize.TEXT,
//     // review_date: Sequelize.DATE, A time stamp is created when something is
//     //stored into db
//     trip_date: Sequelize.DATE,
//     pic_URL: Sequalize.STRING,
//     mobile: Sequelize.BOOLEAN,
//     Flag: Sequelize.BOOLEAN
//   });
  
//   Event.hasMany(Comment);
  
//   let generateComments = function() {
//     let comments = [];
  
//     for (let i = 0; i < Math.floor(Math.random() * 25) + 1; i++) {
//       comments.push({
//         user: faker.internet.userName,
//         rating: Math.floor(Math.random() * 5 + 1),
//         body: faker.lorem.paragraphs,
//         trip_date: faker.date.past,
//         pic_URL: faker.image.city,
//         mobile: Math.random() >= 0.5, 
//         flag: Math.random() >= 0.95 // biased boolean generator 
//       });
//     }
//     return comments;
//   };
  
//   let generateEvents = () => {
//     let events = [];
//     for (var i = 0; i < 100; i++) {
//       events.push(
//         Event.create({ name: faker.address.city, comments: generateComments() })
//       );
//     }
  
//     return Promise.all(events)
//       .then(console.log('saved into database'))
//       .catch((error) =>{
//         console.log("Something went wrong!", error)
//       })
//   };
  
  // Promise.all(events)
  //   .then(console.log('events created'))
  //   .catch((error) => {
  //     console.error(error);
  //   });
  
  // (async () => {
  //   // let comments = await generateComments();
  //   let events = await generateEvents();
  // })()
  // ;


//  const User = db.define("user", {name : Sequelize.STRING, 
//     location : Sequelize.STRING, 
//     post_count : Sequelize.INTEGER,
//     Reptation: Sequelize.INTEGER,
//     profile_pic : Sequelize.STRING
// })

// User.hasMany(Comment)

// const Rebuttal = db.define("rebuttal", {comp_name: Sequelize.STRING, 
//     response_date: Sequelize.DATE, 
//     response_text: Sequelize.TEXT
// })

// Comment.belongsTo(Rebuttal)

// const UserPopup = db.define("userbox", {name: Sequelize.STRING, 
//     joined: Sequelize.STRING, 
//     level: Sequelize.INTEGER, 
//     contribs: Sequelize.INTEGER, 
//     cities_visited : Sequelize.INTEGER, 
//     helpful: Sequelize.INTEGER,
//     photos: Sequelize.INTEGER
// })

// User.belongsTo(UserPopup)

// const ReviewDistribution = db.define("distribution", {Excellent: Sequelize.INTEGER,
//     Very_good : Sequelize.INTEGER, 
//     Average : Sequelize.INTEGER, 
//     Poor: Sequelize.INTEGER,
//     Terrible : Sequelize.INTEGER})

// UserPopup.belongsTo(ReviewDistribution)

// module.exports = {
//     Event : Event,
//     Comment : Comment,
//     User : User,
//     Rebuttal : Rebuttal,
//     UserPopup : UserPopup,
//     ReviewDistribution : ReviewDistribution
// }





