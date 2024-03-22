// 🌟 Stacks and Queues with push(), pop(), shift(), and unshift()

// ✨ push(), pop() 메서드
let stack = []; // stack == []
stack.push(1, 2); // stack == [1,2];
stack.pop(); // stack == [1]; returns 2
stack.push(3); // stack == [1,3]
stack.pop(); // stack == [1]; returns 3
stack.push([4, 5]); // stack == [1,[4,5]]
stack.pop(); // stack == [1]; returns [4,5]
stack.pop(); // stack == []; returns 1

// ✨ array를 push할 때 flatten 되지 않음. 다음과 같이 배열의 원소만 push할 수 있음
let a = [10];
let values = [1, 2, 3];
a.push(...values); // a = [10, 1, 2, 3]

// ✨ unshift(), shift() 메서드는 각각 push(), pop() 메서드와 유사함. 다만, 반대쪽 (beginning)에서 push, pop이 일어남
let q = [];
q.push(1, 2);
q.shift();
q.push(3);
q.unshift(100, 101);
q.shift();
q.shift();
