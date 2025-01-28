import React from 'react';

interface TimelineItem {
  type: 'education' | 'experience';
  title: string;
  organization: string;
  date: string;
  location?: string;
  description?: string;
  skills?: string[];
}

const educationItems: TimelineItem[] = [
  {
    type: 'education',
    title: 'B.Tech in Information Technology',
    organization: 'Dr. Ambedkar Institute of Technology, Kanpur',
    date: '2018 – 2022',
    description: 'Graduated with a CGPA of 8.42, focusing on software engineering, algorithms, and databases.',
    skills: ['Python', 'Java', 'SQL', 'Data Structures', 'Algorithms', "DBMS", "Operating Systems", "Computer Networks", "Web Development"]
  },
  {
    type: 'education',
    title: 'Higher Secondary School Certificate (Math & Science)',
    organization: 'Mother Teresa Mission Higher Secondary School',
    date: '2017',
    description: 'Achieved 86.67% in Math and Science.',
    skills: ['Physics', 'Mathematics', 'Chemistry', 'English', 'Computer Science']
  }
];

const experienceItems: TimelineItem[] = [
  {
    type: 'experience',
    title: 'Software Engineer 3',
    organization: 'ThoughtSpot',
    date: 'Aug 2022 – Present',
    description:
    'As a Software Engineer at ThoughtSpot, I have been instrumental in developing and optimizing key features and services. Migrated REST APIs to GraphQL, enhancing API performance and security, while streamlining data access. Spearheaded the transition from Angular to React on the Embrace platform, achieving a 20% performance improvement and delivering a more modern user experience.  ' +
    'Additionally, I supervised a team of three engineers, ensuring timely delivery of high-quality solutions. Leveraged microservices architecture and Node.js to implement scalable, high-performance APIs with optimized memory usage. Actively contributed to scalable software solutions by implementing best practices in software development and CI/CD pipelines.',
    skills: [ 'React.js', 'GraphQL',"Typescript" ,'Node.js', 'SQL',"Java", 'API Development', "Agile Methodologies", "Team Leadership"]
  },
  {
    type: 'experience',
    title: 'Web Developer Intern',
    organization: 'WebStudent Designers',
    date: 'Jun 2021 – Oct 2021',
    description:
      'Designed and developed responsive websites, collaborated with teams to enhance user experience, and delivered projects ahead of schedule.',
    skills: ['HTML', 'CSS', 'Bootstrap', 'WordPress', 'SEO']
  }
];

const TimelineItem: React.FC<{ item: TimelineItem }> = ({ item }) => (
  <div className="mb-8 relative">
    <div className="absolute top-0 left-0 w-2 h-full bg-gray-200 dark:bg-gray-700" />
    <div className="ml-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="absolute left-0 top-4 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800" />
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{item.organization}</p>
      <p className="text-sm text-gray-500 dark:text-gray-500">{item.date}</p>
      {item.location && (
        <p className="text-sm text-gray-500 dark:text-gray-500">{item.location}</p>
      )}
      {item.description && (
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
      )}
      {item.skills && (
        <div className="mt-2 flex flex-wrap gap-2">
          {item.skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Timeline: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Timeline</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Experience</h2>
          {experienceItems.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Education</h2>
          {educationItems.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
