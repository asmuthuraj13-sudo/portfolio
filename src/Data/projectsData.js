// If you prefer importing images from `src/assets/projects/`,
// place them there and import as above. Using public paths
// avoids build-time resolution errors when files are missing.
const helpdesk = "/assets/projects/image.png";
const bluetoothHearingAid = "/assets/projects/bluetooth.jpg";

const projects = [
  {
    id: 1,
    title: "College Helpdesk",
    description:
      "Developed an AI-powered College Help Desk chatbot that uses RAG and official college documents to answer student queries accurately and efficiently.",
    technologies: ["Python", "Fast API", "Streamlit", "GitHub"],
    image: helpdesk,
    github: "https://github.com/asmuthuraj13-sudo/college_helpdesk.git",
    demo: "",
  },
  {
    id: 2,
    title: "Bluetooth Hearing Aid",
    description:
      "Designed a conceptual Bluetooth-enabled hearing aid system to improve accessibility and communication for hearing-impaired individuals.",
    technologies: ["Arduino Uno", "HC-05 Bluetooth Module", "Embedded C"],
    image: bluetoothHearingAid,
    github: "",
    demo: "",
  },
];

export default projects;