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
        effect: "",flip1: true, flip2: false,
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
            'Post-Quantum Security Era',
            'DevOps 3.0',
            'Spatial Computing & Extended Reality (XR)',
            'Brain-Computer Interfaces (BCIs)',
            'Edge Computing',
            'Showcase Your Thought (Own Innovative Projects)'
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
        submission: 'Submit PPT in .PPT or .PPTX format only before the deadline.',
        contact: {
            name: 'Dalwin Raju / Dhanusha Baskaran',
            phone: '+91 XXXXXXXXXX'
        }
    },

    'AI WEBSPY': {
        img1: spiderman,
        img2: spiderman2, effect: "",
        name: 'AI WEBSPY',
        type: 'TECHNICAL',
        subHeader: 'Open AI Website Development Sprint',
        description: 'A high-intensity technical sprint where participants must design and develop a fully functional website within a limited time using any AI tools and any technology stack of their choice. The event evaluates innovation, speed, technical execution, and smart AI-assisted development under pressure.',
        details: {
            teamSize: 'Individual',
            format: 'On-Spot Website Development',
            mode: 'Live Build & Demo',
            duration: 'Limited Time Sprint',
            techStack: 'Any Tech Stack Allowed (Frontend / Backend / Full Stack)',
            aiTools: 'Any AI Tools Allowed',
            theme: 'Problem Statement / Theme will be revealed on the spot'
        },
        prerequisites: [
            'Basic knowledge of web development concepts',
            'Participants must bring their own laptop',
            'Internet access required for development and AI tools'
        ],
        rules: [
            'Theme will be announced at the beginning of the event',
            'Website must be developed completely within the allotted time',
            'Any tech stack is allowed',
            'Any AI tool is allowed',
            'Project must be original and built during event time',
            'Final working demo is mandatory',
            'Judges’ decision is final and binding'
        ],
        evaluation: [
            'Innovation & Creativity',
            'Functionality & Features',
            'Effective Use of AI',
            'Technical Implementation',
            'UI/UX Design',
            'Completion Within Time'
        ],
        submission: 'Submit the working website (GitHub repository / deployed link / ZIP file) and demonstrate live before coordinators.',
        contact: {
            name: 'Sathish D',
            phone: '+91 XXXXXXXXXX'
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
            teamSize: '1–3 Members',
            venue: 'Orange Lab',
            time: '11:00 AM – 11:45 AM',
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
        contact: {
            name: 'SQL Coordinator',
            phone: '+91 XXXXXXXXXX'
        }
    },

    'VISION WASHING': {
        img1: vision,
        img2: vision2, effect: "", flip1: false, flip2: true,
        name: 'VISION WASHING',
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
        contact: {
            name: 'AI Challenge Coordinator',
            phone: '+91 XXXXXXXXXX'
        }
    },

    // =========================
    // NON-TECHNICAL EVENTS
    // =========================

    'STONE HUNT': {
        img1: thanos,
        img2: thanos2, effect: "", flip1: true, flip2: false,
        name: 'STONE HUNT',
        type: 'NON-TECHNICAL',
        subHeader: 'AI Image Recreation Challenge',
        description: 'An individual AI image generation challenge testing precision, intelligence, and creative accuracy through high-similarity image recreation.',
        details: {
            teamSize: 'Individual',
            format: 'Recreate 2 out of 5 Images',
            tools: 'AI Image Generation Tools Only',
            visibility: 'All 5 reference images visible throughout',
            timeLimit: 'Limited Duration'
        },
        prerequisites: [
            'Access to AI image generation tools',
            'Basic knowledge of prompt engineering',
            'Understanding of image composition'
        ],
        rules: [
            'Individual participation only',
            '5 reference images will be displayed',
            'Exactly 2 images must be recreated',
            'Manual prompt engineering allowed',
            'Editing / Photoshop strictly prohibited',
            'Reverse engineering not allowed',
            'Final prompts must be submitted with images',
            'Malpractice leads to disqualification',
            'Organizer’s decision is final'
        ],
        evaluation: [
            'Overall Visual Similarity',
            'Accuracy of Objects & Elements',
            'Detail Matching',
            'Prompt Effectiveness',
            'Highest Similarity Score Wins'
        ],
        submission: 'Submit exactly 2 generated images along with final prompts used',
        contact: {
            name: 'Event Coordinator',
            phone: '+91 XXXXXXXXXX'
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
        contact: {
            name: 'Memory Coordinator',
            phone: '+91 XXXXXXXXXX'
        }
    },

    'LOKI RELAY': {
        img1: loki,
        img2: loki2, effect: "", flip1: false, flip2: true,
        name: 'LOKI RELAY',
        type: 'NON-TECHNICAL',
        subHeader: 'Treasure Hunt Quest',
        description: 'Treasure Hunt Quest is a team-based adventure where participants solve interconnected clues using QR codes. Each clue leads to the next challenge in sequence. The event tests logic, observation, speed, and teamwork. Teams must work together to find the final treasure first.',
        details: {
            teamSize: '2–5 Members',
            format: 'Sequential QR-Based Clue Hunt',
            mode: 'On-Campus Physical Event'
        },
        prerequisites: [
            'Fully charged smartphone with QR scanner',
            'Team coordination and problem-solving skills'
        ],
        rules: [
            'Teams must have 2–5 members',
            'Clues are released sequentially via QR codes',
            'Scan the QR code to begin the hunt',
            'Each correct clue unlocks the next one',
            'Complete the hunt within the time limit',
            'AI tools are strictly prohibited',
            'Damage, disturbance, or malpractice leads to disqualification',
            'First team to find the final treasure wins',
            'Organizer’s decision is final'
        ],
        evaluation: [
            'Logic & Observation',
            'Speed',
            'Teamwork',
            'Accuracy of Clue Solving'
        ],
        submission: 'First team to find the final treasure wins',
        contact: {
            name: 'Hunt Master',
            phone: '+91 XXXXXXXXXX'
        }
    },

    'NEURAL INFINITY WAR': {
        img1: thor,
        img2: thor2, effect: "",
        name: 'NEURAL INFINITY WAR',
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
        submission: 'Performance-based evaluation (No separate submission).',
        contact: {
            name: 'Memory Coordinator',
            phone: '+91 XXXXXXXXXX'
        }
    },

};