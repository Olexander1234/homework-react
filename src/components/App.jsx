import React, { useState } from "react";
import { Statistics } from "./FeedBack/Statistics/Statistics";
import { FeedbackOptions } from "./FeedBack/FeedbackOptions/FeedbackOptions";
import ColorPicker from "ColorPicker/ColorPicker";
import { Dropdown } from "Dropdown/Dropdown";

export const App = () => {
  const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (type) => {
    switch (type) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotal = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    const total = countTotal();
    if (total === 0) {
      return 0;
    }
    return (good / total) * 100;
  };

  return (
    <>
      <Dropdown />
      <ColorPicker options={colorPickerOptions} />
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleFeedback}
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotal()}
        positivePercentage={positivePercentage()}
      />
    </>
  );
}