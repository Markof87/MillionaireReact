import { useState } from "react";
import questions from "./questions";
import Question from "./Question";

function Quiz() {

    const [indiceDomanda, setIndiceDomanda] = useState(0);
    const [punteggio, setPunteggio] = useState(0);
    const [fineQuiz, setFineQuiz] = useState(false);
    const [rispostaSelezionata, setRispostaSelezionata] = useState(null);

    function gestisciRisposta(rispostaSelezionata) {

        if(fineQuiz) return;

        setRispostaSelezionata(rispostaSelezionata);

        const domandaCorrente = questions[indiceDomanda];
        const isCorrect = rispostaSelezionata === domandaCorrente.rispostaCorretta;

        if (isCorrect) 
            setPunteggio(punteggio + 1);

        setTimeout(() => {
            const prossimo = indiceDomanda + 1;
            if(prossimo < questions.length) 
                setIndiceDomanda(prossimo);
            else
                setFineQuiz(true);
            setRispostaSelezionata(null);
        }, 1500);
    }

    function resetQuiz() {
        setIndiceDomanda(0);
        setPunteggio(0);
        setFineQuiz(false);
    }

    return (
        <>
            {fineQuiz ? (
                <div>
                    <h2>Quiz Finito!</h2>
                    <p>Il tuo punteggio: {punteggio} su {questions.length}</p>
                    <button onClick={resetQuiz}>Ricomincia</button>
                </div>
            ) : (
                <Question
                    domanda={questions[indiceDomanda]}
                    gestisciRisposta={gestisciRisposta}
                    numeroDomanda={indiceDomanda + 1}
                    totaleDomande={questions.length}
                    rispostaSelezionata={rispostaSelezionata}
                    rispostaCorretta={questions[indiceDomanda].rispostaCorretta}
                />
            )}
        </>
    );

}

export default Quiz;