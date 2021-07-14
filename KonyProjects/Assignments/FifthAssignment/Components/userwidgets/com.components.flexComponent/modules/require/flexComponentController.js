define(function() {

  var skins={
    red:"sknRed",
    blue:"sknBlue"    
  };

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._flexSkin="sknBlue";      
    },

    changeColor(){
      if(this._flexSkin.toLowerCase()=="red"){
        this.view.flexContainer.skin=skins.red;
      }else if(this._flexSkin.toLowerCase()=="blue"){
        this.view.flexContainer.skin=skins.blue;
      }
    },   

    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'flexSkin', () => {
        return this._flexSkin;
      });
      defineSetter(this, 'flexSkin', value => {
        this._flexSkin = value;
        this.changeColor();
      });
    }
  };
});