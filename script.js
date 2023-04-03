// задача 1
const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
};

function outputInConsoleByNumber(num) {
  for (const key in numbers) {
    if (numbers[key] >= num) {
      console.log(numbers[key]);
    }
  }
}

outputInConsoleByNumber(3);

// задача 1

// задача 2
const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
      {
          userId: 10,
          userName: "Alex",
          text: "lorem ipsum",
          rating: {
              likes: 10,
              dislikes: 2, // вывести это число
          }
      },
      {
          userId: 5, // вывести это число
          userName: "Jane",
          text: "lorem ipsum 2", // вывести этот текст
          rating: {
              likes: 3,
              dislikes: 1,
          },
      },
  ],
};

function outputInConsoleByComments(){
  console.log('author',post.author);
  console.log('dislikes comment 1', post.comments[0].rating.dislikes);
  console.log('userId comment 2',post.comments[1].userId);
  console.log('text comment 2',post.comments[1].text)
};

outputInConsoleByComments();
// задача 2

// задача 3

// задача 3

// задача 4

// задача 4
