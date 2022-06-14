gdjs._315325_65292jiandaoCode = {};
gdjs._315325_65292jiandaoCode.GDNewSpriteObjects1= [];
gdjs._315325_65292jiandaoCode.GDNewSpriteObjects2= [];
gdjs._315325_65292jiandaoCode.GDNewText2Objects1= [];
gdjs._315325_65292jiandaoCode.GDNewText2Objects2= [];
gdjs._315325_65292jiandaoCode.GDNewVideoObjects1= [];
gdjs._315325_65292jiandaoCode.GDNewVideoObjects2= [];
gdjs._315325_65292jiandaoCode.GDbgObjects1= [];
gdjs._315325_65292jiandaoCode.GDbgObjects2= [];
gdjs._315325_65292jiandaoCode.GDNewSprite2Objects1= [];
gdjs._315325_65292jiandaoCode.GDNewSprite2Objects2= [];
gdjs._315325_65292jiandaoCode.GDScissorsObjects1= [];
gdjs._315325_65292jiandaoCode.GDScissorsObjects2= [];
gdjs._315325_65292jiandaoCode.GDNextObjects1= [];
gdjs._315325_65292jiandaoCode.GDNextObjects2= [];
gdjs._315325_65292jiandaoCode.GDPlayObjects1= [];
gdjs._315325_65292jiandaoCode.GDPlayObjects2= [];
gdjs._315325_65292jiandaoCode.GDNewTextObjects1= [];
gdjs._315325_65292jiandaoCode.GDNewTextObjects2= [];

gdjs._315325_65292jiandaoCode.conditionTrue_0 = {val:false};
gdjs._315325_65292jiandaoCode.condition0IsTrue_0 = {val:false};
gdjs._315325_65292jiandaoCode.condition1IsTrue_0 = {val:false};


gdjs._315325_65292jiandaoCode.mapOfGDgdjs_46_95315325_9565292jiandaoCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._315325_65292jiandaoCode.GDNewSpriteObjects1});
gdjs._315325_65292jiandaoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._315325_65292jiandaoCode.GDNewSpriteObjects1);

gdjs._315325_65292jiandaoCode.condition0IsTrue_0.val = false;
{
gdjs._315325_65292jiandaoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._315325_65292jiandaoCode.mapOfGDgdjs_46_95315325_9565292jiandaoCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if (gdjs._315325_65292jiandaoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._315325_65292jiandaoCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs._315325_65292jiandaoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._315325_65292jiandaoCode.GDNewSprite2Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Scissors"), gdjs._315325_65292jiandaoCode.GDScissorsObjects1);

gdjs._315325_65292jiandaoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._315325_65292jiandaoCode.GDScissorsObjects1.length;i<l;++i) {
    if ( gdjs._315325_65292jiandaoCode.GDScissorsObjects1[i].getBehavior("可拖动").isDragged() ) {
        gdjs._315325_65292jiandaoCode.condition0IsTrue_0.val = true;
        gdjs._315325_65292jiandaoCode.GDScissorsObjects1[k] = gdjs._315325_65292jiandaoCode.GDScissorsObjects1[i];
        ++k;
    }
}
gdjs._315325_65292jiandaoCode.GDScissorsObjects1.length = k;}if (gdjs._315325_65292jiandaoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._315325_65292jiandaoCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs._315325_65292jiandaoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._315325_65292jiandaoCode.GDNewSprite2Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs._315325_65292jiandaoCode.GDNextObjects1);

gdjs._315325_65292jiandaoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._315325_65292jiandaoCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs._315325_65292jiandaoCode.GDNextObjects1[i].getBehavior("可拖动").isDragged() ) {
        gdjs._315325_65292jiandaoCode.condition0IsTrue_0.val = true;
        gdjs._315325_65292jiandaoCode.GDNextObjects1[k] = gdjs._315325_65292jiandaoCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs._315325_65292jiandaoCode.GDNextObjects1.length = k;}if (gdjs._315325_65292jiandaoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "第6，AED操作页面", false);
}}

}


};

gdjs._315325_65292jiandaoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._315325_65292jiandaoCode.GDNewSpriteObjects1.length = 0;
gdjs._315325_65292jiandaoCode.GDNewSpriteObjects2.length = 0;
gdjs._315325_65292jiandaoCode.GDNewText2Objects1.length = 0;
gdjs._315325_65292jiandaoCode.GDNewText2Objects2.length = 0;
gdjs._315325_65292jiandaoCode.GDNewVideoObjects1.length = 0;
gdjs._315325_65292jiandaoCode.GDNewVideoObjects2.length = 0;
gdjs._315325_65292jiandaoCode.GDbgObjects1.length = 0;
gdjs._315325_65292jiandaoCode.GDbgObjects2.length = 0;
gdjs._315325_65292jiandaoCode.GDNewSprite2Objects1.length = 0;
gdjs._315325_65292jiandaoCode.GDNewSprite2Objects2.length = 0;
gdjs._315325_65292jiandaoCode.GDScissorsObjects1.length = 0;
gdjs._315325_65292jiandaoCode.GDScissorsObjects2.length = 0;
gdjs._315325_65292jiandaoCode.GDNextObjects1.length = 0;
gdjs._315325_65292jiandaoCode.GDNextObjects2.length = 0;
gdjs._315325_65292jiandaoCode.GDPlayObjects1.length = 0;
gdjs._315325_65292jiandaoCode.GDPlayObjects2.length = 0;
gdjs._315325_65292jiandaoCode.GDNewTextObjects1.length = 0;
gdjs._315325_65292jiandaoCode.GDNewTextObjects2.length = 0;

gdjs._315325_65292jiandaoCode.eventsList0(runtimeScene);
return;

}

gdjs['_315325_65292jiandaoCode'] = gdjs._315325_65292jiandaoCode;
