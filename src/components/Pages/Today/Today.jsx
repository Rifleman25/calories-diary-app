import { useState } from "react";
import {
    Card, 
    Table,
    Flex,
    Button,
    Form,
    InputNumber
  } from 'antd';
import {PlusOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { connect } from "react-redux";

import NewFoodModal from "./NewFoodModal";
import { beginAddNewFood,deleteFood } from "../../../redux/ActionCreators";
import { useEffect } from "react";

const Today = (props) => {

    const [selectedFood, setSelectedFood] = useState([]);

    const [totalCalories, setTotalCalories] = useState(0);
    const [count, setCount] = useState(0);

    const foodColumns = [{
        title: 'Тип приема',
        dataIndex: 'eatingTypeName',
        key: 'eatingTypeName'
    }, {
        title: 'Что съедено',
        dataIndex: 'foodTypeName',
        key: 'foodTypeName'
    }, {
        title: 'Объем гр.',
        dataIndex: 'count',
        key: 'count'
    }, {
        title: 'Итоговая калорийность',
        dataIndex: 'calories',
        key: 'calories'
    }];

    const onSelectChangeHandler = (newSelectedRowKeys) => {
        setSelectedFood(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedFood,
        onChange: onSelectChangeHandler,
    };
    const hasSelected = selectedFood.length > 0;

    const onAddHandler = () => {
        props.beginAddNewFood();
    };

    const onEditHandler = () => {
        
    };

    const onDeleteHandler = () => {
        props.deleteFood(selectedFood[0]);
    };

    useEffect(() => {
        let totalCalories = 0;
        let totalCount = [];
        props.food.forEach(food => {
            totalCalories += food.calories;
            if (totalCount.indexOf(food.eatingTypeId) === -1 || food.eatingTypeId === 5) {
                totalCount.push(food.eatingTypeId);
            }
        });
        setTotalCalories(totalCalories);
        setCount(totalCount.length);
    }, [props.food]);

    return (<>
        <Card title='Потребленные калории за сегодня' style={{minWidth: 500}}>
            <Form 
                labelCol={{
                    span: 6,
                  }}
                  wrapperCol={{
                    span: 14,
                  }}
                  style={{
                    maxWidth: 600
                  }}>

                <Form.Item label="Всего калорий">
                    <InputNumber disabled={true} value={totalCalories}/>
                </Form.Item>
                <Form.Item label="Всего приемов">
                    <InputNumber disabled={true} value={count}/>
                </Form.Item>

                <Card title='Приемы еды за сегодня'>
                    <Flex gap="small">
                        <Button onClick={onAddHandler} icon={<PlusOutlined/>}/>
                        <Button disabled={true} onClick={onEditHandler} icon={<EditOutlined/>}/>
                        <Button disabled={selectedFood.length !== 1} onClick={onDeleteHandler} icon={<DeleteOutlined/>}/>
                    </Flex>
                    <Table dataSource={props.food} columns={foodColumns} rowSelection={rowSelection}/>
                    <NewFoodModal/>
                </Card>
            </Form>
        </Card>
    </>);
}

const mapStateToProps = (state) => {
    return {
      food: state.food.food
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    beginAddNewFood: () => dispatch(beginAddNewFood()),
    cancelAddNewFood: () => dispatch(cancelAddNewFood()),
    postFood: (food) => dispatch(postFood(food)),
    fetchFood: () => { dispatch(fetchFood())},
    deleteFood: (food) => {dispatch(deleteFood(food))}
  });

export default connect(mapStateToProps, mapDispatchToProps) (Today);