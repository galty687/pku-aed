gdjs._315324_65292_21028_26029_39029_38754Code = {};
gdjs._315324_65292_21028_26029_39029_38754Code.GDNewSpriteObjects1= [];
gdjs._315324_65292_21028_26029_39029_38754Code.GDNewSpriteObjects2= [];
gdjs._315324_65292_21028_26029_39029_38754Code.GDAObjects1= [];
gdjs._315324_65292_21028_26029_39029_38754Code.GDAObjects2= [];
gdjs._315324_65292_21028_26029_39029_38754Code.GDNewText2Objects1= [];
gdjs._315324_65292_21028_26029_39029_38754Code.GDNewText2Objects2= [];
gdjs._315324_65292_21028_26029_39029_38754Code.GDNewVideoObjects1= [];
gdjs._315324_65292_21028_26029_39029_38754Code.GDNewVideoObjects2= [];
gdjs._315324_65292_21028_26029_39029_38754Code.GDbgObjects1= [];
gdjs._315324_65292_21028_26029_39029_38754Code.GDbgObjects2= [];
gdjs._315324_65292_21028_26029_39029_38754Code.GDninetyObjects1= [];
gdjs._315324_65292_21028_26029_39029_38754Code.GDninetyObjects2= [];
gdjs._315324_65292_21028_26029_39029_38754Code.GDeightyObjects1= [];
gdjs._315324_65292_21028_26029_39029_38754Code.GDeightyObjects2= [];
gdjs._315324_65292_21028_26029_39029_38754Code.GDNewTextObjects1= [];
gdjs._315324_65292_21028_26029_39029_38754Code.GDNewTextObjects2= [];

gdjs._315324_65292_21028_26029_39029_38754Code.conditionTrue_0 = {val:false};
gdjs._315324_65292_21028_26029_39029_38754Code.condition0IsTrue_0 = {val:false};
gdjs._315324_65292_21028_26029_39029_38754Code.condition1IsTrue_0 = {val:false};


gdjs._315324_65292_21028_26029_39029_38754Code.mapOfGDgdjs_46_95315324_9565292_9521028_9526029_9539029_9538754Code_46GDbgObjects1Objects = Hashtable.newFrom({"bg": gdjs._315324_65292_21028_26029_39029_38754Code.GDbgObjects1});
gdjs._315324_65292_21028_26029_39029_38754Code.mapOfGDgdjs_46_95315324_9565292_9521028_9526029_9539029_9538754Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._315324_65292_21028_26029_39029_38754Code.GDNewSpriteObjects1});
gdjs._315324_65292_21028_26029_39029_38754Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs._315324_65292_21028_26029_39029_38754Code.GDbgObjects1);

gdjs._315324_65292_21028_26029_39029_38754Code.condition0IsTrue_0.val = false;
{
gdjs._315324_65292_21028_26029_39029_38754Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._315324_65292_21028_26029_39029_38754Code.mapOfGDgdjs_46_95315324_9565292_9521028_9526029_9539029_9538754Code_46GDbgObjects1Objects, runtimeScene, true, false);
}if (gdjs._315324_65292_21028_26029_39029_38754Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs._315324_65292_21028_26029_39029_38754Code.GDNewVideoObjects1);
{for(var i = 0, len = gdjs._315324_65292_21028_26029_39029_38754Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs._315324_65292_21028_26029_39029_38754Code.GDNewVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("A"), gdjs._315324_65292_21028_26029_39029_38754Code.GDAObjects1);

gdjs._315324_65292_21028_26029_39029_38754Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._315324_65292_21028_26029_39029_38754Code.GDAObjects1.length;i<l;++i) {
    if ( gdjs._315324_65292_21028_26029_39029_38754Code.GDAObjects1[i].getBehavior("可拖动").isDragged() ) {
        gdjs._315324_65292_21028_26029_39029_38754Code.condition0IsTrue_0.val = true;
        gdjs._315324_65292_21028_26029_39029_38754Code.GDAObjects1[k] = gdjs._315324_65292_21028_26029_39029_38754Code.GDAObjects1[i];
        ++k;
    }
}
gdjs._315324_65292_21028_26029_39029_38754Code.GDAObjects1.length = k;}if (gdjs._315324_65292_21028_26029_39029_38754Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "第6，AED操作页面", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._315324_65292_21028_26029_39029_38754Code.GDNewText2Objects1);

gdjs._315324_65292_21028_26029_39029_38754Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._315324_65292_21028_26029_39029_38754Code.GDNewText2Objects1.length;i<l;++i) {
    if ( gdjs._315324_65292_21028_26029_39029_38754Code.GDNewText2Objects1[i].getBehavior("可拖动").isDragged() ) {
        gdjs._315324_65292_21028_26029_39029_38754Code.condition0IsTrue_0.val = true;
        gdjs._315324_65292_21028_26029_39029_38754Code.GDNewText2Objects1[k] = gdjs._315324_65292_21028_26029_39029_38754Code.GDNewText2Objects1[i];
        ++k;
    }
}
gdjs._315324_65292_21028_26029_39029_38754Code.GDNewText2Objects1.length = k;}if (gdjs._315324_65292_21028_26029_39029_38754Code.condition0IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._315324_65292_21028_26029_39029_38754Code.GDNewSpriteObjects1);

gdjs._315324_65292_21028_26029_39029_38754Code.condition0IsTrue_0.val = false;
{
gdjs._315324_65292_21028_26029_39029_38754Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._315324_65292_21028_26029_39029_38754Code.mapOfGDgdjs_46_95315324_9565292_9521028_9526029_9539029_9538754Code_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if (gdjs._315324_65292_21028_26029_39029_38754Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Aww");
}}

}


{


{
}

}


};

gdjs._315324_65292_21028_26029_39029_38754Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._315324_65292_21028_26029_39029_38754Code.GDNewSpriteObjects1.length = 0;
gdjs._315324_65292_21028_26029_39029_38754Code.GDNewSpriteObjects2.length = 0;
gdjs._315324_65292_21028_26029_39029_38754Code.GDAObjects1.length = 0;
gdjs._315324_65292_21028_26029_39029_38754Code.GDAObjects2.length = 0;
gdjs._315324_65292_21028_26029_39029_38754Code.GDNewText2Objects1.length = 0;
gdjs._315324_65292_21028_26029_39029_38754Code.GDNewText2Objects2.length = 0;
gdjs._315324_65292_21028_26029_39029_38754Code.GDNewVideoObjects1.length = 0;
gdjs._315324_65292_21028_26029_39029_38754Code.GDNewVideoObjects2.length = 0;
gdjs._315324_65292_21028_26029_39029_38754Code.GDbgObjects1.length = 0;
gdjs._315324_65292_21028_26029_39029_38754Code.GDbgObjects2.length = 0;
gdjs._315324_65292_21028_26029_39029_38754Code.GDninetyObjects1.length = 0;
gdjs._315324_65292_21028_26029_39029_38754Code.GDninetyObjects2.length = 0;
gdjs._315324_65292_21028_26029_39029_38754Code.GDeightyObjects1.length = 0;
gdjs._315324_65292_21028_26029_39029_38754Code.GDeightyObjects2.length = 0;
gdjs._315324_65292_21028_26029_39029_38754Code.GDNewTextObjects1.length = 0;
gdjs._315324_65292_21028_26029_39029_38754Code.GDNewTextObjects2.length = 0;

gdjs._315324_65292_21028_26029_39029_38754Code.eventsList0(runtimeScene);
return;

}

gdjs['_315324_65292_21028_26029_39029_38754Code'] = gdjs._315324_65292_21028_26029_39029_38754Code;
