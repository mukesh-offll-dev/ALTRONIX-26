export const eventsData = {

    // =========================
    // TECHNICAL EVENTS
    // =========================

    'STARK EXPO': {
        img1: "",
        img2: "",
        name: 'STARK EXPO',
        type: 'TECHNICAL',
        subHeader: 'Showcase Your Research',
        description: 'Present your research ideas, technical innovations, and futuristic concepts to a panel of experts.',
        details: {
            time: '9:00 AM onwards',
            teamSize: '1-3 Members',
            format: 'PPT Presentation',
            tools: 'Standard Presentation Tools'
        },
        prerequisites: [
            'Abstract submission is mandatory',
            'Full paper must be submitted 2 days before event'
        ],
        rules: [
            'Time limit: 8 minutes presentation + 2 minutes Q&A',
            'Plagiarism is strictly prohibited',
            'Judges decision is final'
        ],
        evaluation: [
            'Innovation & Originality',
            'Technical Depth',
            'Presentation Skills',
            'Clarity of Explanation'
        ],
        submission: 'Upload PPT/PDF via submission link after registration.',
        contact: {
            name: 'Stark Coordinator',
            phone: '+91 XXXXXXXXXX'
        }
    },

    'AI SPY STACK': {
        img1: "",
        img2: "",
        name: 'AI SPY STACK',
        type: 'TECHNICAL',
        subHeader: 'Build the Digital Future',
        description: 'Design and develop innovative digital solutions using modern web technologies.',
        details: {
            time: '11:00 AM',
            teamSize: 'Solo / Duo',
            format: 'Design & Development',
            tools: 'Figma, VS Code, React'
        },
        prerequisites: [
            'Basic knowledge of HTML, CSS, JavaScript',
            'Bring your own laptop'
        ],
        rules: [
            'Theme will be provided on-spot',
            'No copied code or templates allowed',
            'Code must be original'
        ],
        evaluation: [
            'UI/UX Design',
            'Functionality',
            'Creativity',
            'Code Quality'
        ],
        submission: 'Submit GitHub Repo link or ZIP file.',
        contact: {
            name: 'Web Master',
            phone: '+91 XXXXXXXXXX'
        }
    },

    'SHIELD SQL': {
        img1: "",
        img2: "",
        name: 'SHIELD SQL',
        type: 'TECHNICAL',
        subHeader: 'Structured Query Language Challenge',
        description: 'Test your SQL knowledge, logical thinking, and database problem-solving skills under time pressure.',
        details: {
            time: '11:00 AM – 11:45 AM',
            teamSize: '1-3 Members',
            venue: 'Orange Lab',
            rounds: 'Single Round',
            mode: 'Pen & Paper / Computer (No Internet)'
        },
        prerequisites: [
            'Basic knowledge of SQL and MySQL'
        ],
        rules: [
            'No mobile phones or electronic devices',
            'Internet access is strictly prohibited',
            'Malpractice leads to elimination'
        ],
        evaluation: [
            'Accuracy of Queries',
            'Logical Approach',
            'Fastest Correct Completion'
        ],
        submission: 'Submit answers within allotted time.',
        contact: {
            name: 'SQL Coordinator',
            phone: '+91 XXXXXXXXXX'
        }
    },

    'VISION WASHING': {
        img1: "",
        img2: "",
        name: 'VISION WASHING',
        type: 'TECHNICAL',
        subHeader: 'AI Psychological Extraction Challenge',
        description: 'An advanced AI interaction challenge where participants must strategically extract a hidden secret key from a secured chatbot using prompt engineering.',
        details: {
            time: 'Limited Duration Challenge',
            teamSize: 'Individual',
            format: 'Live Chat Interaction',
            tools: 'Secured AI Chat Interface'
        },
        prerequisites: [
            'Basic understanding of AI behavior',
            'Knowledge of prompt engineering concepts',
            'Strong logical reasoning skills'
        ],
        rules: [
            'Individual participation only',
            'Only text-based interaction allowed',
            'External tools, scripts, automation or hacking attempts are prohibited',
            'Brute force guessing is not allowed',
            'Key must be submitted within time limit',
            'Organizer decision is final'
        ],
        evaluation: [
            'Strategic Thinking',
            'Prompt Engineering Skill',
            'Logical Reasoning',
            'Creativity in Conversation',
            'Time Efficiency',
            'Successful Key Extraction'
        ],
        submission: 'Submit the extracted secret key before time ends.',
        contact: {
            name: 'AI Challenge Coordinator',
            phone: '+91 XXXXXXXXXX'
        }
    },

    // =========================
    // NON-TECHNICAL EVENTS
    // =========================

    'STONE HUNT': {
        img1: "",
        img2: "",
        name: 'STONE HUNT',
        type: 'NON-TECHNICAL',
        subHeader: 'Capture the Moment',
        description: 'A creative photography challenge that captures the essence of the event through your lens.',
        details: {
            time: 'Full Day',
            teamSize: 'Individual',
            format: 'Theme Based Photography',
            tools: 'DSLR / Smartphone'
        },
        prerequisites: [
            'Passion for photography'
        ],
        rules: [
            'Editing should be minimal',
            'Photos must be taken inside campus',
            'Metadata must be preserved'
        ],
        evaluation: [
            'Creativity',
            'Theme Relevance',
            'Clarity & Composition'
        ],
        submission: 'Upload via secure submission portal.',
        contact: {
            name: 'Lens Pro',
            phone: '+91 XXXXXXXXXX'
        }
    },

    'MEMORY MATRIX': {
        img1: "",
        img2: "",
        name: 'MEMORY MATRIX',
        type: 'NON-TECHNICAL',
        subHeader: 'Cognitive Retention Challenge',
        description: 'An intense individual memory challenge testing visual retention, focus, and recall accuracy under distraction.',
        details: {
            rounds: 'Easy + Hard Round',
            exposureTime: '45–60 Seconds',
            diversion: 'Mandatory Cognitive Interference Task',
            format: 'Observe → Distract → Recall'
        },
        prerequisites: [
            'Strong concentration skills'
        ],
        rules: [
            'No phones or note-taking allowed',
            'Silence must be maintained',
            'Any rehearsal leads to disqualification'
        ],
        evaluation: [
            'Number of Correct Recalls',
            'Focus Retention',
            'Fastest Submission (Tie-Breaker)'
        ],
        submission: 'Submit product list after diversion phase.',
        contact: {
            name: 'Memory Coordinator',
            phone: '+91 XXXXXXXXXX'
        }
    },

    'LOKI RELAY': {
        img1: "",
        img2: "",
        name: 'LOKI RELAY',
        type: 'NON-TECHNICAL',
        subHeader: 'Fandom Battle',
        description: 'An interactive pop-culture and general awareness quiz filled with rapid-fire rounds.',
        details: {
            time: '11:00 AM',
            teamSize: 'Individual',
            format: 'Interactive Quiz',
            tools: 'Kahoot / Quizizz'
        },
        prerequisites: [
            'Stay updated with pop culture and trends'
        ],
        rules: [
            'Limited time per question',
            'Speed and accuracy both matter',
            'Leaderboard decides ranking'
        ],
        evaluation: [
            'Correct Answers',
            'Response Speed',
            'Final Score Ranking'
        ],
        submission: 'Real-time automated scoring.',
        contact: {
            name: 'Fandom Lead',
            phone: '+91 XXXXXXXXXX'
        }
    },

    'NEURAL INFINITY WAR': {
        img1: "",
        img2: "",
        name: 'NEURAL INFINITY WAR',
        type: 'NON-TECHNICAL',
        subHeader: 'AI Image Recreation Challenge',
        description: 'A precision-based AI image generation battle where participants must recreate reference images using only prompt engineering.',
        details: {
            time: 'Limited Duration',
            teamSize: 'Individual',
            format: 'Recreate 2 out of 5 Images',
            tools: 'AI Image Generators Only'
        },
        prerequisites: [
            'Basic knowledge of AI prompting',
            'Access to AI generation tools'
        ],
        rules: [
            'Exactly 2 images must be recreated',
            'Editing or Photoshop is prohibited',
            'Manual prompt engineering allowed',
            'Reverse engineering not allowed'
        ],
        evaluation: [
            'Visual Accuracy',
            'Prompt Precision',
            'Creativity',
            'Similarity to Reference'
        ],
        submission: 'Submit 2 generated images and prompts used.',
        contact: {
            name: 'Event Coordinator',
            phone: '+91 XXXXXXXXXX'
        }
    }

};