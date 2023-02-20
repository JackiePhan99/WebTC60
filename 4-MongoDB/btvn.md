RESTAURANT:
9. Truy vấn tất cả những nhà hàng có đánh giá với số điểm loại B

query:
db.restaurant.find({"grades.grade": "B"});

result:
{
  _id: ObjectId("63f0d7dd310029bf7373dadd"),
  address: {
    building: '705',
    coord: [
      -73.9653967,
      40.6064339
    ],
    street: 'Kings Highway',
    zipcode: '11223'
  },
  borough: 'Brooklyn',
  cuisine: 'Jewish/Kosher',
  grades: [
    {
      date: 2014-11-10T00:00:00.000Z,
      grade: 'A',
      score: 11
    },
    {
      date: 2013-10-10T00:00:00.000Z,
      grade: 'A',
      score: 13
    },
    {
      date: 2012-10-04T00:00:00.000Z,
      grade: 'A',
      score: 7
    },
    {
      date: 2012-05-21T00:00:00.000Z,
      grade: 'A',
      score: 9
    },
    {
      date: 2011-12-30T00:00:00.000Z,
      grade: 'B',
      score: 19
    }
  ],
  name: 'Seuda Foods',
  restaurant_id: '40360045'
}
{
  _id: ObjectId("63f0d7dd310029bf7373dae1"),
  address: {
    building: '522',
    coord: [
      -73.95171,
      40.767461
    ],
    street: 'East   74 Street',
    zipcode: '10021'
  },
  borough: 'Manhattan',
  cuisine: 'American ',
  grades: [
    {
      date: 2014-09-02T00:00:00.000Z,
      grade: 'A',
      score: 12
    },
    {
      date: 2013-12-19T00:00:00.000Z,
      grade: 'B',
      score: 16
    },
    {
      date: 2013-05-28T00:00:00.000Z,
      grade: 'A',
      score: 9
    },
    {
      date: 2012-12-07T00:00:00.000Z,
      grade: 'A',
      score: 13
    },
    {
      date: 2012-03-29T00:00:00.000Z,
      grade: 'A',
      score: 11
    }
  ],
  name: 'Glorious Food',
  restaurant_id: '40361521'
}
{
  _id: ObjectId("63f0d7dd310029bf7373dae7"),
  address: {
    building: '730',
    coord: [
      -73.96805719999999,
      40.7925587
    ],
    street: 'Columbus Avenue',
    zipcode: '10025'
  },
  borough: 'Manhattan',
  cuisine: 'American ',
  grades: [
    {
      date: 2014-09-12T00:00:00.000Z,
      grade: 'B',
      score: 26
    },
    {
      date: 2013-08-28T00:00:00.000Z,
      grade: 'A',
      score: 9
    },
    {
      date: 2013-03-25T00:00:00.000Z,
      grade: 'B',
      score: 20
    },
    {
      date: 2012-02-14T00:00:00.000Z,
      grade: 'A',
      score: 12
    }
  ],
  name: 'P & S Deli Grocery',
  restaurant_id: '40362264'
}



10. Truy vấn tất cả những nhà hàng có đánh giá với số điểm trên 10

query:
db.restaurant.find({"grades.score": {$gt: 10}});

