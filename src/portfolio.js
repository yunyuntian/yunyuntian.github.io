/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yuren Dong",
  title: "Hi all, I'm Yuren",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building applications with Python/ PostgreSQL/ JavaScript/ FastAPI and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1XWQdcjFi4uMHZmKKmq_ZtyJbeG4QwMeF/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yunyuntian",
  linkedin: "https://www.linkedin.com/in/yuren-dong/",
  gmail: "yd2620@columbia.edu",
  
/*   gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta" */
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ENGINEER WHO ALWAYS WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop recommendation system and distributed systems to solve real life problems"
    ),
    emoji("⚡ Learn fast, always willing to explore and practice new knowledge"),
    emoji(
      "⚡ Experience in Research, Engineering and Machine Learning brought me different insights on solving technical problems"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
	{
      skillName: "spark",
      fontAwesomeClassname: "fas fa-cloud"
    },
	
	{
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
  {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
	{
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
	{
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
	{
      skillName: "gcp",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
	{
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
	{
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
	{
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Columbia University",
      logo: require("./assets/images/columbiaLogo.png"),
      subHeader: "Master of Science in Data Science",
      duration: "September 2021 - December 2022",
      desc: "GPA: 3.92"
    },
    {
      schoolName: "University of Califonia San Diego",
      logo: require("./assets/images/ucsdLogo.png"),
      subHeader: "Bachelor of Science in Bioengineering: Bioinformatics\nMinor in Mathemetics",
      duration: "September 2017 - June 2021",
      desc: "GPA: 3.73"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Database and Computer System",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst Intern",
      company: "Cybercube",
      companylogo: require("./assets/images/cybercubeLogo.png"),
      date: "May 2022 – Aug 2022",
      descBullets: [
        "Developed pipeline to monitor port scanner of company infrastructure, collected metadata through Python from 2K+ AWS S3 buckets, processed data with PostgreSQL database, and designed FastAPI user interface for access.",
        "Containerized and pushed scripts to ECR using Docker and created cron jobs on ECS to support monitoring.",
        "Collaborated with team members to redesign middleware messaging and set up fanout with AWS SNS and SQS.",
        "Reported essential metrics for port scan and infrastructure modifications to evaluate cybersecurity vulnerabilities."
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Budweiser APAC",
      companylogo: require("./assets/images/budweiserLogo.png"),
      date: "July 2021 – Aug 2021",
      descBullets: [
	  "Developed a distributed system pipeline using Spark to validate search queries by business agents and recommend corresponding physical retail stores, to be deployed to optimize daily workflows for all agents of the company across China",
	  "Preprocessed 20K+ retail store information using PySpark and Spark SQL, optimized the script performance by 40 folds",
	  "Extracted and engineered features through Natural Language Processing and regular expression to generate similarity scores",
	  "Built Logistic Regressor and Random Forest Classifier for the recommendation, recursively trained a labeling model starting with 80 search queries to label 5K+ pairings, reached AUROC of 95%, precision of 82%, and recall of 73% on test data"
	  ]
    },
    {
      role: "Computer Science Researcher",
      company: "UCSD School of Medicine",
      companylogo: require("./assets/images/ucsdLogo.png"),
      date: "Jun 2020 – Aug 2021",
      descBullets: [  
        "Led 3 students to build Regression models with Python and R to identify short tandem repeats (STRs) impact with gene splicing events, targeted 2K+ highly confident associations important to rare diseases studies.",
        "Engineered gene splicing features from 230K+ locations and 18K+ samples and associated splicing metrics with STRs to identify 22K+ statistically significant splice-STR pairs out of billions of genomic data entries.",
        "Optimized the pipeline workflow through splitting datasets to 1K+ subsets and parallelized the tasks using array jobs on High Performance Computing clusters, improved the total performance by 1,200 folds."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I WORKED ON DURING FREE TIME OR COURSES",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I'm looking for Software Engineering Fulltime Positions",
  number: "+1-8182079178",
  email_address: "yd2620@columbia.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
