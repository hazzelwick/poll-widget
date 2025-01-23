import { useState, useEffect } from "react";
import "./App.css";

interface PollOption {
  id: string;
  text: string;
}

interface PollResults {
  [key: string]: number;
}

interface PollWidgetProps {
  pollId: string;
  question: string;
  options: PollOption[];
}

const App: React.FC<PollWidgetProps> = ({ pollId, question, options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [results, setResults] = useState<PollResults>({});
  const [hasVoted, setHasVoted] = useState(false);
  const storageKey = `poll_${pollId}`;

  useEffect(() => {
    const storedResults = localStorage.getItem(storageKey);
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    } else {
      const initialResults = options.reduce((acc, option) => {
        acc[option.id] = 0;
        return acc;
      }, {} as PollResults);
      setResults(initialResults);
    }
  }, [pollId, options, storageKey]);

  const handleVote = () => {
    if (selectedOption && !hasVoted) {
      const newResults = {
        ...results,
        [selectedOption]: (results[selectedOption] || 0) + 1,
      };
      setResults(newResults);
      setHasVoted(true);
      localStorage.setItem(storageKey, JSON.stringify(newResults));
    }
  };

  const totalVotes = Object.values(results).reduce(
    (sum, count) => sum + count,
    0
  );

  return (
    <div className="container">
      <h2 className="question">{question}</h2>

      <div className="options">
        {options.map((option) => (
          <div key={option.id} className="option">
            <input
              type="radio"
              id={`${pollId}-${option.id}`}
              name={`poll-${pollId}`}
              value={option.id}
              disabled={hasVoted}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="radio"
            />
            <label htmlFor={`${pollId}-${option.id}`} className="label">
              {option.text}
            </label>
            {hasVoted && (
              <div className="result">
                {Math.round((results[option.id] / totalVotes) * 100)}% (
                {results[option.id]} votes)
              </div>
            )}
          </div>
        ))}
      </div>

      {!hasVoted && (
        <button
          onClick={handleVote}
          disabled={!selectedOption}
          className="vote-button"
        >
          Vote
        </button>
      )}

      {hasVoted && <p className="total-votes">Total votes: {totalVotes}</p>}
    </div>
  );
};

export default App;
