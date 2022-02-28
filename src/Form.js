import React, { useEffect, useRef, useCallback } from 'react';

const Form = () => {
  return (
    <div className="form-wrapper">
      <form>
        <p>
          <label for="t1">What's your name?</label>
          <input type="text" id="t1" name="text" required />
        </p>
        <p>
          <label for="t2">What's your e-mail address?</label>
          <input type="email" id="t2" name="email" required />
        </p>
        <p>
          <label for="t3">What's your birth date?</label>
          <input type="date" id="t3" name="email" required />
        </p>
        <p>
          <label for="t4">What's your favorite color? Please pick!</label>
          <input type="color" id="t4" name="color" required />
        </p>
        <p>
          <label for="t5">What's your salary (in 1K))?</label>
          <input type="range" min="0" max="50" value="25" step="10" name="salary" id="t5" />
        </p>
      </form>
    </div>
  );
};

export default Form;