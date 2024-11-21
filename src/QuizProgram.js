import { useState } from "react";
function QuizProgram(){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null)
  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value)
  }

    const nextQuestion = () => {
        if (currentQuestion < 9) {  
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null)
        }
        else{
          alert("quiz is completed ")
        }
      }
return (
  <div>
    {currentQuestion === 0 && (
      <div>
        <h1>Q1. Who discovered JavaScript?</h1>
        <input type="radio" name="value" value="Brendan Eich" onChange={handleAnswerChange} />
        Brendan Eich
        <br />
        <input type="radio" name="value" value="Guido van Rossum" onChange={handleAnswerChange} />
        Guido van Rossum
        <br />
        <input type="radio" name="value" value="Bjarne Stroustrup" onChange={handleAnswerChange} />
        Bjarne Stroustrup
        <br />
        <input type="radio" name="value" value="James Gosling" onChange={handleAnswerChange} />
        James Gosling
        <br />
        <button onClick={nextQuestion} disabled={!selectedAnswer}>
          Next
        </button>
      </div>
    )}

    {currentQuestion === 1 && (
      <div>
        <h2>Q2. How to write an IF statement in JavaScript?</h2>
        <input type="radio" name="value" value="if i==5" onChange={handleAnswerChange} />
        if i==5
        <br />
        <input type="radio" name="value" value="if i===6" onChange={handleAnswerChange} />
        if i===6
        <br />
        <input type="radio" name="value" value="if i==5 then" onChange={handleAnswerChange} />
        if i==5 then
        <br />
        <input type="radio" name="value" value="if(i==5)" onChange={handleAnswerChange} />
        if(i==5)
        <br />
        <button onClick={nextQuestion} disabled={!selectedAnswer}>
          Next
        </button>
      </div>
    )}

    {currentQuestion === 2 && (
      <div>
        <h3>Q3. How to write an IF statement for executing some code if "i" is NOT equal to 5?</h3>
        <input type="radio" name="value" value="if i =! 5 then" onChange={handleAnswerChange} />
        if i =! 5 then
        <br />
        <input type="radio" name="value" value="if i===5" onChange={handleAnswerChange} />
        if i===5
        <br />
        <input type="radio" name="value" value="if i==5 then" onChange={handleAnswerChange} />
        if i==5 then
        <br />
        <input type="radio" name="value" value="if(i !== 5)" onChange={handleAnswerChange} />
        if(i !== 5)
        <br />
        <button onClick={nextQuestion} disabled={!selectedAnswer}>
          Next
        </button>
      </div>
    )}
    {currentQuestion === 3 && (
      <div>
        <h4>Q4. How do you round the number 7.25, to the nearest integer?</h4>
        <input type="radio" name="value" value="Math.rnd(7.25)" onChange={handleAnswerChange} />
        Math.rnd(7.25)
        <br />
        <input type="radio" name="value" value="Math.round(7.25)" onChange={handleAnswerChange} />
        Math.round(7.25)
        <br />
        <input type="radio" name="value" value="round(7.25)" onChange={handleAnswerChange} />
        round(7.25)
        <br />
        <input type="radio" name="value" value="rnd(7.25)" onChange={handleAnswerChange} />
        rnd(7.25)
        <br />
        <button onClick={nextQuestion} disabled={!selectedAnswer}>
          next
        </button>
      </div>
    )}
     {currentQuestion === 4 && (
      <div>
        <h1>Q5. Which of the following methods is used to remove the last element from an array in JavaScript?</h1>
        <input type="radio" name="value" value="shift()" onChange={handleAnswerChange} />
       shift()
        <br />
        <input type="radio" name="value" value="pop() " onChange={handleAnswerChange} />
       pop()
        <br />
        <input type="radio" name="value" value=" delete()" onChange={handleAnswerChange} />
        delete()
        <br />
        <input type="radio" name="value" value=" remove()" onChange={handleAnswerChange} />
       remove()
        <br />
        <button onClick={nextQuestion} disabled={!selectedAnswer}>
          Next
        </button>
      </div>
    )}

{currentQuestion === 5 && (
      <div>
        <h1>Q6.Which of the following methods is used to add elements to the end of an array in JavaScript? </h1>
        <input type="radio" name="value" value="append() " onChange={handleAnswerChange} />
       append
        <br />
        <input type="radio" name="value" value=" push()" onChange={handleAnswerChange} />
       push
        <br />
        <input type="radio" name="value" value=" insert()" onChange={handleAnswerChange} />
        insert
        <br />
        <input type="radio" name="value" value="add() " onChange={handleAnswerChange} />
       add
        <br />
        <button onClick={nextQuestion} disabled={!selectedAnswer}>
          Next
        </button>
      </div>
    )}

{currentQuestion === 6 && (
      <div>
        <h1>Q7. Which of the following is used to handle exceptions in JavaScript?</h1>
        <input type="radio" name="value" value="catch " onChange={handleAnswerChange} />
       catch
        <br />
        <input type="radio" name="value" value=" try" onChange={handleAnswerChange} />
      try
        <br />
        <input type="radio" name="value" value="throw " onChange={handleAnswerChange} />
      throw
        <br />
        <input type="radio" name="value" value=" all of above" onChange={handleAnswerChange} />
        all of the above
        <br />
        <button onClick={nextQuestion} disabled={!selectedAnswer}>
          Next
        </button>
      </div>
    )}


{currentQuestion === 7 && (
      <div>
        <h1>Q8.  Which of the following is a falsy value in JavaScript?</h1>
        <input type="radio" name="value" value="1" onChange={handleAnswerChange} />
      1
        <br />
        <input type="radio" name="value" value="false" onChange={handleAnswerChange} />
   false
        <br />
        <input type="radio" name="value" value="[]" onChange={handleAnswerChange} />
        []
        <br />
        <input type="radio" name="value" value="0" onChange={handleAnswerChange} />
        0
        <br />
        <button onClick={nextQuestion} disabled={!selectedAnswer}>
          Next
        </button>
      </div>
    )}


{currentQuestion === 8 && (
      <div>
        <h1>Q9.Which of the following is used to stop a loop in JavaScript?  </h1>
        <input type="radio" name="value" value="continue" onChange={handleAnswerChange} />
       continue
        <br />
        <input type="radio" name="value" value="exit" onChange={handleAnswerChange} />
        exit
        <br />
        <input type="radio" name="value" value="break" onChange={handleAnswerChange} />
      break
        <br />
        <input type="radio" name="value" value="stop" onChange={handleAnswerChange} />
        stop
        <br />
        <button onClick={nextQuestion} disabled={!selectedAnswer}>
          Next
        </button>
      </div>
    )}

{currentQuestion === 9 && (
      <div>
        <h1>Q10. what does this keyword refer in javscript?</h1>
        <input type="radio" name="value" value="current object" onChange={handleAnswerChange} />
      current object
        <br />
        <input type="radio" name="value" value="global object" onChange={handleAnswerChange} />
     global object
        <br />
        <input type="radio" name="value" value="function" onChange={handleAnswerChange} />
       function
        <br />
        <input type="radio" name="value" value="previous object" onChange={handleAnswerChange} />
   previous object
        <br />
        <button onClick={nextQuestion} disabled={!selectedAnswer}>
          Next
        </button>
      </div>
    )}
    
  </div>
);
}
export default QuizProgram;  





