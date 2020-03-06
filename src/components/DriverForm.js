import React from 'react';
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/pt_BR';
import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
    Switch,
  } from 'antd';

  const { Item } = Form;

  export default class DriverForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : props.driver ? props.driver.name : '',
            gender : props.driver ? props.driver.gender : '',
            has_vehicles : props.driver ? props.driver.has_vehicles : 1,
            cnh : props.driver ? props.driver.cnh : '',
            phone: props.driver ? props.driver.phone : null,
            date_of_birth : props.driver ? moment(props.driver.date_of_birth) : moment(),
            cpf: props.driver ? props.driver.cpf : '',
            cnh_type : props.driver ? props.driver.cnh_type : '',
            calendarFocused: false,
            error: ''
        };
    }
    onNameChange = e => {
        const name = e.target.value
        this.setState(() => ({ name }));
    };

    onGenderChange = gender => {
        if(!gender.match(/["M", "F", "ND"]?$/)){
            this.setState(() => ({ error: 'Genêro é um valor inválido.' }));
        }
        this.setState(() => ({ gender }));
    };

    onHasVehiclesChange = has_vehicles => {
        this.setState(() => ({ has_vehicles }));
    };

    onCnhChange = e => {
        const cnh = e.target.value
        this.setState(() => ({ cnh }));
    };

    onPhoneChange = e => {
        const phone = e.target.value
        this.setState(() => ({ phone }));
    };

    onDateOfBirthChange = date_of_birth => {
        if (date_of_birth) {
            this.setState(() => ({ date_of_birth }));
        }
    };

    onCpfChange = e => {
        const cpf = e.target.value
        this.setState(() => ({ cpf }));
    };

    onCnhTypeChange = cnh_type => {
        if(!cnh_type.match(/^["A", "B", "C", "D", "E"]?$/)){
            this.setState(() => ({ error: 'Tipo de CNH é um valor inválido.' }));
        }
        this.setState(() => ({ cnh_type }));
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.error) {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                name : this.state.name,
                gender : this.state.gender,
                has_vehicles : this.state.has_vehicles ? 1 : 0,
                cnh : this.state.cnh,
                phone: this.state.phone,
                date_of_birth: moment(this.state.date_of_birth).format("DD-MM-YYYY"),
                cpf: this.state.cpf,
                cnh_type : this.state.cnh_type
            });
        }
    };

    render() {
        return (
            <div>
                <center>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                </center>
                <Form labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    size="large"
                    onSubmit={this.onSubmit}
                    initialValues={this.state}
                >
                    <Item label="Nome"
                          name="name"
                          onChange={this.onNameChange}
                          rules={[
                            {
                              required: true,
                              message: 'Campo nome é obrigatório.',
                            },
                            {
                                min: 3,
                                message: 'Campo nome deve ter no mínimo 3 caracteres.',
                              },
                          ]}>
                        <Input
                            placeholder="Nome"
                            autoFocus
                            value={this.state.name}
                            />
                    </Item>
                    <Item label="Gênero"
                          name="gender">
                        <Select
                            value={this.state.gender}
                            onChange={this.onGenderChange}>
                            <Select.Option value="">Selecione</Select.Option>
                            <Select.Option value="M">Masculino</Select.Option>
                            <Select.Option value="F">Feminino</Select.Option>
                            <Select.Option value="ND">Nao declarar</Select.Option>
                        </Select>
                    </Item>
                    <Item label="Data de nascimento"
                          name="date_of_birth">
                        <DatePicker date={this.state.date_of_birth}
                                    onChange={this.onDateOfBirthChange}
                                    focused={this.state.calendarFocused}
                                    onFocusChange={this.onFocusChange}
                                    locale={locale}
                                    format='DD-MM-YYYY'
                                    />
                    </Item>
                    <Item label="Possui veículo"
                          name="has_vehicles">
                          {this.state.has_vehicles ? (
                                <Switch
                                    checked
                                    onChange={this.onHasVehiclesChange}
                                    />
                                ) : (
                                    <Switch
                                    onChange={this.onHasVehiclesChange}
                                    />
                                )}
                    </Item>
                    <Item label="CPF"
                          name="cpf"
                          rules={[
                            {
                              required: true,
                              message: 'Campo CPF é obrigatório.',
                            },
                            {
                                pattern: /^[0-9]{11}$/,
                                message: 'Campo CPF deve ter somente números e deve ter 11 caracteres.',
                            },
                          ]}>
                        <Input
                            placeholder="CPF"
                            value={this.state.cpf}
                            onChange={this.onCpfChange}
                            />
                    </Item>
                    <Item label="CNH"
                          name="cnh"
                          rules={[
                            {
                              required: true,
                              message: 'Campo CNH é obrigatório.',
                            },
                            {
                                pattern: /^[0-9]{11}$/,
                                message: 'Campo CNH deve ter somente números e deve ter 11 caracteres.',
                            },
                          ]}>
                        <Input
                            placeholder="CNH"
                            value={this.state.cnh}
                            onChange={this.onCnhChange}
                            />
                    </Item>
                    <Item label="Tipo de CNH"
                          name="cnh_type">
                        <Select
                            value={this.state.cnh_type}
                            onChange={this.onCnhTypeChange}>
                            <Select.Option value="">Selecione</Select.Option>
                            <Select.Option value="A">A</Select.Option>
                            <Select.Option value="B">B</Select.Option>
                            <Select.Option value="C">C</Select.Option>
                            <Select.Option value="D">D</Select.Option>
                            <Select.Option value="E">E</Select.Option>
                        </Select>
                    </Item>
                    <Item label="Telefone"
                          name="phone"
                            rules={[
                                {
                                    pattern: /^[0-9]{10,11}$/,
                                    message: 'Campo Telefone inválido.',
                                },
                            ]}>
                        <Input
                            placeholder="(99)99999-9999"
                            value={this.state.phone}
                            onChange={this.onPhoneChange}
                            />
                    </Item>
                    <center>
                        <Button type="primary"
                                shape="round"
                                onClick={this.onSubmit}
                                size="large">Salvar
                        </Button>
                    </center>
                </Form>
            </div>

        )
    }
}
