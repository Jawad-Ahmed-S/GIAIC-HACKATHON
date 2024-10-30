{const generateButton = document.getElementById('generate') as HTMLButtonElement;
generateButton.addEventListener('click', () => {
  const data = ResumedataInput();

  // Update resume content
  (document.getElementById('FullName') as HTMLElement).textContent = userData.fullName;
  (document.getElementById('Profession') as HTMLElement).textContent = userData.profession;
  (document.getElementById('Email') as HTMLElement).textContent = userData.email;
  (document.getElementById('Contact') as HTMLElement).textContent = userData.contact;
  (document.getElementById('Degree') as HTMLElement).textContent = userData.degree;
  (document.getElementById('Institution') as HTMLElement).textContent = userData.institution;
  (document.getElementById('PassingYear') as HTMLElement).textContent = userData.passingYear;
  (document.getElementById('Organization') as HTMLElement).textContent = userData.organization;
  (document.getElementById('Duration') as HTMLElement).textContent = userData.duration;
  (document.getElementById('Description') as HTMLElement).textContent = userData.description;
  (document.getElementById('skillsection') as HTMLElement).textContent = userData.skills;

  // Show content and link generation section
const contentElement = document.querySelector('.content');
    const extrabody = document.querySelector('.one-s') as HTMLElement;
    if (contentElement) {
        extrabody.style.height  = '100vh';
        contentElement.classList.add('visible'); 
    }
      populateEduData('#eduDisplay', '.eduEntry');
      populateWorkData('#WorkDisplay', '.workEntry');

  const formElement = document.querySelector('form');
  if (formElement) {
    formElement.style.display = 'none';
  }

  const linkSection = (document.querySelector('.LinkGen') as HTMLElement).style.display = 'flex';

  // Generate URL
  function generateUserURL(name: string): string {
    const formattedName = name.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    return `https://giaic-hackathon-jawads-projects-ce7a490a.vercel.app/?user=${encodeURIComponent(formattedName)}`;
  }


  const userURL = generateUserURL(data.fullName);
  console.log(userURL);
  

  const linkElement = document.getElementById('link1') as HTMLAnchorElement;
  if (linkElement) {
    linkElement.href = userURL;
    linkElement.textContent = userURL;
  }

});
{

    const print = document.getElementById('print') as HTMLButtonElement;
    
    print.addEventListener('click',()=>{
        (document.querySelector(".LinkGen") as HTMLElement ).style.display="none";
        (document.querySelector(".nav") as HTMLElement ).style.display="none";
        window.print();
    })
}
const showLinkButton = document.getElementById('ShowLink') as HTMLButtonElement;

showLinkButton.addEventListener('click', () => {
  const link = document.querySelector('.link') as HTMLElement;
  if (link) {
    link.style.display = 'flex';
  }
});

 const input = ResumedataInput();
const userData = {
    fullName: input.fullName, 
    profession: input.profession,
    email: input.email,
    contact: input.contact,
    degree: input.degree,
    institution: input.institution,
    passingYear: input.passingYear,
    organization: input.organization,
    duration: input.duration,
    description: input.description,
    skills: input.skills
};
console.log(userData);


function ResumedataInput(): {
  fullName: string;
  profession: string;
  email: string;
  contact: string;
  degree: string;
  institution: string;
  passingYear: string;
  organization: string;
  duration: string;
  description: string;
  skills: string;
} {
  const fullNameInput = document.querySelector('input[placeholder="Full Name"]') as HTMLInputElement;
  const professionInput = document.querySelector('input[placeholder="Profession"]') as HTMLInputElement;
  const emailInput = document.querySelector('input[placeholder="Email"]') as HTMLInputElement;
  const contactInput = document.querySelector('input[placeholder="Contact Number"]') as HTMLInputElement;
  const degreeInput = document.querySelector('input[placeholder="Degree"]') as HTMLInputElement;
  const institutionInput = document.querySelector('input[placeholder="Institution"]') as HTMLInputElement;
  const passingYearInput = document.querySelector('input[placeholder="Passing Year"]') as HTMLInputElement;
  const organizationInput = document.querySelector('input[placeholder="Organization"]') as HTMLInputElement;
  const durationInput = document.querySelector('input[placeholder="Duration"]') as HTMLInputElement;
  const descriptionInput = document.querySelector('input[placeholder="Description"]') as HTMLInputElement;
  const skillsInput = document.querySelector('input[placeholder="Skills"]') as HTMLInputElement;
  console.log(fullNameInput.value, "ResumeDataInput");
  return {
    fullName: fullNameInput ? fullNameInput.value : '',
    profession: professionInput ? professionInput.value : '',
    email: emailInput ? emailInput.value : '',
    contact: contactInput ? contactInput.value : '',
    degree: degreeInput ? degreeInput.value : '',
    institution: institutionInput ? institutionInput.value : '',
    passingYear: passingYearInput ? passingYearInput.value : '',
    skills: skillsInput ? skillsInput.value : '',
    organization: organizationInput ? organizationInput.value : '',
    duration: durationInput ? durationInput.value : '',
    description: descriptionInput ? descriptionInput.value : '',
  };
}
}
{
const addEducationBtn = document.getElementById('AddEducation') as HTMLButtonElement;
addEducationBtn.addEventListener('click', () => {
  const eduFields = document.getElementById('eduFields') as HTMLDivElement;
  const newEntry = document.createElement('div');
  newEntry.classList.add('eduEntry');
  newEntry.innerHTML = `
    <input type="text" placeholder="Degree" required>
    <input type="text" placeholder="Institution" required>
    <input type="number" placeholder="Passing Year" required>
  `;
  eduFields.appendChild(newEntry);

});



const addWorkBtn = document.getElementById('AddWork') as HTMLButtonElement;
addWorkBtn.addEventListener('click', () => {
  const workFields = document.getElementById('workFields') as HTMLDivElement;
  const newEntry = document.createElement('div');
  newEntry.classList.add('workEntry');
  newEntry.innerHTML = `
      <input type="text" placeholder="Organization" required>
      <input type="number" placeholder="Duration" required>
      <input type="text" placeholder="Description" required>
  `;
  workFields.appendChild(newEntry);

});
/* ----------------------------------------------------------------- */


function populateWorkData(targetSectionId, sourceEntryClass) {
    const targetSection = document.querySelector(targetSectionId) as HTMLElement;
    const workEntries = document.querySelectorAll(sourceEntryClass) as NodeListOf<HTMLDivElement>;
  if (targetSection) {
        targetSection.innerHTML = ''; 
    }

    workEntries.forEach(entry => {
        const organization = entry.querySelector('input[placeholder="Organization"]') as HTMLInputElement;
        const duration = entry.querySelector('input[placeholder="Duration"]') as HTMLInputElement;
        const description = entry.querySelector('input[placeholder="Description"]') as HTMLInputElement;

        if (targetSection) {
            const newParagraph = document.createElement('p');
            newParagraph.innerHTML = `<b id="Organization">${organization.value}</b> - <i id="Duration">${duration.value}</i><br><span id="Description">${description.value}</span>`;
            targetSection.appendChild(newParagraph);
        }
    });
}


function populateEduData(targetSectionId, sourceEntryClass) {
    const targetSection = document.querySelector(targetSectionId) as HTMLElement;
    const eduEntries = document.querySelectorAll(sourceEntryClass) as NodeListOf<HTMLDivElement>;
  if (targetSection) {
        targetSection.innerHTML = ''; 
    }

    eduEntries.forEach(entry => {
        const Degree = entry.querySelector('input[placeholder="Degree"]') as HTMLInputElement;
        const Institution = entry.querySelector('input[placeholder="Institution"]') as HTMLInputElement;
        const PassingYear = entry.querySelector('input[placeholder="Passing Year"]') as HTMLInputElement;

        if (targetSection) {
            const newParagraph = document.createElement('p');
            newParagraph.innerHTML = `<b id="Degree">${Degree.value}</b> <i id="Institution">${Institution.value}</i> <span id="PassingYear">${PassingYear.value}`;
            targetSection.appendChild(newParagraph);
        }
    });
}
}