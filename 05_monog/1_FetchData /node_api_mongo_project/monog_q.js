//connects you to the collection
use "name of the collection "

//find a book in the colleciton 
db.books.findOne() 

// \ escape the ' if it's error 
db.books.find({title:"Jacob\'s Room"})
db.books.find({title:/Jacob's Room/i})

//using dote . notation 
db.books.find({"authors.name":"Melville, Herman"})

//projection getting only the titles 
// 0 is false 1 is true binary and indactes what to revel or hide.
db.books.find(
    {"authors.name":"Melville, Herman"},
    {formats:0,_id:0}
)

//aggregation 
db.books.countDocuments(
    {"authors.name":"Melville, Herman"},
)

//way 01 regex
db.books.find(
    {"authors.name":{$regex:'Woolf',$options:'i'}},
    {authors:1, titel:1, _id:0}
)

//way 02 regex
db.books.find(
    {"authors.name":/Woolf/i},
    {authors:1, titel:1, _id:0}
)

//searching for book in the 19th centuery 
db.books.find(
    {
        'authors.birth_year': {$gt:1875},
    },
    {
        authors:1, title:1, download_count:1 ,_id:0

    }
).sort({download_count: -1}).limit(5)

db.books.find(
    {
        'authors.birth_year': {$gt:1900,$lte:1920},
    },
    {
        authors:1, title:1, download_count:1 ,_id:0

    }
).sort({download_count: -1}).limit(5)

//find all the books that are copy rightigt title authors sort by most downlaoded and show me the top 10 
db.books.find(
    {
        copyright: true
    },
    {
        authors:1, title:1,_id:0, download_count:1

    }
).sort({download_count: -1}).limit(10)

// $ called flag 
db.books.find(
    {
        $or: [
            {subjects:{$nin:[/fiction/i]}}, 
            {bookshelves:/fiction/i}
        ]
    },
    {
        authors:1, title:1, subjects:1,bookshelves:1 , _id:0,

    }
).limit(4)


db.books.updateMany(
    {
        $or: [
            {subjects:/fiction/i}, 
            {bookshelves:/fiction/i}
        ]
    },
    
    {$push:{genres:"fiction"}}
)

db.books.findOne({genres:"drama"})
db.books.find({'genres':{$size:1}}).limit(5)

//exits index 1 at least have two elemts 

db.books.find({'languages.1':{$exists:1}}).limit(5)


//aggregations 
db.book.aggregate([
    {
        $match:{"authors.birth_year":{$gt:1875}}
    },
    {
        $group: {
            _id: "&authors",
            authors_work:{$count:{}},
            total_downloads: {$sum:"$download_count"}
        }
    }
])