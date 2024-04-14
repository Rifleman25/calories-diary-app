import { Modal, Card, Form, Input, InputNumber } from "antd";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { dictAddingCancel, addEatingType } from "../../../redux/ActionCreators";

const NewEatingTypeModal = (props) => {

    const [name, setName] = useState('');

    const handleOk = () => {
        props.addEatingType({
            value: props.eatingTypes.length + 1,
            key: props.eatingTypes.length + 1,
            label: name
        });
        props.dictAddingCancel();
    };
    
    const handleCancel = () => {
        props.dictAddingCancel();
    };

    const nameChangeHandler = (element) => {
        setName(element.target.value);
    };

    return (<>
        <Modal title="Новый прием" open={props.isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Card>
                <Form labelCol={{span: 8}}>
                    <Form.Item label="Наименование">
                        <Input value={name} onChange={nameChangeHandler}/>
                    </Form.Item>
                </Form>
            </Card>
        </Modal>    
    </>);
};

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.dict.isModalOpen,
        eatingTypes: state.dict.eatingTypes
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    dictAddingCancel: () => dispatch(dictAddingCancel()),
    addEatingType: (eatingType) => dispatch(addEatingType(eatingType))
  });

export default connect(mapStateToProps, mapDispatchToProps) (NewEatingTypeModal);
