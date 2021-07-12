define(function() {
  
  var skins={
    red:"sknRed",
    blue:"sknBlue"    
  };

  var changeColor = function(){
    var skinName = this.view.flexContainer.skin;

    if(skinName==skins.red){
      this.view.flexContainer.skin=skins.blue;
    }else if(skinName==skins.blue){
      this.view.flexContainer.skin=skins.red;
    }
  };

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._changeColor=changeColor;
      this.view.onTouchStart=this._changeColor.bind(this);
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    }
  };
});