# Poll widget

This project is created with Vite + React + TS

Going with Vite for this as it is pretty versatile and light weight.

Improvements:

- Currently in during dev hot reload do not work update the changes and dev has to build the project every time changes are made
- The application is very simple, with no easily to use style library such as Tailwind, this can be changed
- As of now there is only one type of embeddable widget i.e inline, can add multiple options such as floating button or in a modal on CTA click
- As the app is directly rendered on the website, website's exisiting styles can affect the styles in widget, can be tackled by putting the app in an iframe
- Currently everything is static

### Steps to run:

- Checkout the respository
- Install the dependencies

```js
npm install
```

- Build the project

```js
npm run build
```

- Run the project

```js
npm run dev
```

- Once the project is running you can navigate to
  http://localhost:5173/index.html

5173 is default port with vite
