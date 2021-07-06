define({ 

 //Type your controller code here  
  
  onViewCreated: function() {
    this.view.init = this.init;
    this.view.preShow = this.preShow;
  },  

  init: function() {
    this.view.Edit.onTouchStart=this.onEditClicked;    
  },

  preShow: function() {
    var data=kony.store.getItem("contactDetails");
    this.view.ContactName.text=data.name;
    this.view.PhoneNumber.text=data.phoneNumber;
    this.view.Email.text=data.email;
    this.view.Notes.text=data.notes;  
    
    var isEnabled=false;
    this.view.ContactName.setEnabled(isEnabled);
    this.view.PhoneNumber.setEnabled(isEnabled);
    this.view.Email.setEnabled(isEnabled);
    this.view.Notes.setEnabled(isEnabled);
  },
  
  onEditClicked: function(){
    var isEnabled=true;
    this.view.ContactName.setEnabled(isEnabled);
    this.view.PhoneNumber.setEnabled(isEnabled);
    this.view.Email.setEnabled(isEnabled);
    this.view.Notes.setEnabled(isEnabled);
  }  

 });