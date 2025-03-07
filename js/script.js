// $(window).on( 'load', function() {
//     $('html, body').animate({scrollTop : 0});
//     });


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
  if(gap<0){
    $("#tillwedding").html("<p>Մեր հարսանիքը"+"<br>"+"25.04.2025</p>")
    $("#group").text(" ")
  }
  if(days<2){
   $(".lastpart").css("display","none")
  }

}
counts();
setInterval(counts,1000);

