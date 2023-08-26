const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const courseList = new Array(7).fill(0).map(() => new Array(12).fill(""));

for (let course of courses) {
  course.name = `${course.name} <br> ${course.teacher ?? ""} <br> ${
    course.position ?? ""
  } <br> ${course.timespan ?? ""}`;
}

courses.forEach((course) => {
  course.time.forEach((time) => {
    const index = week.indexOf(time.day);
    time.range.forEach((range) => {
      courseList[index][range - 1] = course.name;
    });
  });
});
const day = new Date().getDay();
const courseType = [
  [{ index: "1", name: "8:00-8.45" }, 1],
  [{ index: "2", name: "8:55-9:40" }, 1],
  [{ index: "3", name: "9:55-10:40" }, 1],
  [{ index: "4", name: "10:50-11:35" }, 1],
  [{ index: "5", name: "11:45-12:30" }, 1],
  [{ index: "6", name: "13:30-14:15" }, 1],
  [{ index: "7", name: "14:25-15:10" }, 1],
  [{ index: "8", name: "15:25-16:10" }, 1],
  [{ index: "9", name: "16:20-17:05" }, 1],
  [{ index: "10", name: "17:15-18:00" }, 1],
  [{ index: "11", name: "18:30-19:15" }, 1],
  [{ index: "12", name: "19:25-20:10" }, 1],
  [{ index: "13", name: "20:20-21:05" }, 1],
];
// 实例化(初始化课表)
var Timetable = new Timetables({
  el: "#coursesTable",
  timetables: courseList,
  week: week,
  timetableType: courseType,
  highlightWeek: day,
  styles: {
    Gheight: 50,
  },
});
