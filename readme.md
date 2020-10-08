



<center>Spotlight - Webpack Starter Kit
</br>By Just A Guy Coding</center>


Spotlight

------

A simple, elegant HTML blog template built on Bootstrap 4. Released under the Apache 2.0. The template is provided free of charge with no guarantee or warranty.

[TOC]

##### Overview

Spotlight is a HTML blog template provided free of charge, released under the Apache 2.0 License.

This is a Webpack Starter Kit used to create the accompanying Spotlight HTML template. 

It can be used to create an optimised version of the template using `npm run build-optimise`, or as a starting point for developing your project using the Webpack tooling  using `npm run develop`.

##### Demo

View the template online at https://justaguycoding.com/free/templates/spotlight_html

##### Design

###### Fonts

The Montserrat and Raleway fonts are used for an easily readable, light and modern, feel. 

###### Colours

The colour palette is simply dark-grey and white, with a little blue thrown in for links.

###### Features

The site-name "Spotlight" is displayed in the top-left; to the right is the navigation bar which collapses to a hamburger menu for smaller devices. A search input box is provided to the top right.

The main feature is provided using a Jumbotron, displaying a banner image, accompanying Call to Action text and a link to the main content; two minor features are tucked underneath using Card Posts, showing small images and text for secondary Call to Action items.

###### Responsive

Being Bootstrap based, the template is fully responsive and will resize to fit smaller screens automatically.

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

##### Dependencies

All of Bootstrap's default dependencies are included.  These allow, amongst other things, for the menu's dropdown to work.

To reduce the overall dependency footprint you can :

- Edit CSS dependencies in `/src/sass/custom.scss`. Commenting out the styles you don't need. See https://getbootstrap.com/docs/4.5/getting-started/theming/ for more details.
- Edit JavaScript dependencies under `/src/spotlight.js`. See https://getbootstrap.com/docs/4.5/getting-started/webpack/ for more details.

Once you've completed your edits regenerate the template by typing `npm run build-optimise` from the command line.

##### Pictures

All photographs are sourced from Unsplash (https://unsplash.com/) which has a bespoke but permissive license you can find at https://unsplash.com/license. The license includes permission for free and commercial use.

Photographer and designer attribution is included in the template's text.

##### Icons

The Social Media icons are by SimpleIcons (https://simpleicons.org/), a project started by Dan Leech, and are licensed under the Creative Commons Zero v1.0 Universal license (https://creativecommons.org/publicdomain/zero/1.0/).

##### Roadmap

No future enhancements are planned at this time. Although other variations of this template which are planned include: Blogger, Umbraco and WordPress template variants. 

If you require help or new features please get in touch.

##### Contributions
Feature suggestions, enhancements, pull requests or other contributions are all welcome.

##### Sponsorship
If you'd  like to say thanks, or encourage the creation of more templates in the future, then why not buy me a coffee? You can use PayPal at <a href="https://www.paypal.me/justaguycoding">https://www.paypal.me/justaguycoding</a> or consider becoming a Patron on Patreon at <a href="https://www.patreon.com/justaguycoding">https://www.patreon.com/justaguycoding where I post additional articles and information on Spotlight for my sponsors.</a>

