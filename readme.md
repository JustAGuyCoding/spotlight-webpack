



<center>Spotlight - Webpack Starter Kit
</br>By Just A Guy Coding</center>


Spotlight

------

A simple, elegant HTML blog template built on Bootstrap 4. Released under the Apache 2.0. The template is provided free of charge with no guarantee or warranty.

[TOC]

##### Overview

Spotlight is a HTML blog template provided free of charge, released under the Apache 2.0 License.

This is a Webpack Starter Kit used to create the HTML template. It can be used to create an optimised version of the template using `npm run build-optimise`, or as a starting point for developing your project using the Webpack tooling (such as the Webpack Development Server).

##### Demo

View the template online at https://justaguycoding.com/free/templates/spotlight_html

##### Design 

###### Fonts

The Montserrat and Raleway fonts have been paired to create an easily readable, light and modern, blog.

###### Features

The template displays a site-name "Spotlight", a navigation bar, and search input at the top; followed by a jumbotron feature post and two minor card posts; a list of older posts links is provided to the right hand-side.

###### Responsive

As a Bootstrap based, the template is fully responsive and will resize to fit smaller screens; including the menu, which will collapse for mobile devices.

##### Installation

###### Prerequisites

- npm - npm is installed with node; see https://nodejs.org/en/.

###### Getting the Code

Fetch the repository using git:

```
git clone https://github.com/JustAGuyCoding/spotlight.git
npm init
```

###### Building

Then to build a static html template:

```
npm run build-template
```

or to build an optimised template:

```
npm run build-optimise
```

The generated template will be copied to the `/dist` folder.

##### Editing the HTML

The HTML is stored inside `/src/spotlight.html`. 

If you're not familiar with Webpack then you should note that:

- This is a lodash (https://lodash.com) template. It is imported by Webpack's htmlWebpackPlugin when it generates the code. 
- Images are included using `<%= require('./images/feature1.jpg') %>`  lodash expression syntax. This enables Webpack to automatically process the images and copy them over to the `/dist` folder.
- Webpack's htmlWebpackPlugin will automatically insert the CSS and JavaScript code in to the lodash template. See  `<%= htmlWebpackPlugin.tags.whatever%>` tags to find the insertion points.

##### Bootstrap Dependencies

Bootstrap's full default jQuery and Popper dependencies are included. These allow, amongst other things, for the menu's dropdown to work. 

To reduce or reduce the overall dependency footprint you can :

- Edit CSS dependencies in `/src/sass/custom.scss`. Commenting out the styles you don't need. See https://getbootstrap.com/docs/4.5/getting-started/theming/ for more details.
- Edit JavaScript dependencies under `/src/spotlight.js`. See https://getbootstrap.com/docs/4.5/getting-started/webpack/ for more details.

When you've completed your edits regenerate the template by typing `npm run build-optimise` from the command line.

##### Roadmap

No future enhancements are planned for this template.

However, a version of the template is planned for Google Blogger and potentially WordPress and Umbraco too. Enhancements made during those development activities may be applied to this project.

##### Contributions

Feature suggestions, enhancements, pull requests or other contributions are all welcome.

##### Sponsorship

If you'd  like to say thanks or encourage the creation of more templates in the future then why not buy me a coffee using Paypal? at <a href="https://www.paypal.me/justaguycoding">https://www.paypal.me/justaguycoding</a> or consider becoming a Patron on Patreon at <a href="https://www.patreon.com/justaguycoding">https://www.patreon.com/justaguycoding</a>

