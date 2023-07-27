import { IProcedure, IProceduresTable } from "../../../interfaces";
import "./ProceduresTable.scss";

const ProceduresTable = ({ list }: IProceduresTable) => {
    return (
        <div className="table">
            <div className="table__header">
                <div className="table__header-title">Procedure</div>
                <div className="table__header-title table__small-cell">Cost (from)</div>
                <div className="table__header-title table__small-cell">Minimum Time</div>
            </div>

            {
                list.map((item: IProcedure) => {
                    return (
                        <div className="table__row" key={item.name}>
                            <div className="table__row-cell">{item.name}</div>
                            <div className="table__row-cell table__small-cell">{item.price}</div>
                            <div className="table__row-cell table__small-cell">{item.timeRange}</div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ProceduresTable;