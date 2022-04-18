const ExperiencePage = () => {
    return (
      <>
        <div>
          <div>
            <h2>Experience</h2>
          </div>
          <div style={{marginTop: '30px'}}>
            <div>
              <h2>● Web Developer</h2>
              <p><a target="_blank" href="https://www.zulutrade.com/">ZuluTrade</a> - Full time</p>
              <p>November 2020 - November 2021</p>
              <p>Athens, Greece</p>
            </div>
          </div>
          <div style={{marginTop: '30px'}}>
            <div>
              <h2>● UI Designer - Front End Developer</h2>
              <p><a target="_blank" href="https://www.prorata.gr/">Prorata</a> - Part time</p>
              <p>November 2020 - June 2021</p>
              <p>Athens, Greece</p>
            </div>
          </div>
          <div style={{marginTop: '30px'}}>
            <div>
              <h2>● Junior Software Developer</h2>
              <p><a target="_blank" href="https://projectagora.com/">Project Agora</a> - Full time</p>
              <p>Jule 2019 - November 2020</p>
              <p>Patras, Greece</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export async function getStaticProps() {
    return {
      props: { title: 'Experience' },
    };
  }
  
  export default ExperiencePage;
  