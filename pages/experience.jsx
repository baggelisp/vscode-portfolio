const ExperiencePage = () => {
    return (
      <>
        <h3>Experience</h3>
      </>
    );
  };
  
  export async function getStaticProps() {
    return {
      props: { title: 'Experience' },
    };
  }
  
  export default ExperiencePage;
  