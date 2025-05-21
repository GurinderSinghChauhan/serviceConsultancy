// src/screens/Industries.tsx
import React from "react";
import theme from "../theme";
import { motion } from "framer-motion";

import { JSX } from "react";
import {
  FaCar,
  FaUniversity,
  FaChartLine,
  FaSatelliteDish,
  FaShoppingBasket,
  FaSchool,
  FaHospital,
  FaInfoCircle,
  FaShieldAlt,
  FaFlask,
  FaIndustry,
  FaOilCan,
  FaStore,
  FaTruck,
  FaPlaneDeparture,
  FaBolt,
} from "react-icons/fa";

export const industriesData: {
  title: string;
  icon: JSX.Element;
  description: string;
  capabilities: string[];
}[] = [
  {
    title: "Automotive",
    icon: <FaCar size={40} />,
    description:
      "We help automotive companies accelerate digital transformation through connected vehicle systems, EV software infrastructure, and intelligent fleet management. From predictive maintenance using real-time sensor data to ERP and PLM integrations, our solutions empower manufacturers, OEMs, and suppliers to build smarter, safer, and more sustainable mobility ecosystems.",
    capabilities: [
      "Connected Vehicle Platforms (IoT & Telematics)",
      "Electric Vehicle (EV) Infrastructure & Charging Software",
      "Predictive Maintenance & Warranty Analytics",
      "Automotive ERP & PLM Integration",
      "Fleet Management Solutions",
    ],
  },
  {
    title: "Banking",
    icon: <FaUniversity size={40} />,
    description:
      "Our banking solutions enable institutions to modernize core systems, deliver seamless digital experiences, and maintain regulatory compliance. We develop secure mobile banking platforms, automate onboarding and KYC workflows, and implement AI-powered fraud detection systems that improve operational efficiency and customer trust.",
    capabilities: [
      "Core Banking Transformation",
      "Digital Onboarding & KYC Automation",
      "Fraud Detection & Transaction Monitoring",
      "Mobile & Internet Banking Platforms",
      "Regulatory Reporting & Compliance Systems",
    ],
  },
  // {
  //   title: "Blue Economy",
  //   icon: <FaWater size={40} />,
  //   description:
  //     "Supporting sustainable ocean-based industries, we offer digital solutions for smart ports, marine data analytics, coastal monitoring, and fisheries management. Our work empowers governments, research institutions, and maritime businesses to harness real-time insights from oceanographic data for better conservation and economic impact.",
  //   capabilities: [
  //     "Marine Data Analytics & Remote Sensing",
  //     "Smart Port & Maritime Logistics Solutions",
  //     "Sustainable Fisheries Monitoring Platforms",
  //     "Oceanographic Sensor Integration",
  //     "Coastal Zone Management Dashboards",
  //   ],
  // },
  {
    title: "Capital Markets",
    icon: <FaChartLine size={40} />,
    description:
      "We bring speed, security, and insight to capital markets with advanced trading platforms, risk analytics engines, and real-time surveillance systems. Whether you're building a next-gen OMS, need custom regulatory reporting, or seek to streamline asset management workflows, we provide the technical precision your financial operations demand.",
    capabilities: [
      "Trading Platform Engineering (FIX, OMS/EMS)",
      "Real-Time Risk Analytics & Reporting",
      "Market Surveillance & Anomaly Detection",
      "Asset Management Tools & Dashboards",
      "Regulatory Technology (RegTech) Solutions",
    ],
  },
  {
    title: "Communications, Media & Technology",
    icon: <FaSatelliteDish size={40} />,
    description:
      "From streaming platforms and AdTech solutions to high-scale subscriber systems, we help media and technology companies innovate at pace. Our services include content personalization, network performance analytics, and monetization strategies that keep your brand relevant and revenue strong in a fast-moving digital world.",
    capabilities: [
      "OTT & Streaming Platforms",
      "Subscriber Management & Billing Systems",
      "Content Personalization Engines",
      "Network Performance Monitoring",
      "AdTech & Digital Monetization",
    ],
  },
  {
    title: "Consumer Goods",
    icon: <FaShoppingBasket size={40} />,
    description:
      "We help consumer brands optimize their go-to-market strategies with demand forecasting, trade promotion analytics, and real-time retail execution solutions. From e-commerce platforms to AI-powered CRMs and loyalty programs, we bring digital intelligence to every link in your supply chain and customer engagement funnel.",
    capabilities: [
      "Demand Forecasting & Inventory Optimization",
      "D2C E-commerce Enablement",
      "Trade Promotion Analytics",
      "Retail Execution & Planogram Validation",
      "CRM & Loyalty Program Platforms",
    ],
  },
  {
    title: "Education",
    icon: <FaSchool size={40} />,
    description:
      "Transforming how people learn, we develop scalable EdTech platforms, LMS systems, and virtual learning environments. We support educational institutions and startups with student analytics dashboards, enrollment automation, and AR/VR tools that enhance learning outcomes and institutional efficiency.",
    capabilities: [
      "Learning Management System (LMS) Development",
      "Student Analytics & Retention Dashboards",
      "Virtual Classrooms & AR/VR Learning Tools",
      "Admissions & Enrollment Automation",
      "EdTech Platform Integrations",
    ],
  },
  {
    title: "Healthcare",
    icon: <FaHospital size={40} />,
    description:
      "We build HIPAA-compliant digital health solutions that improve patient care and streamline clinical operations. Our services include telemedicine platform development, EHR/EMR integration, medical imaging analytics, and patient engagement portals — enabling providers to deliver more accessible, data-driven care.",
    capabilities: [
      "Electronic Health Records (EHR/EMR) Systems",
      "Telemedicine Platform Development",
      "Patient Engagement Portals",
      "HIPAA-Compliant Data Pipelines",
      "Medical Imaging AI & Diagnostics",
    ],
  },
  {
    title: "Information Services",
    icon: <FaInfoCircle size={40} />,
    description:
      "We empower content-driven businesses with custom research portals, subscription access systems, and intelligent data aggregation platforms. Whether you're building a document management system or constructing a knowledge graph, we ensure your information services are scalable, searchable, and monetizable.",
    capabilities: [
      "Data Aggregation & Normalization Engines",
      "Knowledge Graph Construction",
      "Document Management & OCR Systems",
      "Custom Research Portals",
      "Subscription Access & Licensing Systems",
    ],
  },
  {
    title: "Insurance",
    icon: <FaShieldAlt size={40} />,
    description:
      "Modernize your insurance operations with end-to-end solutions for underwriting, claims automation, and policy management. Our services span AI-powered fraud detection, mobile app development, customer self-service portals, and real-time risk scoring models tailored to P&C, life, and health insurers.",
    capabilities: [
      "Policy Administration Systems",
      "Claims Processing Automation",
      "Fraud Detection Models",
      "Underwriting Risk Scoring Tools",
      "Customer Portals & Mobile Insurance Apps",
    ],
  },
  {
    title: "Life Sciences",
    icon: <FaFlask size={40} />,
    description:
      "We help life sciences organizations accelerate R&D, clinical trials, and regulatory compliance. From AI-powered drug discovery tools to clinical trial data systems and LIMS solutions, we support pharmaceutical, biotech, and medical device firms in building smarter and faster innovation pipelines.",
    capabilities: [
      "Clinical Trial Data Management",
      "Regulatory Submissions (eCTD)",
      "Bioinformatics Pipelines",
      "Drug Discovery using AI/ML",
      "Laboratory Information Management Systems (LIMS)",
    ],
  },
  {
    title: "Manufacturing",
    icon: <FaIndustry size={40} />,
    description:
      "We enable manufacturing excellence through Industry 4.0 technologies — including IoT-driven predictive maintenance, ERP/MES integration, digital twins, and real-time supply chain analytics. Our platforms improve asset utilization, reduce downtime, and drive end-to-end factory automation across sectors.",
    capabilities: [
      "Industrial IoT & Predictive Maintenance",
      "Smart Factory Automation",
      "ERP & MES Integration",
      "Digital Twin Solutions",
      "Supply Chain Traceability Systems",
    ],
  },
  {
    title: "Oil & Gas",
    icon: <FaOilCan size={40} />,
    description:
      "Optimize field operations with our advanced analytics and IoT solutions for the energy sector. We develop real-time drilling dashboards, pipeline monitoring systems, asset performance tools, and SCADA integrations that help upstream, midstream, and downstream operations achieve efficiency and safety.",
    capabilities: [
      "Pipeline Monitoring & Leak Detection",
      "Real-Time Drilling Analytics",
      "Asset Performance Management",
      "Exploration Data Platforms",
      "SCADA System Integration",
    ],
  },
  {
    title: "Retail",
    icon: <FaStore size={40} />,
    description:
      "Power smarter retail with omnichannel platforms, inventory intelligence, and personalized customer experiences. We help brands with POS integration, real-time supply chain visibility, product recommendation engines, and data-driven merchandising strategies to stay competitive in a rapidly evolving landscape.",
    capabilities: [
      "Omnichannel Retail Platforms",
      "AI-Powered Product Recommendations",
      "POS System Integration",
      "Customer Behavior Analytics",
      "Inventory & Supply Chain Optimization",
    ],
  },
  {
    title: "Transportation & Logistics",
    icon: <FaTruck size={40} />,
    description:
      "We build scalable logistics platforms for freight visibility, route optimization, and fleet automation. Our solutions support end-to-end supply chain transformation — from warehouse systems to real-time tracking and predictive delivery analytics that enhance efficiency and customer satisfaction.",
    capabilities: [
      "Route Optimization & Fleet Tracking",
      "Logistics Management Platforms",
      "Warehouse Automation Systems",
      "Freight Marketplace Development",
      "Real-Time Shipment Visibility",
    ],
  },
  {
    title: "Travel & Hospitality",
    icon: <FaPlaneDeparture size={40} />,
    description:
      "Deliver seamless guest experiences with intelligent travel platforms, dynamic pricing engines, and mobile-first reservation systems. We specialize in loyalty program integration, guest personalization, and contactless solutions that help hospitality providers exceed expectations and streamline operations.",
    capabilities: [
      "Booking Engines & Reservation Platforms",
      "Guest Experience Personalization",
      "Revenue Management Systems",
      "Loyalty Programs & CRM",
      "Contactless Check-In/Check-Out Systems",
    ],
  },
  {
    title: "Utilities",
    icon: <FaBolt size={40} />,
    description:
      "We help utility providers modernize infrastructure with smart grid analytics, outage management systems, and renewable energy monitoring tools. Our customer-facing solutions include billing portals, usage dashboards, and self-service applications — all built with security, scalability, and regulatory compliance in mind.",
    capabilities: [
      "Smart Metering & Grid Analytics",
      "Outage Management Systems",
      "Energy Usage Forecasting",
      "Renewable Integration Monitoring",
      "Customer Billing Portals",
    ],
  },
];

