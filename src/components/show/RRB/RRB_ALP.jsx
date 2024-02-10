import React from 'react';

const RRB_ALP = () => {
  const examPapers = [
    {
      title: "RRB ALP morning paper 2023",
      attemptLink: "/Quiz",
      downloadLink: "/"
    },
    {
      title: "RRB ALP evening paper 2023",
      attemptLink: "/Quiz",
      downloadLink: "/"
    }
    // Add more papers as needed
  ];

  return (
    <div className="modal fade rrb_alp" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">RRB ALP</h5>
          </div>

          <div className="modal-body">
            <ol className='y2023'>
              {examPapers.map((paper, index) => (
                <li key={index}>
                  {paper.title}
                  <a className="btn btn-outline-primary" href={paper.downloadLink} >Download</a>
                  <a className="btn btn-outline-success mr-2" href={paper.attemptLink} target='_blank' rel="noopener noreferrer">Attempt</a>
                  <hr/>
                </li>
              ))}
            </ol>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RRB_ALP;
