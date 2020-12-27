var lion = document.getElementById("lion");
var lionAR = document.getElementById("lionAR");
var lionE = document.getElementById("lionE") 
var lionAudioE = document.getElementById("lion-audioE");
var lionAudioA = document.getElementById("lion-audioA");
var bearAr = document.getElementById("bearAr");
var bearAudioA = document.getElementById("bear-audioA");
var bearAudioE = document.getElementById("bear-audioE");
var bearE = document.getElementById("bearE");
var giraffeAr = document.getElementById("giraffeAr");
var giraffeAudioA = document.getElementById("giraffe-audioA");
var giraffeAudioE = document.getElementById("giraffe-audioE");
var giraffeE = document.getElementById("giraffeE");
var pandaAr = document.getElementById("pandaAr");
var pandaAudioA = document.getElementById("panda-audioA");
var pandaAudioE = document.getElementById("panda-audioE");
var pandaE = document.getElementById("pandaE");
var elephantAr = document.getElementById("elephantAr");
var elephantAudioA = document.getElementById("elephant-audioA");
var elephantAudioE = document.getElementById("elephant-audioE")
var elephantE = document.getElementById("elephantE");



function playAudio(animal,Audio){
    animal.addEventListener("click",function(){
        Audio.play();
    })
}
playAudio(lionAR,lionAudioA);
playAudio(lionE,lionAudioE);
playAudio(bearAr,bearAudioA);
playAudio(bearE,bearAudioE);
playAudio(giraffeAr,giraffeAudioA);
playAudio(giraffeE,giraffeAudioE);
playAudio(elephantAr,elephantAudioA)
playAudio(elephantE,elephantAudioE)
playAudio(pandaAr,pandaAudioA)
playAudio(pandaE,pandaAudioE)



