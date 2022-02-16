// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function translateToQuery(queryArray:string[]|undefined){
	if(queryArray===undefined)
	return "";
    let query:string="";
    for(let i=0;i<queryArray.length;i++){
     
        var str=queryArray[i];
        if(query==="")
        {
            query=str;

        }else{
            query=query+"|"+str;
        }
       
    }
	return query;
}
       
function startUpFindInAllFiles(){
	let queryArray:string[]|undefined=vscode.workspace.getConfiguration().get("ExFindInAllFiles.defaultSearchKeys");
	let query:string=translateToQuery(queryArray);
	vscode.commands.executeCommand("workbench.action.findInFiles",{
        query:query,
        triggerSearch: true,
        isRegex:true
    });

}
    
    
export function activate(context: vscode.ExtensionContext) {
	

	context.subscriptions.push(
		vscode.commands.registerCommand("ExFindInAllFiles.startSearch",()=>{
			startUpFindInAllFiles();
  
  
		}));
}

// this method is called when your extension is deactivated
export function deactivate() {}
