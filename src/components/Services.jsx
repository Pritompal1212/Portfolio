
const Services = () => {
  return (
    <div className="container">
      <h3>My Services</h3>
      <div className="row row-cols-1 row-cols-lg-3 justify-content-around align-items-center gap-4 mt-4">
        <div
          className="col card card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg d-flex justify-content-center align-items-center"
          style={{
            height: "300px",
            width: "400px",
            backgroundImage: "url('unsplash-photo-1.jpg')"
          }}
          
          >
          Frontend Developer
        </div>
        <div
          className="col card card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg d-flex justify-content-center align-items-center"
          style={{
            height: "300px",
            width: "400px",
            backgroundImage: "url('unsplash-photo-1.jpg')"
          }}
          >
          Frontend Developer
        </div>
        <div
          className="col card card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg d-flex justify-content-center align-items-center"
          style={{
            height: "300px",
            width: "400px",
            backgroundImage: "url('unsplash-photo-1.jpg')"
          }}
        >
          Frontend Developer
        </div>
      </div>

      {/* CSS styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .col.card-cover {
            height: 320px !important;
            width: 284px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;



    // return (
    //     <>
    //         <div className="container">
    //             <h3>My Services</h3>
                
    //             <div className="row row-cols-1 row-cols-lg-3 justify-content-around align-items-center gap-4">
    //                 <div className="col card card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg d-flex justify-content-center align-items-center" style={{
    //                     // height: "320px",
    //                     // width: "284px"
    //                     // this is for small device
    //                     height: "300px",
    //                     width: "400px"
                        

    //                 }} >Frontend Devoloper</div>
    //                 <div className="col card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg d-flex justify-content-center align-items-center" style={{
    //                     height: "300px",
    //                     width: "400px"
    //                 }} >Frontend Devoloper</div>
    //                 <div className="col card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg d-flex justify-content-center align-items-center" style={{
    //                     height: "300px",
    //                     width: "400px"
    //                 }} >Frontend Devoloper</div>
    //             </div>


    //         </div>
    //     </>
    // )
