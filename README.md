<div align="center">
  <p>
    <a href=""><img src="./images/icon.svg" width="260" alt="Simple Imports" /></a>
  </p>
</div>

# Simple Imports

A clean and efficient VSCode extension for managing the module resolution in your Typescript projects.

## Features

When working with Typescript projects (React, Angular, etc), classes and other types are stored in separate files in the directory, to which we can then call on them by using `import`.

Throughout this process, this can result in a large clutter amount of import statements per file(s) in the directory. As you keep developing, it can appear not pleasant when trying to show your code, or sharing it to other developers. 

### Solution

By generate a `index.ts` file, we can follow the logic for module resolution and create a clean import scenario by having one file contain all the imports, to which we can then export them so that your file(s) only have one `import` statement declared.

<br/>

## Usage

Once installed, all you simply have to do is right-click on the directory you would like, and hit the **Simple Imports**.

![Simple Imports: Generate importFile](images/rightclickfolder.png)

This will create a `index.ts` in the directory, which will contain all the imports used by the .ts files.


**Example** 

For example if there is a directory called `sorting`, we could generate a index.ts file that will allow you to simply import in your files in the following format:
```ts
import { Users, Cohesion, SortingType } from './@sorting';
```

## Requirements

This extension requires you to just be working in a directory in your project that has Typescript files.

## Extension Settings

This extension contributes the following settings:

* `explorer/context`: Displays a option in the context menu.

## Known Issues

* Currently this extension only takes from the directory you have right-clicked on, currently IP is being able to obtain the sub-directories as well.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of Simple Imports!

**😁 Thank you for checking this extension out!**
