/**
 * Created by user on 2015-07-24.
 */

function cabout(about){
    alert("Bread Board Simulator.\nBBS Team.\nNGN lab.\nKOREATECH.");
}

function ENG2KOR(){
    //var File = document.getElementById("File");
    //File.innerHTML = File.innerHTML.replace("File", "파일");
    //var Open = document.getElementById("Open");
    //Open.innerHTML = Open.innerHTML.replace("Open","열기");
    //var Savea = document.getElementById("Savea");
    //Savea.innerHTML = Savea.innerHTML.replace("Save As..","다른 이름으로 저장");
    //var Edit = document.getElementById("Edit");
    //Edit.innerHTML = Edit.innerHTML.replace("Edit","편집");
    //var Undo1 = document.getElementById("Undo1");
    //Undo1.innerHTML = Undo1.innerHTML.replace("undo","되돌리기");
    //var Refresh = document.getElementById("Refresh");
    //Refresh.innerHTML = Refresh.innerHTML.replace("refresh","새로고침");
    //var Help = document.getElementById("Help");
    //Help.innerHTML = Help.innerHTML.replace("Help","지원");
    var Components = document.getElementById("Components");
    Components.innerHTML = Components.innerHTML.replace("Components","소자목록");
    var Properties = document.getElementById("Properties");
    Properties.innerHTML = Properties.innerHTML.replace("Properties","속성");
    var ComponentName = document.getElementById("ComponentName");
    ComponentName.innerHTML = ComponentName.innerHTML.replace("Component Name","소자이름");
    var ResistanceValue = document.getElementById("ResistanceValue");
    ResistanceValue.innerHTML = ResistanceValue.innerHTML.replace("Resistance Value","저항");
    var Results = document.getElementById("Results");
    Results.innerHTML = Results.innerHTML.replace("Results","결과 값");
    var Measure = document.getElementById("Measure");
    Measure.innerHTML = Measure.innerHTML.replace("Measure","측정");
    var VoltageC = document.getElementById("VoltageC");
    VoltageC.innerHTML = VoltageC.innerHTML.replace("Circuit V, R, I","회로 전압, 저항, 전류");
    var MeasureV = document.getElementById("MeasureV");
    MeasureV.innerHTML = MeasureV.innerHTML.replace("Measured Voltage Value","측정 전압");
    var MeasureC = document.getElementById("MeasureC");
    MeasureC.innerHTML = MeasureC.innerHTML.replace("Measured Current Value","측정 전류");
    var MeasureR = document.getElementById("MeasureR");
    MeasureR.innerHTML = MeasureR.innerHTML.replace("Measured Current Resistance","측정 저항");
    var Undo2 = document.getElementById("Undo2");
    Undo2.innerHTML = Undo2.innerHTML.replace("undo","되돌리기");
    var Clear = document.getElementById("Clear");
    Clear.innerHTML = Clear.innerHTML.replace("Clear Area","초기화");
    var Logcat = document.getElementById("Logcat");
    Logcat.innerHTML = Logcat.innerHTML.replace("logcat","로그");
    var Chapter = document.getElementById("Chapter");
    Chapter.innerHTML = Chapter.innerHTML.replace("Chapter","장");
    var Guide = document.getElementById("Guide");
    Guide.innerHTML = Guide.innerHTML.replace("Guide","가이드");
    var Diagram = document.getElementById("Diagram");
    Diagram.innerHTML = Diagram.innerHTML.replace("Circuit Diagram.","회로 도표");
    var Description = document.getElementById("Description");
    Description.innerHTML = Description.innerHTML.replace("Guide Description.","가이드 묘사");
}

function KOR2ENG(){
    //var File = document.getElementById("File");
    //File.innerHTML = File.innerHTML.replace("파일","File");
    //var Open = document.getElementById("Open");
    //Open.innerHTML = Open.innerHTML.replace("열기","Open");
    //var Savea = document.getElementById("Savea");
    //Savea.innerHTML = Savea.innerHTML.replace("다른 이름으로 저장","Save As..");
    //var Edit = document.getElementById("Edit");
    //Edit.innerHTML = Edit.innerHTML.replace("편집","Edit");
    //var Undo1 = document.getElementById("Undo1");
    //Undo1.innerHTML = Undo1.innerHTML.replace("되돌리기","undo");
    //var Refresh = document.getElementById("Refresh");
    //Refresh.innerHTML = Refresh.innerHTML.replace("새로고침","refresh");
    //var Help = document.getElementById("Help");
    //Help.innerHTML = Help.innerHTML.replace("지원","Help");
    var Components = document.getElementById("Components");
    Components.innerHTML = Components.innerHTML.replace("소자목록","Components");
    var Properties = document.getElementById("Properties");
    Properties.innerHTML = Properties.innerHTML.replace("속성","Properties");
    var ComponentName = document.getElementById("ComponentName");
    ComponentName.innerHTML = ComponentName.innerHTML.replace("소자이름","Component Name");
    var ResistanceValue = document.getElementById("ResistanceValue");
    ResistanceValue.innerHTML = ResistanceValue.innerHTML.replace("저항","Resistance Value");
    var Results = document.getElementById("Results");
    Results.innerHTML = Results.innerHTML.replace("결과 값","Results");
    var Measure = document.getElementById("Measure");
    Measure.innerHTML = Measure.innerHTML.replace("측정","Measure");
    var VoltageC = document.getElementById("VoltageC");
    VoltageC.innerHTML = VoltageC.innerHTML.replace("회로 전압, 저항, 전류","Circuit V, R, I");
    var MeasureV = document.getElementById("MeasureV");
    MeasureV.innerHTML = MeasureV.innerHTML.replace("측정 전압","Measured Voltage Value");
    var MeasureC = document.getElementById("MeasureC");
    MeasureC.innerHTML = MeasureC.innerHTML.replace("측정 전류","Measured Current Value");
    var MeasureR = document.getElementById("MeasureR");
    MeasureR.innerHTML = MeasureR.innerHTML.replace("측정 저항","Measured Current Resistance");
    var Undo2 = document.getElementById("Undo2");
    Undo2.innerHTML = Undo2.innerHTML.replace("되돌리기","undo");
    var Clear = document.getElementById("Clear");
    Clear.innerHTML = Clear.innerHTML.replace("초기화","Clear Area");
    var Logcat = document.getElementById("Logcat");
    Logcat.innerHTML = Logcat.innerHTML.replace("로그","logcat");
    var Chapter = document.getElementById("Chapter");
    Chapter.innerHTML = Chapter.innerHTML.replace("장","Chapter");
    var Guide = document.getElementById("Guide");
    Guide.innerHTML = Guide.innerHTML.replace("가이드","Guide");
    var Diagram = document.getElementById("Diagram");
    Diagram.innerHTML = Diagram.innerHTML.replace("회로 도표","Circuit Diagram.");
    var Description = document.getElementById("Description");
    Description.innerHTML = Description.innerHTML.replace("가이드 묘사","Guide Description.");
}