result:
{
  _id: ObjectId("63f0d7dd310029bf7373dadd"),
  address: {
    building: '705',
    coord: [
      -73.9653967,
      40.6064339
    ],
    street: 'Kings Highway',
    zipcode: '11223'
  },
  borough: 'Brooklyn',
  cuisine: 'Jewish/Kosher',
  grades: [
    {
      date: 2014-11-10T00:00:00.000Z,
      grade: 'A',
      score: 11
    },
    {
      date: 2013-10-10T00:00:00.000Z,
      grade: 'A',
      score: 13
    },
    {
      date: 2012-10-04T00:00:00.000Z,
      grade: 'A',
      score: 7
    },
    {
      date: 2012-05-21T00:00:00.000Z,
      grade: 'A',
      score: 9
    },
    {
      date: 2011-12-30T00:00:00.000Z,
      grade: 'B',
      score: 19
    }
  ],
  name: 'Seuda Foods',
  restaurant_id: '40360045'
}
{
  _id: ObjectId("63f0d7dd310029bf7373dade"),
  address: {
    building: '203',
    coord: [
      -73.97822040000001,
      40.6435254
    ],
    street: 'Church Avenue',
    zipcode: '11218'
  },
  borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  grades: [
    {
      date: 2014-02-10T00:00:00.000Z,
      grade: 'A',
      score: 2
    },
    {
      date: 2013-01-02T00:00:00.000Z,
      grade: 'A',
      score: 13
    },
    {
      date: 2012-01-09T00:00:00.000Z,
      grade: 'A',
      score: 3
    },
    {
      date: 2011-11-07T00:00:00.000Z,
      grade: 'P',
      score: 12
    },
    {
      date: 2011-07-21T00:00:00.000Z,
      grade: 'A',
      score: 13
    }
  ],
  name: 'Carvel Ice Cream',
  restaurant_id: '40360076'
}
{
  _id: ObjectId("63f0d7dd310029bf7373dadf"),
  address: {
    building: '265-15',
    coord: [
      -73.7032601,
      40.7386417
    ],
    street: 'Hillside Avenue',
    zipcode: '11004'
  },
  borough: 'Queens',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  grades: [
    {
      date: 2014-10-28T00:00:00.000Z,
      grade: 'A',
      score: 9
    },
    {
      date: 2013-09-18T00:00:00.000Z,
      grade: 'A',
      score: 10
    },
    {
      date: 2012-09-20T00:00:00.000Z,
      grade: 'A',
      score: 13
    }
  ],
  name: 'Carvel Ice Cream',
  restaurant_id: '40361322'
}
{
  _id: ObjectId("63f0d7dd310029bf7373dae1"),
  address: {
    building: '522',
    coord: [
      -73.95171,
      40.767461
    ],
    street: 'East   74 Street',
    zipcode: '10021'
  },
  borough: 'Manhattan',
  cuisine: 'American ',
  grades: [
    {
      date: 2014-09-02T00:00:00.000Z,
      grade: 'A',
      score: 12
    },
    {
      date: 2013-12-19T00:00:00.000Z,
      grade: 'B',
      score: 16
    },
    {
      date: 2013-05-28T00:00:00.000Z,
      grade: 'A',
      score: 9
    },
    {
      date: 2012-12-07T00:00:00.000Z,
      grade: 'A',
      score: 13
    },
    {
      date: 2012-03-29T00:00:00.000Z,
      grade: 'A',
      score: 11
    }
  ],
  name: 'Glorious Food',
  restaurant_id: '40361521'
}
{
  _id: ObjectId("63f0d7dd310029bf7373dae2"),
  address: {
    building: '284',
    coord: [
      -73.9829239,
      40.6580753
    ],
    street: 'Prospect Park West',
    zipcode: '11215'
  },
  borough: 'Brooklyn',
  cuisine: 'American ',
  grades: [
    {
      date: 2014-11-19T00:00:00.000Z,
      grade: 'A',
      score: 11
    },
    {
      date: 2013-11-14T00:00:00.000Z,
      grade: 'A',
      score: 2
    },
    {
      date: 2012-12-05T00:00:00.000Z,
      grade: 'A',
      score: 13
    },
    {
      date: 2012-05-17T00:00:00.000Z,
      grade: 'A',
      score: 11
    }
  ],
  name: 'The Movable Feast',
  restaurant_id: '40361606'
}
{
  _id: ObjectId("63f0d7dd310029bf7373dae3"),
  address: {
    building: '129-08',
    coord: [
      -73.839297,
      40.78147
    ],
    street: '20 Avenue',
    zipcode: '11356'
  },
  borough: 'Queens',
  cuisine: 'Delicatessen',
  grades: [
    {
      date: 2014-08-16T00:00:00.000Z,
      grade: 'A',
      score: 12
    },
    {
      date: 2013-08-27T00:00:00.000Z,
      grade: 'A',
      score: 9
    },
    {
      date: 2012-09-20T00:00:00.000Z,
      grade: 'A',
      score: 7
    },
    {
      date: 2011-09-29T00:00:00.000Z,
      grade: 'A',
      score: 10
    }
  ],
  name: "Sal'S Deli",
  restaurant_id: '40361618'
}
{
  _id: ObjectId("63f0d7dd310029bf7373dae4"),
  address: {
    building: '759',
    coord: [
      -73.9925306,
      40.7309346
    ],
    street: 'Broadway',
    zipcode: '10003'
  },
  borough: 'Manhattan',
  cuisine: 'Delicatessen',
  grades: [
    {
      date: 2014-01-21T00:00:00.000Z,
      grade: 'A',
      score: 12
    },
    {
      date: 2013-01-04T00:00:00.000Z,
      grade: 'A',
      score: 11
    },
    {
      date: 2012-06-07T00:00:00.000Z,
      grade: 'A',
      score: 6
    },
    {
      date: 2012-01-17T00:00:00.000Z,
      grade: 'A',
      score: 8
    }
  ],
  name: "Bully'S Deli",
  restaurant_id: '40361708'
}
{
  _id: ObjectId("63f0d7dd310029bf7373dae5"),
  address: {
    building: '3406',
    coord: [
      -73.94024739999999,
      40.7623288
    ],
    street: '10 Street',
    zipcode: '11106'
  },
  borough: 'Queens',
  cuisine: 'Delicatessen',
  grades: [
    {
      date: 2014-03-19T00:00:00.000Z,
      grade: 'A',
      score: 3
    },
    {
      date: 2013-03-13T00:00:00.000Z,
      grade: 'A',
      score: 12
    },
    {
      date: 2012-03-27T00:00:00.000Z,
      grade: 'A',
      score: 8
    },
    {
      date: 2011-04-05T00:00:00.000Z,
      grade: 'A',
      score: 7
    }
  ],
  name: "Steve Chu'S Deli & Grocery",
  restaurant_id: '40361998'
}
{
  _id: ObjectId("63f0d7dd310029bf7373dae6"),
  address: {
    building: '502',
    coord: [
      -73.976112,
      40.786714
    ],
    street: 'Amsterdam Avenue',
    zipcode: '10024'
  },
  borough: 'Manhattan',
  cuisine: 'Chicken',
  grades: [
    {
      date: 2014-09-15T00:00:00.000Z,
      grade: 'A',
      score: 10
    },
    {
      date: 2014-03-04T00:00:00.000Z,
      grade: 'A',
      score: 13
    },
    {
      date: 2013-07-18T00:00:00.000Z,
      grade: 'A',
      score: 13
    },
    {
      date: 2013-01-09T00:00:00.000Z,
      grade: 'A',
      score: 11
    },
    {
      date: 2012-04-10T00:00:00.000Z,
      grade: 'A',
      score: 10
    },
    {
      date: 2011-11-15T00:00:00.000Z,
      grade: 'A',
      score: 7
    }
  ],
  name: "Harriet'S Kitchen",
  restaurant_id: '40362098'
}
{
  _id: ObjectId("63f0d7dd310029bf7373dae7"),
  address: {
    building: '730',
    coord: [
      -73.96805719999999,
      40.7925587
    ],
    street: 'Columbus Avenue',
    zipcode: '10025'
  },
  borough: 'Manhattan',
  cuisine: 'American ',
  grades: [
    {
      date: 2014-09-12T00:00:00.000Z,
      grade: 'B',
      score: 26
    },
    {
      date: 2013-08-28T00:00:00.000Z,
      grade: 'A',
      score: 9
    },
    {
      date: 2013-03-25T00:00:00.000Z,
      grade: 'B',
      score: 20
    },
    {
      date: 2012-02-14T00:00:00.000Z,
      grade: 'A',
      score: 12
    }
  ],
  name: 'P & S Deli Grocery',
  restaurant_id: '40362264'
}
{
  _id: ObjectId("63f0d7dd310029bf7373dae8"),
  address: {
    building: '18',
    coord: [
      -73.996984,
      40.72589
    ],
    street: 'West Houston Street',
    zipcode: '10012'
  },
  borough: 'Manhattan',
  cuisine: 'American ',
  grades: [
    {
      date: 2014-04-03T00:00:00.000Z,
      grade: 'A',
      score: 9
    },
    {
      date: 2013-04-05T00:00:00.000Z,
      grade: 'A',
      score: 4
    },
    {
      date: 2012-03-21T00:00:00.000Z,
      grade: 'A',
      score: 13
    },
    {
      date: 2011-04-27T00:00:00.000Z,
      grade: 'A',
      score: 5
    }
  ],
  name: 'Angelika Film Center',
  restaurant_id: '40362274'
}
{
  _id: ObjectId("63f0d7dd310029bf7373daea"),
  address: {
    building: '103-05',
    coord: [
      -73.8642349,
      40.75356
    ],
    street: '37 Avenue',
    zipcode: '11368'
  },
  borough: 'Queens',
  cuisine: 'Chinese',
  grades: [
    {
      date: 2014-04-21T00:00:00.000Z,
      grade: 'A',
      score: 10
    },
    {
      date: 2013-11-12T00:00:00.000Z,
      grade: 'A',
      score: 5
    },
    {
      date: 2013-06-04T00:00:00.000Z,
      grade: 'A',
      score: 12
    },
    {
      date: 2012-11-14T00:00:00.000Z,
      grade: 'A',
      score: 10
    },
    {
      date: 2012-10-11T00:00:00.000Z,
      grade: 'P',
      score: 0
    },
    {
      date: 2012-05-24T00:00:00.000Z,
      grade: 'A',
      score: 13
    },
    {
      date: 2011-12-08T00:00:00.000Z,
      grade: 'A',
      score: 12
    },
    {
      date: 2011-07-20T00:00:00.000Z,
      grade: 'A',
      score: 11
    }
  ],
  name: 'Ho Mei Restaurant',
  restaurant_id: '40362432'
}
{
  _id: ObjectId("63f0d7dd310029bf7373daeb"),
  address: {
    building: '60',
    coord: [
      -74.0085357,
      40.70620539999999
    ],
    street: 'Wall Street',
    zipcode: '10005'
  },
  borough: 'Manhattan',
  cuisine: 'Turkish',
  grades: [
    {
      date: 2014-09-26T00:00:00.000Z,
      grade: 'A',
      score: 9
    },
    {
      date: 2013-09-18T00:00:00.000Z,
      grade: 'A',
      score: 13
    },
    {
      date: 2012-09-21T00:00:00.000Z,
      grade: 'A',
      score: 9
    },
    {
      date: 2012-05-09T00:00:00.000Z,
      grade: 'A',
      score: 11
    }
  ],
  name: 'The Country Cafe',
  restaurant_id: '40362715'
}
{
  _id: ObjectId("63f0d7dd310029bf7373daec"),
  address: {
    building: '195',
    coord: [
      -73.9246028,
      40.6522396
    ],
    street: 'East   56 Street',
    zipcode: '11203'
  },
  borough: 'Brooklyn',
  cuisine: 'Caribbean',
  grades: [
    {
      date: 2014-05-13T00:00:00.000Z,
      grade: 'A',
      score: 2
    },
    {
      date: 2013-05-08T00:00:00.000Z,
      grade: 'A',
      score: 7
    },
    {
      date: 2012-09-22T00:00:00.000Z,
      grade: 'A',
      score: 11
    },
    {
      date: 2011-06-06T00:00:00.000Z,
      grade: 'A',
      score: 12
    }
  ],
  name: "Shashemene Int'L Restaura",
  restaurant_id: '40362869'
}





