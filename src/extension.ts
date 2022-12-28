import * as vscode from 'vscode';
//custom
import * as path from 'path';
import { TextEncoder } from 'util';
const generatedFile = 'index.ts';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('simple-imports.helloWorld', async (directory) => {
		if (directory) {
		  const directoryFolder = directory.path;
		  const files = await vscode.workspace.findFiles(new vscode.RelativePattern(directoryFolder, '**/*.ts'), '**/*.spec.ts');
		  const fileContent = files.reduce((acc, file) => {
			const fileName = path.basename(file.path).replace('.ts', '');
			return acc + `export * from './${fileName}';\n`;
		  }, '');
	  
		  vscode.workspace.fs.writeFile(
			vscode.Uri.parse(`${directoryFolder}/${generatedFile}`),
			new TextEncoder().encode(fileContent)
		  );
		}

		vscode.window.showInformationMessage('✔️ index.ts has been successfully generated!');

	  });	

	context.subscriptions.push(disposable);
}

export function deactivate() { 
	//vscode.window.showInformationMessage('👋 Thank you for using Simple Imports!'); 
}
