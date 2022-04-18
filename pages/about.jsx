const AboutPage = () => {
  return (
    <>
      <div style={{marginTop: '30px'}}>
        <h2>A Little Bit About Me</h2>
      </div>
      <div >
          <p>
            Love responsibility, simplicity, minimalism and extremely interested in
            web-everything.
          </p>
      </div>

      <div style={{marginTop: '30px'}}>
        <h2>Experience</h2>
      </div>
      <div>
          <p>
            Web developer with 3 years of experience in web technologies, including
            designing and implementing user interfaces, testing, debugging.
          </p>
      </div>

      <div style={{marginTop: '30px'}}>
        <h2>Education</h2>
      </div>
      <div>
        <p>University of Patras</p>
        <p>Master of Engineering degree [5 Year Diploma], Electronics and Computer Engineering</p>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
