gdjs._315323_65292AED_22270Code = {};
gdjs._315323_65292AED_22270Code.GDNewTextObjects1= [];
gdjs._315323_65292AED_22270Code.GDNewTextObjects2= [];
gdjs._315323_65292AED_22270Code.GDNewSpriteObjects1= [];
gdjs._315323_65292AED_22270Code.GDNewSpriteObjects2= [];
gdjs._315323_65292AED_22270Code.GDnotuseObjects1= [];
gdjs._315323_65292AED_22270Code.GDnotuseObjects2= [];
gdjs._315323_65292AED_22270Code.GDPlayObjects1= [];
gdjs._315323_65292AED_22270Code.GDPlayObjects2= [];

gdjs._315323_65292AED_22270Code.conditionTrue_0 = {val:false};
gdjs._315323_65292AED_22270Code.condition0IsTrue_0 = {val:false};
gdjs._315323_65292AED_22270Code.condition1IsTrue_0 = {val:false};


gdjs._315323_65292AED_22270Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs._315323_65292AED_22270Code.GDPlayObjects1);

gdjs._315323_65292AED_22270Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._315323_65292AED_22270Code.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs._315323_65292AED_22270Code.GDPlayObjects1[i].getBehavior("可拖动").isDragged() ) {
        gdjs._315323_65292AED_22270Code.condition0IsTrue_0.val = true;
        gdjs._315323_65292AED_22270Code.GDPlayObjects1[k] = gdjs._315323_65292AED_22270Code.GDPlayObjects1[i];
        ++k;
    }
}
gdjs._315323_65292AED_22270Code.GDPlayObjects1.length = k;}if (gdjs._315323_65292AED_22270Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "第4，判断页面", false);
}}

}


};

gdjs._315323_65292AED_22270Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._315323_65292AED_22270Code.GDNewTextObjects1.length = 0;
gdjs._315323_65292AED_22270Code.GDNewTextObjects2.length = 0;
gdjs._315323_65292AED_22270Code.GDNewSpriteObjects1.length = 0;
gdjs._315323_65292AED_22270Code.GDNewSpriteObjects2.length = 0;
gdjs._315323_65292AED_22270Code.GDnotuseObjects1.length = 0;
gdjs._315323_65292AED_22270Code.GDnotuseObjects2.length = 0;
gdjs._315323_65292AED_22270Code.GDPlayObjects1.length = 0;
gdjs._315323_65292AED_22270Code.GDPlayObjects2.length = 0;

gdjs._315323_65292AED_22270Code.eventsList0(runtimeScene);
return;

}

gdjs['_315323_65292AED_22270Code'] = gdjs._315323_65292AED_22270Code;
