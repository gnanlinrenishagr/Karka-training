var my_resume = {
    Objective: "To be a good full stack developer and to gain more knowledge on other areas .",
    Name: "Gnanlin Renisha G R",
    Email: "gnaninrenisha@gmail.com",
    Mobile_no: 8300297958,
    Soft_Skills: ["Good communication", "Listening skill", "Leadership skill", "Team work", "Time management"],
    Hard_Skills: ["Writting Skill", "Presentation Skill", "Teaching Skill"],
    Educational_Qualification: [{
        Level: "Bsc Mathematics",
        Board_or_University: "Manonmanian Sundaranar University",
        School_or_College: "Annai Vellankanni College,Tholayavattam",
        Year: 2023,
        Percentage_or_CGPA: 8.7
    },
    {
        Level: "HSC",
        Board_or_University: "State Board",
        School_or_College: "Christuraja Matriculation Higher School,Marthandam",
        Year: 2019,
        Percentage_or_CGPA: "80.7%"
    },
    {
        Level: "SSLC",
        Board_or_University: "State Board",
        School_or_College: "Christuraja Matriculation Higher School,Marthandam",
        Year: 2017,
        Percentage_or_CGPA: "96.6%"
    }],
    Projects: [{
        Project_Title: "Value of pi",
        Project_Description: "Evaluating the value of pi and its origin",
        Project_Year: 2020
    },
    {
        Project_Title: "Great Mathematiciens",
        Project_Description: "Studing about the mathematiciens of 18th,19th,20th century.",
        Project_Year: 2021
    },
    {
        Project_Title: "Index of Economic Freedom",
        Project_Description: "An Analysis of Population Growth.",
        Project_Year: 2023
    }],
    Experience: [{
        Company_name: "Flow",
        Experience: 1.6,
        Job_role: "Project manager"
    },
    {
        Company_name: "TCS",
        Experience: 2,
        Job_role: "Manager"
    },
    {
        Company_name: "Amazon",
        Experience: 2.4,
        Job_role: "Manager"
    }],
    Hobbies: ["Music", "Drawing", "Gardening"],
    Personal_Details: {
        Father_name: "S Gnanaseelan",
        Father_occupation: "Auto driver",
        Languages_Known: ["Tamil", "English", "Malayalam"],
        DOB: "16-04-2002",
        Gender: "Female",
        Marital_Status: "Unmarried",
        Address: {
            Door_no: "25-7/A1",
            Street_name: "Kuzhivilai",
            Village_name: "kannacode",
            Town_name: "Marthandam.",
            Pincode: "629165"
        }
    },
    "Declaration": "I heareby declare that the above given information is true to my knowledge."
}
function education(x) {
    for (var i = 0; i < x.length; i++) {
        console.log((i + 1) + "." + (x[i].Level))
    }
}
education(my_resume.Educational_Qualification)


function edu(x) {
    for (var i = x.length - 1; i >= 0; i--) {
        console.log((x[i].Level))
    }
}
edu(my_resume.Educational_Qualification)
localStorage.setItem("name", true)
console.log(localStorage.getItem("name"))
m = localStorage.getItem("name")
console.log(typeof (m))
// sessionStorage.setItem("name","Agaram");
var list = ["a", "b", "c"];
var stringlist = JSON.stringify(list);
localStorage.setItem("new", stringlist)
var list_1 = localStorage.getItem("new");
var clist = JSON.parse(list_1);
console.log(clist[1])