BTVN:
1. Tìm toàn bộ quyển sách trong document book

query: 
db.book.find({});

result:
{
  _id: ObjectId("63f0e10c310029bf7373daee"),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  publication_date: '1960-07-11',
  pages: 281,
  genres: [
    'Novel',
    'Fiction',
    'Literary'
  ],
  publisher: {
    name: 'J. B. Lippincott & Co.',
    location: 'Philadelphia, PA'
  }
}
{
  _id: ObjectId("63f0e10c310029bf7373daef"),
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  publication_date: '1813-01-28',
  pages: 279,
  genres: [
    'Novel',
    'Fiction',
    'Romance'
  ],
  publisher: {
    name: 'Thomas Egerton',
    location: 'London, UK'
  }
}
{
  _id: ObjectId("63f0e10c310029bf7373daf0"),
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  publication_date: '1951-07-16',
  pages: 214,
  genres: [
    'Novel',
    'Fiction',
    'Bildungsroman'
  ],
  publisher: {
    name: 'Little, Brown and Company',
    location: 'Boston, MA'
  }
}
{
  _id: ObjectId("63f0e10c310029bf7373daf1"),
  title: "The Hitchhiker's Guide to the Galaxy",
  author: 'Douglas Adams',
  publication_date: '1979-10-12',
  pages: 214,
  genres: [
    'Science fiction',
    'Comedy',
    'Adventure'
  ],
  publisher: {
    name: 'Pan Books',
    location: 'London, UK'
  }
}
{
  _id: ObjectId("63f0e10c310029bf7373daf2"),
  title: 'One Hundred Years of Solitude',
  author: 'Gabriel García Márquez',
  publication_date: '1967-06-01',
  pages: 417,
  genres: [
    'Novel',
    'Magic realism'
  ],
  publisher: {
    name: 'Editorial Sudamericana',
    location: 'Buenos Aires, Argentina'
  }
}
{
  _id: ObjectId("63f0e10c310029bf7373daf3"),
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien',
  publication_date: '1954-07-29',
  pages: 1178,
  genres: [
    'Fantasy',
    'Adventure'
  ],
  publisher: {
    name: 'George Allen & Unwin',
    location: 'London, UK'
  }
}
{
  _id: ObjectId("63f0e10c310029bf7373daf4"),
  title: 'The Diary of a Young Girl',
  author: 'Anne Frank',
  publication_date: '1947-06-25',
  pages: 267,
  genres: [
    'Autobiography',
    'Diary'
  ],
  publisher: {
    name: 'Contact Publishing',
    location: 'Amsterdam, Netherlands'
  }
}



