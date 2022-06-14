gdjs._24320_22987Code = {};
gdjs._24320_22987Code.GDbackgroundObjects1= [];
gdjs._24320_22987Code.GDbackgroundObjects2= [];
gdjs._24320_22987Code.GDNewSpriteObjects1= [];
gdjs._24320_22987Code.GDNewSpriteObjects2= [];
gdjs._24320_22987Code.GDPrincessSeraObjects1= [];
gdjs._24320_22987Code.GDPrincessSeraObjects2= [];
gdjs._24320_22987Code.GDAdventureBoyObjects1= [];
gdjs._24320_22987Code.GDAdventureBoyObjects2= [];
gdjs._24320_22987Code.GDlakeObjects1= [];
gdjs._24320_22987Code.GDlakeObjects2= [];
gdjs._24320_22987Code.GDNewSprite2Objects1= [];
gdjs._24320_22987Code.GDNewSprite2Objects2= [];

gdjs._24320_22987Code.conditionTrue_0 = {val:false};
gdjs._24320_22987Code.condition0IsTrue_0 = {val:false};
gdjs._24320_22987Code.condition1IsTrue_0 = {val:false};


gdjs._24320_22987Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PrincessSera"), gdjs._24320_22987Code.GDPrincessSeraObjects1);

gdjs._24320_22987Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._24320_22987Code.GDPrincessSeraObjects1.length;i<l;++i) {
    if ( gdjs._24320_22987Code.GDPrincessSeraObjects1[i].getBehavior("可拖动").isDragged() ) {
        gdjs._24320_22987Code.condition0IsTrue_0.val = true;
        gdjs._24320_22987Code.GDPrincessSeraObjects1[k] = gdjs._24320_22987Code.GDPrincessSeraObjects1[i];
        ++k;
    }
}
gdjs._24320_22987Code.GDPrincessSeraObjects1.length = k;}if (gdjs._24320_22987Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "第2，会不会", true);
}}

}


};

gdjs._24320_22987Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._24320_22987Code.GDbackgroundObjects1.length = 0;
gdjs._24320_22987Code.GDbackgroundObjects2.length = 0;
gdjs._24320_22987Code.GDNewSpriteObjects1.length = 0;
gdjs._24320_22987Code.GDNewSpriteObjects2.length = 0;
gdjs._24320_22987Code.GDPrincessSeraObjects1.length = 0;
gdjs._24320_22987Code.GDPrincessSeraObjects2.length = 0;
gdjs._24320_22987Code.GDAdventureBoyObjects1.length = 0;
gdjs._24320_22987Code.GDAdventureBoyObjects2.length = 0;
gdjs._24320_22987Code.GDlakeObjects1.length = 0;
gdjs._24320_22987Code.GDlakeObjects2.length = 0;
gdjs._24320_22987Code.GDNewSprite2Objects1.length = 0;
gdjs._24320_22987Code.GDNewSprite2Objects2.length = 0;

gdjs._24320_22987Code.eventsList0(runtimeScene);
return;

}

gdjs['_24320_22987Code'] = gdjs._24320_22987Code;
