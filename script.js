var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  //console.log(data);
  var result = JSON.parse(data);
  console.log(result);
  //for accessing multiple values use looping
  //!using for loop
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].reg)
  }
  for (let key in result){
    console.log(result[key].region)
  }
  for(let val of result){
    console.log(val.subregion,val.population);
 }
}

//2 Question
const resumeData = {
    "name": "SYED ABILASH S",
    "contact": {
      "email": "iquwansyed09@gmail.com",
      "phone": "+91 7010734059",
    },
    "summary": "Logical and results-driven full stack developer dedicated to building and optimizing user-focused websites and applications.",
    "education": [
      {
        "degree": "MCA(Master of Computer Application",
        "institution": "karpagam academy of higher education",
        "location": "Tamil nadu,Coimbatore,Echanari-641023",
        "graduationDate": "july 2024"
      }
    ],
    "skills": [
      "",
      " coding details like drop-down menus, fonts, colors, and page layouts.",
      "Problem Solving"
    ],
    "languages": [
      "JavaScript",
    ]
  };
  
  console.log(JSON.stringify(resumeData, null, ));