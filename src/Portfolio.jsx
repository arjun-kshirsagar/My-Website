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
  twitter: "https://www.twitter.com/naveenjujaray",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
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

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "arjun-kshirsagar", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
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
export { greeting, socialMediaLinks, skillsSection, techStack, openSource, achievementSection, blogSection, contactInfo , twitterDetails};