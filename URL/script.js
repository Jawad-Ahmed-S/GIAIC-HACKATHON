var generateButton = document.getElementById('generate');
function generateUserURL(name) {
    var formattedName = name.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    return "https://www.giaic-hackathon-eight.vercel.app/user/".concat(formattedName);
}
generateButton.addEventListener('click', function () {
    var data = dataInput();
    // Update resume content
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
    // Show content and link generation section
    var contentElement = document.querySelector('.content');
    if (contentElement) {
        contentElement.classList.add('visible');
    }
    var formElement = document.querySelector('form');
    if (formElement) {
        formElement.style.display = 'none';
    }
    var linkSection = document.querySelector('.LinkGen').style.display = 'flex';
    // Generate user URL
    function generateUserURL(name) {
        var formattedName = name.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        return "https://www.giaic-hackathon-eight.vercel.app/user/".concat(formattedName);
    }
    var userURL = generateUserURL(data.fullName);
    var linkElement = document.getElementById('link1');
    if (linkElement) {
        linkElement.href = userURL;
        linkElement.textContent = userURL;
    }
});
{
    var print_1 = document.getElementById('print');
    print_1.addEventListener('click', function () {
        document.querySelector(".LinkGen").style.display = "none";
        document.querySelector(".nav").style.display = "none";
        window.print();
    });
}
var showLinkButton = document.getElementById('ShowLink');
showLinkButton.addEventListener('click', function () {
    var link = document.querySelector('.link');
    if (link) {
        link.style.display = 'flex';
    }
});
// Function to retrieve form data
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
