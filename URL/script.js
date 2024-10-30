{
    var generateButton = document.getElementById('generate');
    // function generateUserURL(name: string): string {
    //   const formattedName = name.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    //   return `https://www.giaic-hackathon-eight.vercel.app/user/${formattedName}`;
    // }
    generateButton.addEventListener('click', function () {
        var data = ResumedataInput();
        // Update resume content
        document.getElementById('FullName').textContent = userData_1.fullName;
        document.getElementById('Profession').textContent = userData_1.profession;
        document.getElementById('Email').textContent = userData_1.email;
        document.getElementById('Contact').textContent = userData_1.contact;
        document.getElementById('Degree').textContent = userData_1.degree;
        document.getElementById('Institution').textContent = userData_1.institution;
        document.getElementById('PassingYear').textContent = userData_1.passingYear;
        document.getElementById('Organization').textContent = userData_1.organization;
        document.getElementById('Duration').textContent = userData_1.duration;
        document.getElementById('Description').textContent = userData_1.description;
        document.getElementById('skillsection').textContent = userData_1.skills;
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
        // Generate URL
        function generateUserURL(name) {
            var formattedName = name.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
            return "http://www.giaic-hackathon-eight.vercel.app/URL/?user=".concat(encodeURIComponent(formattedName));
        }
        console.log(data.fullName, "Data.fullname");
        var userURL = generateUserURL(data.fullName);
        console.log(userURL);
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
    var input = ResumedataInput();
    var userData_1 = {
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
    console.log(userData_1);
    function ResumedataInput() {
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
