import PortfolioClient from "./components/PortfolioClient";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Galang Krisnanto",
  jobTitle: "Software Engineer",
  email: "galangkrsnt@gmail.com",
  telephone: "081252156651",
  url: "https://galangkrisnanto.com",
  sameAs: ["https://linkedin.com/in/galang-krisnanto"],
  knowsAbout: ["Java", "Spring Boot", "Microservices", "Golang", "Docker", "Kubernetes", "Kafka"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "STMIK AKAKOM Yogyakarta",
  },
  worksFor: {
    "@type": "Organization",
    name: "PT Bank Sinarmas Indonesia",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <PortfolioClient />
    </>
  );
}
