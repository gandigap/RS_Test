import Post from './Post.js';
import json from './assets/file.json';
import xml from './assets/example.xml';
import csv from './assets/example.csv';
import WebpackLogo from './assets/triangle.png';
import './style/style.css';
const post = new Post('Web Pack Post Titel', WebpackLogo);

console.log('Post t0 string:', post.toString());
console.log('JSON', json);
console.log('XML', xml);
console.log('CSV', csv);