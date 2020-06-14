import React, { Component } from "react";
import Bar from "../bar/Bar";
import { calculateSalaryFrom } from "../../helpers/salary";
import { format, percent } from "../../helpers/format";

import "./Fields.css";

export default class Fields extends Component {
  constructor() {
    super();
    this.state = {
      grossSalary: 0,
      baseINSS: 0,
      baseIRPF: 0,
      discountINSS: 0,
      discountIRPF: 0,
      netSalary: 0,
    };
  }

  render() {
    const handleSalBChange = (e) => {
      const {
        baseINSS,
        baseIRPF,
        discountINSS,
        discountIRPF,
        netSalary,
      } = calculateSalaryFrom(e.target.value);
      this.setState({
        grossSalary: e.target.value,
        baseINSS,
        baseIRPF,
        discountINSS,
        discountIRPF,
        netSalary,
      });
    };

    const getPercent = (value) => {
      const percentage = (value * 100) / this.state.grossSalary;
      if (percentage) {
        return percentage;
      }
      return 0;
    };

    const valueAndPercent = (value) => {
      const percentage = getPercent(value);
      if (percentage > 0) {
        return `${format(value)} (${percent(
          (value * 100) / this.state.grossSalary
        )}%)`;
      }
      return `${format(value)}`;
    };

    return (
      <div>
        <label>Salário Bruto</label>
        <input
          id="bruto"
          type="number"
          value={this.state.grossSalary}
          onChange={handleSalBChange}
          placeholder="Salário Bruto"
        ></input>
        <div className="default-flex-row">
          <label className="label">Base INSS</label>
          <input
            id="base-inss"
            placeholder="Base INSS"
            value={format(this.state.baseINSS)}
            disabled
          ></input>
          <label className="label">Desconto INSS</label>
          <input
            id="desconto-inss"
            placeholder="Desconto INSS"
            style={{ color: "#e67e22" }}
            value={valueAndPercent(this.state.discountINSS)}
            disabled
          ></input>
          <label className="label">Base IRPF</label>
          <input
            id="base-irpf"
            placeholder="Base IRPF"
            value={format(this.state.baseIRPF)}
            disabled
          ></input>
          <label className="label">Desconto IRPF</label>
          <input
            id="desconto-irpf"
            placeholder="Desconto IRPF"
            style={{ color: "#c0392b" }}
            value={valueAndPercent(this.state.discountIRPF)}
            disabled
          ></input>
        </div>
        <label>Salário Líquido</label>
        <input
          id="liquido"
          placeholder="Salário Líquido"
          style={{ color: "#16a085" }}
          value={valueAndPercent(this.state.netSalary)}
          disabled
        ></input>
        <div className="default-flex-row">
          <Bar value={getPercent(this.state.discountINSS)} color="#e67e22" />
          <Bar value={getPercent(this.state.discountIRPF)} color="#c0392b" />
          <Bar value={getPercent(this.state.netSalary)} color="#16a085" />
        </div>
      </div>
    );
  }
}
