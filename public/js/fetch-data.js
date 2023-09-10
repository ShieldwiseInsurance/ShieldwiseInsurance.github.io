fetch('/api/health-insurance-description')
  .then(response => response.json())
  .then(data => {
    const headingElement = document.getElementById('what-is-health-insurance');
    headingElement.innerHTML = data.heading;
    const descriptionElement = document.getElementById('health-insurance-description');
    descriptionElement.innerHTML = data.description;
  })
  .catch(error => console.error('Error fetching description:', error));

fetch('/api/what-is-health-insurance-description')
  .then(response => response.json())
  .then(data => {
    const descriptionHeading = document.getElementById('what-is-health-insurance-heading');
    descriptionHeading.innerHTML = data.heading;
    const descriptionElement = document.getElementById('what-is-health-insurance-description');
    descriptionElement.innerHTML = data.description;
  })
  .catch(error => console.error('Error fetching description:', error));

fetch('/api/health-insurance-at-glance-table')
  .then(response => response.json())
  .then(data => {
      const descriptionHeading = document.getElementById('health-insurance-at-glance-heading');
      descriptionHeading.innerHTML = data.heading;
      const tableBody = document.getElementById('health-insurance-at-glance-table-body');
      data.health_table.forEach(entry => {
          const row = document.createElement('tr');
          const categoryCell = document.createElement('td');
          categoryCell.textContent = entry.category;
          const specificationCell = document.createElement('td');
          specificationCell.textContent = entry.specification;
          row.appendChild(categoryCell);
          row.appendChild(specificationCell);
          tableBody.appendChild(row);
      });
  })
  .catch(error => console.error('Error fetching table data:', error));

fetch('/api/health-insurance-benefits')
  .then(response => response.json())
  .then(data => {
      const descriptionHeading = document.getElementById('health-insurance-benefits-heading');
      descriptionHeading.innerHTML = data.heading;
      const descriptionElement = document.getElementById('health-insurance-benefits-description');
      descriptionElement.innerHTML = data.description;
      const benefitsList = document.getElementById('health-insurance-benefits-list');
      data.benefits.forEach(benefit => {
          const listItem = document.createElement('li');
          const title = document.createElement('b');
          title.textContent = benefit.title + " – ";
          listItem.appendChild(title);
          listItem.appendChild(document.createTextNode(benefit.description));
          benefitsList.appendChild(listItem);
      });
  })
  .catch(error => console.error('Error fetching benefits data:', error));

fetch('/api/health-insurance-reasons')
  .then(response => response.json())
  .then(data => {
      const descriptionHeading = document.getElementById('why-health-insurance');
      descriptionHeading.innerHTML = data.heading;
      const descriptionElement = document.getElementById('health-insurance-reasons-description');
      descriptionElement.innerHTML = data.description;
      const benefitsList = document.getElementById('health-insurance-reasons-list');
      data.benefits.forEach(benefit => {
          const listItem = document.createElement('li');
          const title = document.createElement('b');
          title.textContent = benefit.title + " – ";
          listItem.appendChild(title);
          listItem.appendChild(document.createTextNode(benefit.description));
          benefitsList.appendChild(listItem);
      });
  })
  .catch(error => console.error('Error fetching benefits data:', error));

fetch('/api/health-insurance-key-benefits')
  .then(response => response.json())
  .then(data => {
      const headingElement = document.getElementById('health-insurance-key-benefits-heading');
      headingElement.innerHTML = data.heading;
      const descriptionElement = document.getElementById('health-insurance-key-benefits-description');
      descriptionElement.innerHTML = data.description;
      const benefitsList = document.getElementById('health-insurance-key-list');
      data.key_benefits.forEach(benefit => {
          const listItem = document.createElement('li');
          const title = document.createElement('b');
          title.textContent = benefit.title + " – ";
          listItem.appendChild(title);
          listItem.appendChild(document.createTextNode(benefit.description));
          benefitsList.appendChild(listItem);
      });
  })
  .catch(error => console.error('Error fetching benefits data:', error));

