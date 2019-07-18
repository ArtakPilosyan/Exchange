import * as React from "react";


export interface State {}
export interface Props {
    pageTitle: string;
}

export default class PageTitle extends React.PureComponent<Props, State> {
    render() {
        return (
            <div>
                <h2 className="mt-2 mb-2 text-left">{this.props.pageTitle}</h2>
                <hr/>
            </div>
        );
    }
}