let vastuseid = 0;
let kasutatudID = new Set();

function myFunction() {
  var inputs = $(".text").find($("input") );
  //console.log(inputs.length)
  for(let i = 0; i < inputs.length; i++){
    if (!kasutatudID.has(i)) { 
      var answer = document.getElementById(""+i).value;
      var correctValue = $("#"+i).attr('name');
  
      if(answer.toUpperCase() == correctValue){
        $("#"+i).replaceWith(function(){
        return answer.toUpperCase();
      })
    vastuseid++;
    kasutatudID.add(i);
    $('#a'+i).css('color', 'green');
  }}}
  //console.log("õigeid vastuseid on kokku " + vastuseid);
  //console.log(kasutatudID);
  document.getElementById("kokku").innerHTML = "ÕIGEID VASTUSEID ON " + vastuseid;
}
