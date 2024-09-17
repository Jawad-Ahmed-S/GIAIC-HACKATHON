var _a;
function dataInput() {
    var fullNameInput = document.querySelector('input[placeholder="Full Name"]');
    var professionInput = document.querySelector('input[placeholder="Profession"]');
    var emailInput = document.querySelector('input[placeholder="Email"]');
    var contactInput = document.querySelector('input[placeholder="Contact Number"]');
    var degreeInput = document.querySelector('input[placeholder="Degree"]');
    var institutionInput = document.querySelector('input[placeholder="Institution"]');
    var passingYearInput = document.querySelector('input[placeholder="Passing Year"]');
    var organizationInput = document.querySelector('input[placeholder="Organization"]');
    var durationInput = document.querySelector('input[placeholder="Duration"]');
    var descriptionInput = document.querySelector('input[placeholder="Description"]');
    var skillsInput = document.querySelector('input[placeholder="Skills"]');
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
(_a = document.getElementById('generate')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
    var data = dataInput();
    e.preventDefault();
    document.getElementById('FullName').textContent = data.fullName;
    document.getElementById('Profession').textContent = data.profession;
    document.getElementById('Email').textContent = data.email;
    document.getElementById('Contact').textContent = data.contact;
    document.getElementById('Degree').textContent = data.degree;
    document.getElementById('Institution').textContent = data.institution;
    document.getElementById('PassingYear').textContent = data.passingYear;
    document.getElementById('Organization').textContent = data.organization;
    document.getElementById('Duration').textContent = data.duration;
    document.getElementById('Description').textContent = data.description;
    document.getElementById('skillsection').textContent = data.skills;
    var contentElement = document.querySelector('.content');
    if (contentElement) {
        contentElement.classList.add('visible');
    }
});
