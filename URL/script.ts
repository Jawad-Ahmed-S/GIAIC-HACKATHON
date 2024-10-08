const generateButton = document.getElementById('generate') as HTMLButtonElement;
function generateUserURL(name: string): string {
  const formattedName = name.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  return `https://www.giaic-hackathon-eight.vercel.app/user/${formattedName}`;
}
generateButton.addEventListener('click', () => {
  const data = dataInput();

  // Update resume content
  (document.getElementById('FullName') as HTMLElement).textContent = data.fullName;
  (document.getElementById('Profession') as HTMLElement).textContent = data.profession;
  (document.getElementById('Email') as HTMLElement).textContent = data.email;
  (document.getElementById('Contact') as HTMLElement).textContent = data.contact;
  (document.getElementById('Degree') as HTMLElement).textContent = data.degree;
  (document.getElementById('Institution') as HTMLElement).textContent = data.institution;
  (document.getElementById('PassingYear') as HTMLElement).textContent = data.passingYear;
  (document.getElementById('Organization') as HTMLElement).textContent = data.organization;
  (document.getElementById('Duration') as HTMLElement).textContent = data.duration;
  (document.getElementById('Description') as HTMLElement).textContent = data.description;
  (document.getElementById('skillsection') as HTMLElement).textContent = data.skills;

  // Show content and link generation section
  const contentElement = document.querySelector('.content');
  if (contentElement) {
    contentElement.classList.add('visible');
  }

  const formElement = document.querySelector('form');
  if (formElement) {
    formElement.style.display = 'none';
  }

  const linkSection = (document.querySelector('.LinkGen') as HTMLElement).style.display = 'flex';

  // Generate user URL
  function generateUserURL(name: string): string {
    const formattedName = name.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    return `https://www.giaic-hackathon-eight.vercel.app/user/${formattedName}`;
  }

  const userURL = generateUserURL(data.fullName);

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


// Function to retrieve form data
function dataInput(): {
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