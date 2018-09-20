# scrape_science_news
Create a web app that lets users view and leave comments on the latest news (scrape news from another site).

These are the dependencis that are used:
  express
  express-handlebars
  mongoose
  body-parser
  cheerio
  request

The app scrapes news from www.ScienceDaily.com.
  The headline, summary and url are given.

The articles are stored in a MongoDB.

Users can add comments that are stored in MongoDB.

Future buildout: Allow user to see more than one note.
                 Allow user to delete notes.
