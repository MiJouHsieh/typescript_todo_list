// 任務介面型別
interface Task {
  name: string,
  status: TaskStatus
}

// 定義任務狀態列舉
enum TaskStatus {
  Todo,
  Inprogress,
  Done
}

// 空任務陣列
let tasks: Task[] = []

document.querySelector('.addTask')!.addEventListener('click', ()=> {
  console.log('測試')
})