import { useContext, useEffect, useState } from "react";
import { Dropdown, DropdownButton, InputGroup } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";
import { AppContext } from "../AppProvider";
import { TYPES } from "../service";
const Rectangle = () => {
  const { jsonList } = useContext(AppContext);
  const [selectCurrency, setSelectCurrency] = useState("USD");
  const [foreign, setForeign] = useState(0);
  const [result, setResult] = useState(0);
  useEffect(() => {
    currencyCalculator();
  }, [foreign, selectCurrency]);
  const currencyCalculator = () => {
    jsonList.map((item) => {
      if (item.type.title == selectCurrency) {
        setResult(foreign * item.value);
      }
    });
  };

  return (
    <div className="rectangle">
      <span className="rectangle-title">Döviz Çevir</span>
      <InputGroup className="mt-4 mb-4">
        <CurrencyFormat
          value={foreign}
          onValueChange={(text) => setForeign(text.value)}
          className="form-control"
          thousandSeparator={true}
        />

        <DropdownButton
          variant="light"
          title={selectCurrency}
          id="input-group-dropdown-2"
          align="end"
          defaultValue={selectCurrency}
        >
          {TYPES.map((item, key) => (
            <Dropdown.Item
              key={key}
              onClick={() => setSelectCurrency(item.title)}
            >
              {item.title}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </InputGroup>
      <div className="change-button">
        <img src="img/buttons-change.png" />
      </div>
      <InputGroup className="mb-3 mt-3 w-100">
        <CurrencyFormat
          value={result}
          className="form-control"
          thousandSeparator={true}
        />
        <InputGroup.Text className="bg-white" id="basic-addon2">
          tl
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default Rectangle;
