# E-commerce Product Page Template

This repository contains a template for an e-commerce product page. The template is built using HTML, CSS, and JavaScript. The product page allows users to view product details, browse through product images, add items to the cart, and view the cart with the selected items.

## Live Demo

To see a live demo of the template, you can visit [here](https://ayhamalahmad.github.io/ecommerce-product-page-main/).

## Features

The template has several key features and functionalities:

- **Menu**: The menu bar provides navigation links to different sections of the page.

- **Product Image Popup**: Clicking on the product image opens a popup window that allows users to view the product images in a larger size and with navigation arrows to switch between images.

- **Thumbnail Images**: Below the main product image, there are thumbnail images that represent different views of the product. Clicking on these thumbnails updates the main product image to show the selected view.

- **Cart Interaction**: Users can add items to the cart by adjusting the quantity using the plus and minus icons. The cart icon displays the number of items added to the cart. Clicking on the cart icon opens a popup window displaying the selected items and the total price.

- **Notification**: A notification icon displays the number of items in the cart. It shows a notification counter when items are added to the cart.

## JavaScript Functionality

The JavaScript code in the template is responsible for adding interactivity to the page. It selects various elements from the HTML using `querySelectors` and then adds event listeners and class toggling for different actions.

The code handles the following functionality:

- Showing and hiding the product image popup when the main product image is clicked.
- Switching the main product image when a thumbnail image is clicked.
- Navigating through product images in the popup using the previous and next arrows.
- Updating the cart when items are added and displaying the cart popup when the cart icon is clicked.
- Handling the quantity of items added to the cart using plus and minus icons.
- Displaying notifications for cart updates.
- Closing the product image popup, cart popup, and menu when clicking outside of these elements.


