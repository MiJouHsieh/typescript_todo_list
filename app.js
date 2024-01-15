"use strict";
// 定義任務狀態列舉
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["Todo"] = 0] = "Todo";
    TaskStatus[TaskStatus["Inprogress"] = 1] = "Inprogress";
    TaskStatus[TaskStatus["Done"] = 2] = "Done";
})(TaskStatus || (TaskStatus = {}));
// 空任務陣列
let tasks = [];
document.querySelector('.addTask').addEventListener('click', () => {
    console.log('測試');
});
