gdjs.Small_32PizzeriaCode = {};
gdjs.Small_32PizzeriaCode.localVariables = [];
gdjs.Small_32PizzeriaCode.idToCallbackMap = new Map();
gdjs.Small_32PizzeriaCode.GDPizzaObjects1= [];
gdjs.Small_32PizzeriaCode.GDPizzaObjects2= [];
gdjs.Small_32PizzeriaCode.GDPizzaObjects3= [];
gdjs.Small_32PizzeriaCode.GDLevelBarObjects1= [];
gdjs.Small_32PizzeriaCode.GDLevelBarObjects2= [];
gdjs.Small_32PizzeriaCode.GDLevelBarObjects3= [];
gdjs.Small_32PizzeriaCode.GDPizzaTextObjects1= [];
gdjs.Small_32PizzeriaCode.GDPizzaTextObjects2= [];
gdjs.Small_32PizzeriaCode.GDPizzaTextObjects3= [];
gdjs.Small_32PizzeriaCode.GDBuyBetterOvenObjects1= [];
gdjs.Small_32PizzeriaCode.GDBuyBetterOvenObjects2= [];
gdjs.Small_32PizzeriaCode.GDBuyBetterOvenObjects3= [];
gdjs.Small_32PizzeriaCode.GDSellButtonObjects1= [];
gdjs.Small_32PizzeriaCode.GDSellButtonObjects2= [];
gdjs.Small_32PizzeriaCode.GDSellButtonObjects3= [];
gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects1= [];
gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects2= [];
gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects3= [];
gdjs.Small_32PizzeriaCode.GDCloseShopButtonObjects1= [];
gdjs.Small_32PizzeriaCode.GDCloseShopButtonObjects2= [];
gdjs.Small_32PizzeriaCode.GDCloseShopButtonObjects3= [];
gdjs.Small_32PizzeriaCode.GDMoneyTextObjects1= [];
gdjs.Small_32PizzeriaCode.GDMoneyTextObjects2= [];
gdjs.Small_32PizzeriaCode.GDMoneyTextObjects3= [];
gdjs.Small_32PizzeriaCode.GDBuyDoughMixerObjects1= [];
gdjs.Small_32PizzeriaCode.GDBuyDoughMixerObjects2= [];
gdjs.Small_32PizzeriaCode.GDBuyDoughMixerObjects3= [];
gdjs.Small_32PizzeriaCode.GDNextSaveInTextObjects1= [];
gdjs.Small_32PizzeriaCode.GDNextSaveInTextObjects2= [];
gdjs.Small_32PizzeriaCode.GDNextSaveInTextObjects3= [];
gdjs.Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects1= [];
gdjs.Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects2= [];
gdjs.Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects3= [];
gdjs.Small_32PizzeriaCode.GDAchievmentsButtonObjects1= [];
gdjs.Small_32PizzeriaCode.GDAchievmentsButtonObjects2= [];
gdjs.Small_32PizzeriaCode.GDAchievmentsButtonObjects3= [];
gdjs.Small_32PizzeriaCode.GDAchievmentsTextObjects1= [];
gdjs.Small_32PizzeriaCode.GDAchievmentsTextObjects2= [];
gdjs.Small_32PizzeriaCode.GDAchievmentsTextObjects3= [];
gdjs.Small_32PizzeriaCode.GDCloseAchievmentsObjects1= [];
gdjs.Small_32PizzeriaCode.GDCloseAchievmentsObjects2= [];
gdjs.Small_32PizzeriaCode.GDCloseAchievmentsObjects3= [];


