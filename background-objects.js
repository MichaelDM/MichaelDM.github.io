// Game backgrounds for each level
var backgroundObject = {
  evolution: 'img/backgroundObject/evolution.jpg',
  shark : 'img/backgroundObject/shark.jpg',
  boccioni: 'img/backgroundObject/boccioni.jpeg',
  lachapelle : 'img/backgroundObject/lachapelle.jpg',
  monet : 'img/backgroundObject/monet.jpg',
  mapplethorpe: 'img/backgroundObject/mapplethorpe.jpg',
  flowerGarden: 'img/backgroundObject/flowerGarden.jpg',
  nature: 'img/backgroundObject/nature.jpg',
  cosmos: 'img/backgroundObject/cosmos.jpg',
  paris: 'img/backgroundObject/paris.jpg',
  assignLevelToBackground : function (level){
    var levelString = level.toString(),
        levelNumLength = levelString.length;
        return levelString.charAt(levelNumLength-1);
  },
  changeBackgroundInDOM : function(url){
    elGame.style.backgroundImage = 'url("'+url+'")';
  },
  changeBackgroundGame : function(){
    switch (backgroundObject.assignLevelToBackground(gameLevel)) {
      case '1':
        // this is to change background of game
        backgroundObject.changeBackgroundInDOM(backgroundObject.monet);
        // this is to change background of balloons
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.monet);
        break;
      case '8':
        backgroundObject.changeBackgroundInDOM(backgroundObject.evolution);
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.evolution);
        break;
      case '2':
        backgroundObject.changeBackgroundInDOM(backgroundObject.lachapelle);
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.lachapelle);
        break;
      case '4':
        backgroundObject.changeBackgroundInDOM(backgroundObject.boccioni);
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.boccioni);
        break;
      case '5':
        backgroundObject.changeBackgroundInDOM(backgroundObject.mapplethorpe);
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.mapplethorpe);
        break;
      case '6':
        backgroundObject.changeBackgroundInDOM(backgroundObject.shark);
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.shark);
        break;
      case '7':
        backgroundObject.changeBackgroundInDOM(backgroundObject.nature);
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.nature);
        break;
      case '3':
        backgroundObject.changeBackgroundInDOM(backgroundObject.paris);
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.paris);
        break;
      case '9':
        backgroundObject.changeBackgroundInDOM(backgroundObject.flowerGarden);
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.flowerGarden);
        break;
      case '0':
        backgroundObject.changeBackgroundInDOM(backgroundObject.cosmos);
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.cosmos);
        break;
    }
  }
};

// Balloon Background for each level
var balloonBackgroundObject = {
  evolution: 'img/balloonBackgroundObject/evolution.jpg',
  shark : 'img/balloonBackgroundObject/shark.jpg',
  boccioni: 'img/balloonBackgroundObject/boccioni.jpg',
  lachapelle : 'img/balloonBackgroundObject/lachapelle.jpg',
  monet : 'img/balloonBackgroundObject/monet.jpg',
  mapplethorpe: 'img/balloonBackgroundObject/mapplethorpe.jpg',
  flowerGarden: 'img/balloonBackgroundObject/flowerGarden.jpg',
  nature: 'img/balloonBackgroundObject/nature.jpg',
  cosmos: 'img/balloonBackgroundObject/cosmos.jpg',
  paris: 'img/balloonBackgroundObject/paris.jpg',
  assignLevelToBackground : function (level){
    var levelString = level.toString(),
        levelNumLength = levelString.length;
        return levelString.charAt(levelNumLength-1);
  },
  changeBackgroundInDOM : function(url){
    for (d=0; d<elballoonArray.length; d++){
      elballoonArray[d].element.style.backgroundImage = 'url("'+url+'")';
    }
  }
};
