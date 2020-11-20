---
layout: page
title: Bookcover API
permalink: /projects/bookcover-api
---

**Repo**: [github.com/w3slley/bookcover-api](https://github.com/w3slley/bookcover-api)

**Technologies used**: JavaScript, Node.js

While developing [another personal project](/projects/booked), I thought it would make my life easier to have an easy way to find book cover images on the web so that I could use them in the web application. Even though I tried to do this using other APIs (tried both Google's and Goodreads'), I couldn't get any of them to work - the Google API for some reason had really limited book cover images and didn't provide access to a lot of them and the Goodreads API was not accurate at all: if one inserted a given book title and its author name, sometimes the API would yield completely wrong results. Therefore, I figured I should create an API to tackle this precise issue and to make it open for others who might want to use it. I used Node.js and the npm library *requests*. 
