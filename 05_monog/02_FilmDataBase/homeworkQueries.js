

// ––––––> FIND 

/* ____________________________________________________________________________________

01. find The 10 most popular movies or TV shows.
Your results should display only the title, genres, and popularity score.
____________________________________________________________________________________*/
db.moviestv.find(
    {
       $or: [
        {"type":/tv show/i},
        {"type": /movie/i}
       ] 
    },
    {   
        title: 1,  genres: 1, tmdb_popularity: 1, _id:0 
    }
).sort({"tmdb_popularity": -1}).limit(10)

/*
–––––> RESULTS
*/
result = [
    {
      title: 'Clifford the Big Red Dog',
      genres: [ 'Kids' ],
      tmdb_popularity: 482.744
    },
    {
      title: 'Queen of Spades',
      genres: [ 'Horror', 'Suspense' ],
      tmdb_popularity: 429.802
    },
    {
      title: 'The Wheel of Time',
      genres: [ 'Adventure', 'Drama', 'Fantasy' ],
      tmdb_popularity: 249.867
    },
    {
      title: "Tom Clancy's Without Remorse",
      genres: [ 'Action' ],
      tmdb_popularity: 201.232
    },
    {
      title: 'The Tomorrow War',
      genres: [ 'Action', 'Adventure', 'Comedy' ],
      tmdb_popularity: 196.479
    },
    {
      title: "A Nun's Curse",
      genres: [ 'Horror', 'Suspense' ],
      tmdb_popularity: 143.677
    },
    { title: 'Carriers', genres: [ 'Drama' ], tmdb_popularity: 134.478 },
    {
      title: "The Pilgrim's Progress",
      genres: [ 'Animation', 'Drama', 'Kids' ],
      tmdb_popularity: 108.079
    },
    {
      title: 'The Voyeurs',
      genres: [ 'Drama', 'Young Adult Audience' ],
      tmdb_popularity: 101.002
    },
    {
      title: 'The Boarding School: Las Cumbres',
      genres: [ 'Drama', 'Suspense' ],
      tmdb_popularity: 100.986
    }
  ]





/*____________________________________________________________________________________

02.  Same query, for the most popular dramas
____________________________________________________________________________________*/
db.moviestv.find(
    {
        $and: [
            {"type": {$in: [/tv show/i, /movie/i]}},
            {"genres": /drama/i}
        ]
    },
    {
        title: 1, genres: 1, tmdb_popularity: 1, _id:0 
    }
).sort({"tmdb_popularity": -1}).limit(10)

/*
–––––> RESULTS
*/
result = [
    {
      title: 'The Wheel of Time',
      genres: [ 'Adventure', 'Drama', 'Fantasy' ],
      tmdb_popularity: 249.867
    },
    { title: 'Carriers', genres: [ 'Drama' ], tmdb_popularity: 134.478 },
    {
      title: "The Pilgrim's Progress",
      genres: [ 'Animation', 'Drama', 'Kids' ],
      tmdb_popularity: 108.079
    },
    {
      title: 'The Voyeurs',
      genres: [ 'Drama', 'Young Adult Audience' ],
      tmdb_popularity: 101.002
    },
    {
      title: 'The Boarding School: Las Cumbres',
      genres: [ 'Drama', 'Suspense' ],
      tmdb_popularity: 100.986
    },
    {
      title: 'Boys Over Flowers',
      genres: [ 'Comedy', 'Drama', 'Romance' ],
      tmdb_popularity: 75.209
    },
    {
      title: 'The Mad Hatter',
      genres: [ 'Drama', 'Horror', 'Suspense' ],
      tmdb_popularity: 72.809
    },
    {
      title: 'The Wilds',
      genres: [ 'Drama', 'Suspense', 'Young Adult Audience' ],
      tmdb_popularity: 62.156
    },
    {
      title: 'Finding Grace',
      genres: [ 'Drama', 'Kids', 'Special Interest' ],
      tmdb_popularity: 60.996
    },
    {
      title: 'Solos',
      genres: [ 'Drama', 'Fantasy', 'Science Fiction' ],
      tmdb_popularity: 58.248
    }
  ]




/*____________________________________________________________________________________

03. Same query, but find movies or tv shows that are only tagged with 
the genre "drama" and no other tags
____________________________________________________________________________________*/

