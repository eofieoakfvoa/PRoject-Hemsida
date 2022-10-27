
window.onload = function()
{
    document.getElementsByClassName(USName).innerHTML = localStorage.getItem("Username")
    
    document.getElementById('USName').innerHTML = localStorage.getItem("Username")
    var Image = localStorage.getItem("ImageUpload")
    document.getElementById('NewImage').src = Image
}       

