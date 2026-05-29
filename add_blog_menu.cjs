const fs = require('fs');
const glob = require('glob');

const files = glob.sync('*.html');
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Only add if it's not already added as a top-level nav item
  if (!content.includes('<li><a href="blog.html">Blog</a></li>\n                        <li><a href="contact.html">Contact Us</a></li>')) {
    
    // Replace the exact closing of Resources dropdown and Contact Us
    const regex = /<\/ul>\s*<\/li>\s*<li><a href="contact\.html">Contact Us<\/a><\/li>/g;
    
    const replaceWith = `</ul>
                        </li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contact Us</a></li>`;
                            
    const newContent = content.replace(regex, replaceWith);
    
    if (newContent !== content) {
        fs.writeFileSync(file, newContent);
        console.log('Updated top-level navbar in', file);
        count++;
    }
  }
});

console.log('Updated ' + count + ' files.');
