import { Modal, Card, Form, Select, InputNumber } from "antd";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { cancelAddNewFood, postFood } from "../../../redux/ActionCreators";

const NewFoodModal = (props) => {

    const [eatingType, setEatingType] = useState();
    const [foodType, setFoodType] = useState();
    const [count, setCount] = useState(100);

    useEffect(() => {
        let now = new Date();
        if (now.getHours() > 0 && now.getHours() < 11)
            setEatingType(1);
        else if (now.getHours() >= 11 && now.getHours() < 15)
            setEatingType(2);
        else if (now.getHours() >= 15 && now.getHours() < 17)
            setEatingType(3);
        else if (now.getHours() >= 17)
            setEatingType(4);
    }, []);

    const handleOk = () => {
        props.postFood({
            id: props.food.length + 1,
            key: props.food.length + 1,
            eatingTypeId: eatingType,
            eatingTypeName: props.eatingTypes.filter(type => {return type.value === eatingType})[0].label,
            foodTypeId: foodType,
            foodTypeName: props.foodTypes.filter(type => {return type.value === foodType})[0].label,
            count: count,
            calories: (count / 100) * props.foodTypes.filter(type => {return type.value === foodType})[0].calories,
            date: new Date().setHours(0, 0, 0, 0)
        });
        props.cancelAddNewFood();
    };
    
    const handleCancel = () => {
        props.cancelAddNewFood();
    };
    
    const eatingTypeChangeHandler = (value) => {
        setEatingType(value);
    };

    const foodTypeChangeHandler = (value) => {
        setFoodType(value);
    };

    const countTypeChangeHandler = (value) => {
        setCount(value);
    };

    return (<>
        <Modal title="Новый прием" open={props.isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Card>
                <Form labelCol={{span: 6}}>
                    <Form.Item label="Тип приема">
                        <Select options={props.eatingTypes} value={eatingType} onChange={eatingTypeChangeHandler}/>
                    </Form.Item>
                    <Form.Item label="Продукт">
                        <Select options={props.foodTypes} value={foodType} onChange={foodTypeChangeHandler}/>
                    </Form.Item>
                    <Form.Item label="Объем гр.">
                        <InputNumber min={1} value={count} onChange={countTypeChangeHandler}/>
                    </Form.Item>
                </Form>
            </Card>
        </Modal>    
    </>);
};

const mapStateToProps = (state) => {
    return {
        food: state.food.food,
        isModalOpen: state.food.isModalOpen,
        eatingTypes: state.dict.eatingTypes,
        foodTypes: state.dict.foodTypes
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    cancelAddNewFood: () => dispatch(cancelAddNewFood()),
    postFood: (food) => dispatch(postFood(food))
  });

export default connect(mapStateToProps, mapDispatchToProps) (NewFoodModal);
