<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


## About The Project

![alt text](https://github.com/stente3/launching-soon/blob/main/src/designs/main.png)

Our upcoming project is an interactive web simulator that provides a sneak peek into our soon-to-be-launched website. This application offers users a preview of the website's logo, allowing them to get a sense of its visual identity. Additionally, users have the option to enter their email address if they wish to receive notifications once the application is fully completed.

Within the application, users can explore a prototype showcasing the envisioned final design of the website. This feature allows them to visualize the layout, aesthetics, and overall user experience that will be available upon completion.

Furthermore, the application includes simulated links to the web platform's social media profiles. Users can interact with these links, giving them a sense of the web presence and social engagement that our website will offer.
### Built With

* [JSX](https://react.dev/learn/writing-markup-with-jsx)
* [SASS](https://sass-lang.com/documentation)
* [React](https://react.dev/)
* [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
* [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
* [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [Mobile frist](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first)
* [Relative Units](https://www.w3schools.com/cssref/css_units.asp)
* [Responsive design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)


## Getting Started
This is the structure of the folders.

The-project/ <br>
├──index.html <br>
├── public/ <br>
└── src/ <br>
......├──App/ <br>
......├──assets/ <br>
......├──components/ <br>
......├──designs/ <br>
......└──sass/ <br>
...........└──base/ <br>

"components/": This directory is where you store reusable UI components used throughout your application. Each component typically has its own folder, containing the corresponding JSX file (e.g., "Footer.jsx") and related styles.

Overall, this folder structure follows a typical organization for a React project, with separate directories for different aspects of the application, such as components, assets, styles, and public files. It provides a modular and organized approach to building and maintaining your React application.


### Prerequisites

* You need a web browser to view the content, it is recommended NOT to use Internet Explorer
* Node.js which allows you to run javascript code outside of a browser
* NPM to download all project dependencies
* Git to clone the repository

### Installation
1. Clone the repository in the terminal 
   ```sh
   git clone https://github.com/stente3/launching-soon.git
   ```

## Usage
To begin working on the project, follow the steps below:

1. Clone the repository or download the project files to your local machine.
2. Make sure you have Node.js and npm (Node Package Manager) installed.
3. Open a terminal or command prompt and navigate to the project directory.
4. Install the project dependencies by running the command:
   ```
   npm install
   ```
5. Once the dependencies are installed, you can start the development server by running:
   ```
   npm run dev
   ```
   This will launch the application in your default browser, and any changes you make to the source code will automatically reload the page.

Now you're ready to start working on the project! The main entry point of the application is located in the `src/main.jsx` file. The project structure follows a modular approach, with reusable components organized in the `src/components` directory.

Feel free to modify the `index.html` file in the root directory to set up the overall structure of your application. If you need to add or replace any static assets, such as images or fonts, you can place them in the `public` directory.

## Contributing

I thank the platform "Frontend Mentor" for helping me improve my Frontend skills with all the challenges they offer <br>
You can find this and many more front end challenges by visiting their website https://www.frontendmentor.io/


## License

Distributed under the MIT License. See [`LICENSE`](https://github.com/stente3/launching-soon/blob/main/LICENSE) for more information.


## Contact

Camilo Andrés Fuentes Morales - mikarinkitamo1346@gmail.com

Project Link: [https://launching-soon.netlify.app/](https://launching-soon.netlify.app/)


## Acknowledgments

* [Frontend Mentor](https://www.frontendmentor.io/)
* [Vite JS](https://vitejs.dev/)
* [Netlify](https://www.netlify.com/)
* [Fonts Google](https://fonts.google.com/)
* [Joshua Comeau](https://www.joshwcomeau.com/css/custom-css-reset/)
* [Othneildrew](https://github.com/othneildrew/Best-README-Template)
