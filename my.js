// 1.მოცემულია მასიცი:
// შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით:
// თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი.
// თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით.
// სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.

let array2 = [14, 150, "css", null, "javascript", 25];

let newArray = array2.map(function (item) {
  if (typeof item === `number`) return item * item;
  else if (typeof item === "string") return item.toUpperCase();
  else return item;
});

console.log(newArray);

let array3 = [14, 150, "css", null, "javascript", 25];

let newArray2 = array3.map((item1) => {
  if (typeof item1 === "number") {
    return item1 * item1; 
  } else if (typeof item1 === "string") {
    return item1.toUpperCase(); 
  } else {
    return item1; 
  }
});

console.log(newArray2);

// 2. prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა:
// საქართველოს დედაქალაქი? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და
// შეინახეთ ცვლადში. როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ
// ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს.
// თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია,
// თუ არა მაშინ დაბეჭდეთ არასწორია.

// let user = prompt(`საქართველოს დედაქალაქი?`);
// let answer = `tbilisi`;
// let lowAnswer=answer.toLowerCase()

// if (user === answer.toLowerCase()) {
//   console.log(`სწორია`);
// } else {
//   console.log(`არასწორია`);
// }

// 3. .მოცემულია მასივი, შემდეგი მნიშვნელობებით -
// გამოიტანეთ მარტო ციფრები მეთოდის საშუალებით;

let array1 = ["hello1", 14, 24, "hello2"];

let numbers = array1.filter((item) => typeof item === "number");

console.log(numbers);

// 4. .მოცემულია მასივი:
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვა
// რომლის სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

let languages = ["html", "css", "javascript", "python", "php"];

let newLanguages = languages.filter(function (strings) {
  if (strings.length > 3) {
    return strings;
  }
});
console.log(newLanguages);

// 5. .მოცემულია მასივი:
// filter მეთოდის საშუალებით დააბრუნეთ მასივი,
// რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

let words = ["Madrid", "rome", "Milan", "berlin"];
let searchitem = `m` || `M`;

let newWord = words.filter(function (wordsName) {
  if (wordsName.includes(searchitem)) {
    return wordsName;
  }
});

console.log(newWord);

// 6. მოცემულია: ცვლადი .დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს ამ ცვლადს,
// და შეამოწმეთ მეთოდის საშუალებით არის თუ არა ამ ცვლადში
// “https://“. თუ კი გამოიტანეთ - კი მოიცავს, თუ არა - არა, არ მოიცავს

let link = `https://google.com`;

function checkLink(link) {
  if (link.includes("https://")) {
    return `კი მოიცავს`;
  } else {
    return `არა, არ მოიცავს`;
  }
}

console.log(checkLink(link));

// 7. შეამოწმეთ მოცემულ მასივში let array6 = [-1, -2, -3, 4];
// არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთოდით.

let array6 = [-1, -2, -3, 4];

function isEven(elements) {
  return elements >= 0;
}

console.log(array6.some(isEven));

// 8. .მოცემულია სტრინგი - ‘12345’, გაიგეთ ამ რიცხვებსის ჯამი.
// ( უნდა გადაიყავნოთ მასივში, გათვალოთ ჯამი, და შემდგ თითოეული
// სტრინგი გადაიყავნოთ რიცხვში)

let str = "12345";

let sum = Array.from(str)
  .map(Number)
  .reduce((acc, curr) => acc + curr, 0);

console.log(sum);

// 9.Გამოთვალეთ ნებისმიერი რიცხვებს ჯამი reduce მეთოდით

// 10. Გაერთიანეთ სამი მასივის მნიშვენლობები Ერთ მასივში

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let arrNew = arr1.concat(arr2, arr3);

console.log(arrNew);
