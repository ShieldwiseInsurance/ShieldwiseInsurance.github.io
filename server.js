const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' folder
app.use(express.static(__dirname + '/public'));

// Home Page
app.get('/', (req, res) => {
  res.render('index');
});

// use this when database is setup
// // Add a route for fetching health insurance description
// app.get('/api/health-insurance-description', async (req, res) => {
//     try {
//       const description = await fetchHealthInsuranceDescriptionFromDatabase(); // Replace with your method to fetch description  
//       res.json({ description });
//     } catch (error) {
//       res.status(500).json({ message: 'Error fetching description' });
//     }
// });
  
// // Add a route for updating health insurance description
// app.post('/api/update-health-insurance-description', async (req, res) => {
//     try {
//       const updatedDescription = req.body.description;
//       await updateHealthInsuranceDescriptionInDatabase(updatedDescription); // Replace with your method to update description
//       res.json({ description: updatedDescription });
//     } catch (error) {
//       res.status(500).json({ message: 'Error updating description' });
//     }
// });

app.get('/api/health-insurance-description', async (req, res) => {
    try {
      const heading = "Health Insurance";
      const description = "Health insurance is a specialised form of insurance. It covers your medical expenses when you're sick or have an accident. You pay a specific amount, known as a premium, to have this insurance coverage. This helps the insurance company manage costs like hospital stays, medical treatments, and even serious illnesses. Additionally, a health plan offers many benefits, including the convenience of cashless hospitalisation and free medical check-ups.";  
      res.json({ heading, description });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching description' });
    }
  });
  
  app.post('/api/update-health-insurance-description', async (req, res) => {
    try {
      const updatedDescription = req.body.description;
      res.json({ description: updatedDescription });
    } catch (error) {
      res.status(500).json({ message: 'Error updating description' });
    }
  });

app.get('/api/what-is-health-insurance-description', async (req, res) => {
    try {
      const heading = "What is Health Insurance?";
      const description = "Health insurance is an agreement between the person who has the policy and the insurance company. In this agreement, the company promises to help with money up to a certain limit. This is called the sum insured. The insurance covers medical costs when you need to go to the hospital for an emergency or planned treatment. It can also save you money on taxes. If you pay for health insurance, you can get tax benefits under Section 80D of the Income Tax Act, 1961.";  
      // This data should come from database
      res.json({ heading, description });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching description' });
    }
  });

app.get('/api/health-insurance-at-glance-table', (req, res) => {
    const heading = "Quick Overview of Health Insurance";
    const healthInsuranceTableData = [
        { category: "Category", specification: "Specifications" },
        { category: "Sum Insured", specification: "₹50,000 to up to ₹6 crore" },
        { category: "Maternity Cover", specification: "Available" },
        { category: "Pre & Post-hospitalization Expenses", specification: "Covered" },
        { category: "OPD Cover", specification: "Available" },
        { category: "ICU Charges", specification: "Covered" },
        { category: "Free Health Check-ups", specification: "Available" },
        { category: "Pre-existing Diseases", specification: "Covered" },
        { category: "Ambulance Cover", specification: "Available" },
        { category: "Day Care Procedures", specification: "Covered" },
        { category: "Tax Benefits", specification: "Up to ₹75,000 per financial year" },
        // Add more data entries as needed
    ];
    // This data should come from database
    res.json({heading, health_table:healthInsuranceTableData});
});

app.get('/api/health-insurance-benefits', (req, res) => {
    const heading = "Advantage of Buying Health Insurance Online";
    const description = "Purchasing a health insurance policy on the internet offers several advantages. Let's take a look at them:";  
    const healthInsuranceBenefits = [
        { title: "Comparing Plans Made Easy", description: "Online platforms like Policybazaar.com allow you to easily compare health insurance plans from different companies. This helps you make a well-informed choice." },
        { title: "Convenience Matters", description: "Buying your policy online is convenient. You don't need to visit an insurance company's branch or schedule a meeting with an agent." },
        { title: "Discounts for Online Purchase", description: "Purchasing online often comes with premium discounts." },
        { title: "Affordable Premiums", description: "Health plans cost less online because insurance companies save on operational expenses." },
        { title: "Less Paperwork", description: "Online policy purchase involves very little to no paperwork." },
        { title: "Available 24x7", description: "You can buy a health insurance policy online anytime, even on holidays." },
        { title: "Digital Payment Options", description: "You can securely pay the premium online using digital payment methods instead of cash." },
        { title: "Instant Policy", description: "Online purchases result in immediate policy issuance, unlike offline methods." },
        { title: "Saves Time", description: "You'll save lots of time, as policies are issued within minutes." },
        // Add more benefits as needed
    ];
    // This data should come from database
    res.json({heading, description, benefits:healthInsuranceBenefits});
});

