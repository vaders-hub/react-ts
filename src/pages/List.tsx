import { useEffect, useState } from "react";
import { usePrevious, useShape } from "../plugins/utils";

const List = (): React.ReactElement => {
  const countries = [
    { label: "Albania", value: 355 },
    { label: "Argentina", value: 54 },
    { label: "Austria", value: 43 },
    { label: "Cocos Islands", value: 61 },
    { label: "Kuwait", value: 965 },
    { label: "Sweden", value: 46 },
    { label: "Venezuela", value: 58 },
  ];
  const cities = [
    { label: "abc", value: 1 },
    { label: "def", value: 2 },
    { label: "ghi", value: 3 },
  ];

  const [token] = useState(() => {
    const token = window.localStorage.getItem("my-token");
    return token || "default#-token#";
  });
  const [country, setCountry] = useState(355);
  const [city, setCity] = useState(1);
  const [localDimension, setLocalDimension] = useState({
    width: 0,
    height: 0,
  });
  const [shape, setDimension] = useShape();
  const prevCount = usePrevious(country);
  const { width, height } = localDimension;

  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmount");
    };
  }, []);

  const onChangeSelect = (e: any) => {
    setCountry(parseInt(e.target.value));
  };

  const onChangeRadio = (e: any) => {
    setCity(parseInt(e.target.value));
  };

  const updateLocalShape = (e: any) => {
    const { value, name } = e.target;
    setLocalDimension({
      ...localDimension,
      [name]: value,
    });
  };

  const getShape = (e: any) => {
    setDimension(localDimension);
  };

  return (
    <div>
      <h2>List</h2>
      <div>
        <div>
          {country}, {prevCount} , {token}
        </div>
        <div>
          <select name="country" onChange={onChangeSelect} value={country}>
            {countries.map((v: any, idx: number) => (
              <option key={idx} value={v.value}>
                {v.label} {v.value}
              </option>
            ))}
          </select>
        </div>
        <div>
          {cities.map((v: any, idx: number) => (
            <label key={idx}>
              <input
                type="radio"
                value={v.value}
                name="city"
                checked={city === v.value ? true : false}
                onChange={onChangeRadio}
              />
              <span>{v.label}</span>
            </label>
          ))}
        </div>
        <div>
          <p>{shape}</p>
          <input
            type="tel"
            name="width"
            value={width}
            onChange={updateLocalShape}
          />
          <input
            type="tel"
            name="height"
            value={height}
            onChange={updateLocalShape}
          />
          <button onClick={getShape}>get Shape</button>
        </div>
      </div>
    </div>
  );
};

export default List;