db.moviestv.find(
    {
        $and: [
            {"type": {$in: [/tv show/i, /movie/i]}},
            {"genres": /drama/i},
            {"genres": {$size: 1}},
        ]
    },
    {
        title: 1, genres: 1, 
        tmdb_popularity: 1,
        _id:0 
    }
).sort({"tmdb_popularity": -1}).limit(10)

/*
–––––> RESULTS
*/
reslut = [
    { title: 'Carriers', genres: [ 'Drama' ], tmdb_popularity: 134.478 },
    {
      title: 'The Untamed',
      genres: [ 'Drama' ],
      tmdb_popularity: 52.565
    },
    {
      title: 'Chemical Hearts',
      genres: [ 'Drama' ],
      tmdb_popularity: 46.345
    },
    {
      title: 'The Sword and The Brocade',
      genres: [ 'Drama' ],
      tmdb_popularity: 39.299
    },
    {
      title: 'The Girl Who Killed Her Parents',
      genres: [ 'Drama' ],
      tmdb_popularity: 33.872
    },
    {
      title: 'The Ultimate Gift',
      genres: [ 'Drama' ],
      tmdb_popularity: 26.953
    },
    {
      title: 'The Only Living Boy in New York',
      genres: [ 'Drama' ],
      tmdb_popularity: 22.755
    },
    { title: 'Wayne', genres: [ 'Drama' ], tmdb_popularity: 21.827 },
    {
      title: 'Manchester by the Sea',
      genres: [ 'Drama' ],
      tmdb_popularity: 21.728
    },
    {
      title: 'Beautiful Boy',
      genres: [ 'Drama' ],
      tmdb_popularity: 19.58
    }
  ]





/*___________________________________________________________________________________

04. same query, but find movies that are tagged either 
   comedy or drama (or both and they can also 
   contain other additional genres)
___________________________________________________________________________________*/
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
–––––> RESULTS
*/
reslut = [
    {
      title: 'The Tomorrow War',
      genres: [ 'Action', 'Adventure', 'Comedy' ],
      tmdb_popularity: 196.479
    },
    { title: 'Carriers', genres: [ 'Drama' ], tmdb_popularity: 134.478 },
    {
      title: "The Pilgrim's Progress",
      genres: [ 'Animation', 'Drama', 'Kids' ],
      tmdb_popularity: 108.079
    },
    {
      title: 'The Voyeurs',
      genres: [ 'Drama', 'Young Adult Audience' ],
      tmdb_popularity: 101.002
    },
    {
      title: 'The Mad Hatter',
      genres: [ 'Drama', 'Horror', 'Suspense' ],
      tmdb_popularity: 72.809
    },
    {
      title: 'Coming 2 America',
      genres: [ 'Comedy' ],
      tmdb_popularity: 70.124
    },
    {
      title: 'Finding Grace',
      genres: [ 'Drama', 'Kids', 'Special Interest' ],
      tmdb_popularity: 60.996
    },
    {
      title: 'Cinderella',
      genres: [ 'Comedy', 'Fantasy', 'Kids' ],
      tmdb_popularity: 59.466
    },
    {
      title: 'Europa Report',
      genres: [ 'Drama', 'Science Fiction', 'Suspense' ],
      tmdb_popularity: 58.028
    },
    {
      title: '47 Meters Down: Uncaged',
      genres: [ 'Action', 'Adventure', 'Drama' ],
      tmdb_popularity: 55.439
    }
  ]





/*____________________________________________________________________________________

05. Same query, genres that contain both comedy and drama (and, also anything else)
______________________________________________________________________________________*/

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
–––––> RESULTS
*/
reslut = [
    {
      title: 'All About Sex',
      genres: [ 'Comedy', 'Drama' ],
      tmdb_popularity: 33.348
    },
    {
      title: 'Afternoon Delight',
      genres: [ 'Comedy', 'Drama' ],
      tmdb_popularity: 19.369
    },
    {
      title: 'Status Update',
      genres: [ 'Comedy', 'Drama', 'Young Adult Audience' ],
      tmdb_popularity: 17.474
    },
    {
      title: 'Permission',
      genres: [ 'Comedy', 'Drama' ],
      tmdb_popularity: 16.362
    },
    {
      title: 'Sideways',
      genres: [ 'Comedy', 'Drama', 'Romance' ],
      tmdb_popularity: 16.303
    },
    {
      title: "Don't Worry, He Won't Get Far on Foot",
      genres: [ 'Arthouse', 'Comedy', 'Drama' ],
      tmdb_popularity: 16.002
    },
    {
      title: 'My Bossy Girl',
      genres: [ 'Comedy', 'Drama' ],
      tmdb_popularity: 15.296
    },
    {
      title: 'The Big Sick',
      genres: [ 'Comedy', 'Drama', 'Romance' ],
      tmdb_popularity: 15.105
    },
    {
      title: "Henry's Crime",
      genres: [ 'Comedy', 'Drama' ],
      tmdb_popularity: 14.811
    },
    {
      title: 'Sex Ed',
      genres: [ 'Comedy', 'Drama' ],
      tmdb_popularity: 13.038
    }
  ]





