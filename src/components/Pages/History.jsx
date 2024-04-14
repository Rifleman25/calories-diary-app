import {Table} from 'antd';
import { connect } from 'react-redux';
import { useState } from 'react';

const History = (props) => {

    const [dataSource, setDataSource] = useState([]);

    useState(() => {
        let newDataSource = dataSource.map(item => {return item});
        console.log(newDataSource);
        props.food.forEach(item => {
            let filterData = newDataSource.filter(data => {
                return data.date === new Date(item.date).toLocaleDateString();
            });
            if (filterData.length > 0) {
                filterData[0].calories = filterData[0].calories + item.calories;
                filterData[0].count = filterData[0].count + item.count;
            } else {
                newDataSource.push({
                    key: newDataSource.length + 1,
                    date: new Date(item.date).toLocaleDateString(),
                    calories: item.calories,
                    count: item.count
                });
            }
        });
        setDataSource(newDataSource);
    }, [props.food]);

    const columns = [{
        title: 'Дата',
        dataIndex: 'date',
        key: 'date'
    }, {
        title: 'Потреблено калорий',
        dataIndex: 'calories',
        key: 'calories'
    }, {
        title: 'Объем съеденной еды гр.',
        dataIndex: 'count',
        key: 'count'
    }];

    return (
        <>
            <Table dataSource={dataSource} columns={columns}/>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        food: state.food.food
    }
  }
  
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps) (History);