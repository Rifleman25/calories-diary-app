import { connect } from "react-redux";
import { Card, Flex, Table, Button } from "antd";
import {PlusOutlined} from '@ant-design/icons';
import NewFoodTypeModal from "./NewFoodTypeModal";
import { dictAddingBegin } from "../../../redux/ActionCreators";

export const FoodTypes = (props) => {

    const onAddHandler = () => {
        props.dictAddingBegin();
    };

    const columns = [{
        title: 'Идентификатор',
        dataIndex: 'value',
        key: 'value'
    }, {
        title: 'Название',
        dataIndex: 'label',
        key: 'label'
    }, {
        title: 'Калорийность на 100 гр.',
        dataIndex: 'calories',
        key: 'calories'
    }];

    return (<>
        <Card title='Типы продуктов'>
            <Flex gap="small">
                <Button onClick={onAddHandler} icon={<PlusOutlined/>}/>
            </Flex>
            <Table dataSource={props.foodTypes} columns={columns}/>
            <NewFoodTypeModal/>
        </Card>
    </>);
};

const mapStateToProps = (state) => {
    return {
        foodTypes: state.dict.foodTypes
    }
  }
  
const mapDispatchToProps = (dispatch) => ({
    dictAddingBegin: () => dispatch(dictAddingBegin())
});

export default connect(mapStateToProps, mapDispatchToProps) (FoodTypes);