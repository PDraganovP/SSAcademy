define(function() {

  var showAlertMessage = function(msg){   
    alert(msg);
  };

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._showAlertMessage=showAlertMessage;
      var source = this.view.icon.src;
      var message = "";

      switch(source){
        case "call.png":message="Call";break;
        case "message.png":message="Message";break;
        case "facetime.png":message="Face Time";break;
        case "mail.png":message="Mail";break;
        case "pay.png":message="Pay";break;
        default:message="No such image";break;
      }
      this.view.onTouchStart=this._showAlertMessage.bind(this,message);
    }

  };
});