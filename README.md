# web-share-social

Sharing to the web has never been easier. Currently this minilibrary supports\
sharing to Facebook, Twitter and LinkedIn.

## Usage
Use of this library is pretty straight forward. Download the **web-share.js** file\
not forgeting the **web-share.css** file. With those two files you are set.

### Installation
* Add the two files to your project folder.
* Link the js and css files as you normally would.
* Edit the web-share.js file following the example below\
  and you will be set.

  ```js
    var share = new Wsshare();
    // The first parameter would be your link. The second parameter would be your
    // message.
    share.handleShare({
        URL: 'https://your.link.com',
        Message: 'This is your message to the users.',
    });
  ```

* You are now set to share you content.

More **social media sites** and diffrent **icon themes** comming soon.
