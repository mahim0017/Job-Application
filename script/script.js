let jobs = [
  {
    companyName: "TechNova Solutions",
    position: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "৳40,000 - ৳60,000",
    status:"NOT APPLIED",
    description: "We are looking for a skilled Frontend Developer with experience in HTML, CSS, JavaScript, and React."
  },
  {
    companyName: "Creative Minds Ltd.",
    position: "UI/UX Designer",
    location: "Khulna, Bangladesh",
    type: "Part-Time",
    salary: "৳25,000 - ৳35,000",
    status:"NOT APPLIED",
    description: "Seeking a creative UI/UX Designer who can design modern and responsive web interfaces."
  },
  {
    companyName: "NextGen IT",
    position: "Backend Developer",
    location: "Chittagong, Bangladesh",
    type: "Full-Time",
    salary: "৳50,000 - ৳80,000",
    status:"NOT APPLIED",
    description: "Looking for a Backend Developer experienced in Node.js, Express, and MongoDB."
  },
  {
    companyName: "SoftEdge Corp",
    position: "Full Stack Developer",
    location: "Remote",
    type: "Contract",
    salary: "৳70,000 - ৳1,00,000",
    status:"NOT APPLIED",
    description: "Hiring a Full Stack Developer proficient in MERN stack for a 6-month contract."
  },
  {
    companyName: "Bright Future Tech",
    position: "Junior Web Developer",
    location: "Sylhet, Bangladesh",
    type: "Internship",
    salary: "৳15,000 - ৳20,000",
    status:"NOT APPLIED",
    description: "Great opportunity for freshers to start their career in web development."
  },
  {
    companyName: "CodeCrafters Ltd.",
    position: "Mobile App Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "৳60,000 - ৳90,000",
    status:"NOT APPLIED",
    description: "Looking for an experienced Flutter/React Native developer."
  },
  {
    companyName: "DataWave Analytics",
    position: "Data Analyst",
    location: "Remote",
    type: "Full-Time",
    salary: "৳45,000 - ৳70,000",
    status:"NOT APPLIED",
    description: "Seeking a Data Analyst with strong knowledge of Excel, SQL, and Power BI."
  },
  {
    companyName: "CyberShield Security",
    position: "Cyber Security Specialist",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "৳80,000 - ৳1,20,000",
    status:"NOT APPLIED",
    description: "Looking for a cybersecurity expert to manage and secure company systems."
  }
];
// let jobData = [];
let filterValue = "all";


const cardParent = document.querySelector('#card-parent');
const topBtn = document.querySelectorAll(".filter-btn");
const totalJobCount = document.querySelector("#total-job-count");
const interviewCount = document.querySelector("#interview-count");
const rejectedCount = document.querySelector("#rejected-count")

const allJobs = document.querySelector('#available');
console.log (allJobs)


let allJobsCount = 0;
let interviewJobCount = 0;
let rejectedJobCount =0;

function updateCount (){
  allJobsCount = jobs.length;
  const interviewArr =[];
  const rejectedArr = [];

 

  for( const item of jobs) {
    if (item.status === "Interview") {
      interviewArr.push(item);
    }else if (item.status === "Rejected") {
      rejectedArr.push(item);
    }
  } 
  interviewJobCount = interviewArr.length;
  rejectedJobCount = rejectedArr.length;
  totalJobCount.textContent = allJobsCount;
  interviewCount.textContent = interviewJobCount;
  rejectedCount.textContent = rejectedJobCount;
  if (filterValue === "Interview"){
    allJobs.textContent = `${interviewJobCount} of ${allJobsCount} jobs`
  }else if (filterValue === "Rejected") {
    allJobs.textContent = `${rejectedJobCount} of ${allJobsCount} jobs`
  }else {
    allJobs.textContent = `${allJobsCount} jobs`;
  }
}
updateCount();
for (const btn of topBtn) {
  btn.addEventListener("click", function () {
    filterValue = btn.value;
    for(const btn of topBtn){
      btn.classList.remove("active");
    }
    btn.classList.add("active");
    // console.log(filterValue);
    filterOut(filterValue);
  });
}
function filterOut(value){
  const interviewArr =[];
  const rejectedArr = [];

 

  for( const item of jobs) {
    if (item.status === "Interview") {
      interviewArr.push(item);
    }else if (item.status === "Rejected") {
      rejectedArr.push(item);
    }
  }

  if (value === "Interview"){
    renderApp(interviewArr);
  }else if(value === "Rejected") {
    renderApp(rejectedArr);
  } else {
    renderApp(jobs);
  }
  updateCount();
}
  
function renderApp(arr) {


    cardParent.innerHTML="";

    if(arr.length > 0 ){
        for (let job of arr) {
            const card  = document.createElement("div");
            card.classList.add("card");
            if (job.status === "Interview") {
        card.style.borderLeft = "6px solid #10B981"; 
      } else if (job.status === "Rejected") {
        card.style.borderLeft = "6px solid #EF4444";
      }
            
            const company = document.createElement('h2');
            company.innerText = job.companyName;
            card.appendChild(company);

            const position = document.createElement("p");

            position.innerText = job.position;
            card.appendChild(position);
            

           const details = document.createElement("p"); 
            details.innerText = `${job.location} | ${job.type} | ${job.salary}`;
            card.appendChild(details);

            const status = document.createElement("span");
            status.innerHTML = `${job.status} `
            
            status.className = "status-badge";
            
      
      if (job.status === "Interview") {
        status.style.backgroundColor = "#10B981";
        status.style.color = "white"; 
      } else if (job.status === "Rejected") {
        status.style.backgroundColor = "#EF4444";
        status.style.color = "white";
      }
            card.appendChild(status);

            const desc = document.createElement("p");
            desc.innerText = job.description;
            card.appendChild(desc);

            const btnGroup = document.createElement("div");
            btnGroup.className = "btn-group";

            const inerviewBtn = document.createElement("button");
            inerviewBtn.innerText = "Interview";
            inerviewBtn.className = "btn-interview";
            inerviewBtn.addEventListener("click", function (){
                job.status = "Interview";
              
                updateCount();
                filterOut(filterValue);

                // console.log(job.status)
            })
            btnGroup.appendChild (inerviewBtn);

            const rejectBtn = document.createElement("button");
            rejectBtn.className = "btn-rejected";
            rejectBtn.innerText = "Rejected";
            rejectBtn.addEventListener ("click", function(){
                job.status = "Rejected";
                updateCount();
                 filterOut(filterValue);
                // console.log(job.status)
            })
            btnGroup.appendChild(rejectBtn);
            card.appendChild(btnGroup);

            const deleteBtn = document.createElement("button")
            deleteBtn.className = "delete-btn";
            deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
            deleteBtn.addEventListener("click", function(){
              jobs = jobs.filter(item => item !== job);
              console.log(jobs);
              filterOut(filterValue);
              updateCount();
            })

            card.appendChild(deleteBtn);
            card.classList.add("card")
            cardParent.appendChild(card);
  }
    }else {
        cardParent.innerHTML= `<div class="mt-10 container mx-auto h-[400px] rounded-[8px] bg-[#ffffff] flex flex-col justify-center items-center">
         <img src="jobs.png" alt="">
         <h2 class="text-[#002C5C] font-semibold text-[24px]">No jobs Available</h2>
        <p class="text-[#64748B]">Check back soon for new job opportunities</p>
    </div>`
        }
} 



// filterOut(selectedValue);
renderApp(jobs);
