const fs = require('fs');

exports.moment = require('moment');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = (obj) => JSON.stringify(obj, null, 2);

// inserting an SVG
exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);

exports.siteName = `Can I Freeze This?`;

exports.menu = [{
    slug: '/random',
    title: 'Random',
    icon: 'random-solid',
  },
  {
    slug: '/top10',
    title: 'Top 10',
    icon: 'crown-solid',
  },
  {
    slug: '/categories',
    title: 'Categories',
    icon: 'list-ol-solid',
  },
  {
    slug: '/add',
    title: 'Add',
    icon: 'marker-solid',
  },
];