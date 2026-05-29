const fs = require('fs');
const glob = require('glob');

const files = glob.sync('*.html');
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  if (content.includes('<li class="dropdown"><a href="#">Resources</a>') && !content.includes('href="blog.html">Insights')) {
    
    const regex = /<li class="dropdown"><a href="#">Resources<\/a>\s*<ul>\s*<li><a href="about\.html">About Us<\/a><\/li>\s*<li><a href="services\.html">All Services<\/a><\/li>\s*<li><a href="faq\.html">FAQ<\/a><\/li>\s*<li><a href="testimonials\.html">Testimonials<\/a><\/li>\s*<li><a href="contact\.html">Contact Us<\/a><\/li>\s*<\/ul>/g;
    
    const replaceWith = `<li class="dropdown"><a href="#">Resources</a>
                            <ul>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="services.html">All Services</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="testimonials.html">Testimonials</a></li>
                                <li><a href="blog.html">Insights / Blog</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>`;
                            
    const newContent = content.replace(regex, replaceWith);
    
    if (newContent !== content) {
        fs.writeFileSync(file, newContent);
        console.log('Updated', file);
        count++;
    }
  }
});

console.log('Updated ' + count + ' files.');
