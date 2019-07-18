import * as React from 'react';
import Content from './Content';


export namespace Home {
    export interface Props {}

    export interface State {}
}

export class Home extends React.Component<Home.Props, Home.State> {
    render() {
        return <Content />
    }
}