gdjs.Small_32PizzeriaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12685604);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AchievmentsButton"), gdjs.Small_32PizzeriaCode.GDAchievmentsButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("LevelBar"), gdjs.Small_32PizzeriaCode.GDLevelBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("NextSaveInText"), gdjs.Small_32PizzeriaCode.GDNextSaveInTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("OpenShopButton"), gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pizza"), gdjs.Small_32PizzeriaCode.GDPizzaObjects2);
gdjs.copyArray(runtimeScene.getObjects("PizzaText"), gdjs.Small_32PizzeriaCode.GDPizzaTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("SellButton"), gdjs.Small_32PizzeriaCode.GDSellButtonObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Scale");
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDPizzaObjects2.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDPizzaObjects2[i].getBehavior("Resizable").setHeight(150);
}
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDPizzaObjects2.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDPizzaObjects2[i].getBehavior("Resizable").setWidth(150);
}
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDPizzaObjects2.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDPizzaObjects2[i].setPosition((gdjs.evtTools.window.getWindowInnerWidth() / 2) - ((gdjs.Small_32PizzeriaCode.GDPizzaObjects2[i].getWidth()) / 2),(gdjs.evtTools.window.getWindowInnerHeight() / 2) - ((gdjs.Small_32PizzeriaCode.GDPizzaObjects2[i].getHeight()) / 2));
}
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDLevelBarObjects2.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDLevelBarObjects2[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDPizzaTextObjects2.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDPizzaTextObjects2[i].getBehavior("Text").setText("Pizzas: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Pizzas")))) + ", PPS: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PPS")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PPSMult")))) + ", Level: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Level")))) + ", Money: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Money")))) + ", Rebirths: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Rebirths")))));
}
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects2.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects2[i].SetLabelTextOp("Open Shop", null);
}
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDSellButtonObjects2.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDSellButtonObjects2[i].SetLabelTextOp("Sell Pizzas for Money", null);
}
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDLevelBarObjects2.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDLevelBarObjects2[i].SetMaxValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("MaxLevelBarValue")), null);
}
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDLevelBarObjects2.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDLevelBarObjects2[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentLevelBarValue")), null);
}
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDNextSaveInTextObjects2.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDNextSaveInTextObjects2[i].getBehavior("Text").setText("Next Save In: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("NextSaveIn")))) + " Seconds");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Save");
}
{gdjs.evtTools.leaderboards.setPreferSendConnectedPlayerScore(runtimeScene, true);
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDAchievmentsButtonObjects2.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDAchievmentsButtonObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Scale") > 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelBar"), gdjs.Small_32PizzeriaCode.GDLevelBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextSaveInText"), gdjs.Small_32PizzeriaCode.GDNextSaveInTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("OpenShopButton"), gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pizza"), gdjs.Small_32PizzeriaCode.GDPizzaObjects1);
gdjs.copyArray(runtimeScene.getObjects("PizzaText"), gdjs.Small_32PizzeriaCode.GDPizzaTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("SellButton"), gdjs.Small_32PizzeriaCode.GDSellButtonObjects1);
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDPizzaObjects1.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDPizzaObjects1[i].getBehavior("Resizable").setHeight(150);
}
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDPizzaObjects1.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDPizzaObjects1[i].getBehavior("Resizable").setWidth(150);
}
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDPizzaObjects1.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDPizzaObjects1[i].setPosition((gdjs.evtTools.window.getWindowInnerWidth() / 2) - ((gdjs.Small_32PizzeriaCode.GDPizzaObjects1[i].getWidth()) / 2),(gdjs.evtTools.window.getWindowInnerHeight() / 2) - ((gdjs.Small_32PizzeriaCode.GDPizzaObjects1[i].getHeight()) / 2));
}
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDLevelBarObjects1.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDLevelBarObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDPizzaTextObjects1.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDPizzaTextObjects1[i].getBehavior("Text").setText("Pizzas: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Pizzas")))) + ", PPS: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PPS")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PPSMult")))) + ", Level: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Level")))) + ", Money: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Money")))) + ", Rebirths: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Rebirths")))));
}
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects1.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects1[i].SetLabelTextOp("Open Shop", null);
}
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDSellButtonObjects1.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDSellButtonObjects1[i].SetLabelTextOp("Sell Pizzas for Money", null);
}
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDNextSaveInTextObjects1.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDNextSaveInTextObjects1[i].getBehavior("Text").setText("Next Save In: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("NextSaveIn")))) + " Seconds");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Scale");
}
}

}


};gdjs.Small_32PizzeriaCode.mapOfGDgdjs_9546Small_959532PizzeriaCode_9546GDPizzaObjects2Objects = Hashtable.newFrom({"Pizza": gdjs.Small_32PizzeriaCode.GDPizzaObjects2});
gdjs.Small_32PizzeriaCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Pizza"), gdjs.Small_32PizzeriaCode.GDPizzaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Small_32PizzeriaCode.mapOfGDgdjs_9546Small_959532PizzeriaCode_9546GDPizzaObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Small_32PizzeriaCode.GDPizzaObjects2.length;i<l;++i) {
    if ( gdjs.Small_32PizzeriaCode.GDPizzaObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Small_32PizzeriaCode.GDPizzaObjects2[k] = gdjs.Small_32PizzeriaCode.GDPizzaObjects2[i];
        ++k;
    }
}
gdjs.Small_32PizzeriaCode.GDPizzaObjects2.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelBar"), gdjs.Small_32PizzeriaCode.GDLevelBarObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Pizzas").add(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Hit").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("LevelMult").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PizzasMult").getAsNumber());
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDLevelBarObjects2.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDLevelBarObjects2[i].SetValue(gdjs.Small_32PizzeriaCode.GDLevelBarObjects2[i].Value(null) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("LevelGainMult"))), null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentLevelBarValue").add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("LevelGainMult")));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelBar"), gdjs.Small_32PizzeriaCode.GDLevelBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Small_32PizzeriaCode.GDLevelBarObjects1.length;i<l;++i) {
    if ( gdjs.Small_32PizzeriaCode.GDLevelBarObjects1[i].IsFull(null) ) {
        isConditionTrue_0 = true;
        gdjs.Small_32PizzeriaCode.GDLevelBarObjects1[k] = gdjs.Small_32PizzeriaCode.GDLevelBarObjects1[i];
        ++k;
    }
}
gdjs.Small_32PizzeriaCode.GDLevelBarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Small_32PizzeriaCode.GDLevelBarObjects1 */
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDLevelBarObjects1.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDLevelBarObjects1[i].SetMaxValue(gdjs.Small_32PizzeriaCode.GDLevelBarObjects1[i].MaxValue(null) * (2), null);
}
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDLevelBarObjects1.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDLevelBarObjects1[i].SetValue(0, null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Level").add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("LevelGainMult").mul(1.15);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("LevelMult").add(1.15);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PizzasMult").add(1.025);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PPSMult").add(1.025);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("MoneyMult").mul(1.0125);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentLevelBarValue").setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("MaxLevelBarValue").mul(2);
}
}

}


};gdjs.Small_32PizzeriaCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SellButton"), gdjs.Small_32PizzeriaCode.GDSellButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Small_32PizzeriaCode.GDSellButtonObjects1.length;i<l;++i) {
    if ( gdjs.Small_32PizzeriaCode.GDSellButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Small_32PizzeriaCode.GDSellButtonObjects1[k] = gdjs.Small_32PizzeriaCode.GDSellButtonObjects1[i];
        ++k;
    }
}
gdjs.Small_32PizzeriaCode.GDSellButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Pizzas").getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Money").add(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Pizzas").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("LevelMult").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("MoneyMult").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Pizzas").setNumber(0);
}
}

}


};gdjs.Small_32PizzeriaCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Dough_Mixer_For_Small_Pizzeria").getChild("NumberBought").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12700124);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Dough_Mixer_For_Small_Pizzeria");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Dough_Mixer_For_Small_Pizzeria") > runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Dough_Mixer_For_Small_Pizzeria").getChild("Timer").getAsNumber();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelBar"), gdjs.Small_32PizzeriaCode.GDLevelBarObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Pizzas").add(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PPS").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PPSMult").getAsNumber());
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDLevelBarObjects1.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDLevelBarObjects1[i].SetValue(gdjs.Small_32PizzeriaCode.GDLevelBarObjects1[i].Value(null) + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PPS").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PPSMult").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("LevelGainMult").getAsNumber()), null);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Dough_Mixer_For_Small_Pizzeria");
}
}

}


};gdjs.Small_32PizzeriaCode.eventsList4 = function(runtimeScene) {

{


gdjs.Small_32PizzeriaCode.eventsList3(runtimeScene);
}


};gdjs.Small_32PizzeriaCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OpenShopButton"), gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects1.length;i<l;++i) {
    if ( gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects1[k] = gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects1[i];
        ++k;
    }
}
gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Shop Scene for Small Pizzeria");
}
}

}


};gdjs.Small_32PizzeriaCode.asyncCallback12705100 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Small_32PizzeriaCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("NextSaveIn").setNumber(15);
}
gdjs.Small_32PizzeriaCode.localVariables.length = 0;
}
gdjs.Small_32PizzeriaCode.idToCallbackMap.set(12705100, gdjs.Small_32PizzeriaCode.asyncCallback12705100);
gdjs.Small_32PizzeriaCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Small_32PizzeriaCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Small_32PizzeriaCode.asyncCallback12705100(runtimeScene, asyncObjectsList)), 12705100, asyncObjectsList);
}
}

}


};gdjs.Small_32PizzeriaCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Save") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("NextSaveIn").sub(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Save");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("NextSaveIn").getAsNumber() <= -1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextSaveInText"), gdjs.Small_32PizzeriaCode.GDNextSaveInTextObjects2);
{gdjs.evtTools.storage.writeStringInJSONFile("Save", "Save", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{for(var i = 0, len = gdjs.Small_32PizzeriaCode.GDNextSaveInTextObjects2.length ;i < len;++i) {
    gdjs.Small_32PizzeriaCode.GDNextSaveInTextObjects2[i].getBehavior("Text").setText("Saving");
}
}

{ //Subevents
gdjs.Small_32PizzeriaCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Save", "Save");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12705804);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("Save", "Save", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(0));
}
}

}


};gdjs.Small_32PizzeriaCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OpenLeaderboardButton"), gdjs.Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects1.length;i<l;++i) {
    if ( gdjs.Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects1[k] = gdjs.Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects1[i];
        ++k;
    }
}
gdjs.Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "88843394-784a-4597-8089-0d79b7a5a79a", true);
}
}

}


};gdjs.Small_32PizzeriaCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AchievmentsButton"), gdjs.Small_32PizzeriaCode.GDAchievmentsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Small_32PizzeriaCode.GDAchievmentsButtonObjects1.length;i<l;++i) {
    if ( gdjs.Small_32PizzeriaCode.GDAchievmentsButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Small_32PizzeriaCode.GDAchievmentsButtonObjects1[k] = gdjs.Small_32PizzeriaCode.GDAchievmentsButtonObjects1[i];
        ++k;
    }
}
gdjs.Small_32PizzeriaCode.GDAchievmentsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Achievments Scene");
}
}

}


};gdjs.Small_32PizzeriaCode.eventsList10 = function(runtimeScene) {

{


gdjs.Small_32PizzeriaCode.eventsList0(runtimeScene);
}


{


gdjs.Small_32PizzeriaCode.eventsList1(runtimeScene);
}


{


gdjs.Small_32PizzeriaCode.eventsList2(runtimeScene);
}


{


gdjs.Small_32PizzeriaCode.eventsList4(runtimeScene);
}


{


gdjs.Small_32PizzeriaCode.eventsList5(runtimeScene);
}


{


gdjs.Small_32PizzeriaCode.eventsList7(runtimeScene);
}


{


gdjs.Small_32PizzeriaCode.eventsList8(runtimeScene);
}


{


gdjs.Small_32PizzeriaCode.eventsList9(runtimeScene);
}


};

