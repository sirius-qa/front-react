# Setting up ESLint + Prettier

1. Delete "eslintConfig" entry from package.json.
2. Run `npx eslint --init`.
3. How would you like to use ESLint? To check syntax, find problems and enforce code style
4. What type of modules does your project use? JavaScript modules (import/export)
5. Which framework does your project use? React
6. Does your project use TypeScript? No
7. Where does your code run? Browser
8. How would you like to define a style for your project? Use a popular style guide
9. Which style guide do you want to follow? Airbnb
10. What format do you want your config file to be in? JavaScript
11. Would you like to install them now with npm? Yes

<img width="1071" alt="Screen Shot 2021-09-20 at 9 31 34 AM" src="https://user-images.githubusercontent.com/32375741/134003270-08e08e7c-9cfa-4a30-b82d-d0b33dfcc42d.png">


12. devDependencies in package.json should now look like this:

<img width="342" alt="Screen Shot 2021-09-20 at 9 35 52 AM" src="https://user-images.githubusercontent.com/32375741/134003223-0131a360-5eff-4e25-b762-f27770fb84fb.png">

13. Install these extra devDependencies:

`npm i -D eslint-config-prettier eslint-plugin-jest prettier eslint-plugin-prettier`

<img width="348" alt="Screen Shot 2021-09-20 at 9 38 36 AM" src="https://user-images.githubusercontent.com/32375741/134003521-13d7bde8-a26b-4d4a-92f6-c1cc4d0fad76.png">

14. Modify `.eslintrc.js` file with this:

```
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:jest/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "jest"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
```

15. Create `.prettierrc.json` file with this content:

```
{
  "printWidth": 100,
  "singleQuote": false
}
```

## Integrate with VSCode

1. Install ESLint extension

<img width="910" alt="Screen Shot 2021-09-20 at 9 42 28 AM" src="https://user-images.githubusercontent.com/32375741/134004073-c153b265-fdb8-46eb-a419-1c7f6395f0c2.png">

2. Open `settings.json` (Preferences > Settings)

<img width="1383" alt="Screen Shot 2021-09-20 at 9 44 41 AM" src="https://user-images.githubusercontent.com/32375741/134004477-54595d0c-61a9-42c0-b194-c7544ff056fa.png">

3. Copy this content:

```
{
  "[javascript]": {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascriptreact]": {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "editor.formatOnSave": true,
  "eslint.alwaysShowStatus": true,
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  }
}
```

## Integrate with WebStorm

...

# Setting up Husky

...
