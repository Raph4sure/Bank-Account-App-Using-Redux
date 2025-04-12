import { useSelector } from "react-redux";
// import store from "../../store";

function formatCurrency(value) {
    return new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
    }).format(value);
}


function BalanceDisplay() {
    const { balance } = useSelector((store) => store.account);

    return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;



// LEGACY OR old method

/* import { connect } from "react-redux";

 function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay); */