const Industries: React.FC = () => (
  <div
    style={{
      color: theme.colors.text,
      // minHeight: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* Grid of Cards */}
    <section style={{ textAlign: "center" }}>
      <h1
        style={{ fontSize: "2.5rem", paddingTop: "2rem", marginBottom: "2rem" }}
      >
        Industries We Serve
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          padding: "3rem 2rem",
        }}
      >
        {industriesData.map((industry, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              background: theme.colors.card,
              padding: "1.5rem",
              borderRadius: "12px",
              // boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
              border: "1px solid rgb(252, 252, 252)", // soft bluish border
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.38)", // subtle glow
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
            }}
          >
            <div style={{ marginBottom: "1rem" }}>{industry.icon}</div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              {industry.title}
            </h3>
            <ul
              style={{
                padding: 0,
                margin: 0,
                listStyle: "none",
                opacity: 0.9,
              }}
            >
              {industry.capabilities.map((item, i) => (
                <li
                  key={i}
                  style={{ marginBottom: "0.5rem", fontSize: "0.95rem" }}
                >
                  • {item}
                </li>
              ))}
            </ul>
            {/* <p style={{ marginTop: "0.5rem", color: theme.colors.secondary }}>
              {industry.description}
            </p> */}
          </motion.div>
        ))}
      </div>
    </section>

    {/* Animated Sections */}
    <section style={{ padding: "4rem 2rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Trusted by Industry Leaders
        </h2>
        <p>
          See how our consultancy has helped transform businesses across
          sectors.
        </p>
      </motion.div>
    </section>

    {/* Interactive Globe or Map (Placeholder for now) */}
    <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Global Reach</h2>
      <p>
        Interactive map coming soon to showcase our global consulting impact.
      </p>
    </section>

    {/* Timeline or Evolution */}
    <section
      style={{ padding: "4rem 2rem", backgroundColor: theme.colors.card }}
    >
      <h2
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}
      >
        Our Journey Across Industries
      </h2>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <li style={{ marginBottom: "1.5rem" }}>
          <strong>2018:</strong> First healthcare platform deployed.
        </li>
        <li style={{ marginBottom: "1.5rem" }}>
          <strong>2019:</strong> Launched 3 e-commerce projects.
        </li>
        <li style={{ marginBottom: "1.5rem" }}>
          <strong>2020:</strong> Ed-tech platform adopted by 20 schools.
        </li>
        <li style={{ marginBottom: "1.5rem" }}>
          <strong>2021:</strong> Cybersecurity solutions for fintech startups.
        </li>
        <li style={{ marginBottom: "1.5rem" }}>
          <strong>2022:</strong> Enterprise software development for logistics
          firm.
        </li>
      </ul>
    </section>

    {/* Horizontal Carousel (basic version) */}
    {/* <section style={{ padding: "4rem 0" }}>
      <h2
        style={{ fontSize: "2rem", marginBottom: "2rem", textAlign: "center" }}
      >
        Industry Highlights
      </h2>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "1.5rem",
          padding: "1rem",
          scrollbarWidth: "none",
        }}
      >
        {industriesData.map((industry, idx) => (
          <div
            key={idx}
            style={{
              minWidth: "250px",
              background: theme.colors.card,
              padding: "1rem",
              borderRadius: "12px",
              flexShrink: 0,
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h4 style={{ fontWeight: "bold" }}>{industry.title}</h4>
            <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
              {industry.description}
            </p>
          </div>
        ))}
      </div>
    </section> */}
  </div>
);

export default Industries;
