import { connect } from "react-redux";
import Lists from "../components/lists";
//importo anche le azioni con cui facciamo la dispatch nella lista
import { addLists, removeLists } from "../actions/lists";

// faccio il mapStateToProps in modo da prendermi la fetta della store che mi interessa
const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists,
  };
};

export default connect(mapStateToProps, { addLists, removeLists })(Lists);
