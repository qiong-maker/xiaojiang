
function shijian() {
    var time = new Date();
    var year = time.getFullYear();
     var month = time.getMonth()+1;
     var day = time.getDay();
     var hour = time.getHours();
     var min = time.getMinutes();

     document.querySelector('#hour').innerHTML = hour;
     document.querySelector('#min').innerHTML = min;
   setInterval(function(){
        document.querySelector('#hour').innerHTML = hour;
   },3600000);
   setInterval(function(){
    document.querySelector('#min').innerHTML = min;
   },60000)



}
shijian();

$(document).ready(function(){
     $(".silder").hide();
     $("#ce").mousedown(function(){
          $(".silder").toggle("slow");
     });
     $("#yinc").hide();
     $("#xianshi").click(function(){
          $("#yinc").toggle("slow");
     })
     
});

window.addEventListener('hashchange',function(){
     var ha = location.hash
     console.log(ha)
})