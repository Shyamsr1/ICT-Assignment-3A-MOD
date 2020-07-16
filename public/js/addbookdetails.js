function addbookdetails1() {
    let title1 = document.getElementById("cardtitle").value;
    let authname1 = document.getElementById("cardtext").value;
    // let heading1 = document.getElementById("cardid").value;
    // let result="";
    // var x = document.getElementById("img");
    var txt = "";

    if (title1 == "") {
        alert("Title is blank");
        return false;
      }
    
      if (authname1 == "") {
        alert("book description is blank");
        return false;
      } 
      
     
      // if ('files' in x) {
      //   if (x.files.length == 0) {
      //     alert("Image file is blank");
      //     return false;
      //   }
      // }
      // if ('files' in x) {
      //   if (!(x.files.length == 0))  
      //   {
      //     for (var i = 0; i < x.files.length; i++) {
      //       txt += "<br><strong>" + (i+1) + ". file</strong><br>";
      //       var file = x.files[i];
      //       if ('name' in file) {
      //         txt += "name: " + file.name + "<br>";
      //       }
      //       if ('size' in file) {
      //         txt += "size: " + file.size + " bytes <br>";
      //         result = " The Name of the Book: " + ">>"+ title1 +"<br>"+ 
      //         "Author name details : " + ">>" +authname1 + "<br>" + 
      //         "The genre is : " + ">>" + genre1 + "<br>"; 
      //         console.log(result);
      //       }
      //     }
      //   }
      // } 
      // document.getElementById("showdiv").innerHTML +="<br>"+ result+ txt + "<br>";
      // $('#addbookform')[0].reset();
    }
 
    function sync()
{
  var n1 = document.getElementById('cardid');
  var n2 = document.getElementById('arialabelled');
  n2.value = n1.value;

  var n3 = document.getElementById('ariacontrols');
  var n4 = document.getElementById('id');
  n4.value = n3.value;
}
