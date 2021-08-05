var predicition_1="";
var predicition_2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri)
{
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
});
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/KD2T6SPCd/',modelLoaded);
function modelLoaded(){
    console.log("modelLoaded")
}
function speak(){
    var synch=window.speechSynthesis;
    speak_data_1="The first predicition is"+predicition_1;
    speak_data_2="The second predicition is"+predicition_2;
var utterThis=new SpeechSynthesisisUtterance (speak_data_1 + speak_data_2);
SpeechSynthesis.speak(utterThis);
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
    }
    function gotResult(error,results){
        if (error){
            console.error(error);
          }  else{
                  console.log(results);
                  document.getElementById("result_emotion_name").innerHTML=results[0].label;
                  document.getElementById("result_emotion_name2").innerHTML=results[1].label;
                  predicition_1=results[0].label;
                  predicition_2=results[1].label;
                  speak();
                  if(results[0].label=="happy"){
                    document.getElementById("update_emoji").innerHTML="😊";
                  }
                  if(results[0].label=="sad"){
                    document.getElementById("update_emoji").innerHTML="😔";
                  }
                  if(results[0].label=="angry"){
                    document.getElementById("update_emoji").innerHTML="😡";
                  }
                  if(results[1].label=="happy"){
                    document.getElementById("update_emoji").innerHTML="😊";
                  }
                  if(results[1].label=="sad"){
                    document.getElementById("update_emoji").innerHTML="😔";
                  }
                  if(results[1].label=="angry"){
                    document.getElementById("update_emoji").innerHTML="😡";
                  }
              }
            }
            