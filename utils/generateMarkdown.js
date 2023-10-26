// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = `![badge](https://img.shields.io/badge/license-${license}-blue)<br/>`;
  if (license ==="None") {
    licenseBadge ="";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    None:"",
    Apache:"https://opensource.org/licenses/Apache-2.0",
    BSD2:"https://opensource.org/licenses/BSD-2-Clause",
    BSD3:"https://opensource.org/licenses/BSD-3-Clause",
    CDDL:"https://opensource.org/licenses/CDDL-1.0",
    EPL:"https://opensource.org/licenses/EPL-2.0",
    GPL:"https://opensource.org/licenses/gpl-license",
    LGPL:"https://opensource.org/licenses/lgpl-license",
    MIT:"https://opensource.org/licenses/MIT",
    MPL:"https://opensource.org/licenses/MPL-2.0",
  };
  return licenseLink[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = `![badge](https://img.shields.io/badge/license-${license}-blue) Application License: ${license}`;
  if (license === "None") {
    licenseSection = "";
  }
  return licenseSection;
}

// Handle blank entry
function installation(installation){
  if(installation === undefined){
    return "No installation instructions needed."
  }
  else{
  return installation;
  }
}

function usage(usage){
  if(usage === undefined){
    return "No usage instructions needed."
  }
  else{
  return usage;
  }
}

function contribution(contribution){
  if(contribution === undefined){
    return "No contributions to specify."
  }
  else{
  return contribution;
  }
}

function testing(testing){
  if(testing === undefined){
    return "No testing available."
  }
  else{
  return testing;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  const installSection = installation(data.installation);
  const usageSection = usage(data.instructions);
  const contributeSection = contribution(data.contribution);
  const testSection = testing(data.testing);

  return `# ${data.title}
  
  ${licenseBadge}

  ## Table of Contents
  --------------------
  - [Description](#description)
  - [Installations](#installation)
  - [Usage](#usage)
  - [License](#licenses)
  - [Contributing](#contribution)
  - [Tests](#testing)
  - [Questions](#contact)

  ## Description
  --------------
  ${data.description}

  ## Installation
  ---------------
  ${installSection}

  ## Usage
  --------
  ${usageSection}

  (Optional: Video provided to demostrate how to run the program.)

  ## Contribution
  ---------------
  ${contributeSection}

  ## Testing
  ----------
  ${testSection}

  ## Licenses
  -----------
  ${licenseSection}

  ${licenseLink}

  ## Contact
  -----------
  ${data.questions}
  
  GitHub: [${data.username}](https://github.com/${data.username})

  Email: [Gmail](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
