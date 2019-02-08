const Sequelize = require('sequelize');
const db = new Sequelize('sqlite:./server/database/Trip.db');
let faker = require('faker');

const Comment = db.define('comment', {
  title: Sequelize.STRING,
  user: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  body: Sequelize.TEXT,
  trip_date: Sequelize.DATE,
  pic_URL: Sequelize.STRING,
  mobile: Sequelize.BOOLEAN,
  Flag: Sequelize.BOOLEAN
});

const Event = db.define('events', {
  name: Sequelize.STRING
});

Event.Comments = Event.hasMany(Comment);

let generateComments = function() {
  let comments = [];

  for (let i = 0; i < Math.floor(Math.random() * 25) + 1; i++) {
    comments.push({
      user: faker.internet.userName(),
      rating: Math.floor(Math.random() * 5 + 1),
      body: faker.lorem.paragraphs(),
      trip_date: faker.date.past(),
      pic_URL: faker.image.city(),
      mobile: Math.random() >= 0.5,
      flag: Math.random() >= 0.95
    });
  }
  return comments;
};

let generateEvents = () => {
  let events = [];
  for (var i = 0; i < 100; i++) {
    events.push(
      Event.create(
        { name: faker.address.city(), comments: generateComments() },
        {
          include: [Event.Comments]
        }
      )
    );
  }

  return Promise.all(events);
};

let run = async () => {
  let events = await generateEvents();
  if (events) {
    console.log('Worked');
  } else {
    console.log("Events not loaded");
  }
};

db.sync({ force: true })
  .then(() => {
    run();
  })
  .catch(console.log("no messages saved"));

  module.exports = {
    Comment,
    Event
  }

// resurrect this if mimicking the full 
// functionality of TripAdvisor is desired

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





