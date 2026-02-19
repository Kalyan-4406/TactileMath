# Lab Evaluation - 2

## Product Description Page
**Course Code:** 23CSE461
**Course Name:** Full Stack Frameworks
**Course Teacher:**
Dr. T. Senthil Kumar
Professor
Amrita School of Computing
Amrita Vishwa Vidyapeetham
Coimbatore - 641112
Email: t_senthilkumar@cb.amrita.edu

**GitHub Details:** [Link to GitHub](https://github.com/kalyankumar/lucid-autism-portal)
**Collaborator - Academic:** Academic
**Collaborator - Industry:** Industry

---

## 1. Member Details & Use Case

### Member Details
- **Name:** Kalyan Kumar Reddy C
- **Roll No:** CB.SC.U4CSE23060
- **Photo:** ![Member Photo](https://api.dicebear.com/7.x/avataaars/svg?seed=Kalyan)

### 2. About the Use Case

**Why this portal is required for autism kids:**
Children with Autism Spectrum Disorder (ASD) often face significant challenges with traditional, text-heavy educational methods. They tend to be strong visual learners who thrive on structure and predictability. This portal is required to provide an alternative learning environment that leverages their visual processing strengths, reducing cognitive load and anxiety while fostering engagement through interactive, gamified learning.

**Challenges in autism kids that need to be improved:**
-   **Sensory Overload:** cluttered or noisy environments can cause distress.
-   **Communication Barriers:** difficulty understanding abstract verbal instructions.
-   **Executive Dysfunction:** trouble planning and sequencing tasks.
-   **Generalization:** difficulty applying skills learned in one context to another.
-   **Engagement:** shorter attention spans for non-preferred activities.

**Highlights and Novelty:**
-   **Visual-First Design:** The interface prioritizes icons, colors, and spatial organization over text.
-   **Predictable Interactions:** Consistent UI patterns reduce anxiety.
-   **Gamified Math Learning:** Uses "Visual Magnitude" concepts where numbers are represented by quantities/shapes rather than just symbols.
-   **Calm Aesthetics:** Uses a specific color palette (blues, teals, soft whites) known to be calming for sensory-sensitive individuals.

**Importance of Visualization:**
Visualization is the primary mode of thinking for many autistic individuals. "Thinking in pictures" allows them to process information faster and more accurately than via auditory channels. This portal translates abstract math concepts into concrete visual objects, aligning with their natural cognitive style and making learning accessible rather than frustrating.

### 3. List of Operations

| Operation Name | Expected Output | List of Concepts used from ReactJS | How the concept helped improve the application |
| :--- | :--- | :--- | :--- |
| **Navigation** | Seamless switching between Home, Game, and Details pages without reload. | `useState`, Conditional Rendering, Component Composition | Enables a Single Page Application (SPA) feel, preventing jarring page reloads that can disrupt focus. |
| **Math Game** | Interactive question generation and score updates. | `useState`, `useEffect`, Event Handlers | `useState` manages the score and current question instantly; `useEffect` can handle timers or lifecycle events. |
| **Score Tracking** | Display of current score and progress. | `useState`, Props Drilling | Allows immediate feedback (reinforcement), which is crucial for operant conditioning learning models. |
| **Member/Product Display** | Dynamic rendering of static data (names, details). | `Props`, `Constants` (Import/Export), JSX | logical separation of data (`constants.ts`) from UI (`MemberDetail.tsx`) makes the code maintainable and reusable. |
| **Progress Visualization** | Visual bars or charts showing user achievement. | `Props`, CSS Modules / Tailwind Utility Classes | Dynamic styling based on props allows for real-time visual feedback on progress. |

### 4. Improvements for Autism Kids

-   **Memory Improvement:** The game utilizes pattern recognition and repetition, helping to strengthen working memory by requiring the child to recall number-shape associations.
-   **Contextual Learning:** By associating abstract numbers with concrete visuals (e.g., "5" linked to 5 specific dots/shapes), the application fosters contextual understanding of quantity, moving beyond rote memorization to true conceptual grasp.
-   **Focus & Attention:** The isolated, distraction-free design helps train sustained attention.

### 5. Outputs

*(Note: Screenshots were requested, but automated capture is currently unavailable. Please view the live application to see these screens.)*

**Figure 1: Member Detail Page**
Displays the member's photo, roll number, and role, along with course and collaborator details in a card-based layout.

**Figure 2: Project Description Page**
Shows the project's strategic purpose, highlights, and links to GitHub and Collaborators.

**Figure 3: Math Game Interface**
 The interactive game screen where children solve visual math problems.

### 7. List of Similar Products

| URL | Description | Features |
| :--- | :--- | :--- |
| **[proloquo2go.com](https://www.assistiveware.com/products/proloquo2go)** | A symbol-supported communication app (AAC) for non-verbal people. | Customizable vocabulary, text-to-speech, visual layouts. |
| **[choiceworks.com](https://www.beedeez.com/choiceworks)** | An app for daily routines and schedule management. | Visual schedules, waiting boards, emotional regulation tools. |
| **[endlessreader.com](https://originatorkids.com/)** | Educational app for early reading using monsters and animations. | Visual word puzzles, interactive animations, phonics. |
| **[modmath.com](http://www.modmath.com/)** | An adaptive math app for students with dyslexia and autism. | Virtual graph paper, write-on-screen without pencil, clean interface. |

### 8. Research Labs Working in the Same Area

1.  **Seattle Children's Innovative Technologies Lab (SCITL):** Focuses on leveraging everyday technologies (apps, games) to enhance the lives of children with autism.
2.  **MIT Media Lab - Affective Computing Group:** Develops personalized machine learning and social robots to measure engagement and affect in autistic children.
3.  **Stanford Autism Center:** Conducts research on systems medicine and utilizes technology for early diagnosis and assessment.
4.  **Yale Child Study Center:** Explores eye-tracking and neuroimaging to understand social engagement and develop visual-based interventions.

### 9. Algorithms Implemented

1.  **Randomized Question Generation:** Uses pseudo-random number generation (`Math.random()`) to create unique math problems (operands and operators) for every game session, preventing memorization of answers.
2.  **State-Based Navigation Logic:** Implements a finite state machine approach using React's `useState` to control the active view ('home', 'game', 'desc', 'member'), ensuring only one component is mounted and visible at a time.
3.  **scoring & Feedback Loop:** A simple accumulator algorithm updates the score based on boolean correctness checks of user input, triggering immediate visual feedback cycles.

### 10. Feature Enhancements

1.  **AI-Driven Difficulty Adaptation:**
    *   *Justification:* Currently, difficulty might be static. AI could analyze response time and error rates to dynamically adjust the complexity of questions, keeping the child in the "Zone of Proximal Development" (neither too bored nor too anxious).
2.  **Voice Interaction / Speech Recognition:**
    *   *Justification:* Many autistic children have motor skill challenges. allowing voice answers would make the app more accessible and encourage verbal practice.
3.  **Parent/Teacher Analytics Dashboard:**
    *   *Justification:* Detailed logs of performance over time (time taken per question, error patterns) would help educators tailor their offline interventions.

---

## Lab Evaluation Details

| Lab Name | URL | Professor Details |
| :--- | :--- | :--- |
| **Full Stack Frameworks Lab** | *Localhost / GitHub Deployment* | **Dr. T. Senthil Kumar**, Professor, Amrita School of Computing |
