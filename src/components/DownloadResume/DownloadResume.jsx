

const DownloadResume = () => {
    const cvPath = '/CV/Tatiana Privezentseva__CV.pdf';
  
    return (
      <a href={cvPath} download="Tatiana Privezentseva__CV.pdf">
        <button>My CV</button>
      </a>
    );
  };

  export default DownloadResume;