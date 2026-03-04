const jobs = [
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
let jobData = [];
const cardParent = document.querySelector('#card-parent');

function renderApp(arr) {


    cardParent.innerHTML="";

    if(arr.length > 0 ){
        for (let job of arr) {
            const card  = document.createElement("div");
            
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
            
            status.className = "status-badge"
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
                job.status = "Interview"
            })
            btnGroup.appendChild (inerviewBtn);

            const rejectBtn = document.createElement("button");
            rejectBtn.className = "btn-rejected";
            rejectBtn.innerText = "Rejected";
            rejectBtn.addEventListener ("click", function(){
                job.status = "Rejected";
            })
            btnGroup.appendChild(rejectBtn);
            card.appendChild(btnGroup);

            const deleteBtn = document.createElement("button")
            deleteBtn.className = "delete-btn";
            deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

            card.appendChild(deleteBtn);
            card.classList.add("card")
            cardParent.appendChild(card);

            




        }
    }else {
        cardParent.innerHTML= `<div class=" container mx-auto h-[400px] rounded-[8px] bg-[#ffffff] flex flex-col justify-center items-center">
         <img src="jobs.png" alt="">
         <h2 class="text-[#002C5C] font-semibold text-[24px]">No jobs Available</h2>
        <p class="text-[#64748B]">Check back soon for new job opportunities</p>
    </div>`
        }
} 

renderApp(jobs);