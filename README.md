# Instructions of how to deploy the project locally on your machine

Go to github repo:
https://github.com/ugglr/savvy-react-currenct-wallet

Clone or download repo:
https://github.com/ugglr/savvy-react-currenct-wallet.git

cd into directory:
\$cd .../savvy-react-currenct-wallet <----- just realized I spelled currency wrong.

install dependencies with npm
\$npm install

Development server will now be running on
http://localhost:8000/

NOTE: It will compile with warnings because of the original dev path does not match current path.
NOTE: If you get an error message saying something about bootstrap and JSON, reload the page and it should disapear, it is a bug with npm.

EXTERNAL LIBRARIES
I used gatsby.js because it's super easy to manage routing and deploying the application
Everything will be super fast when serving the static content which it builds into the public folder.

I used Material-UI because it gives me responsive components out of the box,
and I think it is the, style wise, most complete library out there.

I challenged myself not to use Redux, I think if the app do not have user authentication one shall try to make do without it.

I have not implemented any tests, for the extra point, I think testing is super important,
I could install jest and have at it if you wish.

## Coding Challenge

We're looking for people who can build awesome products, so we created the following challenge to test your developer skills. We are looking for a creative mind that can bring best practices and UX together.

We would like you to create a React wallet that can handle different currencies (USD, EUR, CHF, etc) and exchange them between each other.

E.g. John Doe's wallet (Default currency = USD)

- USD balance: 100 USD
- EUR balance: 500 EUR
- CHF balance: 10000 CHF
- Totalised value in USD = 10237.79 USD

Users will be able to exchange from one currency to the other one. Hence, John can decide to exchange his 100USD to his Euro account. After the conversion, he will end up having:

_Considering 1 EUR = 1.24 USD_

- USD balance: 0 USD
- EUR balance: 580.42 EUR
- CHF balance: 10000 CHF
- Totalised value in USD = 10684.50 USD

The app should have the following features:

- Exchange between currencies
- Deposit a currency
- Show balance of each currency
- Show totalised value (across all your currencies) in the user's default currency
- Set user's default currency

### Bonus (optional)

- Add new currencies
- Transaction history when user deposits or exchanges money
- Add unit and UI tests
- Include animations

### Criteria

You will be evaluated primarily on:

- React modern practices
- Code reusability (try making reusable components)
- Asynchronous programming
- Error handling
- Consistency of coding style
- Test coverage
- Accesibility
- Responsiveness
- Design style and UX
- Bonuses

### Notes

- Deadline: there's no deadline to deliver the code challenge but we recommend around 7 days (the sooner, the less competition you will have).
- Language: Use ReactJS and feel free to use any library you think it helps organising, writing a better code, managing states (Redux preferred), etc.
- Deliverables:
  - **Private** repo (Github, Gitlab, Bitbucket, etc). We will pay attention on how you commit code.
  - Document the exact steps to run the app and describe libraries used and why you have chosen them. Feel free to comment any additional ideas.
- Tip: Make your own decisions.
- Doubts? Write us at federico@savvy.io or jacob.russell@savvy.io
  <!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
  <p align="center">
    <a href="https://www.gatsbyjs.org">
      <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
    </a>
  </p>
  <h1 align="center">
    Gatsby's hello-world starter
  </h1>

Kick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the hello-world starter.

    ```sh
    # create a new Gatsby site using the hello-world starter
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

<!-- AUTO-GENERATED-CONTENT:END -->
