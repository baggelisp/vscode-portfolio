const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <p>
        Web developer with 3 years of experience in web technologies, including
        designing and implementing user interfaces, testing, debugging.
      </p>
      <p>
        Love responsibility, simplicity, minimalism and extremely interested in
        web-everything.
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
