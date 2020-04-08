# react-base-multilang-site 

This is a simple webapp realized with [react-simple-app](https://github.com/Magicianred/react-simple-app). It is build in **React**, **HTML** and **Bootstrap** for CSS rules.  
  
It is not necessary to have a database (like SQLServer or MySQL) in order to have a site with dynamic content.  
  
You can change the content by editing the json files and the markdown of the 'public/data' folder. *react-base-multilang-site* display them.  

  
As an example, you can show, the [Demo App](http://magicianred.altervista.org/gigs/react-base-multilang-site).  
  
## Configuration  
  
### .env  
- set data in env file  
```plain/text
REACT_APP_NAME=react-base-multilang-site
REACT_APP_VERSION=1.0.1
REACT_APP_BASE_PATH=/gigs/react-base-multilang-site
```
  
### package.json (for build)  
- set path from root of your web hosting  
```json
  "homepage": "/gigs/react-base-multilang-site",
```
  
### /public/data/languages/*/
(where * is the language name, for instance, english, italian, german, etc)

- /public/languages/*/pages/home.md  
- /public/languages/*/pages/about.md  
- /public/languages/*/pages/classes.md  
  
- /public/data/languages/*/home_messages.json  
- /public/data/languages/*/classes.json  

### customize bootstrap  
- /src/custom.scss  
```scss
/* make the customizations */
// $theme-colors: (
//     "info": tomato,
//     "danger": teal
// );
```

