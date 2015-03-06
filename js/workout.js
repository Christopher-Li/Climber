$( document ).ready(function() {
  var url= $(location).attr('href');
  var attributes= url.substr(url.indexOf("?")+1);  
  attributes= attributes.split("&");

  var workout;
  for(var i=0; i<JSON.length; i++){ 
    if ((attributes[0]===JSON[i]["body-part"]) && (attributes[1]===JSON[i]["difficulty"])){
      workout=JSON[i];
      console.log(workout);
    }
  }

  var name=workout['name'];
  var author= workout['author'];
  var exercises= workout['exercises'];
  $("#name").html(name);
  $("#author").html(author);
  for (var j=1; j<exercises.length+1; j++){
    var id="#";
    id+=j;
    $(id+" .text-left").html(exercises[j-1][0]);
    $(id+" .text-right").html(exercises[j-1][1]);
  }
});



/*function changehtml(workout){

}*/

JSON= [
  {
    "name":"Beginner Full Body Workout",
    "body-part":"Fullbody",
    "difficulty":"Easy",
    "author":"Philip Lan",
    "exercises":[["Squats","x15","2"],["Chest Press","x15","2"],["Assisted Pull-up Machine","x15","2"],["Abdominal Crunch Machine","x15","2"],["Seated Back Extension","x15","2"]]
  },
  {
    "name":"Dumbbell Workout",
    "body-part":"Fullbody",
    "difficulty":"Intermediate",
    "author":"Evan House",
    "exercises":[["Dumbell Squats with Overhead Press","x15","2"],["Single-Arm Dumbbell Biceps Curl","x15","2"],["Seated Dumbbell Triceps Extensions","x15","2"],["Dumbbell Chest Press","x15","2"],["Dumbell Crunches","x15","2"]]
  },
  {
    "name":"Beast Mode",
    "body-part":"Fullbody",
    "difficulty":"Hardcore",
    "author":"Arnold Schwarzenegger",
    "exercises":[["Squats","x15","4"],["Bench Press","x15","3"],["Deadlifts","x15","3"],["Cleans","x15","2"],["Ab Crunch Wheel","x15","3"]]
  },
  {
    "name":"4-pack Exercise",
    "body-part":"Abs",
    "difficulty":"Easy",
    "author":"Michael Chen",
    "exercises":[["Crunches","x15","2"],["Ab Crunch Wheel","x10","2"],["Leg Lifts","x15","2"],["Bicycle","x40","1"]]
  },
  {
    "name":"6-pack Exercise",
    "body-part":"Abs",
    "difficulty":"Intermediate",
    "author":"Christopher Li",
    "exercises":[["Butterfly Crunch","x15","2"],["Side to Side","x20","2"],["Front Plank","1:00","3"],["Bicycle","x30","2"]]
  },
  {
    "name":"Spring Break",
    "body-part":"Abs",
    "difficulty":"Hardcore",
    "author":"James Kim",
    "exercises":[["Bicycle Crunch","12","3"],["Hanging Leg Raise","12","3"],["Barbell Rollout","12","3"],["Plank Mountain Climber","10","3"]]
  },
  {
    "name":"Light Jog",
    "body-part":"Endurance",
    "difficulty":"Easy",
    "author":"Joanne Lee",
    "exercises":[["Light Jog","5 minutes","1"],["Light Run","10 minutes","1"],["Light Jog","5 minutes","1"]]
  },
  {
    "name":"Train for a 5-k",
    "body-part":"Endurance",
    "difficulty":"Intermediate",
    "author":"Subin Hwang",
    "exercises":[["Light Jog","5 minutes","1"],["Light Run","10 minutes","1"],["Sprint Jog","10 minutes","1"],["Light Run","10 minutes","1"],["Light Jog","5 minutes","1"]]
  },
  {
    "name":"Dat Marathon Lyfe",
    "body-part":"Endurance",
    "difficulty":"Hardcore",
    "author":"Eugene Wu",
    "exercises":[["Light Run","10 minutes","1"],["Sprint","10 minutes","1"],["Hard Run","20 minutes","1"],["Light Run","30 minutes","1"],["Light Jog","10 minutes","1"]]
  },
  {
    "name":"Chest Pops",
    "body-part":"Upperbody",
    "difficulty":"Easy",
    "author":"Dave Kim",
    "exercises":
    [["Pushups","x10","2"],
    ["Tricep Extensions","x8","2"],
    ["Bicep Curls","x8","2"],
    ["Incline Press","x6","2"],
    ["Power Circles","30sec","1"]]
  },
  {
    "name":"Spartan",
    "body-part":"Upperbody",
    "difficulty":"Intermediate",
    "author":"Suzee Goldstein",
    "exercises":
    [["Bicep curl","x15","2"],
    ["Bench Press","x8","3"],
    ["Dips","x6","2"],
    ["Pushups","x20","2"],
    ["Overhead Press","x20","2"]]
  },
  {
    "name":"Pushup Mania",
    "body-part":"Upperbody",
    "difficulty":"Hardcore",
    "author":"Eugin Lee",
    "exercises":
    [["Pushups","x25","3"],
    ["Handstand Pushups","x5","2"],
    ["Dive Bombers","x15","2"],
    ["Tricep Pushups","x20","2"],
    ["Wide Pushups","x20","2"]]
  },
  {
    "name":"13.5 minutes of Hell",
    "body-part":"Lowerbody",
    "difficulty":"Easy",
    "author":"Aleka Cheung",
    "exercises":
    [["Lunges","x20","2"],
    ["Calf raises","x20","2"],
    ["Leg Lifts","20sec","2"],
    ["Hip Raises","x10","2"],
    ["Mountain Climbers","x30","3"]]
  },
  {
    "name":"I can fly",
    "body-part":"Lowerbody",
    "difficulty":"Intermediate",
    "author":"Isaac Lam",
    "exercises":
    [["Squats","x10","2"],
    ["Vertical Jump","x15","4"],
    ["One-leg Jump","x10","2"],
    ["Line Jump","x20","2"],
    ["Tuck Jumps","x15","2"]]
  },
  {
    "name":"No more BK",
    "body-part":"Lowerbody",
    "difficulty":"Hardcore",
    "author":"Eugene Wu",
    "exercises":
    [["Leg Lifts","2min","2"],
    ["Stairs","x15","2"],
    ["Front Squat","x10","2"],
    ["Plank","2 min","2"],
    ["Bulgarian Split Squat","x20","3"]]
  }]