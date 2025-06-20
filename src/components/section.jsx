import { Children } from 'react';
import '../styles/section.css';

const Section = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={`section ${className}`}>
      {children}
    </section>
  );
};

export default Section;
