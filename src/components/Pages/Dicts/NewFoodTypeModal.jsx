import { Modal, Card, Form, Input, InputNumber } from "antd";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { dictAddingCancel, addFoodType } from "../../../redux/ActionCreators";

const NewFoodTypeModal = (props) => {

    const [name, setName] = useState('');
    const [calories, setCalories] = useState();

    const handleOk = () => {
        props.addFoodType({
            value: props.foodTypes.length + 1,
            key: props.foodTypes.length + 1,
            label: name,
            calories: calories
        });
        props.dictAddingCancel();
    };
    
    const handleCancel = () => {
        props.dictAddingCancel();
    };

    const nameChangeHandler = (element) => {
        setName(element.target.value);
    };

    const caloriesChangeHandler = (value) => {
        setCalories(value);
    };

    return (<>
        <Modal title="Новый прием" open={props.isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Card>
                <Form labelCol={{span: 8}}>
                    <Form.Item label="Наименование">
                        <Input value={name} onChange={nameChangeHandler}/>
                    </Form.Item>
                    <Form.Item label="Калорий на 100 гр.">
                        <InputNumber min={1} value={calories} onChange={caloriesChangeHandler}/>
                    </Form.Item>
                </Form>
            </Card>
        </Modal>    
    </>);
};

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.dict.isModalOpen,
        foodTypes: state.dict.foodTypes
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    dictAddingCancel: () => dispatch(dictAddingCancel()),
    addFoodType: (foodType) => dispatch(addFoodType(foodType))
  });

export default connect(mapStateToProps, mapDispatchToProps) (NewFoodTypeModal);
