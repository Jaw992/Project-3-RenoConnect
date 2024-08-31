import CustomerLogin from "../components/CustomerLoginForm";

export default function CustomerLoginPage({ setToken }) {
    return (
      <>
        <h2>Customer Login</h2>
        <CustomerLogin setToken={setToken} />
      </>
    );
  }