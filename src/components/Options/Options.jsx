import css from "./Options.module.css";

const Options = ({ options, onLeaveFeedback, onReset, hasFeedback }) => {
  return (
    <div className={css.wrapper}>
      {options.map((option) => (
        <button
          key={option}
          className={css.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}

      {hasFeedback && (
        <button className={css.button} onClick={onReset}>
          reset
        </button>
      )}
    </div>
  );
};

export default Options;
