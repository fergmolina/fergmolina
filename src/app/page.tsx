'use client';

import { useState } from 'react';
import './styles.css';

const workExperience = [
  {
    title: 'Senior Data Engineer',
    company: 'Blockworks',
    location: 'Remote, United States',
    period: 'December 2024 - Present',
    status: 'In Progress',
    details: [
      'Built scalable pipelines pulling from blockchain nodes, APIs, improving ETL throughput',
      'Led schema design across PostgreSQL for internal metrics used by Research and Product',
      'Deployed a high-volume warehouse with ClickHouse',
    ]
  },
  {
    title: 'Data Engineer',
    company: 'JP Morgan & Chase',
    location: 'Delaware, United States',
    period: 'September 2022 - Present',
    details: [
      'Develop and optimize ETL processes using Python and Java',
      'Design and implemented interactive dashboards and comprehensive reports for internal stakeholders and regulatory entities',
      'Engineer robust processes with precise ETA calculations for regulatory submissions, maintaining a 100% on-time delivery'
    ]
  },
  {
    title: 'Lead Data Engineer',
    company: 'The Defiant',
    location: 'New York, United States',
    period: 'March 2022 - September 2022',
    details: [
      'Created data pipelines to gather information from different blockchains and third party APIs',
      'Designed and maintained all the data architecture in the company using Apache Airflow and AWS',
      'ETL development in Python using DAGs',
      'Web Scraping',
      'Database design'
    ]
  },
  {
    title: 'Data Management & Analytics Coordinator',
    company: 'Pan American Energy',
    location: 'Buenos Aires, Argentina',
    period: 'May 2015 - Feb 2022',
    details: [
      'Data Warehouse design',
      'Dashboards and Reporting development',
      'Python, SQL, PowerBI'
    ]
  },
  {
    title: 'Programmer Analyst',
    company: 'Comisión Nacional de Comunicaciones',
    location: 'Buenos Aires, Argentina',
    period: 'Nov 2014 - May 2015',
    details: [
      'Collaborated with Business Development',
      'Data Analysis of different DBs and Business Units',
      'SQL/MongoDB',
      'APP Development in C# and PHP'
    ]
  }
];

const skills = [
  // Languages
  'Python', 'R', 'Javascript', 'SQL', 'NoSQL', 'Solidity', 'C#', 'PHP', 'Java',
  // Frameworks & Libraries
  'TensorFlow', 'NodeJS', 'Truffle', 'Hardhat', 'Apache Airflow', 'ETL',
  // Tools & Platforms
  'GIT', 'PowerBI', 'MySQL', 'PostgreSQL', 'AWS', 'Jupyter Notebook', 'Google Colab',
  'MongoDB', 'Docker', 'Data Warehouse', 'Web Scraping',
  // Domains
  'Blockchain Analytics', 'Data Engineering', 'Ethereum', 'Bitcoin', 'DeFi'
];

const mainnetDeployments = [
  {
    title: 'Library of ETHbel',
    description: 'Solidity implementation deployed on Polygon of Julio Borge\'s Library of Babel story',
    link: 'https://medium.com/@fergmolina'
  },
  {
    title: 'NFTs Trading Bots',
    description: 'Created several bots using NodeJS that look for under-priced NFTs on different play2earn projects and sell them for profit'
  },
  {
    title: 'Dune Dashboards & Analysis',
    description: 'Created dashboards and queries to study meme coins, DAOs and projects with different complexity',
    link: 'https://dune.com/fergmolina',
    status: 'In Progress'
  },
  {
    title: 'Bloque X',
    description: 'Data Analysis and Blockchain blog with analysis and tutorials in Spanish',
    link: 'https://bloquex.me',
    status: 'In Progress'
  },
  {
    title: 'Book Collaboration',
    description: 'Wrote the chapter "Mechanism Design and the Ethereum Blockchain Transaction Fee Market" for The Elgar Companion to Decentralized Finance',
    link: 'https://www.elgaronline.com/edcollbook/book/9781035307760/9781035307760.xml'
  }
];

const offchainActivities = [
  {
    title: 'Teaching Assistant',
    description: 'Di Tella University: Subject - Platform and Network Analytics (2021-2023)'
  },
  {
    title: 'SolimApp',
    description: 'Cofounder of SolimApp - An Android App designed to help people identifying points for receiving donations (2017)',
    link: 'http://www.solimapp.com'
  }
];