/*______________________________________________________________________________________

06. Same query, genres that contain comedy not drama (but any other genre is ok)
______________________________________________________________________________________*/
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
–––––> RESULTS
*/
reslut = [
    {
      title: 'The Tomorrow War',
      genres: [ 'Action', 'Adventure', 'Comedy' ],
      tmdb_popularity: 196.479
    },
    {
      title: 'Coming 2 America',
      genres: [ 'Comedy' ],
      tmdb_popularity: 70.124
    },
    {
      title: 'Cinderella',
      genres: [ 'Comedy', 'Fantasy', 'Kids' ],
      tmdb_popularity: 59.466
    },
    {
      title: 'War of Likes',
      genres: [ 'Comedy' ],
      tmdb_popularity: 42.942
    },
    {
      title: 'Date Night',
      genres: [ 'Comedy' ],
      tmdb_popularity: 26.601
    },
    {
      title: 'Tooth Fairy 2',
      genres: [ 'Comedy', 'Kids' ],
      tmdb_popularity: 21.258
    },
    {
      title: 'The Map of Tiny Perfect Things',
      genres: [ 'Comedy', 'Romance', 'Young Adult Audience' ],
      tmdb_popularity: 19.648
    },
    {
      title: "She's Out of My League",
      genres: [ 'Comedy', 'Romance' ],
      tmdb_popularity: 19.118
    },
    {
      title: 'My Spy',
      genres: [ 'Action', 'Adventure', 'Comedy' ],
      tmdb_popularity: 19.062
    },
    {
      title: 'Young Frankenstein',
      genres: [ 'Comedy' ],
      tmdb_popularity: 15.804
    }
  ]






/*______________________________________________________________________________________

07. The 10 longest movies. Your results should Display only the title, genres, directors and runtime.
______________________________________________________________________________________*/
db.moviestv.find(
    {
        "type":/movie/i
    },
    {
        title: 1, genres: 1, directors: 1, runtime: 1, _id: 0,
    }

).sort({'runtime': -1}).limit(10)

/*
–––––> RESULTS
*/
reslut = [
    {
      title: 'Kabhi Khushi Kabhie Gham',
      runtime: 209,
      genres: [ 'Drama', 'Romance' ],
      directors: [ 'Karan Johar' ]
    },
    {
      title: 'The Key to Rebecca',
      runtime: 193,
      genres: [ 'Action', 'Drama' ],
      directors: [ 'David Hemmings' ]
    },
    {
      title: 'Kabhi Alvida Naa Kehna',
      runtime: 192,
      genres: [ 'Romance' ],
      directors: [ 'Karan Johar' ]
    },
    {
      title: 'Dilwale Dulhania Le Jayenge',
      runtime: 190,
      genres: [ 'Romance' ],
      directors: [ 'Aditya Chopra' ]
    },
    {
      title: 'Nicholas and Alexandra',
      runtime: 188,
      genres: [ 'Drama', 'Romance' ],
      directors: [ 'Franklin J. Schaffner' ]
    },
    {
      title: 'Lamhe',
      runtime: 188,
      genres: [ 'Drama', 'International', 'Romance' ],
      directors: [ 'Yash Chopra' ]
    },
    {
      title: 'Kal Ho Naa Ho',
      runtime: 187,
      genres: [ 'Comedy', 'Drama', 'International' ],
      directors: [ 'Nikkhil Advani' ]
    },
    {
      title: 'Kuch Kuch Hota Hai',
      runtime: 185,
      genres: [ 'Comedy', 'Drama', 'Music Videos and Concerts' ],
      directors: [ 'Karan Johar' ]
    },
    {
      title: 'Cartoon Classics - Vol. 2: 25 Favorite Cartoons - 3 Hours',
      runtime: 183,
      genres: [ 'Animation' ],
      directors: [ 'Max Fleischer' ]
    },
    {
      title: 'Arjun Reddy',
      runtime: 182,
      genres: [ 'Action', 'Drama', 'Romance' ],
      directors: [ 'Sandeep Vanga' ]
    }
  ]






