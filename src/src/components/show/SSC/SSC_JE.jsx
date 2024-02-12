import React from 'react';
import { Link } from 'react-router-dom';

const SSC_JE = () => {
  const db = 'ssc';
  const examPapers = [
    {
      title: "SSC JE morning paper 2023",
      attemptLink: `/${db}/ssc_je_2022`,
      downloadLink: "/download"
    },
    {
      title: "SSC JE Pre 16 OCT morning paper 2022",
      attemptLink: `/${db}/ssc_je_civil_pre_16_11_2022_s1`,
      downloadLink: "/download"
    }
    // Add more papers as needed
  ];

  return (
    <div className="modal fade ssc_je" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">SSC JE</h5>
          </div>

          <div className="modal-body">
            <ol className='y2023'>
              {examPapers.map((paper, index) => (
                <li key={index}>
                  {paper.title}
                  <Link
                    to={paper.downloadLink}
                    className="btn btn-outline-primary"
                    aria-label={`Download ${paper.title}`}
                  >
                    Download
                  </Link>
                  <Link
                    to={paper.attemptLink}
                    className="btn btn-outline-success mr-2"
                    target='_blank'
                    rel="noopener noreferrer"
                    aria-label={`Attempt ${paper.title}`}
                  >
                    Attempt
                  </Link>
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

export default SSC_JE;
