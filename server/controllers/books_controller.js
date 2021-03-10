let books = [];
let id = 0;

module.exports = {
    read: (req, res) => {                     //<<handler function that sends all the books MODULAR PATTERN
        res.status(200).send(books)
    },
    create: (req, res) => {                    // let a user post a new book
        const {title, author} = req.body          //destructured off of req.body
        books.push({
            id,
            title,
            author 
        })
        id++ 
        res.status(200).send(books)
    },
    update: (req, res) => {
        const {id} = req.params 
        const {title, author} = req.body
        let bookIndex = null
        books.forEach((elem, ind) => {
            if(elem.id === +id){
                bookIndex = ind 
            }
        })
        const updatedBook = {
            id,
            title,
            author 
        }
        
        books.splice(bookIndex, 1, updatedBook)
        res.status(200).send(books)
    },
    delete: (req, res) => {
        let bookIndex2 = null
        books.forEach((elem, ind) => {
            if(elem.id === +req.params.id){
                bookIndex = i
            }
        })
        books.splice(bookIndex2, 1)
        res.status(200).send(books)
    }
}