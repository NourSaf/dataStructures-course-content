db.moviestv.find(
    {
    "release_year":1941
    },
    {
        "title":1,"release_year":1,"_id":0
    }
)

db.moviestv.countDocuments(
    {
        "release_year":1941
    },
    
)

db.books.find(
    {
        "authors.name":{$regex:"Woolf", $options:"i"}
    },
    {
        authors:1,title:1,_id:0
    }
)

db.books.find(
    {
        "authors.name":/woolf/i
    },
    {
        authors:1,title:1,_id:0
    }
)

db.books.find(
    {
        "copyright":true
    },
    {
        title:1,authors:1,_id:0, download_count:1
    }

).sort({
    "download_count": -1
}).limit(3)

db.books.find({"copyright":true},{title:1,authors:1,_id:0, download_count:1}).sort({"download_count": -1}).limit(3)

db.books.find(
    {
        $or: [
            {"subjects": /fictions/i},
            {"bookshelves": /fiction/i}
        ]
    },
    {
        title: 1, authors: 1, _id: 0, subjects: 1, bookshelves: 1
    }
).limit(3)

db.books.find(
    {   
        $and: [
        {"subjects":{$nin: [/fiction/i]}},
        {"bookshelves":/fiction/i}
        ]
    },
    {
        title: 1, authors: 1, _id: 0, subjects: 1, bookshelves: 1
    }
).limit(3)