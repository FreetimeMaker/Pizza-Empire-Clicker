gdjs.Achievments_32SceneCode = {};
gdjs.Achievments_32SceneCode.localVariables = [];
gdjs.Achievments_32SceneCode.idToCallbackMap = new Map();
gdjs.Achievments_32SceneCode.GDPizzaObjects1= [];
gdjs.Achievments_32SceneCode.GDPizzaObjects2= [];
gdjs.Achievments_32SceneCode.GDPizzaObjects3= [];
gdjs.Achievments_32SceneCode.GDPizzaObjects4= [];
gdjs.Achievments_32SceneCode.GDLevelBarObjects1= [];
gdjs.Achievments_32SceneCode.GDLevelBarObjects2= [];
gdjs.Achievments_32SceneCode.GDLevelBarObjects3= [];
gdjs.Achievments_32SceneCode.GDLevelBarObjects4= [];
gdjs.Achievments_32SceneCode.GDPizzaTextObjects1= [];
gdjs.Achievments_32SceneCode.GDPizzaTextObjects2= [];
gdjs.Achievments_32SceneCode.GDPizzaTextObjects3= [];
gdjs.Achievments_32SceneCode.GDPizzaTextObjects4= [];
gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects1= [];
gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects2= [];
gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects3= [];
gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects4= [];
gdjs.Achievments_32SceneCode.GDSellButtonObjects1= [];
gdjs.Achievments_32SceneCode.GDSellButtonObjects2= [];
gdjs.Achievments_32SceneCode.GDSellButtonObjects3= [];
gdjs.Achievments_32SceneCode.GDSellButtonObjects4= [];
gdjs.Achievments_32SceneCode.GDOpenShopButtonObjects1= [];
gdjs.Achievments_32SceneCode.GDOpenShopButtonObjects2= [];
gdjs.Achievments_32SceneCode.GDOpenShopButtonObjects3= [];
gdjs.Achievments_32SceneCode.GDOpenShopButtonObjects4= [];
gdjs.Achievments_32SceneCode.GDCloseShopButtonObjects1= [];
gdjs.Achievments_32SceneCode.GDCloseShopButtonObjects2= [];
gdjs.Achievments_32SceneCode.GDCloseShopButtonObjects3= [];
gdjs.Achievments_32SceneCode.GDCloseShopButtonObjects4= [];
gdjs.Achievments_32SceneCode.GDMoneyTextObjects1= [];
gdjs.Achievments_32SceneCode.GDMoneyTextObjects2= [];
gdjs.Achievments_32SceneCode.GDMoneyTextObjects3= [];
gdjs.Achievments_32SceneCode.GDMoneyTextObjects4= [];
gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects1= [];
gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects2= [];
gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects3= [];
gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects4= [];
gdjs.Achievments_32SceneCode.GDNextSaveInTextObjects1= [];
gdjs.Achievments_32SceneCode.GDNextSaveInTextObjects2= [];
gdjs.Achievments_32SceneCode.GDNextSaveInTextObjects3= [];
gdjs.Achievments_32SceneCode.GDNextSaveInTextObjects4= [];
gdjs.Achievments_32SceneCode.GDOpenLeaderboardButtonObjects1= [];
gdjs.Achievments_32SceneCode.GDOpenLeaderboardButtonObjects2= [];
gdjs.Achievments_32SceneCode.GDOpenLeaderboardButtonObjects3= [];
gdjs.Achievments_32SceneCode.GDOpenLeaderboardButtonObjects4= [];
gdjs.Achievments_32SceneCode.GDAchievmentsButtonObjects1= [];
gdjs.Achievments_32SceneCode.GDAchievmentsButtonObjects2= [];
gdjs.Achievments_32SceneCode.GDAchievmentsButtonObjects3= [];
gdjs.Achievments_32SceneCode.GDAchievmentsButtonObjects4= [];
gdjs.Achievments_32SceneCode.GDAchievmentsTextObjects1= [];
gdjs.Achievments_32SceneCode.GDAchievmentsTextObjects2= [];
gdjs.Achievments_32SceneCode.GDAchievmentsTextObjects3= [];
gdjs.Achievments_32SceneCode.GDAchievmentsTextObjects4= [];
gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects1= [];
gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects2= [];
gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects3= [];
gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects4= [];


