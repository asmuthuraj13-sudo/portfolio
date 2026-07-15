import workshop1 from "../assets/certificates/immersive-workshop.jpeg";
import workshop2 from "../assets/certificates/immersive-workshop2.jpeg";
import internship from "../assets/certificates/Internship.jpeg";
import hadoop from "../assets/certificates/hadoop.png";
import az900 from "../assets/certificates/AZ-900.jpeg";
import leap from "../assets/certificates/leap.jpeg";
import award from "../assets/certificates/award.JPG.jpeg";

// To add new certificate images:
// - Place images in `src/assets/certificates/` and import them above
//   (example: `import img from "../assets/certificates/foo.jpeg";`).
// - Or place images in `public/assets/certificates/` and reference
//   them with a public path string like `/assets/certificates/foo.jpeg`.

const certificates = [
  {
    id: 1,
    title: "Certificate of achievement",
    issuer: "TECHKRITI'S",
    year: "📅 2024",
    image: workshop2,
  },
  {
    id: 2,
    title: "Course Certification",
    issuer: "IBM",
    year: "📅 2024",
    image: hadoop,
  },
  {
    id: 3,
    title: "Internship Completion Certificate",
    issuer: "webboomba.org",
    year: "📅 2025",
    image: internship,
  },
  {
    id: 4,
    title: "Workshop Certificate",
    issuer: "Monolithic Technologies",
    year: "📅 2025",
    image: workshop1,
  },
  {
    id: 5,
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "📅 2025",
    image: az900,
  },
  {
    id: 6,
    title: "LEAP Certificate",
    issuer: "LEAP",
    year: "📅 2025",
    image: leap,
  },
  {
    id: 7,
    title: "Award - Prince Group",
    issuer: "Prince Group of Institutions",
    year: "📅 2026",
    image: award,
  },
];

export default certificates;