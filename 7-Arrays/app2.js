// 🌟🌟 Array를 만드는 두번째 방법. Spread Operator

// --------
// 예제 1. 배열 b에 a의 원소가 포함됨
let a = [1, 2, 3];
let b = [0, ...a, 4]; //b==[0,1,2,3,4]

// 예제 2. ✨ Shallow Copy!! 복사본을 변경해도 원본에 영향을 미치지 않는다.
let original = [1, 2, 3];
let copy = [...original];
copy[0] = 0; // Modifying the copy does not change the original
original[0]; // => 1

// 예제 3. You can turn any string into an array of single-character strings:
let digits = [..."0123456789ABCDEF"];
digits; // => ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

// 예제 4. Array에서 중복원소를 제거하는 방법. Array를 Set으로 Convertinggkf 할 것. new Set(letters) → Set이 만들어짐
let letters = [..."hello world"];
[...new Set(letters)]; // => ["h","e","l","o","","w","r","d"]
