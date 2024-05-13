/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "William's Portfolio",
  description:
    "A passionate and hard working person who loves to learn new things and to work on interesting problems. I am an honours student with a record of academic and industry success.",
  og: {
    title: "William Gao Portfolio",
    type: "website",
    url: "https://william-gao1.github.io/",
  },
};

//Home Page
const greeting = {
  title: "William Gao",
  logo_name: "William Gao",
  subTitle:
    "A passionate and hard working person who loves to learn new things and to work on interesting problems. I am an honours student with a record of academic and industry success.",
  githubProfile: "https://github.com/William-Gao1",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/william-gao-459b75171/",
    fontAwesomeIcon: "ri:linkedin-fill", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:william2010.gao@gmail.com",
    fontAwesomeIcon: "mdi:gmail", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Github",
    link: "https://github.com/William-Gao1",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Built responsive website front ends using React-Redux",
        "⚡ Created application backends in Node, and Spring",
        "⚡ Familiar with agile methodologies and workflows",
      ],
      softwareSkills: [
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs-icon",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "skill-icons:expressjs-light",
        },
        {
          skillName: "Java Spring",
          fontAwesomeClassname: "devicon:spring",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experienced working on multiple cloud platforms",
        "⚡ Hosted and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Built pipelines and worked with Docker to automatically deploy and monitor applications",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Oracle",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Cloud Run",
          fontAwesomeClassname: "logos:google-cloud-run",
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developed highly scalable production-ready deep learning models",
        "⚡ Experienced working with Computer Vision in Medical Imaging projects as well as Transformers for document understanding",
        "⚡ Proficient in using distributed computing to work with big data",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "University of Waterloo",
      subtitle: "Computer Science, Financial Management",
      logo_path: "waterloo.png",
      alt_name: "University of Waterloo",
      duration: "2020 - 2025",
      descriptions: [
        "⚡ I study fundamental software engineering concepts such as Data Structures, Algorithms, Operating Systems, AI, etc.",
        "⚡ I have also spent a lot of time taking mathematics: Statistics, Calculus, Linear Algebra, Numerical Computation.",
        "⚡ I was selected for the CFM outstanding academic achievement award for two years in a row. This is awarded to the top 5% of students in my program and carries a monetary value of $2000.",
        "⚡ I love to learn. I have taken a wide range of courses such as Data Analytics, Optimization, Advanced Algorithms, and Game Theory.",
      ],
      website_link: "https://uwaterloo.ca/computing-financial-management/",
    },
  ],
};

