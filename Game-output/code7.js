gdjs._315328_65292_22312_19968_36215Code = {};
gdjs._315328_65292_22312_19968_36215Code.GDNewSpriteObjects1= [];
gdjs._315328_65292_22312_19968_36215Code.GDNewSpriteObjects2= [];
gdjs._315328_65292_22312_19968_36215Code.GDNewTextObjects1= [];
gdjs._315328_65292_22312_19968_36215Code.GDNewTextObjects2= [];
gdjs._315328_65292_22312_19968_36215Code.GDNextObjects1= [];
gdjs._315328_65292_22312_19968_36215Code.GDNextObjects2= [];
gdjs._315328_65292_22312_19968_36215Code.GDNewVideoObjects1= [];
gdjs._315328_65292_22312_19968_36215Code.GDNewVideoObjects2= [];

gdjs._315328_65292_22312_19968_36215Code.conditionTrue_0 = {val:false};
gdjs._315328_65292_22312_19968_36215Code.condition0IsTrue_0 = {val:false};
gdjs._315328_65292_22312_19968_36215Code.condition1IsTrue_0 = {val:false};


gdjs._315328_65292_22312_19968_36215Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs._315328_65292_22312_19968_36215Code.GDNextObjects1);

gdjs._315328_65292_22312_19968_36215Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._315328_65292_22312_19968_36215Code.GDNextObjects1.length;i<l;++i) {
    if ( gdjs._315328_65292_22312_19968_36215Code.GDNextObjects1[i].getBehavior("可拖动").isDragged() ) {
        gdjs._315328_65292_22312_19968_36215Code.condition0IsTrue_0.val = true;
        gdjs._315328_65292_22312_19968_36215Code.GDNextObjects1[k] = gdjs._315328_65292_22312_19968_36215Code.GDNextObjects1[i];
        ++k;
    }
}
gdjs._315328_65292_22312_19968_36215Code.GDNextObjects1.length = k;}if (gdjs._315328_65292_22312_19968_36215Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "第9，恭喜", false);
}}

}


};

gdjs._315328_65292_22312_19968_36215Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._315328_65292_22312_19968_36215Code.GDNewSpriteObjects1.length = 0;
gdjs._315328_65292_22312_19968_36215Code.GDNewSpriteObjects2.length = 0;
gdjs._315328_65292_22312_19968_36215Code.GDNewTextObjects1.length = 0;
gdjs._315328_65292_22312_19968_36215Code.GDNewTextObjects2.length = 0;
gdjs._315328_65292_22312_19968_36215Code.GDNextObjects1.length = 0;
gdjs._315328_65292_22312_19968_36215Code.GDNextObjects2.length = 0;
gdjs._315328_65292_22312_19968_36215Code.GDNewVideoObjects1.length = 0;
gdjs._315328_65292_22312_19968_36215Code.GDNewVideoObjects2.length = 0;

gdjs._315328_65292_22312_19968_36215Code.eventsList0(runtimeScene);
return;

}

gdjs['_315328_65292_22312_19968_36215Code'] = gdjs._315328_65292_22312_19968_36215Code;
