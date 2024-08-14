import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./components/Title";
// import Input from "./components/Input";
// import List from "./components/List";

const App = () => {
  // const controlContainerStyle = {
  //   backgroundColor: '#F5F5F5',
  //   display: 'flex',
  //   alignItems: 'center',
  //   flexDirection: 'column',
  //   borderRadius: '10px',
  //   maxWidth: '1200px',
  //   minWidth: '800px',
  //   position: 'static'
  // }

  // const inputContainerStyle = {
  //   display: 'flex',
  //   justifyContent: 'space-around',
  //   width: '100%',
  //   marginBottom: '20px'
  // }

  // const lableInputStyle = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   width: '100%',
  //   padding: '10px',
  //   boxSizing: 'border-box',
  // }

  // const btnContainerStyle = {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   width: '100%',
  // }

  // const buttonStyle = {
  //   margin: '5px',
  //   fontSize: '15px',
  //   width: '100%',
  // }

  // const medalListContainerStyle = {
  //   width: '100%',
  //   marginTop: '20px',
  // }

  // const medalListTableStyle = {
  //   width: '100%',
  //   tableLayout: 'fixed',
  //   borderCollapse: 'collapse',
  // };

  // const tableHeaderStyle = {
  //   backgroundColor: '#20b2aa'
  // }

  // const inputStyle = {
  //   border: 'none',
  //   borderRadius: '4px',
  //   padding: '10px',
  //   width: '100%',
  //   boxSizing: 'border-box', // 테두리와 패딩을 포함한 너비
  //   fontSize: '16px',
  // }

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [goldMedal, setGoldMedal] = useState("0");
  const [silverMedal, setSilverMedal] = useState("0");
  const [bronzeMedal, setBronzeMedal] = useState("0");
  // const [totalMedals, setTotalMedals] = useState("0");
  // 국가추가
  const handleAddCountry = (e) => {
    e.preventDefault();
    if (country.trim() === "") {
      alert("📢국가명을 입력해주세요.");
      return;
    }
    const existCountry = countries.some((item) => item.country === country);

    if (existCountry) {
      alert("📢 이미 존재하는 국가입니다. 업데이트를 사용해주세요.");
      return;
    }
    const newCountries = {
      country: country,
      gold: +goldMedal,
      silver: +silverMedal,
      bronze: +bronzeMedal,
      // totalMedals: +(goldMedal + silverMedal + bronzeMedal),
      id: Math.random().toString(),
    };

    const addNewCountryArr = [...countries, newCountries];
    const sortCountryByGoldMedal = addNewCountryArr.sort(
      (a, b) => b.gold - a.gold
    );

    setCountries(sortCountryByGoldMedal);
    setCountry("");
    setGoldMedal("0");
    setSilverMedal("0");
    setBronzeMedal("0");
  };

  // 업데이트
  const handleUpdateInfo = (e) => {
    e.preventDefault();
    const findedCountry = countries.find((a) => a.country === country);

    if (findedCountry) {
      const updatedCountry = countries.map((item) =>
        item.country === country
          ? {
              ...item,
              gold: +goldMedal,
              silver: +silverMedal,
              bronze: +bronzeMedal,
              // totalMedals: +(goldMedal + silverMedal + bronzeMedal),
            }
          : item
      );

      const sortCountryByGoldMedal = updatedCountry.sort(
        (a, b) => b.gold - a.gold
      );

      setCountries(sortCountryByGoldMedal);
      alert("업데이트 완료 👍");
      setCountry("");
      setGoldMedal("0");
      setSilverMedal("0");
      setBronzeMedal("0");
    } else {
      alert("📢 먼저 국가 추가를 해주세용.");
    }
  };

  // 삭제
  const handleDelete = (id) => {
    if (window.confirm("진짜 삭제 하시나요.............😮?")) {
      const deleteCountry = countries.filter((item) => item.id !== id);
      setCountries(deleteCountry);
      alert("삭제완료 👍");
    }
  };

  // 엔터입력
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleAddCountry(e);
    }
  };

  // 국가명, 금메달, 은메달, 동메달 인풋 입력
  const handleCountryName = (e) => {
    setCountry(e.target.value);
  };

  const handleGoldMedal = (e) => {
    setGoldMedal(+e.target.value);
    // setTotalMedals(+(+e.target.value + silverMedal + bronzeMedal));
  };
  const handleSilverMedal = (e) => {
    setSilverMedal(+e.target.value);
    // setTotalMedals(+(goldMedal + +e.target.value + bronzeMedal));
  };
  const handleBronzeMedal = (e) => {
    setBronzeMedal(+e.target.value);
    // setTotalMedals(+(goldMedal + silverMedal + +e.target.value));
  };

  return (
    <Layout
      handleCountryName={handleCountryName}
      handleAddCountry={handleAddCountry}
      handleUpdateInfo={handleUpdateInfo}
      handleDelete={handleDelete}
      handleGoldMedal={handleGoldMedal}
      handleSilverMedal={handleSilverMedal}
      handleBronzeMedal={handleBronzeMedal}
      goldMedal={goldMedal}
      silverMedal={silverMedal}
      bronzeMedal={bronzeMedal}
      // totalMedals={totalMedals}
      country={country}
      countries={countries}
      handleEnterKey={handleEnterKey}
    />
  );
};

const Layout = ({
  children,
  goldMedal,
  silverMedal,
  bronzeMedal,
  // totalMedals,
  handleAddCountry,
  handleCountryName,
  handleUpdateInfo,
  handleEnterKey,
  handleGoldMedal,
  handleSilverMedal,
  handleBronzeMedal,
  handleDelete,
  countries,
  country,
}) => {
  return (
    <>
      <div className="container">
        <Title />
        {/* <Input />
        <List /> */}
        <div className="inputContainer">
          <div className="lableInput">
            <label>국가명</label>
            <input
              type="text"
              value={country}
              placeholder="국가명"
              onChange={handleCountryName}
              onKeyPress={handleEnterKey}
            />
          </div>
          <div className="lableInput">
            <label>금메달</label>
            <input
              type="text"
              value={goldMedal}
              onChange={handleGoldMedal}
              onKeyPress={handleEnterKey}
            />
          </div>
          <div className="lableInput">
            <label>은메달</label>
            <input
              type="text"
              value={silverMedal}
              onChange={handleSilverMedal}
              onKeyPress={handleEnterKey}
            />
          </div>
          <div className="lableInput">
            <label>동메달</label>
            <input
              type="text"
              value={bronzeMedal}
              onChange={handleBronzeMedal}
              onKeyPress={handleEnterKey}
            />
          </div>
          <div className="btnContainer">
            <button onClick={handleAddCountry}>국가추가</button>
            <button onClick={handleUpdateInfo}>업데이트</button>
          </div>
        </div>
        <div className="medal-list-container">
          <table className="medal-list-table">
            <thead className="table-header">
              <tr>
                <th>국가명</th>
                <th>금메달</th>
                <th>은메달</th>
                <th>동메달</th>
                {/* <th>총 메달수</th> */}
                <th>액션</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((item) => (
                <tr key={item.id}>
                  <td>{item.country}</td>
                  <td>{item.gold}</td>
                  <td>{item.silver}</td>
                  <td>{item.bronze}</td>
                  {/* <td>{item.totalMedals}</td> */}
                  <td>
                    <button onClick={() => handleDelete(item.id)}>삭제</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <footer className="footer"></footer>
    </>
  );
};
export default App;
