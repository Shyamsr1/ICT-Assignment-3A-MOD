function addauthor1() {
    let authorname1 = document.getElementById("authorname").value;
    let desc1 = document.getElementById("description").value;
    let result="";
    if (authorname1 == "") {
        alert("Author Name is blank");
        document.getElementById("authorname").focus();
        return false;
      }
    
    
      if (desc1 == "") {
        alert("description is blank");
        document.getElementById("description").focus();
        return false;
      } 
      else {
        result = "Details added successfully in our Database";
        // result +="The Name of the Author: " + authorname1 +"<br>"+ 
        // "Description details : " + desc1 + "<br>"; 
      }
     alert(result);
    }