gdjs.Small_32PizzeriaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Small_32PizzeriaCode.GDPizzaObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDPizzaObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDPizzaObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDLevelBarObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDLevelBarObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDLevelBarObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDPizzaTextObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDPizzaTextObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDPizzaTextObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDBuyBetterOvenObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDBuyBetterOvenObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDBuyBetterOvenObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDSellButtonObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDSellButtonObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDSellButtonObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDCloseShopButtonObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDCloseShopButtonObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDCloseShopButtonObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDMoneyTextObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDMoneyTextObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDMoneyTextObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDBuyDoughMixerObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDBuyDoughMixerObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDBuyDoughMixerObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDNextSaveInTextObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDNextSaveInTextObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDNextSaveInTextObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDAchievmentsButtonObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDAchievmentsButtonObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDAchievmentsButtonObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDAchievmentsTextObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDAchievmentsTextObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDAchievmentsTextObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDCloseAchievmentsObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDCloseAchievmentsObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDCloseAchievmentsObjects3.length = 0;

gdjs.Small_32PizzeriaCode.eventsList10(runtimeScene);
gdjs.Small_32PizzeriaCode.GDPizzaObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDPizzaObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDPizzaObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDLevelBarObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDLevelBarObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDLevelBarObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDPizzaTextObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDPizzaTextObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDPizzaTextObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDBuyBetterOvenObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDBuyBetterOvenObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDBuyBetterOvenObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDSellButtonObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDSellButtonObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDSellButtonObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDOpenShopButtonObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDCloseShopButtonObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDCloseShopButtonObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDCloseShopButtonObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDMoneyTextObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDMoneyTextObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDMoneyTextObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDBuyDoughMixerObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDBuyDoughMixerObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDBuyDoughMixerObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDNextSaveInTextObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDNextSaveInTextObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDNextSaveInTextObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDAchievmentsButtonObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDAchievmentsButtonObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDAchievmentsButtonObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDAchievmentsTextObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDAchievmentsTextObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDAchievmentsTextObjects3.length = 0;
gdjs.Small_32PizzeriaCode.GDCloseAchievmentsObjects1.length = 0;
gdjs.Small_32PizzeriaCode.GDCloseAchievmentsObjects2.length = 0;
gdjs.Small_32PizzeriaCode.GDCloseAchievmentsObjects3.length = 0;


return;

}

gdjs['Small_32PizzeriaCode'] = gdjs.Small_32PizzeriaCode;