/*______________________________________________________________________________________

8. Same thing, but longest movies made in the US
______________________________________________________________________________________*/
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
–––––> RESULTS
*/
answer = [
    {
      title: 'The Key to Rebecca',
      runtime: 193,
      genres: [ 'Action', 'Drama' ],
      production_countries: [ 'US' ],
      directors: [ 'David Hemmings' ]
    },
    {
      title: 'The Capture of the Green River Killer',
      runtime: 176,
      genres: [ 'Drama', 'Suspense' ],
      production_countries: [ 'US' ],
      directors: [ 'Norma Bailey' ]
    },
    {
      title: 'Liz: The Elizabeth Taylor Story',
      runtime: 176,
      genres: [ 'Drama' ],
      production_countries: [ 'US' ],
      directors: [ 'Kevin Connor' ]
    },
    {
      title: 'Liz: The Elizabeth Taylor Story',
      runtime: 176,
      genres: [ 'Drama' ],
      production_countries: [ 'US' ],
      directors: [ 'Kevin Connor' ]
    },
    {
      title: 'Armageddon',
      runtime: 151,
      genres: [ 'Action', 'Adventure' ],
      production_countries: [ 'US' ],
      directors: [ 'Michael Bay' ]
    },
    {
      title: 'Guys and Dolls',
      runtime: 150,
      genres: [ 'Arts Entertainment and Culture', 'Comedy' ],
      production_countries: [ 'US' ],
      directors: [ 'Joseph L. Mankiewicz' ]
    },
    {
      title: "This World Won't Break",
      runtime: 149,
      genres: [ 'Drama' ],
      production_countries: [ 'US' ],
      directors: [ 'Josh David Jordan' ]
    },
    {
      title: 'The Goldfinch',
      runtime: 149,
      genres: [ 'Drama' ],
      production_countries: [ 'US' ],
      directors: [ 'John Crowley' ]
    },
    {
      title: 'The Glorias',
      runtime: 147,
      genres: [ 'Drama' ],
      production_countries: [ 'US' ],
      directors: [ 'Julie Taymor' ]
    },
    {
      title: 'One Exciting Night',
      runtime: 145,
      genres: [ 'Suspense' ],
      production_countries: [ 'US' ],
      directors: [ 'D.W. Griffith' ]
    }
  ]






/*______________________________________________________________________________________

09.Same thing, but longest movies made before this century (from the US) 
this century range 2001 - 2100
______________________________________________________________________________________*/
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
–––––> RESULTS
*/
answer = [
    {
      title: 'The Key to Rebecca',
      release_year: 1985,
      runtime: 193,
      genres: [ 'Action', 'Drama' ],
      production_countries: [ 'US' ],
      directors: [ 'David Hemmings' ]
    },
    {
      title: 'Liz: The Elizabeth Taylor Story',
      release_year: 1995,
      runtime: 176,
      genres: [ 'Drama' ],
      production_countries: [ 'US' ],
      directors: [ 'Kevin Connor' ]
    },
    {
      title: 'Liz: The Elizabeth Taylor Story',
      release_year: 1995,
      runtime: 176,
      genres: [ 'Drama' ],
      production_countries: [ 'US' ],
      directors: [ 'Kevin Connor' ]
    },
    {
      title: 'Armageddon',
      release_year: 1998,
      runtime: 151,
      genres: [ 'Action', 'Adventure' ],
      production_countries: [ 'US' ],
      directors: [ 'Michael Bay' ]
    },
    {
      title: 'Guys and Dolls',
      release_year: 1955,
      runtime: 150,
      genres: [ 'Arts Entertainment and Culture', 'Comedy' ],
      production_countries: [ 'US' ],
      directors: [ 'Joseph L. Mankiewicz' ]
    },
    {
      title: 'One Exciting Night',
      release_year: 1922,
      runtime: 145,
      genres: [ 'Suspense' ],
      production_countries: [ 'US' ],
      directors: [ 'D.W. Griffith' ]
    },
    {
      title: 'Little Big Man',
      release_year: 1970,
      runtime: 139,
      genres: [ 'Adventure', 'Comedy', 'Drama' ],
      production_countries: [ 'US' ],
      directors: [ 'Arthur Penn' ]
    },
    {
      title: 'Lost Horizon',
      release_year: 1973,
      runtime: 138,
      genres: [ 'Action', 'Drama', 'Science Fiction' ],
      production_countries: [ 'US' ],
      directors: [ 'Charles Jarrott' ]
    },
    {
      title: 'Stage Door Canteen',
      release_year: 1943,
      runtime: 135,
      genres: [ 'Arts Entertainment and Culture', 'Comedy', 'Military and War' ],
      production_countries: [ 'US' ],
      directors: [ 'Frank Borzage' ]
    },
    {
      title: 'The Quiet Man',
      release_year: 1952,
      runtime: 129,
      genres: [ 'Comedy', 'Drama' ],
      production_countries: [ 'US' ],
      directors: [ 'John Ford' ]
    }]  






