const fs = require("fs")

function generateMarkdown(data) {
  console.log(data)
  return `
###
${data.title} \n

**

#
${data.description}\n

**

#
${data.Content}\n

**

#
${data.project}\n
**

## Question
*Github email address: ${data.email}\n
**

`;
}






module.exports = generateMarkdown;


