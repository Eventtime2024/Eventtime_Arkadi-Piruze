$(window).on( 'load', function() {
    $('html, body').animate({scrollTop : 0});
    });
$(document).on("contextmenu", function(e) {
    e.preventDefault();
});

let date=new Date("April 25 2025 00:00:00");
function counts(){
    let now= new Date();
    gap=date - now;

  let days =Math.floor(gap/1000/60/60/24)
  let hours =Math.floor(gap/1000/60/60)%24;
  let minutes=Math.floor(gap/1000/60)%60;
  let seconds=Math.floor(gap/1000) % 60;
  let formatted_days = days.toString().padStart(2, '0');
  let formatted_hours = hours.toString().padStart(2, '0');
  let formatted_minutes = minutes.toString().padStart(2, '0');
  let formatted_seconds = seconds.toString().padStart(2, '0');
 $("#d").text(formatted_days)
 $("#h").text(formatted_hours) ;
  $("#m").text(formatted_minutes);
  $("#s").text(formatted_seconds);
  if (gap <= 0) {
    $("#d").text("00");
    $("#h").text("00");
    $("#m").text("00");
    $("#s").text("00");
  } 
 

}
counts();
setInterval(counts,1000);

function sendMail(e) {

  let params = {
      choose: document.querySelector('input[name="choose"]:checked').value,
      guestname: document.getElementById("guestname").value,
      guestnumber: document.getElementById("guestnumber").value,
  };

  const serviceID = "sservice_xof245b";
  const templateID = "template_o30tlw9";
  emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
          (document.querySelector('input[name="choose"]:checked').value = ""),
              (document.getElementById("guestname").value = ""),
              (document.getElementById("guestnumber").value = ""),
              console.log(res);
          console.log("Succesfully");
          window.location.reload();
      })
      .catch((err) => console.log(err));
}

const sendMailbtn = document.querySelector("#sendMail");

sendMailbtn.addEventListener("click", (e) => {
  e.preventDefault()
  sendMail();
 alert("Ուղարկված է։");
});
