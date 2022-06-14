gdjs._315326_65292AED_25805_20316_39029_38754Code = {};
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewSpriteObjects1= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewSpriteObjects2= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDjiandaoObjects1= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDjiandaoObjects2= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDDIANJIObjects1= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDDIANJIObjects2= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDdianji2Objects1= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDdianji2Objects2= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewVideo2Objects1= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewVideo2Objects2= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewTiledSpriteObjects1= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewTiledSpriteObjects2= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewSprite2Objects1= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewSprite2Objects2= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDbgObjects1= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDbgObjects2= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnonObjects1= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnonObjects2= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDshockObjects1= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDshockObjects2= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnoffObjects1= [];
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnoffObjects2= [];

gdjs._315326_65292AED_25805_20316_39029_38754Code.conditionTrue_0 = {val:false};
gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0 = {val:false};
gdjs._315326_65292AED_25805_20316_39029_38754Code.condition1IsTrue_0 = {val:false};


gdjs._315326_65292AED_25805_20316_39029_38754Code.mapOfGDgdjs_46_95315326_9565292AED_9525805_9520316_9539029_9538754Code_46GDbgObjects1Objects = Hashtable.newFrom({"bg": gdjs._315326_65292AED_25805_20316_39029_38754Code.GDbgObjects1});
gdjs._315326_65292AED_25805_20316_39029_38754Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs._315326_65292AED_25805_20316_39029_38754Code.GDbgObjects1);

gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val = false;
{
gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._315326_65292AED_25805_20316_39029_38754Code.mapOfGDgdjs_46_95315326_9565292AED_9525805_9520316_9539029_9538754Code_46GDbgObjects1Objects, runtimeScene, true, false);
}if (gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo2"), gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewVideo2Objects1);
{for(var i = 0, len = gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewVideo2Objects1.length ;i < len;++i) {
    gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewVideo2Objects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("jiandao"), gdjs._315326_65292AED_25805_20316_39029_38754Code.GDjiandaoObjects1);

gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._315326_65292AED_25805_20316_39029_38754Code.GDjiandaoObjects1.length;i<l;++i) {
    if ( gdjs._315326_65292AED_25805_20316_39029_38754Code.GDjiandaoObjects1[i].getBehavior("可拖动").isDragged() ) {
        gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val = true;
        gdjs._315326_65292AED_25805_20316_39029_38754Code.GDjiandaoObjects1[k] = gdjs._315326_65292AED_25805_20316_39029_38754Code.GDjiandaoObjects1[i];
        ++k;
    }
}
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDjiandaoObjects1.length = k;}if (gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "第5，jiandao", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("turnon"), gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnonObjects1);

gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnonObjects1.length;i<l;++i) {
    if ( gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnonObjects1[i].getBehavior("可拖动").isDragged() ) {
        gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val = true;
        gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnonObjects1[k] = gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnonObjects1[i];
        ++k;
    }
}
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnonObjects1.length = k;}if (gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val) {
/* Reuse gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnonObjects1 */
{for(var i = 0, len = gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnonObjects1.length ;i < len;++i) {
    gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnonObjects1[i].setColor("13;253;28");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DIANJI"), gdjs._315326_65292AED_25805_20316_39029_38754Code.GDDIANJIObjects1);

gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._315326_65292AED_25805_20316_39029_38754Code.GDDIANJIObjects1.length;i<l;++i) {
    if ( gdjs._315326_65292AED_25805_20316_39029_38754Code.GDDIANJIObjects1[i].getBehavior("可拖动").isDragged() ) {
        gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val = true;
        gdjs._315326_65292AED_25805_20316_39029_38754Code.GDDIANJIObjects1[k] = gdjs._315326_65292AED_25805_20316_39029_38754Code.GDDIANJIObjects1[i];
        ++k;
    }
}
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDDIANJIObjects1.length = k;}if (gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "第7，贴片", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dianji2"), gdjs._315326_65292AED_25805_20316_39029_38754Code.GDdianji2Objects1);

gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._315326_65292AED_25805_20316_39029_38754Code.GDdianji2Objects1.length;i<l;++i) {
    if ( gdjs._315326_65292AED_25805_20316_39029_38754Code.GDdianji2Objects1[i].getBehavior("可拖动").isDragged() ) {
        gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val = true;
        gdjs._315326_65292AED_25805_20316_39029_38754Code.GDdianji2Objects1[k] = gdjs._315326_65292AED_25805_20316_39029_38754Code.GDdianji2Objects1[i];
        ++k;
    }
}
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDdianji2Objects1.length = k;}if (gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "第7，贴片", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("shock"), gdjs._315326_65292AED_25805_20316_39029_38754Code.GDshockObjects1);

gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._315326_65292AED_25805_20316_39029_38754Code.GDshockObjects1.length;i<l;++i) {
    if ( gdjs._315326_65292AED_25805_20316_39029_38754Code.GDshockObjects1[i].getBehavior("可拖动").isDragged() ) {
        gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val = true;
        gdjs._315326_65292AED_25805_20316_39029_38754Code.GDshockObjects1[k] = gdjs._315326_65292AED_25805_20316_39029_38754Code.GDshockObjects1[i];
        ++k;
    }
}
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDshockObjects1.length = k;}if (gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val) {
/* Reuse gdjs._315326_65292AED_25805_20316_39029_38754Code.GDshockObjects1 */
{for(var i = 0, len = gdjs._315326_65292AED_25805_20316_39029_38754Code.GDshockObjects1.length ;i < len;++i) {
    gdjs._315326_65292AED_25805_20316_39029_38754Code.GDshockObjects1[i].setColor("58;83;247");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("turnoff"), gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnoffObjects1);

gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnoffObjects1.length;i<l;++i) {
    if ( gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnoffObjects1[i].getBehavior("可拖动").isDragged() ) {
        gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val = true;
        gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnoffObjects1[k] = gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnoffObjects1[i];
        ++k;
    }
}
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnoffObjects1.length = k;}if (gdjs._315326_65292AED_25805_20316_39029_38754Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "第8，在一起", false);
}}

}


};

gdjs._315326_65292AED_25805_20316_39029_38754Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewSpriteObjects1.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewSpriteObjects2.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDjiandaoObjects1.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDjiandaoObjects2.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDDIANJIObjects1.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDDIANJIObjects2.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDdianji2Objects1.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDdianji2Objects2.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewVideo2Objects1.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewVideo2Objects2.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewSprite2Objects1.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDNewSprite2Objects2.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDbgObjects1.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDbgObjects2.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnonObjects1.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnonObjects2.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDshockObjects1.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDshockObjects2.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnoffObjects1.length = 0;
gdjs._315326_65292AED_25805_20316_39029_38754Code.GDturnoffObjects2.length = 0;

gdjs._315326_65292AED_25805_20316_39029_38754Code.eventsList0(runtimeScene);
return;

}

gdjs['_315326_65292AED_25805_20316_39029_38754Code'] = gdjs._315326_65292AED_25805_20316_39029_38754Code;
