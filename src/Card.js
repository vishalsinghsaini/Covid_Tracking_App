import { useEffect, useState } from "react";
import "./styles.scss";

export default function Card({ data }) {
  const [list, setList] = useState([]);
  const [filterdata, setFilterData] = useState([]);

  useEffect(() => {
    setList(data);
    let arr = [];
    data.forEach((ele) => {
      arr.push(ele.state_name);
    });
    setFilterData(arr);
  }, [data]);

  function filterList(event) {
    let data1;
    data1 = filterdata.filter((item) => {
      return (
        item?.toLowerCase().search(event.target.value?.toLowerCase()) !== -1
      );
    });
    let item1;
    item1 = data.filter((ele) => data1.includes(ele.state_name));
    if (item1) setList(item1);
    else setList(data);
  }

  return (
    <div>
      <input
        className="field-input"
        onChange={filterList}
        type="text"
        placeholder="Search Country..."
      />
      <div>
        {/* card */}
        {list.map((ele) =>
          ele ? (
            <div key={ele.sno} className="container">
              <div className="card">
                <div className="face face1">
                  <div className="content">
                    <span className="stars"></span>
                    <h2 className="java">{ele.state_name}</h2>
                    <p className="java">Positive Cases:- {ele.positive}</p>
                    <p className="java">Death:- {ele.death}</p>
                    <p className="java">Active:- {ele.active}</p>
                    <p className="java">Cured:- {ele.cured}</p>
                  </div>
                </div>
                <div className="face face2">
                  <h2>{ele.sno}</h2>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
}