/*______________________________________________________________________________________

10.Same thing, but longest movies made before this century 
that were produced in the US and GB (great britian) 
(additional countries are ok to include)
______________________________________________________________________________________*/

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
–––––> RESULTS
*/
answer = [
    {
      title: 'Diana: Her True Story',
      release_year: 1993,
      runtime: 181,
      genres: [ 'Drama' ],
      production_countries: [ 'GB', 'US' ],
      directors: [ 'Kevin Connor' ]
    },
    {
      title: 'The Winslow Boy',
      release_year: 1999,
      runtime: 104,
      genres: [ 'Drama', 'Romance' ],
      production_countries: [ 'GB', 'US' ],
      directors: [ 'David Mamet' ]
    },
    {
      title: 'Underground',
      release_year: 1970,
      runtime: 100,
      genres: [ 'Action' ],
      production_countries: [ 'US', 'GB' ],
      directors: [ 'Arthur H. Nadel' ]
    },
    {
      title: 'Silent Cries',
      release_year: 1993,
      runtime: 100,
      genres: [ 'Drama' ],
      production_countries: [ 'GB', 'US' ],
      directors: [ 'Anthony Page' ]
    },
    {
      title: 'Stolen Hours',
      release_year: 1963,
      runtime: 97,
      genres: [ 'Drama' ],
      production_countries: [ 'US', 'GB' ],
      directors: [ 'Daniel Petri' ]
    },
    {
      title: 'Black Gunn',
      release_year: 1972,
      runtime: 97,
      genres: [ 'Action' ],
      production_countries: [ 'GB', 'US' ],
      directors: [ 'Robert Hartford-Davis' ]
    },
    {
      title: 'Konga',
      release_year: 1961,
      runtime: 90,
      genres: [ 'Science Fiction' ],
      production_countries: [ 'GB', 'US' ],
      directors: [ 'John Lemont' ]
    },
    {
      title: 'Stepfather 2',
      release_year: 1989,
      runtime: 84,
      genres: [ 'Horror', 'Suspense' ],
      production_countries: [ 'US', 'GB' ],
      directors: [ 'Jeff Burr' ]
    }
  ]





/*______________________________________________________________________________________

11. 10 most popular TV shows from either JP, CN, or KR
______________________________________________________________________________________*/


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
–––––> RESULTS
*/
answer = [
    {
      title: 'Boys Over Flowers',
      genres: [ 'Comedy', 'Drama', 'Romance' ],
      production_countries: [ 'KR' ],
      tmdb_popularity: 75.209
    },
    {
      title: 'The Untamed',
      genres: [ 'Drama' ],
      production_countries: [ 'CN' ],
      tmdb_popularity: 52.565
    },
    {
      title: 'Dororo',
      genres: [ 'TV Shows' ],
      production_countries: [ 'JP' ],
      tmdb_popularity: 51.546
    },
    {
      title: 'Word of Honor',
      genres: [ 'Action', 'Drama', 'Romance' ],
      production_countries: [ 'CN' ],
      tmdb_popularity: 40.681
    },
    {
      title: 'Eternal Love of Dream',
      genres: [ 'Drama', 'Romance', 'Science Fiction' ],
      production_countries: [ 'CN' ],
      tmdb_popularity: 39.549
    },
    {
      title: 'The Sword and The Brocade',
      genres: [ 'Drama' ],
      production_countries: [ 'CN' ],
      tmdb_popularity: 39.299
    },
    {
      title: 'Happy Sugar Life',
      genres: [ 'TV Shows' ],
      production_countries: [ 'JP' ],
      tmdb_popularity: 28.039
    },
    {
      title: "Armed Girl's Machiavellism",
      genres: [ 'Action', 'Adventure', 'Anime' ],
      production_countries: [ 'JP' ],
      tmdb_popularity: 27.11
    },
    {
      title: 'The Flaming Heart',
      genres: [ 'Action', 'Romance' ],
      production_countries: [ 'CN' ],
      tmdb_popularity: 25.172
    },
    {
      title: 'Qin Dynasty Epic',
      genres: [ 'Action', 'Drama' ],
      production_countries: [ 'CN' ],
      tmdb_popularity: 25.052
    }
  ]





