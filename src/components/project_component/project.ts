export const project = [
    {
      title: "Monch",
      company: "HackUTD",
      award: "1st Place in Pinata Platinum Sponsor Category",
      accomplishment:
        "Developed and deployed an AI-powered app that uses photos of your food to recognize ingredients, determine portion sizes, and calculate macro breakdowns.",
      actions: [
        "Designed and deployed a TensorFlow-based neural network leveraging the Food101 dataset to classify food items and identify ingredients, integrating USDA data to accurately predict macro-nutrient distribution.",
        "Developed a front-end user interface enabling users to scan or upload meal photos and analyze progress through goal-oriented graphs.",
      ],
      skills: [ "React","Typescript","Next JS","Tailwind CSS","ShadCN","Node JS","Pinata Cloud","TensorFlow",],
      link: "https://monch.tech",
      github: "https://github.com/jacksonmoody/monch?tab=readme-ov-file",
      paper: null,
      priority: true,
    },
    {
      title: "Climate Agriculture Food Project",
      company: "Harvard Data Science Initiative Hackathon",
      award: null,
      accomplishment:
        "Analyzed USDA/NASS data to identify statistically significant trends between average farmer age and agricultural productivity from 1997 to 2022.",
      actions: [
        "Explored and analyzed USDA/NASS data from the 2022 Agricultural Census, examining the correlation between average farmer age and agricultural productivity, measured by inflation-adjusted 2022 dollar values and raw sales.",
        "Applied linear regressions in Python and visualized findings with choropleth maps, identifying a statistically significant negative trend between aging farmers and productivity across U.S. counties, with the strongest effects in southern regions (p-value < 0.01).",
      ],
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Statsmodels"],
      link: null,
      github: "https://github.com/JZ-17/Climate-Agriculture-Food-Data-Project",
      paper: "/papers/HDSI_Datathon.pdf",
      priority: false,
    },
    {
      title: "Cambridge GHG Predictions",
      company: "Personal Project",
      award: null,
      accomplishment:
        "Developed a random forest algorithm that predicts GHG emissions of buildings in Cambridge, MA with an OOB R-squared of 0.70 and RMSE of 0.373.",
      actions: [
        "Utilized the 2022 Cambridge BEUDO dataset to develop a random forest algorithm that predicts GHG emissions of buildings in Cambridge, MA with an R-squared value of 0.70, RMSE of 0.373, and train R-squared of 0.861.",
        "Used OOB error to determine the optimal number of trees and max depth of the random forest to maximize generalization against unseen data.",
        "Utilized Lasso and Ridge Regressions to determine predictor significance.",
      ],
      skills: ["Scikit-Learn", "Matplotlib", "Pandas", "NumPy"],
      link: null,
      github: "https://github.com/JZ-17/GHG-Emissions-Predictor-Project",
      paper: "/papers/CS109a.pdf",
      priority: false,
    },
    {
      title: "Decoding Bank Profitability and Stability",
      company: "Personal Project",
      award: null,
      accomplishment:
        "Developed fixed-effects regression models to predict bank profitability (Adj. R-squared: 0.987) and stability (Adj. R-squared: 0.110), with interpretations of results.",
      actions: [
        "Processed FFIEC Call Report data by handling mergers, filtering for banks with assets exceeding $1 billion, and identifying target variables for profitability and stability predictions.",
        "Implemented Ridge and Lasso regressions to optimize variable selection and improve model accuracy.",
        "Developed fixed-effects regression models to account for time-specific and bank-specific factors impacting profitability and stability.",
      ],
      skills: ["R", "ggplot2", "dplyr", "tidyverse", "olsrr"],
      link: null,
      github: "https://github.com/JZ-17/Decoding-Bank-Profitability-and-Stability",
      paper: "/papers/Stat_139_Final_Project.pdf",
      priority: false,
    },
    {
      title: "This website :)",
      company: "Personal Project",
      award: null,
      accomplishment: "Created a personal website using Next.js and React.",
      actions: [
        "Used Next.js and React to develop a personal website showcasing my projects, experiences, and contact information.",
      ],
      skills: ["Next JS", "React", "Typescript", "Tailwind CSS", "Framer Motion"],
      link: "https://joshzhang.tech",
      github: "https://github.com/JZ-17/CS109A_Final_Project",
      paper: null,
      priority: false,
    },
    {
      title:
        "Formulating the Optimal Fire Extinguisher Using Low Bass Frequency",
      company: "Virginia State Science and Engineering Fair",
      award: "1st Place in the Environmental Engineering Category",
      accomplishment:
        "Created the world's first applicable sound-based fire extinguisher using low bass frequencies to extinguish class A-D fires in a 5-foot radius, increasing efficiency by 400%.",
      actions: [
        "Tested 108 combinations of the extinguisher by manipulating variables of wave type, aperture size, and base frequency range (20-60 Hz) for maximum distance.",
        "Used the top 12 combinations to test against class A-C fire types to find the best extinguisher configuration.",
      ],
      skills: ["Research", "Electrical Engineering", "Acoustics"],
      link: "https://www.youtube.com/watch?v=E5WvfYGh_sM",
      github: null,
      paper: null,
      priority: false,
    },
  ];
  