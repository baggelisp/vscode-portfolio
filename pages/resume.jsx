const ResumePage = () => {
    return (
      <>
        <div>
            <div>
                <h2>DOWNLOAD MY CV</h2>
                <p>Find out what I've accomplished over the years.</p>
            </div>
            <div>
                <a target="_blank" href="/files/Vangelis_Spathonis__CV.pdf">Download Resume</a>
            </div>
        </div>
      </>
    );
  };
  
  export async function getStaticProps() {
    return {
      props: { title: 'Resume' },
    };
  }
  
  export default ResumePage;
  