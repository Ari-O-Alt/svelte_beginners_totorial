##### Steps to take: 
- You must have **Node.js** installed.
- I am using **VS Code** as a code editor. I also installed the following extensions: **Svelte for VS Code** and **Svelte 3 Snippets**.
- Create a folder where you want to keep your Svelte project then open that folder inside VS Code.
- To create a new Svelte project, open the Terminal and run the following command: **npx degit sveltejs/template [nameOfTheProject]**
- If the project has been created successfully, you should see the following message: **cloned sveltejs/tmeplate#HEAD to [nameOfTheProject]**
- Navigate inside the project folder using the command: cd . \ [nameOfTheProject] \ 
- Run **npm install** (if you're using npm) or **yarn** (if you're using Yarn). This will install the needed project packages.
- To start the app, type **npm run dev** or **yarn dev** (this will create a local server on port :5000)
- Open your browser at **http://localhost:5000/**

##### Project structure: 
- **package.json** - Contains the dependencies ans scripts necessary for the project to run (Svelte is used only in the compilation phase and never bundeled into the code that is sent to the browser; **rollup**, listed in the devDependencies list is the compiler which transforms the Svelte code into Javascript that the browser understands)
- **rollup.config.js** - the file with all the Rollup setups
- **package.json** -
- **package-lock.json**
     



