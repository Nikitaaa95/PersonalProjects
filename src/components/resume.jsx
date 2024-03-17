import React from 'react';

function AboutMe() {
  return (
    <div className="container">
      <section className="text-center">
      <div>
          <a href="/resume.pdf" download className="btn btn-primary">Download Resume</a>
      </div>
      <br></br>
        <h3>Essential Skills</h3>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>Microsoft Excel</td>
            </tr>
            <tr>
              <td>Databases (e.g., Academic OneFile, Alberts, EconLit)</td>
            </tr>
            <tr>
              <td>OnePageCRM and Salesforce</td>
            </tr>
            <tr>
              <td>SQL</td>
            </tr>
            <tr>
              <td>Using Social Media for Customer Engagement</td>
            </tr>
            <tr>
              <td>Strong Work Ethic</td>
            </tr>
            <tr>
              <td>Adaptability to Work Conditions</td>
            </tr>
            <tr>
              <td>Gretl</td>
            </tr>
          </tbody>
        </table>

      </section>
    </div>
  );
}

export default AboutMe;

