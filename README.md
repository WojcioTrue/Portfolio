# Particle_background
>Simple animation with hexagon shaped particles that move in background of element.<br/>
> Live demo [_here_](https://htmlpreview.github.io/?https://github.com/WojcioTrue/particle_background/blob/457ecf75108137aa90e335ad350091938274fd84/index.html).

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)


## General Information
- Smooth animation for background particles .
- Getting better understanding how particles can be generated, animated and modified.
- Learning how `Window.requestAnimationFrame()` work.
- modifying CSS properieties of particle using JavaScript.
- working on HTMLCollection.



## Technologies Used
- JavaScript
- HTML
- CSS3
- Gulp


## Features
There are some values for plugin that you can change. All these values (except data-el-color), are interpreted as pixel values.
- **Setting left margin of particle (default value=50)**

If we don't specify a value, particle will be generated in the left side of window, with left margin set between 0 to 50px (value generated randomly).

	data-left-margin-start="20"

- **setting maximum size of particle (default value=5)**

Maximum width and height of particle.

	data-max-dimension="5"


- **setting minimum size of particle (default value=5)**

Minimum width and height of particle.

	data-min-dimension="5"


- **setting color of particle**

If we don't specify a value, particle will have black color.

	data-el-color="gold"

- **mobile friendly**
- **RWD**



## Screenshot
![alt text](/src/img/screen_shot.png)

## Setup
**How to install**<br/>
Download folders from 'dist' folder.
Copy them to your website project.
Add css href in `</head>` element e.g.

    <link rel="stylesheet" href="dist/css/style.css">
Add script before `</body>` tag and initiate e.g.

    <script src ="dist/js/particles.js"></script>
    <script>practiceInit();</script>

## Usage
After download and adding to your website, you need to choose which element should have this animated background.
When you choosed element, just ad `id="animation"`.

**e.g.**

	<div id="animation"></div>
**e.g. with changed default values**

Here particle will be generated with:
- margin-left with value between 0px and 100px
- minimal height of 4px
- maximum height of 15px
- color of element will be set to "gold"
<br/>

	<div id="animation" 
		data-left-margin-start="100" 
		data-min-dimension="4"       
		data-max-dimension="15" 
		data-el-color="gold">
	</div>

## Project Status
Project is: _in progress_


## Room for Improvement

Room for improvement:
- make particles float from different sides(top to bottom, left to right etc.)
- change shape of particle
- add feature to change z-index of particles


## Acknowledgements

- This project was inspired by select menu in game 'apex legends'