fetch('/api/best-health-insurance-plans')
  .then(response => response.json())
  .then(data => {
      const headingElement = document.getElementById('best-health-insurance-plans-heading');
      headingElement.innerHTML = data.heading;
      const descriptionElement = document.getElementById('best-health-insurance-plans-description');
      descriptionElement.innerHTML = data.description;

      const tableBody = document.getElementById('health-insurance-best-plans-table');

      data.plans_table.forEach(plan => {
          const row = document.createElement('tr');

          const nameCell = document.createElement('td');
          nameCell.textContent = plan.name;
          row.appendChild(nameCell);

          const sumInsuredCell = document.createElement('td');
          sumInsuredCell.innerHTML = plan.sumInsured;
          row.appendChild(sumInsuredCell);

          const networkHospitalsCell = document.createElement('td');
          networkHospitalsCell.textContent = plan.networkHospitals;
          row.appendChild(networkHospitalsCell);

          const benefitsCell = document.createElement('td');
          const benefitsList = document.createElement('ul');
          plan.benefits.forEach(benefit => {
              const listItem = document.createElement('li');
              listItem.textContent = benefit;
              benefitsList.appendChild(listItem);
          });
          benefitsCell.appendChild(benefitsList);
          row.appendChild(benefitsCell);

          tableBody.appendChild(row);
        });
  })
  .catch(error => console.error('Error fetching benefits data:', error));

// fix this function to haave the drop-down working
document.addEventListener('DOMContentLoaded', function() {  
  fetch('/api/health-insurance-myths')
  .then(response => response.json())
  .then(data => {
    const headingElement = document.getElementById('myths-about-health-insurance-heading');
    headingElement.innerHTML = data.heading;
    const descriptionElement = document.getElementById('myths-about-health-insurance-description');
    descriptionElement.innerHTML = data.description;

    const faqList = document.getElementById('faqList');
        
    data.myths.forEach(faq => {
      const li = document.createElement('li');
  
      const h3 = document.createElement('h3');
      const a = document.createElement('a');
      a.setAttribute('data-flag', 'down'); // Use data-flag attribute
      a.textContent = faq.question;
      a.addEventListener('click', toggleAnswer); // Add click event listener
      h3.appendChild(a);
      li.appendChild(h3);
  
      const div = document.createElement('div');
      div.style.display = 'none'; // Hide answer div initially
      const p = document.createElement('p');
      p.textContent = faq.answer;
      div.appendChild(p);
      li.appendChild(div);
  
      faqList.appendChild(li);
    });
  })
  .catch(error => console.error('Error fetching benefits data:', error));

});

function toggleAnswer(event) {
  const answerDiv = event.target.nextElementSibling;
  const flag = event.target.getAttribute('data-flag'); // Get the data-flag attribute value
  if (flag === 'down') {
      answerDiv.style.display = 'block';
      event.target.setAttribute('data-flag', 'up'); // Update the data-flag attribute value
  } else {
      answerDiv.style.display = 'none';
      event.target.setAttribute('data-flag', 'down'); // Update the data-flag attribute value
  }
}

fetch('/api/health-insurance-how-to-calculate')
  .then(response => response.json())
  .then(data => {
    const descriptionHeading = document.getElementById('health-insurance-how-to-calculate-heading');
    descriptionHeading.innerHTML = data.heading;
    const descriptionElement1 = document.getElementById('health-insurance-how-to-calculate-description1');
    descriptionElement1.innerHTML = data.description1;
    const descriptionElement2 = document.getElementById('health-insurance-how-to-calculate-description2');
    descriptionElement2.innerHTML = data.description2;
  })
  .catch(error => console.error('Error fetching description:', error));

fetch('/api/factors-affect-health-insurance')
  .then(response => response.json())
  .then(data => {
    const descriptionHeading = document.getElementById('factors-that-affects-health-insurance-heading');
    descriptionHeading.innerHTML = data.heading;
    const descriptionElement = document.getElementById('factors-that-affects-health-insurance-description');
    descriptionElement.innerHTML = data.description;
    const factorsList = document.getElementById('health-insurance-factors-list');
      data.factors.forEach(benefit => {
          const listItem = document.createElement('li');
          const title = document.createElement('b');
          title.textContent = benefit.title + " – ";
          listItem.appendChild(title);
          listItem.appendChild(document.createTextNode(benefit.description));
          factorsList.appendChild(listItem);
      });
  })
  .catch(error => console.error('Error fetching description:', error));  