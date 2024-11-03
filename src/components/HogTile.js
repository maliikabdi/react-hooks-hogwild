import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';

const HogTile = ({ hog, hideHog }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Card className="ui eight wide column" onClick={toggleDetails}>
      <img src={hog.image} alt={hog.name} />
      <Card.Content>
        <Card.Header>{hog.name}</Card.Header>
        {showDetails && (
          <Card.Description>
            <p><strong>Specialty:</strong> {hog.specialty}</p>
            <p><strong>Weight:</strong> {hog.weight} kg</p>
            <p><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
            <p><strong>Highest Medal Achieved:</strong> {hog["highest medal achieved"]}</p>
            <button onClick={() => hideHog(hog.name)}>Hide</button>
          </Card.Description>
        )}
      </Card.Content>
    </Card>
  );
};

export default HogTile;