/*______________________________________________________________________________________

12. 10 movies from that have multiple production 
countries by the highest IMDB score. 
Show title, genres, directors, production countries, and score
______________________________________________________________________________________*/

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

/*
–––––> RESULTS
*/
answer = [
    {
      title: 'Mambo Man',
      genres: [ 'Arthouse', 'Drama' ],
      production_countries: [ 'CU', 'GB' ],
      imdb_score: 8.6,
      directors: [ 'Mo Fini', 'Edesio Alejandro' ]
    },
    {
      title: 'ReWilding Kernwood',
      genres: [ 'Documentary' ],
      production_countries: [ 'CA', 'DE' ],
      imdb_score: 8.4,
      directors: [ 'Jean Aspen', 'Tom Irons' ]
    },
    {
      title: 'Once a Marine',
      genres: [ 'Action', 'Documentary' ],
      production_countries: [ 'AF', 'US' ],
      imdb_score: 8.4,
      directors: [ 'Stephen Canty' ]
    },
    {
      title: "Emmet Otter's Jug-Band Christmas",
      genres: [ 'Drama', 'Kids' ],
      production_countries: [ 'CA', 'US' ],
      imdb_score: 8.2,
      directors: [ 'Jim Henson' ]
    },
    {
      title: 'Tumbbad',
      genres: [ 'Horror', 'International', 'Suspense' ],
      production_countries: [ 'SE', 'IN' ],
      imdb_score: 8.2,
      directors: [ 'Rahi Anil Barve', 'Adesh Prasad' ]
    },
    {
      title: 'Creating Freedom: The Lottery of Birth',
      genres: [ 'Special Interest' ],
      production_countries: [ 'US', 'GB' ],
      imdb_score: 8,
      directors: [ 'Raoul Martinez', 'Joshua van Praag' ]
    },
    {
      title: 'Pride',
      genres: [ 'Arthouse', 'Comedy', 'Documentary' ],
      production_countries: [ 'FR', 'GB' ],
      imdb_score: 7.8,
      directors: [ 'Matthew Warchus' ]
    },
    {
      title: 'Red Gold',
      genres: [ 'Drama', 'Suspense' ],
      production_countries: [ 'IN', 'US' ],
      imdb_score: 7.8,
      directors: [ 'Michael Keller' ]
    },
    {
      title: 'The Christmas Toy',
      genres: [ 'Kids', 'Science Fiction' ],
      production_countries: [ 'US', 'CA' ],
      imdb_score: 7.8,
      directors: [ 'Eric Till' ]
    },
    {
      title: 'Chavela',
      genres: [ 'Documentary', 'LGBTQ' ],
      production_countries: [ 'ES', 'US', 'MX' ],
      imdb_score: 7.7,
      directors: [ 'Catherine Gund', 'Daresha Kyi' ]
    }
  ]






/*______________________________________________________________________________________________________________________________

                        AGREEGATIONS 
________________________________________________________________________________________________________________________________*/

/*______________________________________________________________________________________

01. List the 10 directors who have the most movies in the database this century.
______________________________________________________________________________________*/

