const{Router} = require('express')
const Todo = require('../models/Todo')
const router = Router()


router.get('/', async(req, res) => {
    
    const todos = await Todo.find({}).lean().limit(10)
    
    res.render('index', {
        title:'Todos list',
        isIndex: true,
        todos
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Todo',
        isCreate: true
    })
})

router.get('/discription', async(req, res) => {
    
    const tod = await Todo.findById(req.body.id)
    if(tod === null){console.log('masaty...')}
    else{
    res.render('discription', {
        title: 'Description',
        isIndex: true,
        tod
    })}
})

router.post('/create', async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    cost: req.body.cost,
    pictureUrl: req.body.picture,
    date: new Date(),
    discription: req.body.discription,
    pictures: req.body.files
  })

  await todo.save()
  res.redirect('/')
})



router.get('/sortByCost1', async(req, res) => {
    const todos = await Todo.find({}).lean().limit(10).sort('cost')
    
    res.render('index', {
        title:'Todos list',
        isIndex: true,
        todos
    })
})

router.get('/sortByCost2', async(req, res) => {
    const todos = await Todo.find({}).lean().limit(10).sort('-cost')
    
    res.render('index', {
        title:'Todos list',
        isIndex: true,
        todos
    })
})

router.get('/sortByDate1', async(req, res) => {
    const todos = await Todo.find({}).lean().limit(10).sort('date')
    
    res.render('index', {
        title:'Todos list',
        isIndex: true,
        todos
    })
})

router.get('/sortByDate2', async(req, res) => {
    const todos = await Todo.find({}).lean().limit(10).sort('-date')
    
    res.render('index', {
        title:'Todos list',
        isIndex: true,
        todos
    })
})

router.post('/complete', async (req, res) => {
  const todo = await Todo.findById(req.body.id)

  todo.completed = !!req.body.completed
  await todo.save()

  res.redirect('/')
})
 
module.exports = router
