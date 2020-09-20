const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const counter = 0;

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}

// this is the main method that acts like a worker and runs every 1 minute
const timer = setInterval(function () {
    const startTime = new Date().getTime();

    let difference = -Math.round((user.lastActivity - startTime) / 60000)

    switch (difference) {
        case 1:
        case 2:
            inactiveFirstStage()
            break;
        case 3:
        case 4:
            inactiveSecondStage()
            break;
        case 5:
        case 6:
            inactiveThirdStage()
            if(difference === 6) user.lastActivity = new Date().getTime()
            break;
        default:
            break;
    }

}, 60 * 1000);

