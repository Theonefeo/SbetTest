
function onSubmit() {
  var form = document.getElementById('myForm');

  var xhr = new XMLHttpRequest();
  var formData = new FormData(form);
  //open the request
  xhr.open('POST', '/core-api/logs')
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      console.log("success");
      form.reset(); //reset form after AJAX success or do something else
    }
  }
  
  //send the form data
  xhr.send(JSON.stringify(Object.fromEntries(formData)));
  
  return true;
}