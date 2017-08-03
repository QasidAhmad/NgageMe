function init(){
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD0xyFmePkcQCXYl-5kY8QOBFabJgtWl8g",
    authDomain: "ngageme-942d1.firebaseapp.com",
    databaseURL: "https://ngageme-942d1.firebaseio.com",
    projectId: "ngageme-942d1",
    storageBucket: "ngageme-942d1.appspot.com",
    messagingSenderId: "825847385923"
  };
  firebase.initializeApp(config);

// update score on button press 
document.getElementById('1-score').addEventListener('click',function(){
    var userID = document.getElementById('userID').value;
    var userName = document.getElementById('name').value;
	if(userID && userName){
    //update username // should not really be required every time
    var user1DataRefName = firebase.database().ref(userID +'/');
    user1DataRefName.update({name: userName, engagement: 1}); // setting current engagement score
    var user1DataRefEngagement = firebase.database().ref(userID +'/engagementScores/'); // storing historical engagement scores
    var d = new Date();
    user1DataRefEngagement.update({[d]: 1}); 
	}
});

document.getElementById('2-score').addEventListener('click',function(){
    var userID = document.getElementById('userID').value;
    var userName = document.getElementById('name').value;
    	if(userID && userName){
    var user1DataRefName = firebase.database().ref(userID +'/');
    user1DataRefName.update({name: userName, engagement: 2}); // setting current engagement score
    var user1DataRefEngagement = firebase.database().ref(userID +'/engagementScores/'); // storing historical engagement scores
    var d = new Date();
    user1DataRefEngagement.update({[d]: 2});
	}
});

document.getElementById('3-score').addEventListener('click',function(){
    var userID = document.getElementById('userID').value;
    var userName = document.getElementById('name').value;
	if(userID && userName){
    var user1DataRefName = firebase.database().ref(userID +'/');
    user1DataRefName.update({name: userName, engagement: 3}); // setting current engagement score
    var user1DataRefEngagement = firebase.database().ref(userID +'/engagementScores/'); // storing historical engagement scores
    var d = new Date();
    user1DataRefEngagement.update({[d]: 3});
	}
});

document.getElementById('4-score').addEventListener('click',function(){
    var userID = document.getElementById('userID').value;
    var userName = document.getElementById('name').value;
    	if(userID && userName){
    var user1DataRefName = firebase.database().ref(userID +'/');
    user1DataRefName.update({name: userName, engagement: 4}); // setting current engagement score
    var user1DataRefEngagement = firebase.database().ref(userID +'/engagementScores/'); // storing historical engagement scores 
    var d = new Date();
    user1DataRefEngagement.update({[d]: 4});
	}
});

document.getElementById('5-score').addEventListener('click',function(){
    var userID = document.getElementById('userID').value;
    var userName = document.getElementById('name').value;
    	if(userID && userName){
    var user1DataRefName = firebase.database().ref(userID +'/');
    user1DataRefName.update({name: userName, engagement: 5}); // setting current engagement score
    var user1DataRefEngagement = firebase.database().ref(userID +'/engagementScores/'); // storing historical engagement scores
    var d = new Date();
    user1DataRefEngagement.update({[d]: 5});
	}
});

document.getElementById('absentButton').addEventListener('click',function(){
    var userID = document.getElementById('userID').value;
    var userName = document.getElementById('name').value;
	if(userID && userName){
    var user1DataRefName = firebase.database().ref(userID +'/');
    user1DataRefName.update({name: userName, engagement: 0}); // setting current engagement score
    var user1DataRefEngagement = firebase.database().ref(userID +'/engagementScores/'); // storing historical engagement scores
    var d = new Date();
    user1DataRefEngagement.update({[d]: 0});
	}
});
}