gdjs.Achievments_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AchievmentsText"), gdjs.Achievments_32SceneCode.GDAchievmentsTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("CloseAchievments"), gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Scale");
}
{for(var i = 0, len = gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects2.length ;i < len;++i) {
    gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects2[i].SetLabelTextOp("Close Achievments", null);
}
}
{for(var i = 0, len = gdjs.Achievments_32SceneCode.GDAchievmentsTextObjects2.length ;i < len;++i) {
    gdjs.Achievments_32SceneCode.GDAchievmentsTextObjects2[i].getBehavior("Text").setText("Achievments Completed:" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CompletedAchievments"))) + " of " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("TotalAchievments"))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Scale") >= 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AchievmentsText"), gdjs.Achievments_32SceneCode.GDAchievmentsTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("CloseAchievments"), gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Scale");
}
{for(var i = 0, len = gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects1.length ;i < len;++i) {
    gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects1[i].SetLabelTextOp("Close Achievments", null);
}
}
{for(var i = 0, len = gdjs.Achievments_32SceneCode.GDAchievmentsTextObjects1.length ;i < len;++i) {
    gdjs.Achievments_32SceneCode.GDAchievmentsTextObjects1[i].getBehavior("Text").setText("Achievments Completed:" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CompletedAchievments"))) + " of " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("TotalAchievments"))));
}
}
}

}


};gdjs.Achievments_32SceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BuyBetterOven"), gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects3.length;i<l;++i) {
    if ( gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects3[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects3[k] = gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects3[i];
        ++k;
    }
}
gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Money").getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Better_Oven_For_Small_Pizzeria").getChild("Cost").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Better_Oven_For_Small_Pizzeria").getChild("NumberBought").getAsNumber() < 5);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects3 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Money").sub(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Better_Oven_For_Small_Pizzeria").getChild("Cost").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Better_Oven_For_Small_Pizzeria").getChild("NumberBought").add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Hit").add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Better_Oven_For_Small_Pizzeria").getChild("Cost").mul(3);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("MoneyMult").mul(1.0125);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PizzasMult").mul(1.025);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PPSMult").mul(1.025);
}
{for(var i = 0, len = gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects3.length ;i < len;++i) {
    gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects3[i].SetLabelTextOp("Buy Better Oven: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Better_Oven_For_Small_Pizzeria").getChild("Cost")))) + " Money", null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Better_Oven_For_Small_Pizzeria").getChild("NumberBought").getAsNumber() >= 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BuyBetterOven"), gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects2);
{for(var i = 0, len = gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects2.length ;i < len;++i) {
    gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects2[i].SetLabelTextOp("Maxed Out", null);
}
}
}

}


};gdjs.Achievments_32SceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BuyDoughMixer"), gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects2.length;i<l;++i) {
    if ( gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects2[k] = gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects2[i];
        ++k;
    }
}
gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Money").getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Dough_Mixer_For_Small_Pizzeria").getChild("Cost").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Dough_Mixer_For_Small_Pizzeria").getChild("NumberBought").getAsNumber() < 4);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Money").sub(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Dough_Mixer_For_Small_Pizzeria").getChild("Cost").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Dough_Mixer_For_Small_Pizzeria").getChild("NumberBought").add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Dough_Mixer_For_Small_Pizzeria").getChild("Cost").mul(3);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PPS").setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Dough_Mixer_For_Small_Pizzeria").getChild("Timer").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Dough_Mixer_For_Small_Pizzeria").getChild("NumberBought").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PPSMult").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Dough_Mixer_For_Small_Pizzeria").getChild("Timer").setNumber(1 / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Dough_Mixer_For_Small_Pizzeria").getChild("NumberBought")));
}
{for(var i = 0, len = gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects2.length ;i < len;++i) {
    gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects2[i].SetLabelTextOp("Buy Dough Mixer: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Dough_Mixer_For_Small_Pizzeria").getChild("Cost")))) + " Money", null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Dough_Mixer_For_Small_Pizzeria").getChild("NumberBought").getAsNumber() >= 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BuyDoughMixer"), gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects1);
{for(var i = 0, len = gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects1.length ;i < len;++i) {
    gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects1[i].SetLabelTextOp("Maxed Out", null);
}
}
}

}


};gdjs.Achievments_32SceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.Achievments_32SceneCode.eventsList1(runtimeScene);
}