2. Tìm 1 quyển sách theo _id

query:
db.book.find({_id: ObjectId("63f0e10c310029bf7373daf4")});

result:
{
  _id: ObjectId("63f0e10c310029bf7373daf4"),
  title: 'The Diary of a Young Girl',
  author: 'Anne Frank',
  publication_date: '1947-06-25',
  pages: 267,
  genres: [
    'Autobiography',
    'Diary'
  ],
  publisher: {
    name: 'Contact Publishing',
    location: 'Amsterdam, Netherlands'
  }
}



3. Thêm 1 quyển sách mới (insert toàn bộ thông tin)

query:
db.book.insertOne({"_id": 9, "title": "The story follows a young prince", "author": "Antoine de Saint-Exupéry", "publication_date": "April 1943", "pages": 96, "genres": ["Parable","Fantasy"], "publisher": {"name": "Gallimard", "location": "France"}, });

result:
MongoSH:
{
  acknowledged: true,
  insertedId: 9
}

document:
{
	_id: 9
	title: "The Little Prince"
	author: "Antoine de Saint-Exupéry"
	publication_date: "April 1943"
	pages: 96
	genres: [
		'Parable',
		'Fantasy'
	]
	publisher: {
		name: "Gallimard"
		location: "France"
	}
}



4. Tìm 1 quyển sách có lớn hơn 400 trang và đúng 2 thể loại

