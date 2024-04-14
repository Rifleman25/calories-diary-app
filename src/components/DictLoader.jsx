import { useEffect } from "react";
import { connect } from "react-redux";
import { loadEatingTypeDict, loadFoodTypeDict } from "../redux/ActionCreators";

const DictLoader = (props) => {
    useEffect(() => {
        props.loadEatingTypeDict();
        props.loadFoodTypeDict();
    }, []);
    return <></>;
};

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => ({
    loadEatingTypeDict: () => dispatch(loadEatingTypeDict()),
    loadFoodTypeDict: () => dispatch(loadFoodTypeDict())
});

export default connect(mapStateToProps, mapDispatchToProps) (DictLoader);