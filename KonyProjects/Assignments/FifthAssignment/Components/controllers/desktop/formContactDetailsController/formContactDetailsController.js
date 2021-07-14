define({ 

  //Type your controller code here 

  onViewCreated:function(){
    this.view.preShow=this.preShow;
  },

  preShow:function(){
    this.view.changeSkinButton.onTouchStart=this.insertColor;
  },

  insertColor:function(){
    var color = this.view.inputSkinName.text;
    this.view.flexComponent.flexSkin=color;
    this.view.changeSkinButton.text=color;
  }  

});