// src/data/statistics.js

// Hypothetical data for charts (Requirement 6: Data Visualization)
export const GLOBAL_HEALTH_DATA = [
    { name: '2020', Investment: 50, Diagnosis: 30 },
    { name: '2021', Investment: 65, Diagnosis: 45 },
    { name: '2022', Investment: 80, Diagnosis: 60 },
    { name: '2023', Investment: 100, Diagnosis: 75 },
];

export const AI_FOCUS_DISTRIBUTION = [
    { name: 'Diagnosis', value: 450, color: '#00796B' },
    { name: 'Drug Development', value: 300, color: '#FFB300' },
    { name: 'Hospital Management', value: 150, color: '#6A1B9A' },
    { name: 'Preventive Healthcare', value: 100, color: '#4CAF50' },
];

export const DUMMY_CHATBOT_RESPONSES = {
    'hello': "Hello! I am an intelligent assistant about Global Health. Would you like to learn about AI or Food Security?",
    'ai': "Artificial Intelligence (AI) is being used to diagnose diseases faster and develop new drugs. You can see details on the AI Applications page.",
    'food': "Food supply directly affects community health. Please check the Food & Health page for more information.",
    'other': "Sorry, I can only answer topics about AI, Healthcare and Food Security. Please try again with those keywords.",
};