app.get('/api/health-insurance-reasons', (req, res) => {
    const heading = "Why is it Crucial to Buy Health Insurance in India?";
    const description = "In today's uncertain times, coupled with changing lifestyles, the arrival of a medical emergency can be unpredictable. To guard against such uncertainties, securing yourself with health insurance becomes crucial. Numerous other reasons make this plan a wise investment. Some are detailed below:";  
    const healthInsuranceBenefits = [
        { title: "Escalating Medical Expenses", description: "Healthcare costs in India have significantly risen over time, making quality medical care challenging to access. The increased expenses for medicines, hospital stays, medical tests, and more have collectively driven up medical bills. Given this situation, having a health insurance plan is a logical step to safeguard yourself against such medical crises. Choose an appropriate plan for you and your loved ones based on your healthcare needs." },
        { title: "Changing Lifestyles", description: "Modern lifestyles often expose individuals to heightened health risks. Long work hours, irregular eating patterns, disrupted sleep schedules, and more contribute to an unhealthy way of life. This lifestyle shift has led to a surge in health problems like obesity and asthma. Additionally, mental health concerns have also risen due to this lifestyle. Consequently, buying a health insurance plan in India becomes even more imperative." },
        { title: "Tax Benefits", description: "Health insurance offers not only protection from medical emergencies but also tax advantages. Premium payments for such plans are eligible for tax benefits under the Income Tax Act of 1961. These benefits vary based on different categories. For instance, senior citizens enjoy higher tax benefits. Policyholders can receive a maximum benefit of Rs. 75,000 against their policy." },
        { title: "Network Hospitals", description: "Network hospitals, often referred to as cashless hospitals, provide policyholders with cashless treatment. The count of network hospitals varies across different health insurance companies. Hence, it's vital to check the availability of such hospitals while purchasing a plan. With network hospitals, processing quick and cashless claims becomes smoother." },
        { title: "Coverage for Pre-existing Conditions", description: "Health insurance plans also include coverage for pre-existing diseases after a waiting period. If you require coverage for conditions like diabetes or hypertension from the outset, plans catering to pre-existing conditions are available. It's advisable to consult your insurer regarding coverage for pre-existing diseases in your mediclaim plan." },
        { title: "Pre and Post Hospitalisation Coverage", description: "Many health insurance policies in India extend coverage to both pre and post hospitalization expenses. Once you have an appropriate plan, you can benefit from financial coverage for expenses incurred before and after your hospital stay." },
        { title: "Covid-19", description: "The global pandemic has drastically altered lifestyles, prompting a heightened interest in health insurance. Most plans now encompass coverage for COVID-19, reflecting the pandemic's impact on well-being." },
        { title: "Diverse Health Insurance Options", description: "A variety of health insurance plans are available, including individual plans, plans for senior citizens, family health insurance, and more. With this range of options, you can select a plan that aligns with your specific requirements and budget." },
        { title: "Additional Discounts", description: "Purchasing health insurance can bring various discounts, such as wellness discounts and renewal discounts. These savings opportunities can lead to significant cost reductions once you've secured a health insurance plan." },
        { title: "Peace of Mind", description: "Knowing that you and your loved ones are shielded against medical emergencies brings immense relief. Investing in health insurance enables you to live stress-free and focus on receiving quality treatment." },
    ];
    // This data should come from database
    res.json({heading, description, benefits:healthInsuranceBenefits});
});

app.get('/api/health-insurance-key-benefits', (req, res) => {
    const heading = "Benefits of Buying Health Insurance in India";
    const description = "Health insurance plans provide a range of health-related advantages to the insured, based on the chosen plan. Here are the main benefits of acquiring a health insurance plan in India:";  
    const healthInsuranceBenefits = [
        { title: "Hospitalization Expenses", description: "Coverage for medical expenses incurred during a hospital stay exceeding 24 hours. This includes room charges, doctor's fees, medication costs, and diagnostic tests." },
        { title: "Pre Post Hospitalization Expenses", description: "Cover for medical expenses related to an illness both before hospitalization and after discharge. These expenses are covered up to a set number of days, as specified in the policy." },
        { title: "ICU Charges", description: "The plan also includes the cost of treatment received in an Intensive Care Unit (ICU) during hospitalization." },
        { title: "Ambulance Cost", description: "Cover for ambulance services utilized during a medical emergency to reach the nearest hospital." },
        { title: "Cashless Treatments", description: "All Indian health insurance providers offer cashless treatment at their network hospitals. If admitted to a network hospital, you won't need to arrange funds for hospital bills; they'll be settled by your insurer under cashless claims." },
        { title: "Day Care Procedures", description: "Coverage for expenses related to day care treatments that require less than 24 hours of hospitalization." },
        { title: "Pre-existing Diseases", description: "The best health insurance policies also cover pre-existing diseases once the waiting period is completed. Typically, these diseases are covered after 2 to 4 years of waiting." },
        { title: "AYUSH Treatment", description: "The plan covers expenses for medical treatments within the AYUSH school of medicines, encompassing Ayurveda, Unani, Homeopathy, Siddha, and Yoga." },
        { title: "Medical Check-ups", description: "Many health insurance companies in India offer complimentary preventive health check-ups at regular intervals, depending on the policy terms and conditions." },
        // Add more benefits as needed
    ];
    // This data should come from database
    res.json({heading, description, key_benefits:healthInsuranceBenefits});
});

