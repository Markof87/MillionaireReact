function Question({ domanda, gestisciRisposta, numeroDomanda, totaleDomande, rispostaSelezionata, rispostaCorretta }) {
  return (
    <div className="question">
      <h2>Domanda {numeroDomanda} di {totaleDomande}</h2>
      <p>{domanda.domanda}</p>
      <div className="answers">
        {domanda.opzioni.map((opzione, index) => {
            let classe = "answer-button";
            if(rispostaSelezionata) {
                if(opzione === rispostaCorretta) {
                    classe = "answer-button correct"
                } else if(opzione === rispostaSelezionata) {
                    classe = "answer-button wrong";
                }
            }
            return (
            <button key={index} onClick={() => gestisciRisposta(opzione)} className={classe} disabled={!!rispostaSelezionata}>
                {opzione}
            </button>
            )
        })}       
        </div>
    </div>
  );
}

export default Question;