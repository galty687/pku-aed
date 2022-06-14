gdjs._315322_65292_20250_19981_20250Code = {};
gdjs._315322_65292_20250_19981_20250Code.GDNewSpriteObjects1= [];
gdjs._315322_65292_20250_19981_20250Code.GDNewSpriteObjects2= [];
gdjs._315322_65292_20250_19981_20250Code.GDnihuiObjects1= [];
gdjs._315322_65292_20250_19981_20250Code.GDnihuiObjects2= [];
gdjs._315322_65292_20250_19981_20250Code.GDNewSprite2Objects1= [];
gdjs._315322_65292_20250_19981_20250Code.GDNewSprite2Objects2= [];
gdjs._315322_65292_20250_19981_20250Code.GDyesObjects1= [];
gdjs._315322_65292_20250_19981_20250Code.GDyesObjects2= [];
gdjs._315322_65292_20250_19981_20250Code.GDnoObjects1= [];
gdjs._315322_65292_20250_19981_20250Code.GDnoObjects2= [];

gdjs._315322_65292_20250_19981_20250Code.conditionTrue_0 = {val:false};
gdjs._315322_65292_20250_19981_20250Code.condition0IsTrue_0 = {val:false};
gdjs._315322_65292_20250_19981_20250Code.condition1IsTrue_0 = {val:false};


gdjs._315322_65292_20250_19981_20250Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs._315322_65292_20250_19981_20250Code.GDyesObjects1);

gdjs._315322_65292_20250_19981_20250Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._315322_65292_20250_19981_20250Code.GDyesObjects1.length;i<l;++i) {
    if ( gdjs._315322_65292_20250_19981_20250Code.GDyesObjects1[i].getBehavior("可拖动").isDragged() ) {
        gdjs._315322_65292_20250_19981_20250Code.condition0IsTrue_0.val = true;
        gdjs._315322_65292_20250_19981_20250Code.GDyesObjects1[k] = gdjs._315322_65292_20250_19981_20250Code.GDyesObjects1[i];
        ++k;
    }
}
gdjs._315322_65292_20250_19981_20250Code.GDyesObjects1.length = k;}if (gdjs._315322_65292_20250_19981_20250Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "第3，AED图", false);
}}

}


{


{
}

}


};

gdjs._315322_65292_20250_19981_20250Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._315322_65292_20250_19981_20250Code.GDNewSpriteObjects1.length = 0;
gdjs._315322_65292_20250_19981_20250Code.GDNewSpriteObjects2.length = 0;
gdjs._315322_65292_20250_19981_20250Code.GDnihuiObjects1.length = 0;
gdjs._315322_65292_20250_19981_20250Code.GDnihuiObjects2.length = 0;
gdjs._315322_65292_20250_19981_20250Code.GDNewSprite2Objects1.length = 0;
gdjs._315322_65292_20250_19981_20250Code.GDNewSprite2Objects2.length = 0;
gdjs._315322_65292_20250_19981_20250Code.GDyesObjects1.length = 0;
gdjs._315322_65292_20250_19981_20250Code.GDyesObjects2.length = 0;
gdjs._315322_65292_20250_19981_20250Code.GDnoObjects1.length = 0;
gdjs._315322_65292_20250_19981_20250Code.GDnoObjects2.length = 0;

gdjs._315322_65292_20250_19981_20250Code.eventsList0(runtimeScene);
return;

}

gdjs['_315322_65292_20250_19981_20250Code'] = gdjs._315322_65292_20250_19981_20250Code;
