---
title: 'Personal blog using Node.js, Express and MySQL'
layout: 'post'
permalink: '/blog/:title'
---
I recently finished a [personal blog website](https://w3slley-blog.herokuapp.com/), a project I've been working on for a couple of months now. As with some of my other projects, I deployed it on Heroku cloud platform.

Anyways, it's been a while since I wanted to create a place where I could share thoughts and ideas, combined with a place to display some of the stuff I work on both on software development but also in physics. And it took me a while since I've been busy with university and everything. But this summer (2020) I managed to get the time needed to finish this and also to work on some other projects - which I'll eventually talk about in the `projects` section. 

You could argue that one doesn't need to develop a blog platform from scracth if they want to publish articles or blogposts online. But what I wanted to use this as a challenge to learn more about Node.js, MySQL, handlebars and others. And as an end result I would have a platform to share stuff on. 

Right when I was developing the project I came across the static site generator Jekyll, which is a pretty useful tool for quickly setting up a personal blog. Since I wanted to continue using the `w3slley.github.io` domain name from Github and I don't plan to buy a new one for now, I'm using Jekyll with Github Pages to host my current personal website. But in a near future I'll get a domain name for myself and I'll use the blog, taking advantage of the functionalities I developed there. 

And since I mentioned it, it would be good to start talking about some of the features I managed to implement.

## Tech stack and features

First I would like to talk about the tech stack I used. I utilized Node.js and Express (the back-end tools I'm most comfortable with right now), handlebars for the template engine and MySQL - the latter was chosen to practice my skills in database design I learned last semester at university. Another thing worth pointing out is the fact that I used MVC from the very start, which made easier to manage the application when it started to get a little bit bigger, on top of all the modularity and compartmentalization that comes with it.

I used [MathJax](https://github.com/mathjax/MathJax) so that I could type equations and mathematical symbols (useful for posts where I talk about physics and maths) and also [Prism.Js](https://prismjs.com) for the code highlighting. The posts can be written in markdown, making the author's life easier, also taking advantage of the markdown code syntax (using backticks for inline code and tripple backticks for blocks of code) and other useful markdown commands. I also added a tag system where each post can be tagged with one or more labels and one can also click them and see all the posts with that particular tag, which is something the Jekyll blog doesn't have (at least I didn't bother to look up at the documentation to see how to implement something like this). 

## Challenges

One of the difficulties I had had to do with fact that the `mysql` Node.js module uses asynchronous callbacks after each query to the database. One of the tasks I had to implement was to display all tags for each blogpost in the index page. For that I needed to, of course, get all the tags for each post from the database.
![](https://imgur.com/ues5KvY.png)

 My initial idea was to add each array of tags into another array called `tags` and send this array to the handlebars view - since the size of the `tags` array will be equal to the size of the `posts` array (array of total posts on the database), they will exactly match and each post will be tagged with its correct tag.

But you just can't synchronously populate the `tags` array with something like this:
```javascript
db.query('SELECT post_id, title, slug, date_created FROM POST ORDER BY date_created DESC', (err, posts)=>{
  if(err) throw err
  tags = []
  for(let i=0;i<posts;i++){
    db.query('SELECT label FROM TAG NATURAL JOIN POST_TAG NATURAL JOIN POST WHERE post_id=?',posts.post_id,(err, data)=>{
      if(err) throw err;
      tags.push(data);
    })
  }
})
res.render('index', {posts, tags});

```
because `res.render()` would be executed right after the for loop, before receiving the data from the database. And you would end up with an empty array being sent to the handlebars views.

The way I solved this was using recursion: I created a function called `getTags` that has as input the response object; the `posts` array which is gathered from the database, each element being an object from a specific post; a position variable which I called `pos` and the `tags` array initially empty. The `pos` variable goes from 0 to the number of total posts minus one and it was used to "traverse" the post, increasing its size on each iteration. Finally, when it gets to the end of the `posts` array, it renders the index page with the `posts` array and also with the now populated `tags` array. Of course I had to return nothing to all the previous recursive calls.

This was the function I used:

```javascript
function getTags(res, posts, pos, tags){
  if(pos==posts.length){
    res.render('index', {posts, tags});
    return;
  }

  db.query('SELECT label FROM TAG NATURAL JOIN POST_TAG NATURAL JOIN POST WHERE post_id=?',posts[pos].post_id,(err, data)=>{
    if(err) throw err;
    posts[pos].label = data;
    getTags(res, posts, pos+1, tags);
  })
}
```

and the `index` method on the `HomeController.js` file, which takes care of all the logic for the home page, became

```javascript
exports.index = function(req, res){
  let userId = req.session.userId
  db.query('SELECT post_id, title, slug, date_created FROM POST ORDER BY date_created DESC', (err, posts)=>{
    if(err) throw err
    tags = []
    //query tags for each post id - uses recursion to iterate through posts and then render page
    getTags(res, posts, 0, tags);
  })
}
```
I thought that was a clean way to solve the problem, but I'm sure people may very well use other means to accomplish this - and I hope I'm doing this the right way.

## Conclusion

I plan to write more detailed descriptions on the projects I'm working on and the challenges I face along the way. I've been also working on a project using TypeScript and I could tell a lot of things about how the process of writing JS code became much easier with it. This is surely a good way to practice my communication skills as well as forcing me to explain the technical decisions I make while developing software.
