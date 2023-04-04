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
const products = [
  {
      id: 3,
      price: 200,
  },
  {
      id: 4,
      price: 900,
  },
  {
      id: 1,
      price: 1000,
  },
];

function getDiscountProducts(arr, discount) {
  const discountList = [];

  arr.forEach(element => {
      discountList.push({
          id: element.id,
          price: element.price - (element.price * (discount/100))
      });
  });
  
  return discountList;
}

console.log('discount', getDiscountProducts(products, 15));
// задача 3

// задача 4
const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

function getFilterProducts(arr) {
    return arr.filter(element => element.photos && element.photos.length > 0);
}

function getSortProducts(arr) {
    return arr.sort((a, b) => a.price - b.price);
}

console.log('filterProducts', getFilterProducts(products2));
console.log('sortProducts', getSortProducts(products2));
// задача 4

// задача 5
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

function getUnionArr() {
    const unionArr = [];
    
    en.forEach((element, index) => {
        unionArr.push({
            [element]: ru[index]
        });
    });

    return unionArr;
}

console.log(getUnionArr());
// задача 5
