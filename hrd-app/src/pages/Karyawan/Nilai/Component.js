import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getNilaiList: state.nilai.getNilaiList,
    errorNilaiList: state.nilai.errorNilaiList,
  };
};

function Table(props) {
  console.log("ini console log dari component table:", props.getNilaiList);
  const filter = props.getNilaiList;
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Periode</th>
            <th scope="col">Nilai Disiplin</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {filter &&
          filter.map((getNilaiList, index) => (
            <tbody key={index}>
              {getNilaiList.nilai.map((n, i) => (
                <tr key={i}>
                  <td>{n.periode}</td>
                  <td>{n.disiplin}</td>
                  <td className="text-primary">{n.status}</td>
                  <td>
                    <button className="btn btn-primary">Edit Nilai</button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          ))}
      </table>
    </div>
  );
}

export default connect(mapStateToProps, null)(Table);