{


gdjs.Achievments_32SceneCode.eventsList2(runtimeScene);
}


};gdjs.Achievments_32SceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CloseAchievments"), gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects1.length;i<l;++i) {
    if ( gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects1[k] = gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects1[i];
        ++k;
    }
}
gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


};gdjs.Achievments_32SceneCode.eventsList5 = function(runtimeScene) {

{


gdjs.Achievments_32SceneCode.eventsList0(runtimeScene);
}


{


gdjs.Achievments_32SceneCode.eventsList3(runtimeScene);
}


{


gdjs.Achievments_32SceneCode.eventsList4(runtimeScene);
}


};

gdjs.Achievments_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Achievments_32SceneCode.GDPizzaObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDPizzaObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDPizzaObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDPizzaObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDLevelBarObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDLevelBarObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDLevelBarObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDLevelBarObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDPizzaTextObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDPizzaTextObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDPizzaTextObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDPizzaTextObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDSellButtonObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDSellButtonObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDSellButtonObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDSellButtonObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDOpenShopButtonObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDOpenShopButtonObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDOpenShopButtonObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDOpenShopButtonObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDCloseShopButtonObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDCloseShopButtonObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDCloseShopButtonObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDCloseShopButtonObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDMoneyTextObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDMoneyTextObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDMoneyTextObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDMoneyTextObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDNextSaveInTextObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDNextSaveInTextObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDNextSaveInTextObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDNextSaveInTextObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDOpenLeaderboardButtonObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDOpenLeaderboardButtonObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDOpenLeaderboardButtonObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDOpenLeaderboardButtonObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDAchievmentsButtonObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDAchievmentsButtonObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDAchievmentsButtonObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDAchievmentsButtonObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDAchievmentsTextObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDAchievmentsTextObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDAchievmentsTextObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDAchievmentsTextObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects4.length = 0;

gdjs.Achievments_32SceneCode.eventsList5(runtimeScene);
gdjs.Achievments_32SceneCode.GDPizzaObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDPizzaObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDPizzaObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDPizzaObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDLevelBarObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDLevelBarObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDLevelBarObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDLevelBarObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDPizzaTextObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDPizzaTextObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDPizzaTextObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDPizzaTextObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDBuyBetterOvenObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDSellButtonObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDSellButtonObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDSellButtonObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDSellButtonObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDOpenShopButtonObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDOpenShopButtonObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDOpenShopButtonObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDOpenShopButtonObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDCloseShopButtonObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDCloseShopButtonObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDCloseShopButtonObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDCloseShopButtonObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDMoneyTextObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDMoneyTextObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDMoneyTextObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDMoneyTextObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDBuyDoughMixerObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDNextSaveInTextObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDNextSaveInTextObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDNextSaveInTextObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDNextSaveInTextObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDOpenLeaderboardButtonObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDOpenLeaderboardButtonObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDOpenLeaderboardButtonObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDOpenLeaderboardButtonObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDAchievmentsButtonObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDAchievmentsButtonObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDAchievmentsButtonObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDAchievmentsButtonObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDAchievmentsTextObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDAchievmentsTextObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDAchievmentsTextObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDAchievmentsTextObjects4.length = 0;
gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects1.length = 0;
gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects2.length = 0;
gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects3.length = 0;
gdjs.Achievments_32SceneCode.GDCloseAchievmentsObjects4.length = 0;


return;

}

gdjs['Achievments_32SceneCode'] = gdjs.Achievments_32SceneCode;
