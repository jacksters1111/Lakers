require('dotenv').config();
require('./config/database');
const Laker = require('./models/Laker');

Laker.remove({})
.then(function() {
    return Laker.create([
        {
            name: "Lonzo Ball",
            number: 2,
            position: "Guard",
            gamesPlayed: 43,
            points: 456,
            fieldGoals: 174,
            height: "6'6",
            dob: "10/27/1997",
            age: 20,
            weight: "190lbs",
            hometown: "Los Angeles, CA",
            image: ("https://i.imgur.com/bI4epIl.png")
        },
        {
            name: "Thomas Byrant",
            number: 31,
            position: "Center",
            gamesPlayed: 10,
            points: 11,
            fieldGoals: 3,
            height: "6'10",
            dob: "07/31/1997",
            age: 20,
            weight: "248lbs",
            hometown: "Indiana",
            image: ("https://i.imgur.com/5iVdzuP.png")
        },
        {
            name: "Kentavious Caldwell-Pope",
            number: 1,
            position: "Guard",
            gamesPlayed: 57,
            points: 775,
            fieldGoals: 269,
            height: "6'5",
            dob: "02/18/1993",
            age: 25,
            weight: "205lbs",
            hometown: "Greenville, Georgia",
            image: ("https://i.imgur.com/APSZkUA.png")
        },
        {
            name: "Alex Caruso",
            number: 4,
            position: "Guard",
            gamesPlayed: 25,
            points: 66,
            fieldGoals: 26,
            height: "6'5",
            dob: "02/28/1994",
            age: 24,
            weight: "186lbs",
            hometown: "College Station, Texas",
            image: ("https://i.imgur.com/H80hZ8F.png")
        },
        {
            name: "Luol Deng",
            number: 9,
            position: "Forward",
            gamesPlayed: 1,
            points: 2,
            fieldGoals: 1,
            height: "6'9",
            dob: "04/16/1985",
            age: 32,
            weight: "220lbs",
            hometown: "Blairstown, New Jersey",
            image: ("https://i.imgur.com/WRfrvkP.png")
        },
        {
            name: "Tyler Ennis",
            number: 10,
            position: "Guard",
            gamesPlayed: 40,
            points: 119,
            fieldGoals: 49,
            height: "6'3",
            dob: "08/24/1994",
            age: 23,
            weight: "194lbs",
            hometown: "Ontario, Canada",
            image: ("https://i.imgur.com/s4DQgL6.png")
        },
        {
            name: "Channing Frye",
            number: 12,
            position: "Forward",
            gamesPlayed: 45,
            points: 215,
            fieldGoals: 85,
            height: "6'11",
            dob: "05/17/1983",
            age: 34,
            weight: "255lbs",
            hometown: "Phoenix, Arizona",
            image: ("https://i.imgur.com/mg7MA77.png")
        },
        {
            name: "Josh Hart",
            number: 5,
            position: "Guard",
            gamesPlayed: 55,
            points: 364,
            fieldGoals: 131,
            height: "6'5",
            dob: "03/06/1995",
            age: 23,
            weight: "215lbs",
            hometown: "Silver Spring, Maryland",
            image: ("https://i.imgur.com/92kTkbh.png")
        },
        {
            name: "Brandon Ingram",
            number: 14,
            position: "Forward-Guard",
            gamesPlayed: 57,
            points: 924,
            fieldGoals: 349,
            height: "6'9",
            dob: "09/02/1997",
            age: 20,
            weight: "190lbs",
            hometown: "Kinston, North Carolina",
            image: ("https://i.imgur.com/YW0F0sz.png")
        },
        {
            name: "Kyle Kuzma",
            number: 0,
            position: "Forward",
            gamesPlayed: 64,
            points: 981,
            fieldGoals: 373,
            height: "6'9",
            dob: "07/24/1995",
            age: 22,
            weight: "220lbs",
            hometown: "Flint, Michigan",
            image: ("https://i.imgur.com/LHj5nQp.png")
        },
        {
            name: "Brook Lopez",
            number: 11,
            position: "Center",
            gamesPlayed: 57,
            points: 701,
            fieldGoals: 270,
            height: "7'0",
            dob: "04/01/1988",
            age: 29,
            weight: "268lbs",
            hometown: "North Hollywood, California",
            image: ("https://i.imgur.com/3qNjmE6.png")
        },
        {
            name: "Gary Payton II",
            number: 23,
            position: "Guard",
            gamesPlayed: 18,
            points: 40,
            fieldGoals: 18,
            height: "6'3",
            dob: "12/01/1992",
            age: 29,
            weight: "190lbs",
            hometown: "Seattle, Washington",
            image: ("https://i.imgur.com/eCvmhra.png")
        },
        {
            name: "Julius Randle",
            number: 30,
            position: "Forward-Center",
            gamesPlayed: 65,
            points: 986,
            fieldGoals: 384,
            height: "6'9",
            dob: "11/29/1994",
            age: 23,
            weight: "250lbs",
            hometown: "Dallas, Texas",
            image: ("https://i.imgur.com/pYLKurE.png")
        },
        {
            name: "Isaiah Thomas",
            number: 3,
            position: "Guard",
            gamesPlayed: 26,
            points: 392,
            fieldGoals: 126,
            height: "5'9",
            dob: "02/07/1989",
            age: 29,
            weight: "185lbs",
            hometown: "Chicago, Illinois",
            image: ("https://i.imgur.com/4XWssJH.png")
        },
        {
            name: "Travis Wear",
            number: 21,
            position: "Forward",
            gamesPlayed: 4,
            points: 17,
            fieldGoals: 7,
            height: "6'10",
            dob: "09/21/1990",
            age: 27,
            weight: "225lbs",
            hometown: "Huntington Beach, CA",
            image: ("https://i.imgur.com/NG3ZlGD.png")
        },
        {
            name: "Ivica Zubac",
            number: 40,
            position: "Center",
            gamesPlayed: 26,
            points: 91,
            fieldGoals: 33,
            height: "7'1",
            dob: "03/18/1997",
            age: 20,
            weight: "Mostar, Bosnia and Herzegovina",
            image: ("https://i.imgur.com/L3YALRR.png")
        },
    ])
})
.then(function(lakers) {
    console.log(lakers);
    process.exit();
})
.catch(function(err) {
    console.log(`seed failed because of ${err}`)
})