# State Management Exploration

This is just a little test repo to try out some state management libraries I've never played with.

## Structure

You should have to touch this unless you want to add another project but apart from `repo-configs` each directory is its own React app with different state library installed.

### Workspaces

* `jotai-app`
* `recoil-app`
* `redux-app`
* `xstate-app`
* `zustand-app`

### Adding A Workspace

1. Make a new folder.
2. Add the folder as a workspace to the top level `package.json` in the `workspaces` field.
3. Set the name of the `package.json` in the new workspace as the name that was added to the `workspaces` field in the top level `package.json`.
4. Run `yarn workspaces info` to see if yarn has correctly picked up the workspace.

Optionally:

* Inherit `tsconfig.json` or `.eslintrc.js` configurations from `repo-configs`.

## Running

*Note: Requires at least Node 14.*

### Dev

In the root directory:

* `yarn` to install all pacakges.
* `yarn dev` to start each dev server.

Hot reloading should be enabled for any of the projects since they are running using Vite, just make your changes in whatever project you wish.

### Adding Packages

This repo is managed by yarn workspaces. To add a package to a particular workspace, run:

`yarn workspace <name of workspace> add <package name>`

Example:

`yarn workspace jotai-app add lodash`

## Explored Libraries - Building

### Turborepo

Dcos: <https://turbo.build/repo>

### Vite

Docs: <https://vitejs.dev/>

## Explored Libraries - State Management

### Jotai

Docs: <https://jotai.org/docs/introduction>

### Recoil

Docs: <https://recoiljs.org/>

### Redux + RTK

Docs: <https://redux-toolkit.js.org/>

### XState

Docs (Main): <https://xstate.js.org/docs/>  
Docs (React): <https://xstate.js.org/docs/recipes/react.html>

### Zustand

Docs: <https://docs.pmnd.rs/zustand/getting-started/introduction>
