export const project = [
    {
      title: "Monch",
      company: "HackUTD 2025",
      award: "1st Place in Pinata Platinum Sponsor Category",
      accomplishment:
        "Deployed an AI-powered app that uses photos of your food to recognize ingredients, determine portion sizes, and calculate macro breakdowns",
      actions: [
        "Designed and deployed a TensorFlow-based neural network leveraging the Food101 dataset to classify food items and identify ingredients, integrating USDA data to accurately predict macro-nutrient distribution",
        "Developed a front-end user interface enabling users to scan or upload meal photos and analyze progress through goal-oriented graphs",
      ],
      skills: ["Python","TensorFlow", "React","Typescript","Next JS","Tailwind CSS","ShadCN","Node JS","Pinata Cloud",],
      link: "https://monch.tech",
      github: "https://github.com/jacksonmoody/monch?tab=readme-ov-file",
      paper: null,
    },
    {
      title: "Mass. Food Network",
      company: "Hacking Injustice 2025",
      award: "Grand 1st Place Prize Winner",
      accomplishment:
        "Developed an app that allows users to upload grocery lists, parses through vender input, and optimizes affordability through balanced cost-distance, per-item pricing, and proximity-focused matching",
      actions: [
        "Engineered an algorithm leveraging OpenAI Vision API, Regex, OpenAI API, and Google Maps API to parse uploaded grocery list images and connect users with local vendors, optimizing affordability through balanced cost-distance, per-item pricing, and proximity-focused matching",
        "Constructed a Supabase database and developed an ergonomic front-end interface for local vendors to upload their business information and enable users to submit grocery lists that dynamically retrieve relevant items",
      ],
      skills: ["Python","OpenAI Vision API", "Regex", "OpenAI API","Google Maps API", "Supabase","React","Javascript","Next JS","Tailwind CSS","ShadCN","Node JS","Supabase",],
      link: null,
      github: "https://github.com/chrisli1241/hacking-injustice",
      paper: null,
    },
    {
      title: "Caption Capturer",
      company: "Personal Project",
      accomplishment:
        "Published a multi-language Chrome extension leveraging the Web Speech API and virtual audio mixers to provide real-time, accurate speech-to-text captions, complete with a dynamic overlay and timeout-based removal for seamless user experience",
      actions: [
        "Utilized the Chrome Extension APIs to implement dynamic content script injection, manage inter-component communication, and ensure compatibility with user-selected tabs and websites",
        "Implemented multi-language selection functionality to provide seamless support for various languages",
        "Designed a timeout-based algorithm to dynamically manage and remove caption overlays after periods of inactivity, ensuring a clean and non-intrusive user experience",
        "Created an ergonomic front-end interface enabling users to toggle captions on or off, select their preferred language, and receive notifications if the website's security measures restrict extension functionality",
      ],
      skills: ["Javascript", "WebKitSpeechRecognition API", "Chrome Extensions API", "HTML", "CSS", "Audio Manipulation"],
      link: "https://chromewebstore.google.com/detail/caption-capturer/fmnjkgbnemdihoibnkojnbfbbmbacfkf?authuser=1&hl=en",
      github: "https://github.com/JZ-17/Caption-Capturer",
      paper: null,
    },
    {
      title: "Arbitraider",
      company: "Hacklytics 2025",
      award: null,
      accomplishment:
        "Released an automated arbitrage detection system and interface that scrapes real-time betting data, applies sentiment analysis for market similarity, and ensures confidence in profitable arbitrage trades",
      actions: [
        "Utilized AWS SageMaker and S3 to deploy an algorithm that scraped real-time betting market data from Kalshi and Gamma APIs and used the OpenAI API to quantify market similarity and ensure successful arbitrage transactions",
        "Designed an intuitive interface to visualize market trends in real-time and implemented live query inference using the Grok API for dynamic insights",
      ],
      skills: ["Python", "Pandas", "Kalshi API", "Polymarket Gamma API", "OpenAI API", "Grok API", "Javascript", "Next JS","Tailwind CSS", "React", "ShadCN", "NodeJS", "Amazon S3 Storage", "Amazon SageMaker",],
      link: "http://arbitraider.tech/",
      github: "https://github.com/PerdoGarcia/hacklytics",
      paper: null,
    },
    {
      title: "Climate Agriculture Food Project",
      company: "Harvard Data Science Initiative Hackathon 2024",
      award: null,
      accomplishment:
        "Analyzed USDA/NASS data to identify statistically significant trends between average farmer age and agricultural productivity from 1997 to 2022",
      actions: [
        "Explored and analyzed USDA/NASS data from the 2022 Agricultural Census, examining the correlation between average farmer age and agricultural productivity, measured by inflation-adjusted 2022 dollar values and raw sales",
        "Applied linear regressions in Python and visualized findings with choropleth maps, identifying a statistically significant negative trend between aging farmers and productivity across U.S. counties, with the strongest effects in southern regions (p-value < 0.01)",
      ],
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Statsmodels"],
      link: null,
      github: "https://github.com/JZ-17/Climate-Agriculture-Food-Data-Project",
      paper: "/papers/HDSI_Datathon.pdf",
    },
    {
      title: "Datamatch",
      company: "Harvard Computer Society",
      award: null,
      accomplishment:
        "Utilized OpenAI's Assistants API to implement Cupid, a new interactive chatbot with a custom-made front-end interface and redesigned the Datamatch website's home page layout—a matchmaking platform connecting over 20K college students in their search for love on Valentine's Day",
      actions: [
        "Integrated OpenAI's Assistant API to develop Cupid, an interactive chatbot that provides snarky love advice",
        "Rigorously stress-tested Cupid and the website's security to ensure maximum user satisfaction and uphold the highest standards of user privacy",
        "Designed a front-end interface for Cupid filled with custom pixel-art style graphics",
        "Helped redesign the front-end interface for Datamatch's homepage",
      ],
      skills: ["Python", "Javascript", "React", "Firebase", "Redux", "OpenAI Assistants API"],
      link: 'datamatch.me',
      github: null,
      paper: null,
    },
    {
      title: "Cambridge GHG Predictions",
      company: "Personal Project",
      award: null,
      accomplishment:
        "Developed a random forest algorithm that predicts GHG emissions of buildings in Cambridge, MA with an OOB R-Squared of 0.70 and RMSE of 0.373",
      actions: [
        "Utilized the 2022 Cambridge BEUDO dataset to develop a random forest algorithm that predicts GHG emissions of buildings in Cambridge, MA with an OOB R-Squared value of 0.70, RMSE of 0.373, and Train R-Squared of 0.861",
        "Used OOB error to determine the optimal number of trees and max depth of the random forest to maximize generalization against unseen data",
        "Utilized Lasso and Ridge Regressions to determine predictor significance",
      ],
      skills: ["Python","Scikit-Learn","Seaborn", "Matplotlib", "Pandas", "NumPy"],
      link: null,
      github: "https://github.com/JZ-17/GHG-Emissions-Predictor-Project",
      paper: "/papers/CS109a.pdf",
    },
    {
      title: "Decoding Bank Profitability and Stability",
      company: "Personal Project",
      award: null,
      accomplishment:
        "Developed fixed-effects regression models to predict bank profitability (Adj. R-Squared: 0.987) and stability (Adj. R-Squared: 0.110), with interpretations of results",
      actions: [
        "Processed FFIEC Call Report data by handling mergers, filtering for banks with assets exceeding $1 billion, and identifying target variables for profitability and stability predictions",
        "Implemented Ridge and Lasso regressions to optimize variable selection and improve model accuracy",
        "Developed fixed-effects regression models to account for time-specific and bank-specific factors impacting profitability and stability",
      ],
      skills: ["R", "ggplot2", "dplyr", "tidyverse", "olsrr"],
      link: null,
      github: "https://github.com/JZ-17/Decoding-Bank-Profitability-and-Stability",
      paper: "/papers/Stat_139_Final_Project.pdf",
    },
    {
      title: "This Website :)",
      company: "Personal Project",
      award: null,
      accomplishment: "Created a personal website using Next.js and React to showcase my experiences, projects, hobbies, and contact information in a complete manner",
      actions: [
        "Used Next.js and React to develop a personal website showcasing my experiences, projects, hobbies, and contact information.",
        "Implemented Tailwind CSS for styling and mobile compatibility",
        "Utilized Framer Motion for animations and transitions",
      ],
      skills: ["Next JS", "React", "Typescript", "Javascript", "Tailwind CSS", "Framer Motion"],
      link: "https://joshzhang.tech",
      github: "https://github.com/JZ-17/CS109A_Final_Project",
      paper: null,
    },
    {
      title: "Ramen Rampage",
      company: "Personal Project",
      award: null,
      accomplishment: "Created a incremental-style game utilizing Swift and Xcode and custom-made graphics",
      actions: [
        "Utilized Swift and Xcode to develop an incremental-style game where players click to make ramen and upgrade their ramen shop in hopes of becoming the fastest Ramen producer in the world :)",
        "Created custom pixel art and animations for the game",
      ],
      skills: ["Swift", "Xcode"],
      link: null,
      github: "https://github.com/JZ-17/Ramen-Rampage",
      paper: null,
    },
    {
      title: "Formulating the Optimal Fire Extinguisher Using Low Bass Frequency",
      company: "Virginia State Science and Engineering Fair",
      award: "1st Place in the Environmental Engineering Category",
      accomplishment:
        "Created the world's first applicable sound-based fire extinguisher using low bass frequencies to extinguish class A-D fires in a 5-foot radius, increasing efficiency by 400%",
      actions: [
        "Tested 108 combinations of the extinguisher by manipulating variables of wave type, aperture size, and base frequency range (20-60 Hz) for maximum distance",
        "Used the top 12 combinations to test against class A-C fire types to find the best extinguisher configuration",
      ],
      skills: ["Research", "Electrical Engineering", "Acoustics"],
      link: "https://www.youtube.com/watch?v=E5WvfYGh_sM",
      github: null,
      paper: null,
    },
  ];
  