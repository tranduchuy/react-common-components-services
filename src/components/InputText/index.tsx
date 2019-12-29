import React from 'react';
import {Base, BaseProps} from "../Base";

interface Props extends BaseProps {
    size?: string;
    type?: string;
}

interface State {
    className: string;
    value: string;
}

class InputText extends Base<Props, State> {
    private inputRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

    constructor(props: Props) {
        super(props);

        this.state = {
            className: `form-control ${this.props.extraClass}`,
            value: ''
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (prevProps.size !== this.props.size) {
            let sizeClass = '';
            switch (this.props.size) {
                case 'sm':
                    sizeClass = 'form-control-sm';
                    break;

                case 'lg':
                    sizeClass = 'form-control-lg';
                    break;
            }

            this.setState({
                className: `form-control ${this.props.extraClass} ${sizeClass}`
            });
        }
    }

    onChanged(): void {
        super.onChanged();

        if (this.props.onValueChanged && this.inputRef.current) {
            this.props.onValueChanged(this.inputRef.current.value);
        }
    }

    onFocus(): void {
        super.onFocus();

        if (this.props.onFocus) {
            this.props.onFocus();
        }
    }

    onBlur(): void {
        super.onBlur();

        if (this.props.onBlur) {
            this.props.onBlur();
        }
    }

    render() {
        return <div className="">
            <input type={this.props.type || 'input'}
                   ref={this.inputRef}
                   onChange={this.onChanged}
                   onFocus={this.onFocus}
                   onBlur={this.onBlur}
                   className={this.state.className}/>
        </div>;
    }
}

export default InputText;
