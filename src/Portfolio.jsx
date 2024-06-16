import '@fortawesome/fontawesome-free/css/all.min.css';

/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Arjun Kshirsagar",
  title: "Hi all, I'm Arjun Kshirsagar",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Jekyll and some other cool libraries and frameworks."),
  resumeLink: "#"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/arjun-kshirsagar",
  linkedin: "https://www.linkedin.com/in/arjunkshirsagar/",
  gmail: "kshirsagararjun20@gmail.com",
  instagram: "https://www.instagram.com/arjun.kshirsagarr/",
  twitter: "https://www.twitter.com/",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "About me",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Data Analytics Expertise: My experience in data analytics, including Exploratory Data Analysis (EDA) and SQL, enables me to analyze and interpret complex data sets effectively, driving insightful decision-making."),
    emoji("⚡ Full-Stack Developer: I am skilled in both backend and frontend development, with a particular expertise in React, allowing me to build dynamic and responsive web applications."),
    emoji("⚡ Proficient in Rust: With a strong command of Rust, I excel in leveraging this powerful systems programming language known for its safety and performance."),
    emoji("⚡ Strong in Data Structures and Algorithms (DSA): My in-depth knowledge of Data Structures and Algorithms enhances my problem-solving abilities, ensuring efficient and optimized code."),
    emoji("⚡ Continuous Learner: I am currently expanding my skill set by further learning Rust, demonstrating my commitment to personal and professional growth in the ever-evolving tech landscape.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JAVA",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },

    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },

    {
      skillName: "Rust",
      fontAwesomeClassname: "fab fa-rust"
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Java",
      progressPercentage: "95%"
    },
    {
      Stack: "React",
      progressPercentage: "20%"
    }
  ]
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Scaler School of Technology",
      logo: require("./assets/images/SSTLogo.avif"),
      subHeader: "Master of Science in Computer Science",
      duration: "July 2023 - May 2027",
      desc: "Worked on many real hands-on projects.",
      descBullets: [
        "Took part in interesting open-source projects.",
        "Took part in competitive programming."
      ]
    },
    {
      schoolName: "Jawahar Navodaya Vidyalaya",
      logo: require("./assets/images/JNVLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2018 - April 2020",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Secured 94.8% in Class 10", 
                    "Represented school in various sports competitions"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "arjun-kshirsagar", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some big projects you have worked on

const bigProjects = {
  title: "Hobby Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/DataAnalytics.png"),
      projectName: "Aerofit Case Study",
      projectDesc: "Analyzing Aerofit's customer data using descriptive statistics and probability to drive business insights and decision-making.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/arjun-kshirsagar/Aerofit-Case-Study"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Editor.png"),
      projectName: "Command Line Image Editor",
      projectDesc: "A versatile tool for editing and manipulating images directly from the command line interface.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/arjun-kshirsagar/Image-Editor"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Walls",
      subtitle: "Beautiful, free photos Gifted by the world’s most generous community of photographers ",
      image: require("./assets/images/walls.webp"),
      footerLink: [
        { name: "Available on Play Store", url: "" },
      ]
    },
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "",
      title: "My Blog 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam quos explicabo consequatur odio. Aut delectus alias saepe exercitationem culpa officia necessitatibus molestiae a, accusamus magnam quas ipsum debitis numquam"
    },
    {
      url: "",
      title: "My Blog 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam quos explicabo consequatur odio. Aut delectus alias saepe exercitationem culpa officia necessitatibus molestiae a, accusamus magnam quas ipsum debitis numquam"
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9876543210",
  email_address: "kshirsagararjun20@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { 
  greeting, 
  socialMediaLinks, 
  skillsSection, 
  educationInfo,
  techStack, 
  openSource, 
  bigProjects, 
  achievementSection, 
  blogSection, 
  contactInfo , 
  twitterDetails
};
