import * as React from 'react';

export class DemoProps {
    public name:string;
    public age:number;
}

export class Demo extends React.Component<DemoProps, any> {
    private foo:number;
    constructor(props:DemoProps) {
        super(props);
        this.foo = 42;
    }
    render() {
        return <div>Hello world!</div>
    }
}

window['Demo'] = Demo;