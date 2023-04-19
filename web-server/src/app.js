//experiment

const app = express()

const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
    title: 'Beauty Product Seller',
    name: 'surbhi'
    })
    })
    app.get('/about', (req, res) => {
    res.render('about', {
    title: 'About Me',
    name: 'surbhi'
    })
})
    
app.get('/help', (req, res) => {
    res.render('help', {
    helpText: 'For any query you can mail us on - surbhirai05@gmail.com.',
    title: 'Help',
    name: 'surbhi'
})
})

app.get('/intro',(req, res) => {
        res.render('intro', {
            title: 'Intro',
            name: 'surbhi'
        })
})

app.get('/history',(req, res) => {
        res.render('history', {
            title: 'History',
            name: 'surbhi'
        })
})

app.get('/history/*',(req, res) => {
    res.render('404', {
        title: 'Error',
        name: 'surbhi',
        errorMessage: 'Page not found.'
        })
    })

app.get('*', (req, res) => {
    res.render('404', {
    title: 'Error',
    name: 'surbhi',
    errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

