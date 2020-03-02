class Student{
    constructor(university, course, fullName){
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.marksArr = [5, 4, 5, 2];
      this.isDismiss = false;
    }
    getInfo(){
      return `Student ${this.course} of course ${this.university} ${this.fullName}`;
    }
    get marks(){
      if(this.isDismiss){return null;}
      return this.marksArr;
    }
    set marks(mark){
      if(this.isDismiss){return null;}
      this.marksArr.push(mark);
    }
    getAverageMark(){
      if(this.isDismiss){return null;}
      return Number((this.marksArr.reduce(function(a,b){return a+b;})/this.marksArr.length).toFixed(2));
    }
    dismissStudent(){
      return this.isDismiss = true;
    }
    recoverStudent(){
      return this.isDismiss = false;
    }
  }
  const ostapBender = new Student('Студент 1го курса', 'Высшей Школы Мошенничества г.Одесса', 'Остап Родоманський Бендер');
console.log(ostapBender.getInfo());

console.log(ostapBender.marks);
ostapBender.marks = 5;
console.log(ostapBender.marks);

console.log(ostapBender.getAverageMark());

ostapBender.dismissStudent();
console.log(ostapBender.marks);

ostapBender.recoverStudent();
console.log(ostapBender.marks);

//Advanced
class BudgetStudent extends Student{
    marksArr =  [5, 5, 5, 4,4];
    isDismiss = false;
  

  getScholarship(){
    const number = 4;
    if(this.getAverageMark() >= number && this.isDismiss === false){
      console.log(`Ви отримали 1400 грн`);
    }
    else{
      console.log(`Стипендії немає :с`);
    }
  }
scholarshipInterval() {
    setInterval(()) => {this.getScholarship());}30000);
}
}
const anastasiia = new BudgetStudent('Студентка 5 курсу', 'ЛНУ ім. І.Франка', 'Михальчук Анастасія');
console.log(anastasiia.getInfo());

console.log(anastasiia.getScholarship());
