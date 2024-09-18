function dataInput() {
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

document.getElementById('generate')?.addEventListener('click', (e) => {
    const data = dataInput();
    e.preventDefault();
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

    const contentElement = document.querySelector('.content');
    if (contentElement) {
        contentElement.classList.add('visible');
        
    }
    const formElement = document.querySelector('form');
    if (formElement) {
        formElement.style.display="none";    
    }
      const linkSection = document.querySelector('.LinkGen') as HTMLElement;
    if (linkSection) {
       linkSection.style.display="flex";    
    }
});
{

    const ShowLink= document.querySelector("#ShowLink")
  
   ShowLink?.addEventListener('click',()=>{

   })

}