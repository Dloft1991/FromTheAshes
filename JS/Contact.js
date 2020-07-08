function submit() {
    var Name = document.getElementById("UserName").value;
    var Message = document.getElementById("UserMessage").value;

     console.log(Name);
      $("#User-cmnts").append("<li>" + "<h3>" + Name + "</h3>" + "<p>" + Message + "</p>" + "</li>")
      $("#UserName").val('');
      $("#UserMessage").val('');
    }