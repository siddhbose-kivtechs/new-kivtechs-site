const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main content
app.get('/', (req, res) => {
    res.render('index', {
        activePage: 'main', // Set active page for left sidebar
        contentFile: 'main' // Specify the content file for the main page
    });
});

// Route for the terms and conditions
app.get('/terms', (req, res) => {
    res.render('index', {
        activePage: 'tandc', // Set active page for left sidebar
        contentFile: 'tandc' // Specify the content file for terms and conditions
    });
});

// Route for the privacy policy
app.get('/privacy', (req, res) => {
    res.render('index', {
        activePage: 'privacypolicy', // Set active page for left sidebar
        contentFile: 'privacypolicy' // Specify the content file for privacy policy
    });
});

// Route for products and pricing
app.get('/products', (req, res) => {
    res.render('index', {
        activePage: 'product', // Set active page for left sidebar
        contentFile: 'product' // Specify the content file for products and pricing
    });
});

// Route for about us
app.get('/about', (req, res) => {
    res.render('index', {
        activePage: 'about', // Set active page for left sidebar
        contentFile: 'about' // Specify the content file for about us
    });
});

//  route for aicore 

app.get('/aicore', (req, res) => {
    res.render('index', {
        activePage: 'aicore', // Set active page for left sidebar
        contentFile: 'aicore' // Specify the content file for AI core
    });
});

//  route for aicore 

app.get('/aimodels', (req, res) => {
    res.render('index', {
        activePage: 'aimodels', // Set active page for left sidebar
        contentFile: 'aimodels' // Specify the content file for AI core
    });
});



//  route for RNG password generator 

app.get('/passwordgenerator', (req, res) => {
    res.render('index', {
        activePage: 'passwordgenerator', // Set active page for left sidebar
        contentFile: 'passwordgenerator' // Specify the content file for  RNG PASSWORD GENERATOR 
    });
});


//  test route 

app.get('/m1', (req, res) => {
    res.render('index', {
        activePage: 'm1', // Set active page for left sidebar
        contentFile: 'm1' // Specify the content file for  m1 
    });
});

// Start the server
const PORT = process.env.PORT || 4050;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
