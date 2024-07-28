import React from 'react';


const MissionVision = () => {
  return (
    <div className="mission-vision  center-container">
      <table>
        <thead>
          <tr>
            <th>Our Mission</th>
            <th>Our Vision</th>
            <th>Our Infrastructure</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="images/success.png" style={{width:'', height:'129px'}} alt="Mission" />
              <p>We are committed to providing consistency in our work and solutions.</p>
              <a href="Mission.html#mission">Read More</a>
            </td>
            <td>
              <img src="images/vision.jpg" style={{width:'', height:'128px'}} alt="Vision" />
              <p>To render competent and personalized services to all our clients.</p>
              <a href="Vision.html#vision">Read More</a>
            </td>
            <td>
              <img src="images/infrastructure.jpg" style={{width:'', height:'128px'}} alt="Infrastructure" />
              <p>Our own office building is located in the heart of the city at T.Nagar in Chennai.</p>
              <a href="Infrastructure.html#infrastructure">Read More</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MissionVision;
