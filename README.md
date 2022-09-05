## Welcome  ( ͡° ͜ʖ ͡°)
<br>
<br>
<br>
<br>

## About this project
This project contains 2 cards which are built with React.js and CSS Modules.
<br>
<br>
<br>
<br>

## How does it work?
FIRST CARD :)
First card has a date section which contains day, month and year. I used CSS variables for the date section's color becuase we need that color in another section too.
<br>
<br>
After this first card has another section, a box with three parts: header, title and detail.
<br>
<br>
Header has a name and an icon. That icon uses onClick hook to change the menuShow variable. And that variable defines whether menu section is hidden or shown.
<br>
<br>
The detail part is out of the whole card and since card has hiddle overflow you can't see it.
<br>
<br>
But when you hover on the card the magic happens, the box will be moved to the top and the detail part will apear (pure MAGIC).
<br>
<br>
And the box already uses absolute postion to be at bottom of card so for making the detail part out of card, I put a negative rem to the box's bottom and when you hover on it the bottom will be zero which makes the box completely at bottom of the card.
<br>
<br>
SECOND CARD :)
Unlike the first card, this card don't use any hook and it's just pure CSS. (pure MAGIC)
<br>
<br>
Like the first card we have a date section but now it's just a regular p tag and a regular text, it doesn't have any special styling. And it's in the header div. In header div we have bunch of icons. The header div has two sections and fror keeping them apart I used flexbox and set the justify-content to space-between.
<br>
<br>
Also two of these icons have a number, but the number isn't visiable. For seeing it you need to hover on the card, and it will apear. (MAGIC)
<br>
<br>
I know right now I'm overusing the word magic and apologize and I promise you it won't happen again.
<br>
<br>
So next we have box just like first card. It has name, title deatil. Also it has a beautiful read more button. The button has an icon but you not see it. You see it when you hover on it. It'll apear very smoothly from left to right like magicccccccc.
<br>
<br>
So just like the first card the detail section in box is out of card for seeing it we have to let the magic happen, we have to hover on the card and then guess what? MAGIC HAPPENS.
<br>
<br>
Also one thing that wasn't on the project but I did is risponsiveness on the small devices. I used flexbox and the if the width of device be less than 768px, you'll see the cards in a column. And if the device's width is more than that you'll see it in a row.
<br>
<br>
<br>
<br>

## What will I add to this project if I had more time?
I would've done all three prjects and put each of them in one route and I would use react-router-dom for routing and I'd use Framer-Motion for setting a enter and an exit animation for each route. And I'd probably add dark mode and light mode, also a navbar for switching between pages.

I hope you enjoy reading this long text. i didn't know and still don't know what documenting a project is, but I did my best.
Hope you enjoy it.