// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import config from './index.json';

interface PersonCardProps {
  name: string;
  position: string;
  photo: string;
  linkedin: string;
}

function PersonCard({ name, position, photo, linkedin }: PersonCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="filter grayscale w-full object-cover sm:h-60 md:h-72 lg:h-80"
        src={photo}
        alt={name}
      />
      <div className="p-4">
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="font-bold text-gray-800 hover:text-primary"
        >
          {' '}
          <div className="flex items-center mb-2">
            {/* <FontAwesomeIcon icon={faLinkedin} className="text-linkedin mr-2" /> */}

            {name}
          </div>
        </a>

        <p className="text-gray-600">{position}</p>
      </div>
    </div>
  );
}

const About = () => {
  const { about } = config;
  // const { logo, name: companyName } = company;
  const { sections } = about;
  
  return (
    <div className="container mx-auto py-6 lg:px-48" id="team">
      {/* <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-black pb-4">
        Ekibimiz
      </h1> */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2">
        {sections.map((person) => (
          <PersonCard
            key={person.alt}
            name={person.name}
            position={person.position}
            photo={person.img}
            linkedin={person.linkedin}
          />
        ))}
      </div>
    </div>
  );

};
export default About;