query:
db.book.find({"pages": {$gt: 400}, "genres": {$size: 2}});

result:
{
  _id: ObjectId("63f0e10c310029bf7373daf2"),
  title: 'One Hundred Years of Solitude',
  author: 'Gabriel García Márquez',
  publication_date: '1967-06-01',
  pages: 417,
  genres: [
    'Novel',
    'Magic realism'
  ],
  publisher: {
    name: 'Editorial Sudamericana',
    location: 'Buenos Aires, Argentina'
  }
}
{
  _id: ObjectId("63f0e10c310029bf7373daf3"),
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien',
  publication_date: '1954-07-29',
  pages: 1178,
  genres: [
    'Fantasy',
    'Adventure'
  ],
  publisher: {
    name: 'George Allen & Unwin',
    location: 'London, UK'
  }
}



5. Update thông tin của quyển sách có title là "One Hundred Years Of Solitude"

query: 
db.book.find({"title": "One Hundred Years of Solitude"}, {"genres": 1, _id: 0});

result:
{
  genres: [
    'Novel',
    'Magic realism'
  ]
}



6. Delete những quyển sách xuất bản trước năm 1967

query:
db.book.deleteMany({"publication_date": {$lt: "1967-06-01"}});

result: 
{
  acknowledged: true,
  deletedCount: 5
}