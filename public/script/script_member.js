const members = [
  { name: "ABHIMAAN KUMAR", contactCard: "https://abhimaan-kumar.github.io/contact/"},
  { name: "KRISH KUMAR", contactCard: "https://imkkrish.github.io/Krish.github.io/"},
  { name: "PRIYANSHU VERMA", contactCard: "https://priyanshuv17.github.io/priyanshuverma.github.io/"},
  { name: "ADITYA S. CHANDEL", contactCard: "https://adsingh2004.github.io/ASC.github.io/" },
  { name: "ADITYA SINGH" , contactCard: "https://adisingh2212.github.io/aditya.github.io/"},
  { name: "AKASH KUMAR" , contactCard: "https://akashkzp.github.io/new-skill/"},
  { name: "ANSHUMAN SAMANTA", contactCard: "https://anshuman22coder.github.io/new_new_new/" },
  { name: "BAIBHAV K.CHANDRA" , contactCard: "https://baibhav001.github.io/baibhav_contact_card/"},
  { name: "MD.RIYAZ HAIDER" , contactCard: "https://786reyaz.github.io/reyaz786.github.io/"},
  { name: "MONALISHA ANAND", contactCard: "https://monaanand20.github.io/contact-card/" },
  { name: "OM VISHESH", contactCard: "https://omvishesh.github.io/contact-card/" },
  { name: "SAKET TRIPATHI", contactCard: "https://tripathijii147.github.io/saket.github.io/" },
  { name: "SANDEEP MAHATO", contactCard: "https://sandeepmahato1.github.io/Sandeep.github.io/" },
  { name: "SOUMYA R.NAYAK", contactCard: "https://soumyasrn.github.io/soumya.github.io/" },
  { name: "ADITYA ASHISH" , contactCard: "#"},
  { name: "ADITYA KUMAR", contactCard: "https://aditya24022005.github.io/Aditya_Contact_Card/" },
  { name: "APURBA DAS", contactCard: "https://apurbasbjk30.github.io/apurba.github.io/" },
  { name: "BASIL JOY", contactCard: "https://basiljoy91.github.io/basil.github.io/" },
  { name: "DIWAKAR SINGH", contactCard: "https://diwakarsingh16.github.io/Diwakar.github.io/" },
  { name: "HEMANT PRAKASH", contactCard: "https://hemantprakash2005.github.io/Hemant.github.io/" },
  { name: "KHUSHI KUMARI", contactCard: "https://khushikumari75.github.io/contactcard/" },
  { name: "MD. TARIK ANWAR" , contactCard: "https://tarikanvar786.github.io/Tarik.github.io-/"},
  { name: "NAMRATA DEY", contactCard: "https://namrata2910.github.io/Namrata.github.io/" },
  { name: "NEHA KUMARI", contactCard: "https://nekochan280.github.io/Neko.github.io/" },
  { name: "NISHA KUMARI", contactCard: "https://7h3s74r5.github.io/nishacontactcard/" },
  { name: "PRASHANT DUBEY", contactCard: "https://prashantdubeypng.github.io/Prashant.github.io/" },
  { name: "RAVINANDAN SAMRAT", contactCard: "https://oravisingh.github.io/Ravinandan-Samrat-Singh/" },
  { name: "SHRADHA SINGH", contactCard: "https://shradhasingh22.github.io/shradha/" },
  { name: "SIYA MANDAL", contactCard: "https://siya2910.github.io/siya.github.io/" },
  { name: "VIDIT MISHRA", contactCard: "https://vidit2406.github.io/vidit_Contact_card/" }
];

const alumni = [];

function generateMemberList(members, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Clear existing content

  members.forEach(member => {
    const memberDiv = document.createElement('a'); // Use <a> for the clickable container
    memberDiv.classList.add('member');
    memberDiv.href = member.contactCard; // Set href to the contactCard link
    memberDiv.target = '_blank'; // Open in new tab

    const nameDiv = document.createElement('div');
    nameDiv.textContent = member.name;
    nameDiv.classList.add('member-name');
    memberDiv.appendChild(nameDiv);

    if (member.ccpc_no) {
      const ccpcNoDiv = document.createElement('div');
      ccpcNoDiv.textContent = `${member.ccpc_no}`;
      ccpcNoDiv.classList.add('ccpc-no');
      memberDiv.appendChild(ccpcNoDiv);
    }

    container.appendChild(memberDiv);
  });
}

document.getElementById('membersButton').addEventListener('click', function() {
  generateMemberList(members, 'membersContent');
  document.getElementById('membersContent').style.display = 'grid';
  document.getElementById('alumniContent').style.display = 'none';
  document.querySelector('.default-content').style.display = 'none';
});

document.getElementById('alumniButton').addEventListener('click', function() {
  generateMemberList(alumni, 'alumniContent');
  document.getElementById('membersContent').style.display = 'none';
  document.getElementById('alumniContent').style.display = 'block';
  document.querySelector('.default-content').style.display = 'none';
});

// Initialize the members list on page load
document.addEventListener('DOMContentLoaded', () => {
  generateMemberList(members, 'membersContent');
  document.getElementById('membersContent').style.display = 'grid';
  document.getElementById('alumniContent').style.display = 'none';
});
