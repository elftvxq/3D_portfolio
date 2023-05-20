/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { educations } from '../constants';

const SchoolList = ({ experiences, index, school_name, duration, major }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[1200px] w-full'
  >
    <p className='text-white font-black text-[20px]'>{school_name}</p>
    <div className='mt-6'>
      <ul
        className='text-white tracking-wider text-[18px]'
        style={{ listStyleType: 'disc' }}
      >
        {experiences.map((exp, index) => (
          <li key={`${index}-${exp}`}>{`${exp}`}</li>
        ))}
      </ul>
      <div className='mt-7 flex justify-evenly items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>{major}</p>
          <span className='mt-1 text-secondary text-[16px]'>{duration}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const Educations = () => {
  return (
    <div className='bg-black-100 rounded-[20px]'>
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[200px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Schools</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} mt-20 pb-14 flex flex-wrap gap-7 justify-center`}
      >
        {educations.map((experience, index) => (
          <SchoolList
            key={experience.school_name}
            index={index}
            {...experience}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Educations, '');
