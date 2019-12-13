if (typeof process.argv[2] === 'undefined' || typeof process.argv[4] === 'undefined'){
    console.log("A start and end date are required");
    return;
}
let startDate   = process.argv[2];
let endDate     = process.argv[4];
let dateDelim   = startDate.indexOf('-') > -1 ? '-':startDate.indexOf('/') > -1 ? '/':0;
let endDelim    = endDate.indexOf('-') > -1 ? '-':endDate.indexOf('/') > -1 ? '/':0;
console.log("Validating dates...");
if (!dateDelim || !endDelim){
    console.log("   Invalid date format\n   Expected format xx-xx-xxx or xx/xx/xxx");
    return;
}
console.log("Validation succesfull...\n");
//set the year month day variables for both dates
//start date
let startDateArr = startDate.split(dateDelim);
let startYear   = startDateArr[0].length === 4 ? startDateArr[0]:startDateArr[2];
let startMonth  = startDateArr[1];
let startDay    = startDateArr[2].length === 2 ? startDateArr[2]:startDateArr[0];
let startDateMS =  new Date(startYear,startMonth,startDay,0,0,0).getTime();
//end date
let endDateArr = endDate.split(endDelim);
let endYear   = endDateArr[0].length === 4 ? endDateArr[0]:endDateArr[2];
let endMonth  = endDateArr[1];
let endDay    = endDateArr[2].length === 2 ? endDateArr[2]:endDateArr[0];
let endDateMS =  new Date(endYear,endMonth,endDay,0,0,0).getTime();
//calculate the difference
console.log("Calculating the difference in days between the two dates...\n");
let oneDay  = 86400000;
let msDiff = ((endDateMS-startDateMS)/oneDay);
//do not add the start and end days and add fix if start date is after end date
let dayDiffWithOutStartAndEndDays = endDateMS <= startDateMS ? msDiff+1:msDiff-1;
let moreThanOneDay = dayDiffWithOutStartAndEndDays > 1 || dayDiffWithOutStartAndEndDays < -1 ||  dayDiffWithOutStartAndEndDays === 0 ? 's':'';
//round to the nearest integer
dayDiffWithOutStartAndEndDays = Math.round(dayDiffWithOutStartAndEndDays);
//finish off with the absolute value of days
dayDiffWithOutStartAndEndDays = Math.abs(dayDiffWithOutStartAndEndDays);
console.log(dayDiffWithOutStartAndEndDays+' day'+moreThanOneDay);
console.log("\n");