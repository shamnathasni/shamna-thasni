function sendMail(){

    console.log("Hiii");

    let status = validation()
    if(status){

        var params = {
            name : document.getElementById("name").value.trim(),
            email : document.getElementById("email").value.trim(),
            subject : document.getElementById("subject").value.trim(),
            message : document.getElementById("message").value.trim()
    
        }
        
        const serviceID = "service_5zp0jg5" ;
        const templateID = "template_q6xvpq8";
        
        emailjs.send(serviceID,templateID,params).then((res)=>{
            document.getElementById("name").value ="";
            document.getElementById("email").value ="";
            document.getElementById("subject").value ="";
            document.getElementById("message").value =""; 
            console.log(res);
            alert("Submitted successfully");
        }).catch((err)=>{
            console.log(err);
        });
    }


}


function validation(){
    let btn = true
var name=document.getElementById("name").value.trim()
var email=document.getElementById("email").value.trim()
var subject=document.getElementById('subject').value.trim()
var message=document.getElementById("message").value.trim()

if(name===""||email===""||subject===""||message==="")
{
    alert("Please fill all fields")
    btn=false
}else if(!/^([a-zA-Z0-9\_.]+)@([a-zA-Z0-9]+).([a-z]+).([a-z]+)?$/.test(email)){
    alert("Please re-check at email")
    btn=false
 }

return btn;

}