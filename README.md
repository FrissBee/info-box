# Info Box

The _Info Box_ can be used to display message boxes that are hidden again after a specified time.

The _Info Box_ can be displayed at the top (left, center, right), bottom (left, center, right) and in the middle of the screen.

The design can be customized.

Inserting the _Info Box_ into an existing project is very easy.

## Preview

[You can view the demo here](https://info-box.frissbee.de/).

## Description

Implement the _Info Box_ in your project:

**1. Step - download and add**

Download or clone the repo and add the file `info-box_1.0.0.js` into your project.

**2. Step - implementation**

Include the `info-box_1.0.0.js` file in the corresponding HTML or PHP file with `<script src="./path-to-the-file/info-box_1.0.0.js"></script>` in the `<head>`-Tag

**3. Step - insert the info-box HTML tag**

Insert the `<info-box></info-box>` tag in the desired HTML or PHP file. The position does not matter as long as the tag is within `<body></body>`.

**4. Step - customize**

Use the attributes (see below) to customize the _Info Box_.

Use the function `showInfoBox()` (see below) to display the _Info Box_ and pass the desired text.

## Quick view

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Typing Text</title>

    <!-- 1. Import the "info-box_1.0.0.js" file -->
    <script src="./assets/js/info-box_1.0.0.js"></script>

    <!-- 2. Insert your JavaScript file - if necessary -->
    <script src="./path-to-the-file/my-script.js" defer></script>
  </head>
  <body>
    <main>
      <!--3.  Insert the "info-box " tag (position somewhere within the "body" tag) -->
      <!-- here with some attributes -->
      <info-box
        time-out="4000"
        style-content="font-size: 14px; color: #f7f7f7; padding: 20px; background-color: #176285"
        style-icon="background-color: #ebebeb; fill: #b31e1e"
        top-space="1.2rem"
        right-space="1.2rem"
      ></info-box>

      <!-- Your code... -->
    </main>
  </body>
</html>
```

## All attributes

You only need to specify the CSS key-value pairs that you want to change from the default values.

The attributes that define the position of the _Info Box_ should of course only be used if they make sense in combination.

All attributes can also be set with the JavaScript function `setAttribute()`, but it is recommended to set the attributes with their value directly in the `<info-box></info-box>` HTML tag.

- `time-out`

  This attribute is used to specify the time in milliseconds for which the info box should be displayed.

  Example: `time-out="3000"`.

  **Note:** If the value `"0"` is specified, the info box is not hidden and must be clicked away using the close icon button. In this case, an “OK” button is displayed below the text, which can be used to close the info box.

- `style-content`

  With this attribute you can design the box with CSS.

  You only need to specify the CSS attributes that you want to change.

  Example: `style-content='background-color: #cfe2ff; padding: 20px 16px 16px; max-width: 300px; font-size: 1rem; color: #212529;'`.

- `icon-color`

  This attribute specifies the color of the close icon button. As this is an SVG, the CSS attribute `fill` is set with it.

  Example: `icon-color="#515151"`.

  Alternatively, the SVG can be completely styled via CSS using the `style-icon` attribute. This gives you complete access to the CSS with this attribute. The `icon-color` attribute is for the "easy way".

- `icon-bg`

  This attribute specifies the background color of the close icon button.

  Example: `icon-bg="#fff"`.

  Alternatively, the SVG can be completely styled via CSS using the `style-icon` attribute. This gives you complete access to the CSS with this attribute. The `icon-color` attribute is for the "easy way".

- `style-icon`

  With this attribute you can style the close icon button with CSS.

  This gives you complete access to the CSS with this attribute.

  Example: `style-icon="fill: #515151; height: 1.6rem; width: 1.6rem; border-radius: .4rem; background: transparent; cursor: pointer; margin-top: -20px; margin-right: -16px;"`.

- `top-space`

  This attribute is used to define the CSS attribute `top`. Use this attribute to define the position of the info box at the top. In this case, do not use the `bottom-space` attribute.

  Example: `top-space="1rem"`.

- `bottom-space`

  This attribute is used to define the CSS attribute `bottom`. Use this attribute to define the position of the info box at the bottom. In this case, do not use the `top-space` attribute.

  Example: `bottom-space="1rem"`.

- `left-space`

  This attribute is used to define the CSS attribute `left`. Use this attribute to define the position of the info box on the left edge. In this case, do not use the `right-space` attribute.

  Example: `left-space="1rem"`.

- `right-space`

  This attribute is used to define the CSS attribute `right`. Use this attribute to define the position of the info box on the right edge. In this case, do not use the `left-space` attribute.

  Example: `right-space="1rem"`.

- `bottom-center`

  If this attribute is used, the info box is displayed centered at the bottom. The value is the `bottom` CSS distance. In this case, do not use the other attributes that specify the position of the _Info Box_.

  Example: `bottom-center="1rem"`.

- `top-center`

  If this attribute is used, the info box is displayed centered at the top. The value is the `top` CSS distance. In this case, do not use the other attributes that specify the position of the _Info Box_.

  Example: `top-center="1rem"`.

- `center-center`

  If this attribute is used, the info box is displayed horizontally and vertically centered. In this case, do not use the other attributes that specify the position of the _Info Box_.

  A value is not specified.

- `is-reverse`

  By default (the attribute is not specified), additional info boxes are added at the bottom. If the `is-reverse` attribute is set, additional info boxes are added at the top.

  A value is not specified.

- `has-shadow`

  If this attribute is specified, the info box has a shadow.

  You can also design an individual shadow yourself with CSS by passing the corresponding CSS to the `style-content` attribute.

  A value is not specified.

## Functions

**showInfoBox()**

This function displays the Info Box.

The text that is to appear in the _Info Box_ is passed as a parameter. Text and HTML can be used as a string.

Example:

```js
const infoBox = document.querySelector('info-box');

infoBox.showInfoBox('<h1>Hello World!</h1>');
```

## Design with CSS

If you want to have more influence on the design, you can do this in your CSS file with the pseudo-element `::part()`.

You can design:

- `container`
- `info-boxes`
- `style-content` => similar to the attribute `style-content`
- `container-content`
- `container-close`
- `style-icon` => similar to the attribute `style-icon`
- `btn-ok` => style the "OK" Button (when the attribute `time-out` is `0`)

Here a simple example:

```css
info-box::part(style-content) {
  background-color: rgb(231, 231, 231);
  padding: 20px;
  border-radius: 14px;
}
```
