//https://teachablemachine.withgoogle.com/models/py6PtaPuk/
console.log("ml5version", ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/py6PtaPuk/model.json', model_loaded)
function model_loaded() {
    console.log("Model_loaded")
    alert("The Model is loaded")
}
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach("#camera")
function Snapshot() {
    Webcam.snap(function(datauri)
    {
        document.getElementById("result").innerHTML='<img id="capturedimg" src="'+datauri+'"/>'
    })
}
function Check() {
    img= document.getElementById("capturedimg")
    classifier.classify(img, RESULT)
}
function RESULT(error,results) {
 if (error) {
    console.error(error)
 } else {
    console.log(results)
    document.getElementById("object_names").innerHTML=results[0].label
    document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(3)
 }    
}