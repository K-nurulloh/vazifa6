// ========================================================================================================
//        1-masala
// ========================================================================================================


// Berilgan arrayga bitta qiymat qoвЂshing.
// Foydalanish: push()

// function addToEnd(arr, value) {
//   arr.push(value);
//   return arr;
// }

// const result = addToEnd([1, 2, 3], 4);  
// console.log(result);                


// ========================================================================================================
//        2-masala
// ========================================================================================================


// Arrayning oxirgi elementini olib tashlang.
// Foydalanish: pop()

// function removeLast(arr) {
//   arr.pop();
//   return arr;
// }

// console.log(removeLast([1, 2, 3, 4]));



// ========================================================================================================
//        3-masala
// ========================================================================================================


// Array boshiga yangi element qoвЂshing.
// Foydalanish: unshift()

// function addToStart(arr, value) {
//   arr.unshift(value);   
//   return arr;      
// }

// console.log(addToStart([2, 3, 4], 1));


// ========================================================================================================
//        4-masala
// ========================================================================================================


// function removeFirst(arr) {
//   arr.shift();
//   return arr;
// }

// console.log(removeFirst([1, 2, 3, 4]));

// ========================================================================================================
//        5-masala
// ========================================================================================================


// Stringdagi boвЂsh joylarni olib tashlang.
// Foydalanish: trim()

// function cleanString(str) {
//   return str.trim(); 
// }

// console.log(cleanString("   Salom   "));

// ========================================================================================================
//        6-masala
// ========================================================================================================


// Berilgan string katta harflarga oвЂtkazilsin.
// Foydalanish: toUpperCase()

// function shout(str) {
//   return str.toUpperCase();
// }

// console.log(shout("salon dunyo!"));

// ========================================================================================================
//        7-masala
// ========================================================================================================


// Massivda qiymat bor-yoвЂqligini tekshiring.
// Foydalanish: includes()

// function hasValue(arr, value) {
//   return arr.includes(value);
// }

// console.log(hasValue([1, 2, 3, 4], 3));

// ========================================================================================================
//        8-masala
// ========================================================================================================

// Berilgan soвЂz "a" harfi bilan boshlanishini tekshiring.
// Foydalanish: startsWith()

// function startsWithA(str) {
//   return str.startsWith("a");
// }

// console.log(startsWithA("Asila"));

// ========================================================================================================
//        9-masala
// ========================================================================================================

// Berilgan array ichida "apple" borligini aniqlang.
// Foydalanish: includes()

// function containsApple(arr) {
//   return arr.includes("apple");
// }

// console.log(containsApple(["manti", "hilola", "apple"]));

// ========================================================================================================
//        10-masala
// ========================================================================================================

// Object ichidagi barcha kalitlarni arrayga aylantiring.
// Foydalanish: Object.keys()

// function getKeys(obj) {
//   return Object.keys(obj);
// }

// const obj = { name: "Aziz", age: 15, city: "Tashkent" };

// console.log(getKeys(obj));

// ========================================================================================================
//        11-masala
// ========================================================================================================

// Object ichidagi barcha qiymatlarni arrayga oвЂtkazing.
// Foydalanish: Object.values()

// function getValues(obj) {
//   return Object.values(obj);
// }

// const obj = { name: "Aziz", age: 15, city: "Tashkent" };

// console.log(getValues(obj));

// ========================================================================================================
//        12-masala
// ========================================================================================================

// String ichidagi barcha boвЂsh joylarni olib tashlang.
// Foydalanish: replaceAll(" ", "")

// function removeSpaces(str) {
//   return str.replaceAll(" ", "");
// }
// console.log(removeSpaces("S a l o m   D u n y o "));


// ========================================================================================================
//        13-masala
// ========================================================================================================

// Arrayning teskari koвЂrinishini qaytaring.
// Foydalanish: reverse()

// function reverseArray(arr) {
//   return arr.reverse(); 
// }

// console.log(reverseArray([1, 2, 3, 4, 5]));

// ========================================================================================================
//        14-masala
// ========================================================================================================

// Object.entries orqali objectni key-value arrayga aylantiring.
// Foydalanish: Object.entries()

// function objectToEntries(obj) {
//   return Object.entries(obj);
// }
// const obj = { name: "Aziz", age: 15, city: "Tashkent" };

// console.log(objectToEntries(obj));


// ========================================================================================================
//        15-masala
// ========================================================================================================

// Object ichida "admin" degan key bormi?
// Foydalanish: hasOwnProperty()

// function hasAdmin(obj) {
//   return obj.hasOwnProperty("admin");
// }

// const obj = { user: "Aziz", age: 15, admin: "odam" };

// console.log(hasAdmin(obj));

// ========================================================================================================
//        16-masala
// ========================================================================================================

// Stringning oxirgi 3 ta harfini ajrating.
// Foydalanish: slice()

// function lastThree(str) {
//   return str.slice(-3);
// }
// console.log(lastThree("bozorchi"));


// ========================================================================================================
//        17-masala
// ========================================================================================================

// Object.entries() + fromEntries() orqali object ichidagi "age" qiymatiga 1 qoвЂshing.

// function increaseAge(obj) {
//   obj.age = obj.age + 1; 
//   return obj;
// }

// const user = { name: "Aziz", age: 15 };
// increaseAge(user);

// console.log(Object.entries(user));


// ========================================================================================================
//        18-masala
// ========================================================================================================

// Stringni ichidagi har bir boвЂshliqdan keyin vergul qoвЂshing.
// Masalan: "salom dunyo" => "Salom, dunyo"

// function addComma(str) {
//   return str.replaceAll(" ", ", ");
// }
// console.log(addComma("Hello word"));


// ========================================================================================================
//        19-masala
// ========================================================================================================

// Massivda oxirgi boвЂlib qayerda "banana" turganini toping.
// Foydalanish: lastIndexOf()

// function lastBananaIndex(arr) {
//   return arr.lastIndexOf("banana");
// }
// console.log(lastBananaIndex(["nice", "banan", "lemon", "apple", "greed"]));

// ========================================================================================================
//        20-masala
// ========================================================================================================

// Massivda 2-dan 5-gacha boвЂlgan elementlarni kesib oling.
// Foydalanish: slice()

// function sliceMiddle(arr) {
//   return arr.slice(2, 5);
// }


// const arr = ["nice", "banan", "lemon", "apple", "greed"];

// console.log(sliceMiddle(arr));  


// ========================================================================================================
//        21-masala
// ========================================================================================================

// String ichida "javascript" soвЂzini "JS" bilan almashtiring.
// Foydalanish: replaceAll()

// function replaceJavaScript(str) {
//   return str.replaceAll("javascript", "JS");
// }

// console.log(replaceJavaScript("javascript juda ajoyib va tushunarsiz"));