export default function Home() {
  const [expandedWork, setExpandedWork] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedWork === index) {
      setExpandedWork(null);
    } else {
      setExpandedWork(index);
    }
  };

  return (
    <main className="px-12 py-8">
      <style jsx>{`
        .block-button p {
          color: #9CA3AF;
          transition: color 0.2s ease;
        }
        .block-button:hover p {
          color: white;
        }
        .period {
          color: #9CA3AF;
          transition: color 0.2s ease;
        }
        .block-button:hover .period {
          color: white;
        }
      `}</style>
      <div className="max-w-[800px] mx-auto">
        <div>
          <h1 className="text-4xl font-bold mb-6">Fernando Molina</h1>
          <p className="text-xl text-gray-300 mb-12">
            Minted as Argentinian 🇦🇷, Bostero 💙💛 and Data Entusiasthic 🤖
          </p>
        </div>

        {/* Genesis Block */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Genesis Block</h2>
          <div className="genesis-contact-links">
            <a href="mailto:fergmolina90@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              fergmolina90@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/molinafer/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
              LinkedIn
            </a>
            <a href="https://x.com/fergmolina" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter/X
            </a>
            <a href="https://dune.com/fergmolina" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="mr-1.5">
                <path d="M5 3v16h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z"/>
              </svg>
              Dune
            </a>
            <a href="https://bloquex.me" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="mr-1.5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              Bloque X
            </a>
            <a href="https://github.com/fergmolina" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </section>

        {/* Proof of Work */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Proof of Work</h2>
          <div className="connected-blocks">
            {workExperience.map((work, index) => (
              <div key={index}>
                <div 
                  className={`block-button ${work.status === 'In Progress' ? 'in-progress' : 'confirmed'} cursor-pointer expandable-block work-item ${expandedWork === index ? 'expanded' : ''}`}
                  onClick={() => toggleExpand(index)}
                >
                  <div>
                    <h3>{work.title}</h3>
                    <p>{work.company}</p>
                    {work.location && (
                      <p>{work.location}</p>
                    )}
                    <p className="period">{work.period}</p>
                    
                    {expandedWork === index && (
                      <div className="mt-3 pt-3 border-t border-gray-700 details">
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          {work.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center">
                    {work.status === 'In Progress' ? (
                      <>
                        <span className="text-yellow-400 text-sm font-medium whitespace-nowrap">In Progress</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400 flex-shrink-0 ml-[5px]">
                          <path d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 5V10L13.3333 11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    ) : (
                      <>
                        <span className="text-green-500 text-sm font-medium">Confirmed</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 flex-shrink-0 ml-[5px]">
                          <path d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7.5 10L9.16667 11.6667L12.5 8.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </div>
                </div>
                {index < workExperience.length - 1 && (
                  <div className="connector-line" style={{ position: 'absolute', width: '2px', height: '20px', backgroundColor: '#374151', left: '28px', top: '100%', zIndex: '-1' }}></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Academic Proof */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Academic Proof</h2>
          <div className="connected-blocks">
            <div>
              <div className="block-button confirmed">
                <div>
                  <h3>Di Tella University</h3>
                  <p>MSc in Management & Analytics; CGPA: 9/10</p>
                  <p className="text-gray-500">Buenos Aires, Argentina</p>
                  <p className="text-gray-500">2020 – 2021</p>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 text-sm font-medium">Confirmed</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 flex-shrink-0 ml-[5px]">
                    <path d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="connector-line" style={{ position: 'absolute', width: '2px', height: '20px', backgroundColor: '#374151', left: '28px', top: '100%', zIndex: '-1' }}></div>
            </div>
            
            <div>
              <div className="block-button confirmed">
                <div>
                  <h3>National Technological University</h3>
                  <p>Engineering in Information Systems; CGPA: 7.7/10</p>
                  <p className="text-gray-500">Buenos Aires, Argentina</p>
                  <p className="text-gray-500">2009 – 2017</p>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 text-sm font-medium">Confirmed</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 flex-shrink-0 ml-[5px]">
                    <path d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="connector-line" style={{ position: 'absolute', width: '2px', height: '20px', backgroundColor: '#374151', left: '28px', top: '100%', zIndex: '-1' }}></div>
            </div>
            
            <div>
              <div className="block-button confirmed">
                <div>
                  <h3>National Technological University</h3>
                  <p>University Systems Analyst; CGPA: 7.7/10</p>
                  <p className="text-gray-500">Buenos Aires, Argentina</p>
                  <p className="text-gray-500">2009 – 2017</p>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 text-sm font-medium">Confirmed</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 flex-shrink-0 ml-[5px]">
                    <path d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OP Codes Unlocked */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Op Codes (Skills)</h2>
          <div className="op-codes-skills">
            {skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </section>

        {/* Mainnet Deployments */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Mainnet Deployments (Projects)</h2>
          <div className="connected-blocks">
            {mainnetDeployments.map((deployment, index) => (
              <div key={index}>
                <div className={`block-button ${deployment.status === 'In Progress' ? 'in-progress' : 'confirmed'}`}>
                  <div>
                    <h3>{deployment.title}</h3>
                    <p>{deployment.description}</p>
                    {deployment.link && (
                      <a 
                        href={deployment.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block mt-1 no-underline"
                      >
                        <p className="text-[#9CA3AF] flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                          <span className="ml-1">{deployment.link.replace(/^https?:\/\/(www\.)?/, '')}</span>
                        </p>
                      </a>
                    )}
                  </div>
                  <div className="flex items-center">
                    {deployment.status === 'In Progress' ? (
                      <>
                        <span className="text-yellow-400 text-sm font-medium whitespace-nowrap">In Progress</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400 flex-shrink-0 ml-[5px]">
                          <path d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 5V10L13.3333 11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    ) : (
                      <>
                        <span className="text-green-500 text-sm font-medium">Confirmed</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 flex-shrink-0 ml-[5px]">
                          <path d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7.5 10L9.16667 11.6667L12.5 8.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </div>
                </div>
                {index < mainnetDeployments.length - 1 && (
                  <div className="connector-line" style={{ position: 'absolute', width: '2px', height: '20px', backgroundColor: '#374151', left: '28px', top: '100%', zIndex: '-1' }}></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Offchain */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Offchain</h2>
          <div className="connected-blocks">
            {offchainActivities.map((activity, index) => (
              <div key={index}>
                <div className="block-button confirmed">
                  <div>
                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>
                    {activity.link && (
                      <a 
                        href={activity.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block mt-1 no-underline"
                      >
                        <p className="text-[#9CA3AF] flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                          <span className="ml-1">{activity.link.replace(/^https?:\/\/(www\.)?/, '')}</span>
                        </p>
                      </a>
                    )}
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 text-sm font-medium">Confirmed</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 flex-shrink-0 ml-[5px]">
                      <path d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.5 10L9.16667 11.6667L12.5 8.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                {index < offchainActivities.length - 1 && (
                  <div className="connector-line" style={{ position: 'absolute', width: '2px', height: '20px', backgroundColor: '#374151', left: '28px', top: '100%', zIndex: '-1' }}></div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
