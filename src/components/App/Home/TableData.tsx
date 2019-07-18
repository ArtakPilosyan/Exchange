import * as React from 'react';
import {TabTypes} from "../../../constants/data";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export interface Props {
    dataType: number;
}

export interface State {}

export class TableData extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <div className="card mb-4">
                    <div className="card-header">
                        {
                            this.props.dataType === TabTypes.USD
                                ?
                                "USD"
                                :
                                "Favorites"
                        }
                    </div>
                    <div className="card-body">
                        {this.renderTableData()}
                    </div>
                </div>
            </div>
        );
    }

    private renderTableData() {
        const data = JSON.parse(localStorage.getItem('tablesData'));
        const dataForTable = []
        data.map(item => {
            let data = {};
            if (this.props.dataType === TabTypes.Favorites) {
                if (item.favorite) {
                    data['id'] = item.id;
                    data['currencyCode'] = item.currencyCode;
                    data['currencyName'] = item.currencyName;
                    data['volume'] = item.volume;
                    data['price'] = item.price;
                    data['dataForActions'] = {favorite: item.favorite, __this: this, id: item.id };
                    dataForTable.push(data);
                }
            } else {
                data['id'] = item.id;
                data['currencyCode'] = item.currencyCode;
                data['currencyName'] = item.currencyName;
                data['volume'] = item.volume;
                data['price'] = item.price;
                data['dataForActions'] = {favorite: item.favorite, __this: this, id: item.id };
                dataForTable.push(data);
            }
        });
        const options = {
            hideSizePerPage: true, // hide per page size list
            paginationShowsTotal: this.renderShowsTotal, // shows the total amount of data
        };
        return (
            <BootstrapTable  tableContainerClass="action-table" data={dataForTable} options={options} striped keyField="id">
                <TableHeaderColumn dataField="currencyCode" dataAlign="left" dataSort={true}>Currency code</TableHeaderColumn>
                <TableHeaderColumn dataField="currencyName" dataAlign="center" dataSort={true}>Currency Name</TableHeaderColumn>
                <TableHeaderColumn dataField="volume" dataAlign="center" dataSort={true}>Volume</TableHeaderColumn>
                <TableHeaderColumn dataField="price" dataAlign="center" dataSort={true}>Price</TableHeaderColumn>
                <TableHeaderColumn dataField="dataForActions" dataAlign="right" dataFormat={this.actions}>Actions</TableHeaderColumn>
            </BootstrapTable>
        );
    }

    private actions(data): JSX.Element {
        return (
            <div className="btn-group">
                {
                    data.favorite
                        ?
                        <i className="fa fa-check-square-o" onClick={() => data.__this.onClickCheck(false, data.id)}/>
                        :
                        <i className="fa fa-square-o"  onClick={() => data.__this.onClickCheck(true, data.id)}/>
                }
            </div>
        );
    }

    private onClickCheck(check: boolean, id: number) {
        const data = JSON.parse(localStorage.getItem('tablesData'));

        data.forEach(item => {
            if (item.id === id) {
                item.favorite = check
            }
        });

        localStorage.setItem('tablesData', JSON.stringify(data));
        this.forceUpdate();
    }

    private renderShowsTotal(start, to, total) {
        return (
            <p>
                From { start } To { to }, Total { total }
            </p>
        )

    }
}