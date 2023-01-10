
function App() {
  return (
    <div className="container">
      <form className="form" action="">
        <fieldset className="form__fieldset">
          <legend className="form__legend">Kalkulator walut</legend>
          <p>
            <label className="label">
              <span className="label__title">Wymieniam*</span>
              <input
                className="label__input label__input--pln"
                name="amount"
                type="number"
                min="1"
                placeholder="Podaj wartość w PLN"
                required
              />
            </label>
          </p>
          <p>
            <label className="label">
              <span className="label__title">Otrzymam</span>
              <input
                className="label__input label__input--disabled"
                name="amount"
                type="number"
                min="1"
                disabled
              />
              <select className="label__input">
                <option value="USD">$</option>
                <option value="€">€</option>
                <option value="NOK">NOK</option>
              </select>
            </label>
          </p>
          <button className="form__button">Przelicz</button>
          <p className="form__result"></p>
          <p className="form__paragraph">*pole obowiązkowe</p>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
