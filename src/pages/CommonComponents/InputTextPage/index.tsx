import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import InputText from "../../../components/InputText";

const InputTextPage = () => {
    const [type, setType] = useState('text');
    const [size, setSize] = useState('');

    return (
        <Row>
            <Col sm={12}>
                <h5 className={'text-primary'}>
                    Input text component
                </h5>
            </Col>
            <Col sm={9}>
                <InputText type={type}
                           size={size}/>
            </Col>

            <Col sm={3}>
                <strong>Settings: </strong>

                <div>
                    <div>
                        Type:
                    </div>
                    <select className={'form-control form-control-sm'}
                            onChange={(e: any) => {
                                setType(e.target.value);
                            }}>
                        <option value="text">Text</option>
                        <option value="password">Password</option>
                    </select>
                </div>

                <div>
                    <div>
                        Size:
                    </div>
                    <label>
                        <input type="radio"
                               name={'size'}
                               value={'sm'}
                               checked={size === 'sm'}
                               onChange={(e: any) => {
                                   setSize(e.target.value);
                               }}/>
                        Small
                    </label>

                    <label>
                        <input type="radio"
                               name={'size'}
                               value={''}
                               checked={size === ''}
                               onChange={(e: any) => {
                                   setSize(e.target.value);
                               }}/>
                        Normal
                    </label>

                    <label>
                        <input type="radio"
                               name={'size'}
                               value={'lg'}
                               checked={size === 'lg'}
                               onChange={(e: any) => {
                                   setSize(e.target.value);
                               }}/>
                        Large
                    </label>
                </div>
            </Col>
        </Row>
    );
};

export default InputTextPage;