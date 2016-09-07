# Recipe box

FreeCodeCamp exercise for React. Keeps a list of recipes which contain lists of ingredients, stored
in the browser's local storage.

Implemented with React, redux, React Bootstrap and Immutable. Built with the `create-react-app` initial boilerplate adding flow.

Flow is now working with full coverage - except for react-redux functions (connect and Provider). Flow issues

* No coverage for react-redux
* Does not catch extra props added in JSX (does catch missing props)
* Does not fail if we import a type which is not exported

## TODO

* Re-factor appstate in state - separate UI
* Is there any flow-type for react-bootstrap
* Tidy code
* Add ingredients
* Add localStorage

* Remove ; and ""
* Decide where to keep css (one file, or many?)
* Do we need PropTypes?
* Any more we can do with flow? At the moment everything related to redux and (especially) react-redux is unchecked.
Also we have no flow with `*.test.js`
* Check markdown formatting of this file
* Add more tests
* better way to write first selected test (lambda?)

# Notes

Compared to our TypeScript/VS Code setup
* No docs on mouseover
* No type checking of imports on libraries (e.g., using { } vs default, or importing from the wrong library)
* Primitive git support

## Design

Hierarchy of containers/components
* App
  + RecipeBox
    - RecipeName
    - if selected: IngredientsList
    - if selected: IngredientsControl
    - if selected: IngredientsModal
  + RecipeControls
  + AddRecipeModal

Application State:
* `recipes`: `OrderedMap<string, ingredients>` where `ingredients` is a `List<string>`
* `selectedRecipe` is the name of the recipe that is
selected or null


## Steps followed to set up this project

`create-react-app` makes project setup much simpler, but adding flow and additional libraries
makes it not quite trivial. Logging all the steps here for future reference. This is based on version
0.3 of `create-react-app`

### Downloads

```sh
npm upgrade -g create-react-app
create-react-app recipe-box
cd recipe-box
npm i --save redux react-redux immutable
npm i --save react-bootstrap bootstrap@3
```

### Boilerplate

* Create somewhere to hold the files we replace but might need again while offline

```sh
mkdir downloaded
mv README.md downloaded/create-react-app-installed-README.md
```

* Create `README.md`
* Replace `src/favicon.ico`
* Remove `src/logo.svg`
* Add `downloaded` to `.gitignore`
* Add `.flowconfig` as recommended in `create-react-app` user guide (`[ignore]
<PROJECT_ROOT>/node_modules/fbjs/.*`)
* Add to package.json `"homepage": "http://jw120.github.io/recipe-box"`

### Editor config

This works well with atom using the language-babel, linter-eslint and linter-flow plugins.

To make this work, `create-react-app` documents suggest we need:

```
npm install -g eslint babel-eslint eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-flowtyp
```