app.get('/api/best-health-insurance-plans', (req, res) => {
    const heading = "Top Health Insurance Plans in India";
    const description = "We at Shieldwise can help you to buy the best health insurance plan that suits your health requirements. Below is the list of health insurance plans offered by the top insurance companies in India. You can do an online comparison and find the best health plan for yourself.";
    const healthInsurancePlans = [
        {
            name: "Health Insurance Plans",
            sumInsured: "Sum Insured (Rs)",
            networkHospitals: "Network Hospitals",
            benefits: ["Key Benefits"]
        },

        {
            name: "Aditya Birla Activ Assure Diamond Plan",
            sumInsured: "Min – 2 lakh<br>Max – 2 crore",
            networkHospitals: "10500+",
            benefits: [
                "Pre-post hospitalization cover",
                "In-patient hospitalization cover",
                "Annual health check-ups",
                "AYUSH in-patient cover",
                "Domestic/international emergency assistance services"
            ]
        },
        // Add more plans as needed
    ];
    // This data should come from database
    res.json({heading, description, plans_table:healthInsurancePlans});
});

app.get('/api/health-insurance-myths', (req, res) => {
    const heading = "Some Myths about Health Insurance";
    const description = "Before buying a health insurance policy, you must be aware of how it works. Mentioned below are some popular myths that most people believe about health insurance:";  
    const mockFaqData = [
        {
            question: "I am Healthy, and I Don't Need Medical Insurance",
            answer: "Despite taking good care of your health, there are numerous unforeseen circumstances..."
        },
        {
            question: "My Health Insurance will Cover all the Medical Expenses",
            answer: "As per the IRDAI regulations, all health insurance plans come with a set of exclusions/limitations..."
        },
        // ... Add more FAQ objects here
    ];
    // This data should come from database
    res.json({heading, description, myths:mockFaqData});
});

app.get('/api/health-insurance-how-to-calculate', async (req, res) => {
  try {
    const heading = "Health Insurance Calculator";
    const description1 = "To ensure your policy remains active, it's important to pay a regular fixed premium. But have you ever wondered how this premium is determined? Several factors influence health insurance premiums, including your family's medical history, sum insured, cumulative bonus, and your personal medical background.";
    const description2 = "If you're curious about calculating your premium to estimate your policy costs, you can utilize a health insurance premium calculator. This online tool takes the details you provide, such as your desired sum insured and age, to compute the premium amount. You can easily calculate your health insurance premium online at Policybazaar.com. This tool helps you understand the costs associated with your policy and make informed decisions.";  
    // This data should come from database
    res.json({ heading, description1, description2 });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching description' });
  }
});

app.get('/api/factors-affect-health-insurance', async (req, res) => {
  try {
    const heading = "Factors that Affect Your Health Insurance Premium";
    const description = "In today's world, medical costs have surged, and health insurance serves as a crucial shield against these expenses. It provides the much-needed financial security for you and your loved ones in case of unexpected serious illnesses or accidental injuries that could otherwise deplete your savings. Here's how the premium for your insurance is calculated:";
    const healthInsuranceFactors = [
      { title: "Medical History", description: "Your medical history is a significant factor affecting your health insurance premium. Many Indian health insurers require mandatory pre-medical tests (after a certain age) before purchasing a policy. Insurance companies might not always require a full medical screening, but they do consider various aspects related to your health." },
      { title: "Age and Gender", description: "The age of the insured individual is a significant factor in determining the medical insurance premium. Premiums differ according to age, making it advisable to purchase a policy at a younger age when premiums are more affordable. Older individuals are more susceptible to conditions like cardiovascular diseases, cancer, and kidney problems. Consequently, health insurance premiums for senior citizens tend to be higher. Moreover, women generally enjoy lower premium costs for health insurance due to their lower risk of conditions like stroke and heart attack, compared to their male counterparts." },
      { title: "Policy Duration", description: "Opting for a 2-year health insurance plan will result in a higher premium compared to a 1-year plan. Nevertheless, many insurance companies offer discounts on extended medical insurance plans, rewarding long-term commitment." },
      { title: "Type of Health Coverage", description: "The nature of your chosen health insurance policy also impacts the premium cost. Greater coverage results in a higher premium. Utilizing an online health insurance premium calculator facilitates comparing premiums across various plans before finalizing a purchase." },
      { title: "No-Claim Bonus", description: "Accumulating a No-Claim Bonus (NCB) discount is possible if you refrain from making claims in your previous policy term. This cumulative bonus ranges from 5 to 50 percent, based on your claim-free years, significantly influencing premium savings and cost calculations." },
      { title: "Lifestyle Choices", description: "Consistent smoking or drinking habits can lead to increased premium costs. In some instances, insurers might even decline your request for medical insurance coverage due to such habits." },
      // Add more benefits as needed
  ]; 
    // This data should come from database
    res.json({ heading, description, factors:healthInsuranceFactors });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching description' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});