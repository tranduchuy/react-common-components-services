import React from 'react';

export interface BaseProps {
    extraClass?: string;
    id?: string;

    onValueChanged?(value: any): void;

    onFocus?(): void;

    onBlur?(): void;
}

export class Base<P, S> extends React.Component<P, S> {
    constructor(props: P) {
        super(props);

        this.onChanged = this.onChanged.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    updateValue(value: any): void {
    }

    onKeyPress(): void {
    }

    onKeyUp(): void {
    }

    onKeyDown(): void {
    }

    onChanged(): void {
    }

    onFocus(): void {
    }

    onBlur(): void {
    }
}