var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    Webcam.attach(camera);

}

recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0] [0].transcript;
    console.log(Content);
    
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);

    speak();
    
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking your Selfie in 5 seconds !";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function() {
        take_snapshot();
        save();
        speak_data = "Taking your Second Selfie in 5 seconds!";
        var sayThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(sayThis);
        setTimeout(function() {
        take_snapshot2();
        save2();
        },10000)
    },5000);
    
}
camera = document.getElementById("camera");

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});


function take_snapshot() {
    Webcam.snap(function(data_url){
    document.getElementById("result").innerHTML = '<img style="width: 360px; height: 250px;" id="selfie_image" src="'+data_url+'"/>';
    
    });
}

function take_snapshot2() {
    Webcam.snap(function(data_url){
    document.getElementById("result2").innerHTML = '<img style="width: 360px; height: 250px;" id="selfie_image2" src="'+data_url+'"/>';
    
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}

function save2() {
    link = document.getElementById("link2");
    image = document.getElementById("selfie_image2").src;
    link.href = image;
    link.click();
}