const courses = [
  {
    courseName: "CS 466: Advanced Algorithms",
    description:
      "Algorithmic approaches and methods of assessment that reflect a broad spectrum of criteria. Topics include Probabilisic analysis, Graph Compression, Multiplicative weight update, Lavasz Local Lemma, Random Walks, Sublinear time algorithms, Streaming algorithms, Approximation algorithm, Online Algorithms",
    dates: "Fall 2023",
    url: "https://uwflow.com/course/cs466",
  },
  {
    courseName: "CS 456: Computer Networks",
    description:
      "An introduction to network architectures and protocols, placing emphasis on protocols used in the Internet. Specific topics include application layer protocols, network programming, transport protocols, routing, multicast, data link layer issues, multimedia networking, network security, and network management.",
    dates: "Winter 2024",
    url: "https://uwflow.com/course/cs456",
  },
  {
    courseName: "CS 350: Operating Systems",
    description:
      "Fundamentals of operating system function, design, and implementation. Topics include concurrency, synchronization, processes, threads, scheduling, memory management, file systems, device management, and security. Built a basic operating system in C.",
    dates: "Winter 2022",
    url: "https://uwflow.com/course/cs350",
  },
  {
    courseName: "CS 480: Introduction to Machine Learning",
    description:
      "Introduction to modeling and algorithmic techniques for machines to learn concepts from data. Generalization: underfitting, overfitting, cross-validation. Tasks: classification, regression, clustering. Optimization-based learning: loss minimization. regularization. Statistical learning: maximum likelihood, Bayesian learning. Algorithms: nearest neighbour, (generalized) linear regression, mixtures of Gaussians, Gaussian processes, kernel methods, support vector machines, deep learning, sequence learning, ensemble techniques. Large scale learning: distributed learning and stream learning.",
    dates: "Winter 2024",
    url: "https://uwflow.com/course/cs480",
  },
  {
    courseName: "CS 479: Neural Networks",
    description:
      "An introduction to neural network methods, with some discussion of their relevance to neuroscience. Simple neuron models and networks of neurons. Training feedforward networks for classification or regression. Learning using the backpropagation of errors. Unsupervised learning methods. Optimal linear decoding. Recurrent neural networks. Convolutional neural networks. Advanced topics, including adversarial inputs and biologically plausible learning methods.",
    dates: "Winter 2024",
    url: "https://uwflow.com/course/cs479",
  },
  {
    courseName: "STAT 333: Stochastic Processes 1",
    description:
      "Stochastic processes, with an emphasis on regenerative phenomena. Topics include generating functions, conditional probability distributions and conditional expectation, discrete-time Markov chains with a countable state space, limit distributions for ergodic and absorbing chains, applications including the random walk, the gambler's ruin problem, and the Galton-Watson branching process, an introduction to counting processes, connections between the exponential distribution and Poisson process, and non-homogeneous and compound Poisson processes.",
    dates: "Fall 2023",
    url: "https://uwflow.com/course/stat333",
  },
  {
    courseName: "STAT 373: Regression and Forecasting Methods in Finance",
    description:
      "Application of regression and time series models in finance. Topics include multiple regression, algebraic and geometric representation of least squares, inference methods, ANOVA, time series modeling, autoregressive AR(1) models, assessment and prediction, moving average smoothing, seasonal adjustment, non-stationarity and differencing.",
    dates: "Fall 2023",
    url: "https://uwflow.com/course/stat373",
  },
  {
    courseName: "CO 250: Introduction to Optimization",
    description:
      "Broad introduction to optimization. Topics include program formulations, the Simplex Algorithm, duality, geometry, integer programs, non-linear programs and the KKT Conditions",
    dates: "Spring 2023",
    url: "https://uwflow.com/course/co250",
  },
  {
    courseName: "CS 370: Numerical Computation",
    description:
      "Principles of numerical computation as a key aspect of scientific computation in the context of specific applications to image processing, analysis of data, and scientific modeling. Topics include approximation by splines, fast Fourier transforms, solution of linear and nonlinear equations, differential equations, floating point number systems, error, stability",
    dates: "Winter 2022",
    url: "https://uwflow.com/course/cs370",
  },
  {
    courseName: "AFM 423: Machine Learning Approach to Quantitative Investing",
    description:
      "Factor investing techniques applicable to equity investment strategies. Topics include, statistical anomolies, penalized regressions, feature engineering, decision trees, deep learning, validation and parameter tuning, ensemble learning",
    dates: "Winter 2022",
    url: "https://uwflow.com/course/afm423",
  },
  {
    courseName: "CFM 301: Financial Data Analytics",
    description:
      "Financial data analytics in the areas of asset pricing, securities trading, and portfolio management. Used Python to test asset pricing theories, trading algorithms and strategies, back-testing techniques.",
    dates: "Winter 2022",
    url: "https://uwflow.com/course/cfm301",
  },
];

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships and Research",
  description:
    "I have worked with many companies to deliver high-quality solutions to both internal and external clients. I am a hardworking, independent, and low-maintanence intern who also knows when to ask for help. I love to learn new technologies and often build long term relationsips with my colleagues.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Relay Financial",
          company_url: "https://lab.research.sickkids.ca/ipss/silc/",
          logo_path: "relay.jpg",
          duration: "Apr 2023 - Sept 2023",
          location: "Toronto, Canada",
          description:
            "Relay Financial is a fintech company that offers banking services tailored to small and medium-sized businesses. Their platform provides features like business banking accounts, expense management tools, and corporate cards, all with a focus on simplicity and efficiency.",
          points: [
            "Started an initiative to build machine learning models to automate workflows, greatly reducing turnaround time to approve new customers",
            "Fine-tuned a Vision Transformer model to automatically classify documents and dynamically pull relevant information based on specific company policies",
            "Utilized AWS lambdas and Typescript to deploy and build new functionality for risk analysis workflows",
          ],
          referencedPapers: [
            {
              name: "OCR-free Document Understanding Transformer",
              url: "https://arxiv.org/abs/2111.15664",
            },
          ],
          color: "#0879bf",
        },
        {
          title: "Research Student | ML Engineer",
          company: "Stroke Imaging Lab for Children (SickKids)",
          company_url: "https://lab.research.sickkids.ca/ipss/silc/",
          logo_path: "sickkids.jpg",
          duration: "Apr 2023 - Sept 2023",
          location: "Toronto, Canada",
          description:
            "The Stroke Imaging Lab for Children (SILC) serves as the global centre for imaging research across 106 medical institutions in 34 countries by outlining the causes, diagnosis and treatment of paediatric stroke. SILC's vision is to use advanced neuroimaging techniques to better understand the neurobiological processes underlying plasticity and recovery from paediatric stroke.",
          points: [
            "Worked with Slurm scheduler to train Machine Learning models on SickKids HPC Cluster (21,000 Cores, 8 GPU Racks, 14 PiB Tier 1 Storage)",
            "Built and trained 2D Convolutional neural networks to perform skull stripping and stroke segmentation on 3D MRI images with GPU acceleration",
            "Independently upgraded stroke segmentation model to a 3D UNet architecture to improve accuracy",
            "Led an initiative to engineer an image processing pipeline for all pediatric stroke imaging research by collaborating with neurology research scientists. Used trained CNNs and image processing tools like skimage",
            "Proposed a universal patient ID system to tackle patient duplication when they move between healthcare facilities. After gaining support at the managerial level, presented the idea to an international executive committee representing 100+ hospitals across 30+ countries.",
            "Researched and implemented machine learning models such as Support Vector Machines, 3D CNNs, and Multi-Variate Regressions to predict future symptoms of stroke patients from MRI images taken at onset of stroke",
          ],
          referencedPapers: [
            {
              name:
                "Automatic Segmentation of Acute Ischemic Stroke From DWI Using 3-D Fully Convolutional DenseNets",
              url: "https://ieeexplore.ieee.org/abstract/document/8328863",
            },
            {
              name:
                "Automatic post-stroke lesion segmentation on MR images using 3D residual convolutional neural network",
              url:
                "https://www.sciencedirect.com/science/article/pii/S2213158220301133",
            },
            {
              name: "Voxel-based lesion-symptom mapping",
              url: "https://www.nature.com/articles/nn1050",
            },
            {
              name:
                "Corrections for multiple comparisons in voxel-based lesion-symptom mapping",
              url:
                "https://www.sciencedirect.com/science/article/abs/pii/S0028393217303196",
            },
            {
              name:
                "Multiclass Support Vector Machine-Based Lesion Mapping Predicts Functional Outcome in Ischemic Stroke Patients",
              url:
                "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0129569",
            },
          ],
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "PointClickCare",
          company_url: "https://pointclickcare.com/",
          logo_path: "pcc.jpeg",
          duration: "Sept 2022 - Jan 2023",
          location: "Mississauga, Canada",
          description:
            "PointClickCare is the leading cloud-based healthcare tech platform enabling real-time insights at every stage of the patient healthcare journey. More than 27,000 long-term and post-acute care providers, over 3,100 hospitals, 2,200 ambulatory clinics, and every major U.S health plan uses PointClickCare.",
          points: [
            "Used Java Spring and React to develop features in preparation for product release",
            "Pitched and got approval to build a generic React front-end stepper component with Typescript for use across the entire organization",
            "Worked directly with the DevOps team to create a centralized dashboard to view security risks and overall health of services",
          ],
          color: "#9b1578",
        },
        {
          title: "Software Engineer",
          company: "OMERS",
          company_url: "https://www.omers.com/",
          logo_path: "omers.webp",
          duration: "Jan 2022 - Apr 2022",
          location: "Toronto, Canada",
          description:
            "OMERS serves as the guardian of the retirement income of more than 500,000 municipal employees across Ontario. With offices in North America, Europe, Asia, and Australia, OMERS manages $127.4 billion in net assets making it one of the largest defined benefit pension plans in Canada.",
          points: [
            "Used Java Spring to develop multiple microservices for internal pensions processing",
            "Presented work to 50+ developers in sprint demos to show team progress to stakeholders",
            "Worked with the architecture team to integrate a more modern third party email service into the backend tech stack",
            "Led a team of 8 interns to design and build a Slack application that automatically connects co-workers together for coffee chats to boost networking during the COVID pandemic. Presented our design and prototype to upper management at the senior VP level",
          ],
          color: "#fc1f20",
        },
        {
          title: "Software Engineer",
          company: "The Co-operators",
          company_url: "https://www.cooperators.ca/en/",
          logo_path: "co-operators.jpeg",
          duration: "Apr 2020 - Sept 2020",
          location: "Kitchener, Canada",
          description:
            "The Co-operators is a leading Canadian financial services co-operative, offering insurance and welath products, services, and advice. The Co-operators has over $56 billion in assets under management.",
          points: [
            "Worked in an agile team to develop several MERN/PERN full stack web applications for 200+ users each",
            "Conducted demos each month to showcase products to end users",
            "Corresponded with DevOps to diagnose and fix issues in production",
          ],
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Research",
      experiences: [
        {
          title: "Research Assistant | Generative AI Diffusion Models",
          company: "in Professor Justin Wan's Group (University of Waterloo)",
          company_url: "https://cs.uwaterloo.ca/about/people/jwlwan",
          logo_path: "waterloo.png",
          duration: "Sept 2023 - Current",
          location: "Waterloo, Canada",
          description:
            "Conducted research under Professor Justin Wan to optimize Generative AI training and sampling. Despite the widespread popularity of generative AI for its capacity to craft realistic and creative content, the surge in content generation requests has not been met with a corresponding increase in speed. This research project delves into strategies for accelerating the training and sampling procedures of diffusion models by optimizing the computation of differential equations. \n\n **Authored [research paper](https://arxiv.org/abs/2404.06661) and submitted to BMVC conference**",
          points: [
            "Investigated multiple ways to decrease training time and sampling by speeding up differential equation solvers",
            "Tested a time-stepping PDE solver for the Kolmogorov/Fokker-Plank equation",
            "Collaborated with the research team to author and submit a research paper to BMVC, detailing the methodology, results, and implications of the diffusion model study",
            "Skills: Python, PyTorch, Statistics, Differential Equations",
          ],
          referencedPapers: [
            {
              name:
                "Generative Modelling by Estimating Gradients of the Data Distribution",
              url: "https://arxiv.org/abs/1907.05600",
            },
            {
              name:
                "Score-Based Generative Modeling Through Stochastic Differential Equations",
              url: "https://arxiv.org/abs/2011.13456",
            },
            {
              name: "Text-to-image Diffusion Models in Generative AI: A Survey",
              url: "https://arxiv.org/abs/2303.07909",
            },
            {
              name:
                "Diffusion Models: A Comprehensive Survey of Methods and Applications",
              url: "https://arxiv.org/abs/2209.00796",
            },
          ],
          color: "#000000",
        },
        {
          title: "Research Assistant | Modelling and Control Theory",
          company: "Professor Roberto Guglielmi (University of Waterloo)",
          company_url:
            "https://uwaterloo.ca/applied-mathematics/people-profiles/roberto-guglielmi",
          logo_path: "waterloo.png",
          duration: "May 2023 - Current",
          location: "Waterloo, Canada",
          description:
            "Conducted research under the guidance of Professor Roberto Guglielmi, focusing on the dynamics of pandemics involving multiple viruses within school settings. The COVID-19 pandemic has underscored the imperative for improved decision-making tools. This research initiative studies agent-based modeling to analyze the consequences of pandemics in schools, encompassing both their impact and the mental health of students.",
          points: [
            "Analyzed various papers to figure out current models being used to model disease spread",
            "Utilized C++ and Python to build an Agent Based Model to compute the dynamics of the spread of COVID, RSV, and Influenza in schools",
            "Emphasis placed on control measures such as asymptomatic testing and vaccinations",
            "Working with Prof. Dillon Browne (Psychology) to investigate children sense of belonging in the region of Waterloo",
            "Applied a linear LASSO model to survey data to determine features of interest",
            "Skills: Python, C++, Regression Analysis",
          ],
          referencedPapers: [
            {
              name:
                "Model-based projections for COVID-19 outbreak size and student-days lost to closure in Ontario childcare centres and primary schools",
              url: "https://www.nature.com/articles/s41598-021-85302-6",
            },
            {
              name:
                "Estimate of the rate of unreported COVID-19 cases during the first outbreak in Rio de Janeiro",
              url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9220757",
            },
            {
              name:
                "A model for COVID-19 with isolation, quarantine and testing as control measures",
              url:
                "https://www.sciencedirect.com/science/article/pii/S1755436521000025",
            },
          ],
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteership",
      experiences: [
        {
          title: "Software Engineer",
          company: "UW Path",
          company_url: "https://uwpath.com",
          logo_path: "uwpath.png",
          duration: "Apr 2022 - Jan 2023",
          location: "Waterloo, Canada",
          description:
            "UWPath is a degree planning website built for UWaterloo students. Students can plan their courses in UW Path's degree planner, where prerequisites, corequisites, antirequisites and degree fulfillment are automatically verified. Want to take a specific degree with a minor and a specialization? UW Path provides automated software that shows what courses are needed to take for each part of a student's degree.",
          points: [
            "Worked with a team of 8 developers to refactor and maintain a cloud based application with 5000+ peak users",
            "Independently was responsible for migrating cloud infrastructure to GCP Cloud Run for improved cost-savings",
            "Pitched application to the University of Waterloo's Mathematics Endowment Fund to secure $1200/year funding",
          ],
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects showcase my ability to apply my skills to real-world problems. I have experience in developing neural networks for image analysis and classification. I'm also proficient in building and deploying full stack web applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // }
  ],
};

// Contact Page
const contactPageData = {};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  courses,
};
