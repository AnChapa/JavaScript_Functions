console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    if(count >= 0){ // if positive
        for(let num = 0; num <= count; num++){
            if(num % 2 != 0){
            console.log(num);
            }   
        }
    }else if(count < 0){ // if negative
        for(let num = 0; num >= count; num--){
            if(num % 2 != 0){
                console.log(num);
            }
        }
    }
}

printOdds(20);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    if (typeof userName === "undefined" || typeof age === "undefined") {
        console.log("Please provide values for both userName and age.");
        return;
    }

    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age >= 16)
        console.log(aboveSixteen);
    else
        console.log(belowSixteen);
}

checkAge("John", 16);
checkAge("Josh", 15);
checkAge();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y){
    if(x == 0 && y == 0){
        console.log(`(${x}, ${y}) is at the origin.`);
    }else if(x == 0){
        console.log(`(${x}, ${y}) is on the x axis.`);
    }else if(y == 0){
        console.log(`(${x}, ${y}) is on the y axis.`);
    }else if(x > 0 && y > 0){
        console.log(`(${x}, ${y}) is in Quadrant 1.`);
    }else if(x > 0 && y < 0){
        console.log(`(${x}, ${y}) is in Quadrant 4.`);
    }else if(x < 0 && y > 0){
        console.log(`(${x}, ${y}) is in Quadrant 2.`);
    }else if(x < 0 && y < 0){
        console.log(`(${x}, ${y}) is in Quadrant 3.`);
    }
}

whichQuadrant(0,0);
whichQuadrant(1,0);
whichQuadrant(0,1);
whichQuadrant(1,1);
whichQuadrant(1,-1);
whichQuadrant(-1,1);
whichQuadrant(-1,-1);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function whatTriangle(side1, side2, side3){
    if(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1){
        if(side1 == side2 == side3){
            console.log(`Sides ${side1}, ${side2}, ${side3} make an equilateral triangle`);
        }else if(side1 == side2 ||side1 == side3 || side2 == side3){
            console.log(`Sides ${side1}, ${side2}, ${side3} make an isosceles triangle`);
        }else{
            console.log(`Sides ${side1}, ${side2}, ${side3} make an scalene triangle`);
        }
    }else{
        console.log(`Sides ${side1}, ${side2}, ${side3} make an invalid triangle`);
    }
}

whatTriangle(1,1,1);
whatTriangle(2,2,0);
whatTriangle(3,4,5);
whatTriangle(4,4,6);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function cellDataFeedback(planLimit, day, usage){
    let daysLeft = 30 - day;
    let usageRec = planLimit / 30;
    let usageAvg = usage / day;
    let usageExp = usage + (usageAvg * daysLeft);
    let usageHelp = (planLimit - usage) / daysLeft;

    console.log(`${day} days used, ${daysLeft} days remaining.`);
    console.log(`Average daily use recommended: ${usageRec} GB/day`);
    if(usage >= planLimit){
        console.log(`You have exceeded your monthly limit.`);
    }else if(usageAvg > usageRec){
        console.log(`You are exceeding your average dialy use (${usageAvg} GB/day), continuing this high usage, you'll exceed your data plan by ${usageExp - planLimit} GB`);
        console.log(`To stay below your data plan, use no more than ${usageHelp} GB/day.`);
    }else{
        console.log(`You are right on track with your daily usage (${usageAvg} GB/day), continuing this usage rate, you'll be under your data plan by ${planLimit - usageExp} GB`);
        console.log(`You may use ${usageHelp} GB/day and still be within your data plan.`);
    }
}

cellDataFeedback(100, 15, 56);
cellDataFeedback(100, 18, 40);