import NewFoodModal from "./NewFoodModal";
import { useState } from "react";
import { Button, Flex, Table } from "antd";
import {PlusOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';

const FoodGrid = () => {

    const [selectedFood, setSelectedFood] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(props.isModalOpen);

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
        setIsModalOpen(true);
    };

    const onEditHandler = () => {
        
    };

    const onDeleteHandler = () => {
        
    };

    return (<>
        <Flex gap="small">
            <Button onClick={onAddHandler} icon={<PlusOutlined/>}/>
            <Button disabled={selectedFood.length !== 1} onClick={onEditHandler} icon={<EditOutlined/>}/>
            <Button disabled={!hasSelected} onClick={onDeleteHandler} icon={<DeleteOutlined/>}/>
        </Flex>
        <Table dataSource={food} columns={foodColumns} rowSelection={rowSelection}/>
        <NewFoodModal isModalOpen={isModalOpen}></NewFoodModal>
    </>);
};

export default FoodGrid;