db.moviestv.aggregate(
    [   
        {
            $unwind: "$directors"
        },
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

/*
–––––> RESULTS
movies some movies has more than one director 
usning unwind makes it fair to clac the results
*/

noUnwindResult = [
    { _id: [ 'Jay Chapman' ], totalMovies: 24 },
    { _id: [ 'Manny Rodriguez' ], totalMovies: 12 },
    { _id: [ 'Brian Volk-Weiss' ], totalMovies: 10 },
    { _id: [ 'John Asher' ], totalMovies: 6 },
    { _id: [ 'Anthony C. Ferrante' ], totalMovies: 6 },
    { _id: [ 'Jay Karas' ], totalMovies: 6 },
    { _id: [ 'Lakshmy Ramakrishnan' ], totalMovies: 4 },
    { _id: [ 'Steven T. Shippy' ], totalMovies: 4 },
    { _id: [ 'Milton Lage' ], totalMovies: 4 },
    { _id: [ 'Michael Feifer' ], totalMovies: 4 }
  ]

unwindeResult = [
    { _id: 'Jay Chapman', totalMovies: 24 },
    { _id: 'Brian Volk-Weiss', totalMovies: 12 },
    { _id: 'Manny Rodriguez', totalMovies: 12 },
    { _id: 'Jay Karas', totalMovies: 6 },
    { _id: 'John Asher', totalMovies: 6 },
    { _id: 'Anthony C. Ferrante', totalMovies: 6 },
    { _id: 'Craig Moss', totalMovies: 5 },
    { _id: 'Lakshmy Ramakrishnan', totalMovies: 4 },
    { _id: 'Steven T. Shippy', totalMovies: 4 },
    { _id: 'Michael Feifer', totalMovies: 4 }
  ]






/* ________________________________________________________________________

02. List the ten years with the most tv shows
___________________________________________________________________________*/

db.moviestv.aggregate(
    [
        {
            $match: {"type":/tv show/i}
        },
        {
            $group: {
                _id: "$release_year", TV_SHOWS: {$count:{}}
            }
        },
        {
            $sort: {"TV_SHOWS": -1}
        },
        {
            $limit: 10,
        }
    ]
)

/*
–––––> RESULTS
*/
answer = [
    { _id: 2021, TV_SHOWS: 73 },
    { _id: 2020, TV_SHOWS: 67 },
    { _id: 2019, TV_SHOWS: 40 },
    { _id: 2018, TV_SHOWS: 37 },
    { _id: 2017, TV_SHOWS: 31 },
    { _id: 2016, TV_SHOWS: 18 },
    { _id: 2015, TV_SHOWS: 14 },
    { _id: 2014, TV_SHOWS: 12 },
    { _id: 2012, TV_SHOWS: 11 },
    { _id: 2013, TV_SHOWS: 11 }
  ]






/* _______________________________________________________________________

03. List the ten years in the 20th century with the most movies
________________________________________________________________________*/

db.moviestv.aggregate(
    [
        {
            $match: {
                "type":/movie/i,
                "release_year": {$gte: 1900, $lte: 1999}
            }
        },
        {
            $group: {
                _id: "$release_year", MOVIES: {$count:{}}
            }
        },
        {
            $sort: {"MOVIES": -1}
        },
        {
            $limit: 10,
        }
    ]
)

/*
–––––> RESULTS
*/
answer = [
    { _id: 1996, MOVIES: 28 },
    { _id: 1994, MOVIES: 25 },
    { _id: 1995, MOVIES: 21 },
    { _id: 1936, MOVIES: 19 },
    { _id: 1991, MOVIES: 19 },
    { _id: 1993, MOVIES: 19 },
    { _id: 1989, MOVIES: 19 },
    { _id: 1999, MOVIES: 19 },
    { _id: 1998, MOVIES: 18 },
    { _id: 1941, MOVIES: 18 }
  ]






/* _______________________________________________________________________

04. Top ten years for movies by average imdb score
________________________________________________________________________*/

db.moviestv.aggregate(
    [
        {
            $match: {
                "type":/movie/i,
            }
        },
        {
            $group: {
                _id: "$release_year",
                AVG_imdb_score: {$avg:"$imdb_score"},
                
            }
        },
        {
            $sort: {"AVG_imdb_score": -1}
        },
        {
            $limit: 10,
        }
    ]
)

/*
–––––> RESULTS
*/
answer = [
    { _id: 1927, AVG_imdb_score: 7 },
    { _id: 1982, AVG_imdb_score: 6.733333333333333 },
    { _id: 1925, AVG_imdb_score: 6.65 },
    { _id: 1981, AVG_imdb_score: 6.63 },
    { _id: 1978, AVG_imdb_score: 6.6 },
    { _id: 1957, AVG_imdb_score: 6.6 },
    { _id: 1971, AVG_imdb_score: 6.557142857142858 },
    { _id: 1954, AVG_imdb_score: 6.540000000000001 },
    { _id: 1950, AVG_imdb_score: 6.525 },
    { _id: 1923, AVG_imdb_score: 6.5 }
  ]





/* _______________________________________________________________________

05. More challenging: same query but Only show years that had 10 
or more movies (you will need to use match twice in the pipeline)
_______________________________________________________________________*/

db.moviestv.aggregate(
    [
        {
            $match: {
                "type":/movie/i,
            }
        },
        {
            $group: {
                _id: "$release_year",
                totalMovies: {$count: {}},
                AVG_imdb_score: {$avg:"$imdb_score"},
                
            }
        },
        {
            $sort: {"AVG_imdb_score": -1}
        },
        {
            $match: {
                "totalMovies": {$gte:10}
            }
        },
        {
            $limit: 10,
        },
      
    ]
)

/*
–––––> RESULTS
*/
answer = [
    { _id: 1981, totalMovies: 11, AVG_imdb_score: 6.63 },
    { _id: 1978, totalMovies: 10, AVG_imdb_score: 6.6 },
    { _id: 1939, totalMovies: 10, AVG_imdb_score: 6.34 },
    { _id: 1972, totalMovies: 14, AVG_imdb_score: 6.3 },
    { _id: 1986, totalMovies: 16, AVG_imdb_score: 6.286666666666666 },
    { _id: 1989, totalMovies: 19, AVG_imdb_score: 6.25625 },
    { _id: 1997, totalMovies: 15, AVG_imdb_score: 6.242857142857143 },
    { _id: 2012, totalMovies: 69, AVG_imdb_score: 6.21076923076923 },
    { _id: 1984, totalMovies: 17, AVG_imdb_score: 6.170588235294118 },
    { _id: 1995, totalMovies: 21, AVG_imdb_score: 6.166666666666667 }
  ]







/*_______________________________________________________________________

06. More challenging (and new): 
list the genres with the most movies in the database 
(note: genres are in arrays, you will need to use $unwind)
_______________________________________________________________________*/

db.moviestv.aggregate(
    [
        {$unwind: "$genres"},
        {$group: {_id: "$genres", genresCount:{$sum: 1}}},
        {$sort: {"genresCount": -1}}
    ]
)

/*
–––––> RESULTS
*/
answer = [
    { _id: 'Drama', genresCount: 1494 },
    { _id: 'Comedy', genresCount: 841 },
    { _id: 'Suspense', genresCount: 606 },
    { _id: 'Action', genresCount: 599 },
    { _id: 'Romance', genresCount: 317 },
    { _id: 'Horror', genresCount: 316 },
    { _id: 'Special Interest', genresCount: 296 },
    { _id: 'Documentary', genresCount: 278 },
    { _id: 'Arts Entertainment and Culture', genresCount: 225 },
    { _id: 'International', genresCount: 176 },
    { _id: 'Science Fiction', genresCount: 169 },
    { _id: 'Kids', genresCount: 132 },
    { _id: 'Western', genresCount: 104 },
    { _id: 'Adventure', genresCount: 71 },
    { _id: 'LGBTQ', genresCount: 50 },
    { _id: 'Animation', genresCount: 47 },
    { _id: 'Arthouse', genresCount: 46 },
    { _id: 'Sports', genresCount: 46 },
    { _id: 'TV Shows', genresCount: 40 },
    { _id: 'Young Adult Audience', genresCount: 33 }
  ]






/* _______________________________________________________________________

07. Similar: list the 10 cast member in the most movies in the database
_______________________________________________________________________*/

db.moviestv.aggregate(
    [
        {$unwind: "$cast_names"},
        {$group: {_id: "$cast_names", CastCount:{$sum: 1}}},
        {$sort: {"CastCount": -1}},
        {$limit: 10}
    ]
)

/*
–––––> RESULTS
*/
answer = [
    { _id: 'Gene Autry', CastCount: 16 },
    { _id: 'Champion', CastCount: 15 },
    { _id: 'Nassar', CastCount: 14 },
    { _id: 'Amitabh Bachchan', CastCount: 13 },
    { _id: 'Rani Mukerji', CastCount: 12 },
    { _id: 'Anupam Kher', CastCount: 12 },
    { _id: 'Roy Rogers', CastCount: 12 },
    { _id: 'Anil Kapoor', CastCount: 12 },
    { _id: 'Vivek', CastCount: 11 },
    { _id: 'John Abraham', CastCount: 11 }
  ]
