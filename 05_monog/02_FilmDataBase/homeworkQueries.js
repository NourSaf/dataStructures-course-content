/*_______________________________________________________________

FIND 
________________________________________________________________*/

/* 
    01. find The 10 most popular movies or TV shows.
    Your results should display only the title, genres, and popularity score.
*/
db.moviestv.find(
    {
       $or: [
        {"type":/tv show/i},
        {"type": /movie/i}
       ] 
    },
    {
        title: 1, 
        genres: 1, 
        tmdb_popularity: 1,
        _id:0 
    }
).sort({"tmdb_popularity": -1}).limit(10)


/* 
    02.  Same query, for the most popular dramas
*/
db.moviestv.find(
    {
        $and: [
            {"type": {$in: [/tv show/i, /movie/i]}},
            {"genres": /drama/i}
        ]
    },
    {
        title: 1, 
        genres: 1, 
        tmdb_popularity: 1,
        _id:0 
    }
).sort({"tmdb_popularity": -1}).limit(10)


db.moviestv.find(
    {
        $and: [
            {"type": {$in: [/tv show/i, /movie/i]}},
            {"genres": /drama/i},
            {"genres": {$size: 1}},
        ]
    },
    {
        title: 1, 
        genres: 1, 
        tmdb_popularity: 1,
        _id:0 
    }
).sort({"tmdb_popularity": -1}).limit(10)


/*
    04. same query, but find movies that are tagged either 
    comedy or drama (or both and they can also 
    contain other additional genres)
*/
db.moviestv.find(
    {
        $and: [
            {"type": /movie/i},
            {"genres": {$in:[/drama/i, /comedy/i]}},
        ]
    },
    {
        title: 1, 
        genres: 1, 
        tmdb_popularity: 1,
        _id:0 
    }
).sort({"tmdb_popularity": -1}).limit(10)

/*
05.
Same query, genres that contain both comedy and drama (and, also anything else)
*/
db.moviestv.find(
    {
        $and: [
            {"type": /movie/i},
            {"genres": {$all:[/drama/i,/comedy/i]}}
        ]
    },
    {
        title: 1, genres: 1, _id: 0, tmdb_popularity: 1,
    }
).sort({tmdb_popularity: -1}).limit(10)


/*
06.
Same query, genres that contain comedy not drama (but any other genre is ok)
*/
db.moviestv.find(
    {
        $and: [
            {"type": /movie/i},
            {"genres": {$nin: [/drama/i], $in:[/comedy/i]}}
        ]
    },
    {
        title: 1, genres: 1, _id: 0, tmdb_popularity: 1,
    }
).sort({tmdb_popularity: -1}).limit(10)


/*
07. 
The 10 longest movies. Your results should Display only the title, genres, directors and runtime.
*/
db.moviestv.find(
    {
        "type":/movie/i
    },
    {
        title: 1, genres: 1, directors: 1, runtime: 1, _id: 0,
    }

).sort({'runtime': -1}).limit(10)

/*
8.
Same thing, but longest movies made in the US
*/
db.moviestv.find(
    {
        $and: [
             {"type":/movie/i},
             {"production_countries": {$in: [/United States/i, /US/i]}},
             {"production_countries":  {$size: 1}}
        ]
    },
    {
        title: 1, genres: 1, directors: 1, runtime: 1, _id: 0, production_countries: 1

    }
).sort({"runtime": -1}).limit(10)


/*  
09.
Same thing, but longest movies made before this century (from the US) 
this century range 2001 - 2100
*/
db.moviestv.find(
    {
        $and:[
             {"type":/movie/i},
             {"production_countries": {$in: [/United States/i, /US/i]}},
             {"production_countries": {$size: 1}},
             {"release_year": {$lte:2000}},
        ]
    },
    {
        title: 1, genres: 1, directors: 1, runtime: 1, _id: 0, production_countries: 1, release_year: 1,

    }
).sort({"runtime": -1}).limit(10)


/*
10.
Same thing, but longest movies made before this century that were produced in the US and GB 
(great britian) (additional countries are ok to include)
*/

db.moviestv.find(
    {
        $and:[
             {"type":/movie/i},
             {"production_countries": {$all: [/US/i, /GB/i]}},
             {"release_year": {$lte:2000}},
        ]
    },
    {
        title: 1, genres: 1, directors: 1, runtime: 1, _id: 0, production_countries: 1, release_year: 1,

    }
).sort({"runtime": -1}).limit(10)


/*
11.
10 most popular TV shows from either JP, CN, or KR
*/


db.moviestv.find(
    {
        $and: [
            {"type": /tv show/i},
            {"production_countries": {$in: [/JP/i, /CN/i, /KR/i]}},
            {"production_countries": {$size: 1}},
        ]
    },
    {
        title: 1, genres: 1, tmdb_popularity: 1, _id: 0, production_countries: 1
    }
).sort({"tmdb_popularity": -1}).limit(10)


/*
12.
10 movies from that have multiple production 
countries by the highest IMDB score. 
Show title, genres, directors, production countries, and score
*/

db.moviestv.find(
    {
        $and: [
            {"type": /movie/i},
            {"production_countries.1": {$exists:true}}
        ]
    },
    {
        title: 1, genres: 1, imdb_score: 1, directors: 1, _id: 0, production_countries: 1
    }
).sort({"imdb_score": -1}).limit(10)



/*_______________________________________________________________

AGREEGATIONS 
________________________________________________________________*/

/*
01. List the 10 directors who have the most movies in the database this century.
*/

db.moviestv.aggregate(
    [
        {
            $match: {
                "type": /movie/i,
                "release_year": {$gte: 2000}
            },
        },
        {
            $group: {
                _id: "$directors", totalMovies: {$count:{}}
            }
        },
        {
            $sort: {"totalMovies": -1}
        },
        {
            $limit: 10 
        }
    ])

    

