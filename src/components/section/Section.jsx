import './Section.css';

const Section = ({children,dataSmall}) => {

    const {secId,description,titleUpper,titleLower,img} = dataSmall;
  
  return (
    <section className="section container" id={secId}>
        <div className="bg-primary p-1 divider rounded my-3"></div>
        <div className="section-title d-flex">
            <div className="bg-faded p-5 d-flex ms-auto rounded">
                <h2 className="section-heading mb-0">
                    <span className="section-heading-upper">{titleUpper}</span>
                    <span className="section-heading-lower">{titleLower}</span>
                </h2>
            </div>
        </div>
        <img className="section-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={img} alt="..." />
        <div className="section-description d-flex me-auto">
            <div className="bg-faded p-5 rounded"><p className="mb-0">
                {description}
            </p></div>
        </div>
        <div className="section-content my-3">
            {children}
        </div>
    </section>
  )
}

export default Section;
