gdjs._315327_65292_36148_29255Code = {};
gdjs._315327_65292_36148_29255Code.GDNewSpriteObjects1= [];
gdjs._315327_65292_36148_29255Code.GDNewSpriteObjects2= [];
gdjs._315327_65292_36148_29255Code.GDNewSprite2Objects1= [];
gdjs._315327_65292_36148_29255Code.GDNewSprite2Objects2= [];
gdjs._315327_65292_36148_29255Code.GDNewSprite3Objects1= [];
gdjs._315327_65292_36148_29255Code.GDNewSprite3Objects2= [];
gdjs._315327_65292_36148_29255Code.GDNewSprite4Objects1= [];
gdjs._315327_65292_36148_29255Code.GDNewSprite4Objects2= [];
gdjs._315327_65292_36148_29255Code.GDNewSprite5Objects1= [];
gdjs._315327_65292_36148_29255Code.GDNewSprite5Objects2= [];
gdjs._315327_65292_36148_29255Code.GDDIANJIObjects1= [];
gdjs._315327_65292_36148_29255Code.GDDIANJIObjects2= [];
gdjs._315327_65292_36148_29255Code.GDdianji2Objects1= [];
gdjs._315327_65292_36148_29255Code.GDdianji2Objects2= [];

gdjs._315327_65292_36148_29255Code.conditionTrue_0 = {val:false};
gdjs._315327_65292_36148_29255Code.condition0IsTrue_0 = {val:false};
gdjs._315327_65292_36148_29255Code.condition1IsTrue_0 = {val:false};
gdjs._315327_65292_36148_29255Code.condition2IsTrue_0 = {val:false};


gdjs._315327_65292_36148_29255Code.mapOfGDgdjs_46_95315327_9565292_9536148_9529255Code_46GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._315327_65292_36148_29255Code.GDNewSprite4Objects1});
gdjs._315327_65292_36148_29255Code.mapOfGDgdjs_46_95315327_9565292_9536148_9529255Code_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._315327_65292_36148_29255Code.GDNewSprite2Objects1});
gdjs._315327_65292_36148_29255Code.mapOfGDgdjs_46_95315327_9565292_9536148_9529255Code_46GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs._315327_65292_36148_29255Code.GDNewSprite5Objects1});
gdjs._315327_65292_36148_29255Code.mapOfGDgdjs_46_95315327_9565292_9536148_9529255Code_46GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._315327_65292_36148_29255Code.GDNewSprite3Objects1});
gdjs._315327_65292_36148_29255Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._315327_65292_36148_29255Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._315327_65292_36148_29255Code.GDNewSprite4Objects1);

gdjs._315327_65292_36148_29255Code.condition0IsTrue_0.val = false;
gdjs._315327_65292_36148_29255Code.condition1IsTrue_0.val = false;
{
gdjs._315327_65292_36148_29255Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs._315327_65292_36148_29255Code.mapOfGDgdjs_46_95315327_9565292_9536148_9529255Code_46GDNewSprite4Objects1Objects, gdjs._315327_65292_36148_29255Code.mapOfGDgdjs_46_95315327_9565292_9536148_9529255Code_46GDNewSprite2Objects1Objects, 30, false);
}if ( gdjs._315327_65292_36148_29255Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._315327_65292_36148_29255Code.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs._315327_65292_36148_29255Code.GDNewSprite4Objects1[i].getBehavior("可拖动").isDragged() ) {
        gdjs._315327_65292_36148_29255Code.condition1IsTrue_0.val = true;
        gdjs._315327_65292_36148_29255Code.GDNewSprite4Objects1[k] = gdjs._315327_65292_36148_29255Code.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs._315327_65292_36148_29255Code.GDNewSprite4Objects1.length = k;}}
