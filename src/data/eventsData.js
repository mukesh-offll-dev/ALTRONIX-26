import ironman from './../assets/ironman_standing.png'
import ironman2 from './../assets/a_ironman.png'

import spiderman from './../assets/spiderman_2.png'
import spiderman2 from './../assets/spiderman_new.png'

import captain from './../assets/captain_1.png'
import captain2 from './../assets/a_captain.png'

import vision from './../assets/vision_2.png'
import vision2 from './../assets/a_vision.png'


import loki from './../assets/loki.png'
import loki2 from './../assets/loki2.png'

import strange from './../assets/a_strange.png'
import strange2 from './../assets/strange.png'


import thanos from './../assets/a_thanos.png'
import thanos2 from './../assets/thanos.png'


import thor from './../assets/thor_2.webp'
import thor2 from './../assets/a_thor.png'

export const eventsData = {

    // =========================
    // TECHNICAL EVENTS
    // =========================

    'STARK EXPO': {
        img1: ironman,
        img2: ironman2,
        effect: "", flip1: true, flip2: false,
        name: 'STARK EXPO',
        type: 'TECHNICAL',
        subHeader: 'Innovation & Research Showcase',
        description: 'A technical event where participants present innovative ideas, research findings, and practical solutions related to emerging technologies through structured PPT presentations.',
        details: {
            time: '8 Minutes (5 Minutes Presentation + 3 Minutes Q&A)',
            teamSize: 'Individual or Team (Maximum 4 Members)',
            format: '8–10 Slides PPT Presentation',
            mode: 'Oral Presentation with Q&A'
        },
        topics: [
            {
                title: 'Next Generation Network (NGN)',
                description: 'Traditional communication networks face issues such as limited bandwidth, high latency, and poor scalability. How can Next Generation Networks improve speed, reliability, and quality of service to support future technologies like IoT, smart cities, and autonomous systems?'
            },
            {
                title: 'Spatial Computing & Extended Reality (XR)',
                description: 'High hardware costs and limited accessibility restrict the widespread adoption of XR technologies. How can Spatial Computing be optimized to make immersive experiences affordable and accessible in education and industry?'
            },
            {
                title: 'Edge Computing',
                description: 'Centralized cloud systems cause latency and bandwidth issues in IoT-based applications. How can edge computing architectures be optimized to reduce latency while maintaining data security and scalability?'
            },
            {
                title: 'Cloud Computing',
                description: 'Many organizations face challenges such as data security risks, high operational costs, and dependency on service providers in cloud environments. How can cloud computing systems be optimized to improve security, cost efficiency, and reliability while maintaining performance?'
            },
            {
                title: 'Explainable AI (XAI) in Deep Learning',
                description: 'Deep learning models provide high accuracy but lack transparency and interpretability. How can Explainable AI techniques (such as LIME, SHAP, and attention visualization) improve trust, fairness, and reliability in deep learning systems without reducing model performance?'
            },
            {
                title: 'Blockchain',
                description: 'Traditional centralized systems face challenges like data tampering, lack of transparency, and reliance on intermediaries. How can blockchain provide a secure, decentralized, and immutable way to record transactions and share information efficiently across multiple parties?'
            },
            {
                title: 'Own a Stage (Own Innovative Projects)',
                description: 'Identify a real-world problem and design an innovative solution addressing usability, performance, or scalability challenges.'
            }
        ],
        prerequisites: [
            'Presentation slides must be prepared in advance',
            'Topic must be finalized before submission',
            'Teams must have a team name and submit PPT with team name clearly mentioned',
            'Individual participants must submit PPT with their name or alias (if preferred)'
        ],
        rules: [
            'Participation can be individual or a team of maximum 4 members',
            'Presentation must be related to the given topics',
            'PPT must contain 8–10 slides only',
            'Only .PPT or .PPTX format is accepted (PDF not allowed)',
            'Slides must be clear, concise, and visually focused',
            'Content must be original; plagiarism leads to disqualification',
            'Strictly follow 5 minutes presentation + 3 minutes Q&A',
            'Submission must be done before the specified deadline',
            'Late submissions will not be accepted',
            'The decision of the jury is final and binding'
        ],
        evaluation: [
            'Innovation & Creativity',
            'Technical Knowledge',
            'Presentation Skills',
            'Practical Impact',
            'Q&A Handling'
        ],
        //         topics:[
        // PAPER PRESENTATION
        // Next Generation Network (NGN)
        // Exploring how NGN enhances speed, scalability, and Quality of Service to support future technologies like IoT, smart cities, and autonomous systems.
        // Spatial Computing & Extended Reality (XR)
        // Optimizing immersive XR technologies to make spatial computing affordable, accessible, and practical for education and industry.
        // Edge Computing
        // Designing low-latency, secure, and scalable edge architectures to improve real-time IoT and distributed applications.
        // Cloud Computing
        // Enhancing cloud systems for better security, cost efficiency, and reliability while maintaining high performance.
        // Explainable AI (XAI) in Deep Learning
        // Improving trust, fairness, and transparency in deep learning models using advanced explainability techniques without compromising accuracy.
        // Blockchain
        // Centralized systems are prone to fraud, tampering, and delays. Blockchain enables secure, transparent, and decentralized record-keeping without intermediaries.
        // Own a Stage (Innovative Projects)
        // Present your original solution to a real-world problem with a focus on usability, performance, and scalability.

        // ],
        submission: 'Participants are required to email their presentations in .PPT or .PPTX format to gcesaltronix26@gmail.com before the 11/03/2026 deadline.',
        contact1: {
            name: 'Dalwin Raju',
            phone: '+91 7598939521'
        },
        contact2: {
            name: 'Dhanusha Baskaran',
            phone: '+91 9500240307'
        }
    },

    'AI WEBSPY': {
        img1: spiderman,
        img2: spiderman2,
        effect: "",
        name: 'AI WEBSPY',
        type: 'TECHNICAL',
        subHeader: 'Open AI Website Development Sprint',

        description: 'Participants must build a complete web application based on a problem statement revealed on the spot. The application must include a fully functional frontend, backend, database, and seamless integration between all components. Any modern technology stack and AI tools may be used. The challenge tests creativity, technical skills, speed, and structured problem-solving under time constraints.',

        details: {
            teamSize: 'Individual',
            format: 'On-Spot Full Stack Web Application Development',
            mode: 'Live Development & Demo',
            duration: 'Time-Bound Sprint (Entire solution must be completed within the event duration)',
            techStack: 'Any Modern Tech Stack (Frontend / Backend / Full Stack)',
            aiTools: 'Any AI Tools Allowed',
            theme: 'Problem Statement will be revealed on the spot by the coordinator'
        },

        prerequisites: [
            'Laptop with required development tools installed',
            'Necessary frameworks and databases must be pre-configured',
            'Basic knowledge of web development',
            'Ability to explain code and working process clearly'
        ],

        rules: [
            'Problem statement will be announced at the beginning of the event',
            'Complete solution must be developed within the allocated time',
            'Application must include frontend, backend, database, and proper integration',
            'Pre-developed templates and repository-based projects are strictly prohibited',
            'Application must strictly follow the given constraints in the problem statement',
            'Clear explanation of code and workflow is compulsory during evaluation',
            'Final working demo submission is mandatory',
            'Judges’ decision is final and binding'
        ],

        evaluation: [
            'Completion of the given problem statement',
            'Creativity and innovation',
            'Clean and user-friendly UI design',
            'Proper implementation according to given constraints',
            'Seamless integration of frontend, backend, and database',
            'Technical clarity during explanation'
        ],

        submission: 'Submit the working project (GitHub repository / deployed link / ZIP file) and demonstrate live before the coordinators.',

        contact1: {
            name: 'MUKESH',
            phone: '+91 6383493022'
        },

        contact2: {
            name: 'HARSHAVARTHINI',
            phone: '+91 9943488559'
        }
    },

    'SHIELD SQL': {
        img1: captain,
        img2: captain2, effect: "",
        name: 'SHIELD SQL',
        type: 'TECHNICAL',
        subHeader: 'Structured Query Language Challenge',
        description: 'A competitive SQL challenge designed to test logical thinking, database querying skills, and problem-solving accuracy under time constraints.',
        details: {
            teamSize: ' Solo or Duo ',
            venue: 'Orange Lab',
            time: 'Coming Soon',
            rounds: 'Single Round',
            mode: 'Pen & Paper / MySQL (No Internet)',
            eligibility: 'Basic SQL Knowledge Required'
        },
        prerequisites: [
            'Basic knowledge of SQL and MySQL commands',
            'Understanding of joins, subqueries, and aggregate functions'
        ],
        rules: [
            'Tasks must be executed only in MySQL (if computer mode)',
            'No mobile phones allowed',
            'Internet access strictly prohibited',
            'Malpractice leads to immediate elimination',
            'Judges decision is final'
        ],
        evaluation: [
            'Accuracy of Answers',
            'Logical Query Structure',
            'Fastest Correct Completion'
        ],
        submission: 'SQL Queries / Written Answers',
        contact1: {
            name: 'MUKESH S',
            phone: '+91 6383493022'
        },
        contact2: {
            name: 'REVATHY',
            phone: '+91 7550289011'
        }
    },

    'VISION HUNTING': {
        img1: vision,
        img2: vision2, effect: "", flip1: false, flip2: true,
        name: 'VISION HUNTING',
        type: 'TECHNICAL',
        subHeader: 'AI Psychological Extraction Challenge',
        description: 'An AI interaction challenge where participants must strategically extract a hidden key from a secured chatbot using conversational intelligence and prompt engineering.',
        details: {
            teamSize: 'Individual',
            format: 'Text-Based Chatbot Interaction',
            objective: 'Extract Hidden Key',
            mode: 'Secured Chat Interface',
            timeLimit: 'Limited Duration'
        },
        prerequisites: [
            'Basic understanding of prompt engineering',
            'Familiarity with AI chatbot behavior',
            'Logical reasoning and creativity'
        ],
        rules: [
            'Individual participation only',
            'Only text-based interaction allowed',
            'External tools, scripts, automation prohibited',
            'Brute force guessing not allowed',
            'Key must be submitted within time limit',
            'Platform exploitation leads to disqualification',
            'Organizer’s decision is final'
        ],
        evaluation: [
            'Strategic Approach',
            'Logical Reasoning',
            'Conversational Creativity',
            'Time Efficiency',
            'Successful Key Extraction',
            'Minimal Conversational Turns'
        ],
        submission: 'Extracted Secret Key',
        contact1: {
            name: 'BARATH B',
            phone: '+91 8015931576'
        },
        contact2: {
            name: 'Dhivya Dharshini',
            phone: '+91 6382535983'
        }
    },

    // =========================
    // NON-TECHNICAL EVENTS
    // =========================

    'STONE HUNT': {
        img1: thanos,
        img2: thanos2,
        effect: "",
        flip1: true,
        flip2: false,
        name: 'STONE HUNT',
        type: 'NON-TECHNICAL',
        subHeader: 'Treasure Hunt Quest',
        description: 'Treasure Hunt Quest is a team-based adventure where participants solve interconnected clues using QR codes. Each clue leads to the next challenge in sequence. The event tests logic, observation, speed, and teamwork. Teams must work together strategically to find the final treasure first.',
        details: {
            teamSize: '2–4 Members',
            format: 'Sequential QR-Based Clue Hunt',
            mode: 'On-Campus Physical Event',
            timeLimit: 'Limited Duration'
        },
        rules: [
            'Teams must have 2–4 members',
            'Clues are released sequentially via QR codes',
            'Scan the assigned QR code to begin',
            'Each correct clue unlocks the next one',
            'Complete the hunt within the time limit',
            'AI tools are strictly prohibited',
            'Damage, disturbance, or malpractice leads to disqualification',
            'First team to find the final treasure wins',
            'Organizer’s decision is final'
        ],
        evaluation: [
            'Logical Thinking',
            'Observation Skills',
            'Speed & Accuracy',
            'Team Coordination'
        ],
        submission: 'Performance-based evaluation. First team to reach the final treasure wins.',
        contact1: {
            name: 'BENJAMIN BRUCE M',
            phone: '+91 9486873341'
        },
        contact2: {
            name: 'NISHA',
            phone: '+91 9080906100'
        }
    },

    'MEMORY MATRIX': {
        img1: strange,
        img2: strange2, effect: "",
        name: 'MEMORY MATRIX',
        type: 'NON-TECHNICAL',
        subHeader: 'Cognitive Retention & Focus Challenge',
        description: 'A high-intensity individual challenge testing visual encoding, focus retention, and recall accuracy under cognitive interference.',
        details: {
            teamSize: 'Individual',
            format: 'Easy Round + Hard Round',
            exposureTime: '45–60 Seconds',
            diversion: 'Mandatory Memory Eraser Task'
        },
        prerequisites: [
            'Strong concentration and observation skills',
            'Ability to work under pressure'
        ],
        rules: [
            'Individual participation only',
            'No phones, cameras, or note-taking',
            'Silence mandatory during diversion phase',
            'Whispering/rehearsing leads to disqualification',
            'Recall allowed only after diversion task'
        ],
        evaluation: [
            'Recall Volume',
            'Focus Retention',
            'Accuracy Across Both Rounds',
            'Tie-Breaker: Fastest Submission Time'
        ],
        submission: 'Written recall sheet after completion',
        contact1: {
            name: 'ARJUN',
            phone: '+91 9043506951'
        },
        contact2: {
            name: 'Rifath Shifa',
            phone: '+91 8270487260'
        }
    },

    'LOKI RELAY': {
        img1: loki,
        img2: loki2, effect: "", flip1: false, flip2: true,
        name: 'LOKI RELAY',
        type: 'NON-TECHNICAL',
        subHeader: 'Relay-Based Strategical Coordination Challenge',
        description: 'A teamwork-based relay challenge where participants must complete sequential tasks with smooth transitions. The event emphasizes planning, coordination, leadership, accuracy, and speed under pressure. The team that performs tasks correctly, efficiently, and within the rules emerges victorious.',
        details: {
            teamSize: '3 Members',
            format: 'Sequential Relay Rounds',
            mode: 'On-Spot Physical / Task Based',
            duration: 'Based on Round Completion Time'
        },
        rules: [
            'All 3 registered members must participate',
            'No substitution once the event begins',
            'Only one participant performs at a time',
            'Next member starts only after official handover',
            'Total time recorded from start to finish',
            'Improper transition results in time penalty',
            'Mobile phones prohibited',
            'Judges’ decision is final'
        ],
        evaluation: [
            'Accuracy – 40%',
            'Completion Time – 30%',
            'Team Coordination – 20%',
            'Rule Discipline – 10%',
            'Tie resolved via Sudden Tactical Challenge'
        ],
        submission: 'First team to find the final treasure wins',
        contact1: {
            name: 'THAMIZHARASAN E',
            phone: '+91 8270755026'
        }, contact2: {
            name: 'Merline Stella',
            phone: '+91 9003967463'
        }
    },

    'LIGHTNING IMAGE GENERATION': {
        img1: thor,
        img2: thor2,
        effect: "",
        name: 'LIGHTNING IMAGE GENERATION',
        type: 'NON-TECHNICAL',
        subHeader: 'AI Image Recreation Challenge',
        description: 'An individual AI image recreation challenge where participants must observe and recreate given reference images using precise prompt engineering. The event emphasizes creativity, attention to detail, visual accuracy, and smart use of AI tools. The participant who generates the most visually similar images within the given time emerges victorious.',
        details: {
            participation: 'Individual',
            format: 'AI Prompt-Based Image Recreation',
            mode: 'On-Spot AI Tool Usage',
            duration: 'Fixed Time Limit (Announced by Organizers)'
        },
        rules: [
            'Individual participation only',
            'A total of 5 reference images will be displayed',
            'All reference images remain visible throughout the event',
            'Participants must recreate exactly 2 images from the given 5',
            'Only AI image generation tools are allowed',
            'Recreation must be done purely through prompt writing',
            'Editing, Photoshop, or manual modifications are prohibited',
            'Reverse engineering is not allowed',
            'Participants must submit 2 generated images and final prompts used',
            'Any malpractice leads to disqualification',
            'Judges’ decision is final'
        ],
        evaluation: [
            'Overall Visual Similarity – 40%',
            'Accuracy of Objects & Elements – 25%',
            'Detail Matching – 20%',
            'Prompt Effectiveness – 15%',
            'Tie resolved based on higher combined similarity score'
        ],
        submission: 'Participants must submit 2 generated images along with the final prompts within the time limit.',
        contact1: {
            name: 'DHINESH KUMAR J',
            phone: '+91 8754734490'
        },
        contact2: {
            name: 'NANTHANA',
            phone: '+91 6381350084'
        }
    },

};