gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode = {};
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.localVariables = [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.idToCallbackMap = new Map();
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaObjects1= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaObjects2= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaObjects3= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaObjects4= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDLevelBarObjects1= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDLevelBarObjects2= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDLevelBarObjects3= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDLevelBarObjects4= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaTextObjects1= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaTextObjects2= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaTextObjects3= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaTextObjects4= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects1= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects2= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects3= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects4= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDSellButtonObjects1= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDSellButtonObjects2= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDSellButtonObjects3= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDSellButtonObjects4= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenShopButtonObjects1= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenShopButtonObjects2= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenShopButtonObjects3= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenShopButtonObjects4= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects1= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects2= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects3= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects4= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDMoneyTextObjects1= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDMoneyTextObjects2= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDMoneyTextObjects3= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDMoneyTextObjects4= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects1= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects2= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects3= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects4= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDNextSaveInTextObjects1= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDNextSaveInTextObjects2= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDNextSaveInTextObjects3= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDNextSaveInTextObjects4= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects1= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects2= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects3= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects4= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsButtonObjects1= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsButtonObjects2= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsButtonObjects3= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsButtonObjects4= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsTextObjects1= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsTextObjects2= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsTextObjects3= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsTextObjects4= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseAchievmentsObjects1= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseAchievmentsObjects2= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseAchievmentsObjects3= [];
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseAchievmentsObjects4= [];


gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BuyBetterOven"), gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuyDoughMixer"), gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects2);
gdjs.copyArray(runtimeScene.getObjects("CloseShopButton"), gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("MoneyText"), gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDMoneyTextObjects2);
{for(var i = 0, len = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects2.length ;i < len;++i) {
    gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects2[i].SetLabelTextOp("Close Shop", null);
}
}
{for(var i = 0, len = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDMoneyTextObjects2.length ;i < len;++i) {
    gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDMoneyTextObjects2[i].getBehavior("Text").setText("Money: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Money")))));
}
}
{for(var i = 0, len = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects2.length ;i < len;++i) {
    gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects2[i].SetLabelTextOp("Buy Better Oven: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Better_Oven_For_Small_Pizzeria").getChild("Cost")))) + " Money", null);
}
}
{for(var i = 0, len = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects2.length ;i < len;++i) {
    gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects2[i].SetLabelTextOp("Buy Dough Mixer: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Dough_Mixer_For_Small_Pizzeria").getChild("Cost")))) + " Money", null);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Scale");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Text");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Scale") >= 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BuyBetterOven"), gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects1);
gdjs.copyArray(runtimeScene.getObjects("BuyDoughMixer"), gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects1);
gdjs.copyArray(runtimeScene.getObjects("CloseShopButton"), gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoneyText"), gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDMoneyTextObjects1);
{for(var i = 0, len = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects1.length ;i < len;++i) {
    gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects1[i].SetLabelTextOp("Close Shop", null);
}
}
{for(var i = 0, len = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDMoneyTextObjects1.length ;i < len;++i) {
    gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDMoneyTextObjects1[i].getBehavior("Text").setText("Money: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Money")))));
}
}
{for(var i = 0, len = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects1.length ;i < len;++i) {
    gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects1[i].SetLabelTextOp("Buy Better Oven: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Better_Oven_For_Small_Pizzeria").getChild("Cost")))) + " Money", null);
}
}
{for(var i = 0, len = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects1.length ;i < len;++i) {
    gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects1[i].SetLabelTextOp("Buy Dough Mixer: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Dough_Mixer_For_Small_Pizzeria").getChild("Cost")))) + " Money", null);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Scale");
}
}

}


};gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BuyBetterOven"), gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects3.length;i<l;++i) {
    if ( gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects3[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects3[k] = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects3[i];
        ++k;
    }
}
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects3.length = k;
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
/* Reuse gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects3 */
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
{for(var i = 0, len = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects3.length ;i < len;++i) {
    gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects3[i].SetLabelTextOp("Buy Better Oven: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Better_Oven_For_Small_Pizzeria").getChild("Cost")))) + " Money", null);
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
gdjs.copyArray(runtimeScene.getObjects("BuyBetterOven"), gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects2);
{for(var i = 0, len = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects2.length ;i < len;++i) {
    gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects2[i].SetLabelTextOp("Maxed Out", null);
}
}
}

}


};gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BuyDoughMixer"), gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects2.length;i<l;++i) {
    if ( gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects2[k] = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects2[i];
        ++k;
    }
}
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects2.length = k;
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
/* Reuse gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects2 */
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
{for(var i = 0, len = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects2.length ;i < len;++i) {
    gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects2[i].SetLabelTextOp("Buy Dough Mixer: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Dough_Mixer_For_Small_Pizzeria").getChild("Cost")))) + " Money", null);
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
gdjs.copyArray(runtimeScene.getObjects("BuyDoughMixer"), gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects1);
{for(var i = 0, len = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects1.length ;i < len;++i) {
    gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects1[i].SetLabelTextOp("Maxed Out", null);
}
}
}

}


};gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.eventsList3 = function(runtimeScene) {

{


gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.eventsList1(runtimeScene);
}


{


gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.eventsList2(runtimeScene);
}


};gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CloseShopButton"), gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects1.length;i<l;++i) {
    if ( gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects1[k] = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects1[i];
        ++k;
    }
}
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


};gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.eventsList5 = function(runtimeScene) {

{


gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.eventsList0(runtimeScene);
}


{


gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.eventsList3(runtimeScene);
}


{


gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.eventsList4(runtimeScene);
}


};

gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDLevelBarObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDLevelBarObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDLevelBarObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDLevelBarObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaTextObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaTextObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaTextObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaTextObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDSellButtonObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDSellButtonObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDSellButtonObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDSellButtonObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenShopButtonObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenShopButtonObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenShopButtonObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenShopButtonObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDMoneyTextObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDMoneyTextObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDMoneyTextObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDMoneyTextObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDNextSaveInTextObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDNextSaveInTextObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDNextSaveInTextObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDNextSaveInTextObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsButtonObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsButtonObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsButtonObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsButtonObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsTextObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsTextObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsTextObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsTextObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseAchievmentsObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseAchievmentsObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseAchievmentsObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseAchievmentsObjects4.length = 0;

gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.eventsList5(runtimeScene);
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDLevelBarObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDLevelBarObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDLevelBarObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDLevelBarObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaTextObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaTextObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaTextObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDPizzaTextObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyBetterOvenObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDSellButtonObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDSellButtonObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDSellButtonObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDSellButtonObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenShopButtonObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenShopButtonObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenShopButtonObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenShopButtonObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseShopButtonObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDMoneyTextObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDMoneyTextObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDMoneyTextObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDMoneyTextObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDBuyDoughMixerObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDNextSaveInTextObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDNextSaveInTextObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDNextSaveInTextObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDNextSaveInTextObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDOpenLeaderboardButtonObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsButtonObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsButtonObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsButtonObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsButtonObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsTextObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsTextObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsTextObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDAchievmentsTextObjects4.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseAchievmentsObjects1.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseAchievmentsObjects2.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseAchievmentsObjects3.length = 0;
gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode.GDCloseAchievmentsObjects4.length = 0;


return;

}

gdjs['Shop_32Scene_32for_32Small_32PizzeriaCode'] = gdjs.Shop_32Scene_32for_32Small_32PizzeriaCode;