if (gdjs._315327_65292_36148_29255Code.condition1IsTrue_0.val) {
/* Reuse gdjs._315327_65292_36148_29255Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs._315327_65292_36148_29255Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._315327_65292_36148_29255Code.GDNewSprite2Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._315327_65292_36148_29255Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._315327_65292_36148_29255Code.GDNewSprite5Objects1);

gdjs._315327_65292_36148_29255Code.condition0IsTrue_0.val = false;
gdjs._315327_65292_36148_29255Code.condition1IsTrue_0.val = false;
{
gdjs._315327_65292_36148_29255Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs._315327_65292_36148_29255Code.mapOfGDgdjs_46_95315327_9565292_9536148_9529255Code_46GDNewSprite5Objects1Objects, gdjs._315327_65292_36148_29255Code.mapOfGDgdjs_46_95315327_9565292_9536148_9529255Code_46GDNewSprite3Objects1Objects, 30, false);
}if ( gdjs._315327_65292_36148_29255Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._315327_65292_36148_29255Code.GDNewSprite5Objects1.length;i<l;++i) {
    if ( gdjs._315327_65292_36148_29255Code.GDNewSprite5Objects1[i].getBehavior("可拖动").isDragged() ) {
        gdjs._315327_65292_36148_29255Code.condition1IsTrue_0.val = true;
        gdjs._315327_65292_36148_29255Code.GDNewSprite5Objects1[k] = gdjs._315327_65292_36148_29255Code.GDNewSprite5Objects1[i];
        ++k;
    }
}
gdjs._315327_65292_36148_29255Code.GDNewSprite5Objects1.length = k;}}
if (gdjs._315327_65292_36148_29255Code.condition1IsTrue_0.val) {
/* Reuse gdjs._315327_65292_36148_29255Code.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs._315327_65292_36148_29255Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._315327_65292_36148_29255Code.GDNewSprite3Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._315327_65292_36148_29255Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._315327_65292_36148_29255Code.GDNewSprite3Objects1);

gdjs._315327_65292_36148_29255Code.condition0IsTrue_0.val = false;
gdjs._315327_65292_36148_29255Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._315327_65292_36148_29255Code.GDNewSprite2Objects1.length;i<l;++i) {
    if ( !(gdjs._315327_65292_36148_29255Code.GDNewSprite2Objects1[i].isVisible()) ) {
        gdjs._315327_65292_36148_29255Code.condition0IsTrue_0.val = true;
        gdjs._315327_65292_36148_29255Code.GDNewSprite2Objects1[k] = gdjs._315327_65292_36148_29255Code.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs._315327_65292_36148_29255Code.GDNewSprite2Objects1.length = k;}if ( gdjs._315327_65292_36148_29255Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._315327_65292_36148_29255Code.GDNewSprite3Objects1.length;i<l;++i) {
    if ( !(gdjs._315327_65292_36148_29255Code.GDNewSprite3Objects1[i].isVisible()) ) {
        gdjs._315327_65292_36148_29255Code.condition1IsTrue_0.val = true;
        gdjs._315327_65292_36148_29255Code.GDNewSprite3Objects1[k] = gdjs._315327_65292_36148_29255Code.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs._315327_65292_36148_29255Code.GDNewSprite3Objects1.length = k;}}
if (gdjs._315327_65292_36148_29255Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "第6，AED操作页面", true);
}}

}


};

gdjs._315327_65292_36148_29255Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._315327_65292_36148_29255Code.GDNewSpriteObjects1.length = 0;
gdjs._315327_65292_36148_29255Code.GDNewSpriteObjects2.length = 0;
gdjs._315327_65292_36148_29255Code.GDNewSprite2Objects1.length = 0;
gdjs._315327_65292_36148_29255Code.GDNewSprite2Objects2.length = 0;
gdjs._315327_65292_36148_29255Code.GDNewSprite3Objects1.length = 0;
gdjs._315327_65292_36148_29255Code.GDNewSprite3Objects2.length = 0;
gdjs._315327_65292_36148_29255Code.GDNewSprite4Objects1.length = 0;
gdjs._315327_65292_36148_29255Code.GDNewSprite4Objects2.length = 0;
gdjs._315327_65292_36148_29255Code.GDNewSprite5Objects1.length = 0;
gdjs._315327_65292_36148_29255Code.GDNewSprite5Objects2.length = 0;
gdjs._315327_65292_36148_29255Code.GDDIANJIObjects1.length = 0;
gdjs._315327_65292_36148_29255Code.GDDIANJIObjects2.length = 0;
gdjs._315327_65292_36148_29255Code.GDdianji2Objects1.length = 0;
gdjs._315327_65292_36148_29255Code.GDdianji2Objects2.length = 0;

gdjs._315327_65292_36148_29255Code.eventsList0(runtimeScene);
return;

}

gdjs['_315327_65292_36148_29255Code'] = gdjs._315327_65292_36148_29255Code;
