# Instructions of how to deploy the project locally on your machine

Go to github repo:
https://github.com/ugglr/gatsby-react-currency-wallet-app

Clone or download repo:
https://github.com/ugglr/gatsby-react-currency-wallet-app.git

cd into directory:
\$cd .../gatsby-react-currency-wallet-app

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
