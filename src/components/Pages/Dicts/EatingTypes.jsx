import { connect } from "react-redux";
import { Card, Flex, Table, Button } from "antd";
import {PlusOutlined} from '@ant-design/icons';
import NewEatingTypeModal from "./NewEatingTypeModal";
import { dictAddingBegin } from "../../../redux/ActionCreators";

export const EatingTypes = (props) => {

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
    }];

    return (<>
        <Card title='Типы приемов еды'>
            <Flex gap="small">
                <Button onClick={onAddHandler} icon={<PlusOutlined/>}/>
            </Flex>
            <Table dataSource={props.eatingTypes} columns={columns}/>
            <NewEatingTypeModal/>
        </Card>
    </>);
};

const mapStateToProps = (state) => {
    return {
        eatingTypes: state.dict.eatingTypes
    }
  }
  
const mapDispatchToProps = (dispatch) => ({
    dictAddingBegin: () => {dispatch(dictAddingBegin())}
});

export default connect(mapStateToProps, mapDispatchToProps) (EatingTypes);