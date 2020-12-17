var array = [
    { id: 1, start: "2016-12-07T13:00:00", subject: "test1" },
    { id: 2, start: "2016-12-07T09:00:00", subject: "test2" },
    { id: 3, start: "2016-12-07T10:00:00", subject: "test3" },
    { id: 4, start: "2016-12-07T07:00:00", subject: "test4" },
    { id: 5, start: "2016-12-07T14:00:00", subject: "test5" }
    { id: 6, start: "2016-12-07T14:00:00", subject: "test5" }
];

array.sort(function (a, b) {
    return a.start.localeCompare(b.start);
});

console.log(array);
