var item;
var rs;
function myFunction() {
    const r_0 = 1;
    const r_1 = 5;
    const r_2 = 30;

    var form1 = FormApp.getActiveForm();
    rs = form1.getResponses();

    var files = DriveApp.getFiles();
    var folders = DriveApp.getFolders();

    var txtFileName = form1.addListItem();
    txtFileName.setTitle('What is the FileName?');

    item = form1.addCheckboxGridItem();
    ScriptApp.newTrigger('searchFile')
        .forForm(FormApp.getActiveForm())
        .onFormSubmit()
        .create();

    for (var i = 0; i < rs.length; i++) {
        Logger.log(rs[i]);
    }
}

function searchFile(aFile) {
    var files = DriveApp.getFilesByName(aFile);
    var folders = DriveApp.getFoldersByName('/');

    var fNames = [];
    var folds = [];
    if (rs[2] === null) return;
    while (folders.hasNext()) {
        var fold = folders.next();
        folds.push(fold);
        var fName = fold.getName();
        fNames.push(fName);
        if (fName === aFile || fName == fold) {
            Logger.log("found");
            item.setTitle('Files You Are Sharing?');
            item.setRows(folds);
            item.setColumns(['2014']);
            break;
        }
    }
}
