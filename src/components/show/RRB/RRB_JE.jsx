import React from 'react';

const RRB_JE = () => {
  var db = 'rrb' ;

  const examPapers = [
    {
      title: "RRB JE morning paper 2023",
      attemptLink: `/${db}/rrb_je_2022`,
      downloadLink: "/download"
    },
    {
      title: "RRB JE evening paper 2023",
      attemptLink: `/${db}/rrb_je_2023`,
      downloadLink: "/download"
    }
    // Add more papers as needed
  ];

  return (
    <div className="modal fade rrb_je" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">RRB JE</h5>
          </div>

          <div className="modal-body">
            <ol className='y2023'>
              {examPapers.map((paper, index) => (
                <li key={index}>
                  {paper.title}
                  <a
                    className="btn btn-outline-primary"
                    href={paper.downloadLink}
                    aria-label={`Download ${paper.title}`}
                  >
                    Download
                  </a>
                  <a
                    className="btn btn-outline-success mr-2"
                    href={paper.attemptLink}
                    target='_blank'
                    rel="noopener noreferrer"
                    aria-label={`Attempt ${paper.title}`}
                  >
                    Attempt
                  </a>
                  <hr />
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

export default RRB_JE;
