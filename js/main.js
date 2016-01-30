   $(".button-collapse").sideNav();

  //  footer

    // Send message
    var contactFrom = document.getElementById('contact-form');
    var contactSuccess = document.getElementById('contact-success');
    var contactError = document.getElementById('contact-error');
    var sendBtn = document.getElementById('send-button');
    var onMessageComplete = function(error) {
      sendBtn.disabled = false;
      if (error) {
        contactError.innerHTML = 'Sorry. Could not send message.';
      } else {
        contactSuccess.innerHTML = "Message has been sent.";

      }
    };
    function sendMessage(formObj) {
        // Store details from form to firebase
        var myFirebaseRef = new Firebase("https://oliza.firebaseio.com/messages");
        myFirebaseRef.push({
          name: formObj.thename.value,
          businessname: formObj.businessname.value,
          email: formObj.email.value,
          othercategoty.formObj.othercategory.value,
          phonenumber: formObj.phonenumber.value,

        }, onMessageComplete);
        sendBtn.disabled = true;
        return false;
    }
